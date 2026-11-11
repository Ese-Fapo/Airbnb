import { places, type Category, type Place } from './places'
import { exploreDistances } from './exploreDistances'

export type ExploreCategory = Category | 'all'
export type CostFilter = 'all' | 'free' | 'paid'
export type ExplorePlace = Place & {
  category: Category
  distanceKm: number | null
  cost: 'free' | 'purchase' | 'ticket'
  proximity?: 'opposite' | 'street'
}

const ticketedPlaces = new Set(['Beto Carrero World', 'Água Show Park', 'Fortaleza de São José da Ponta Grossa'])

const explorePlaces: ExplorePlace[] = (Object.entries(places) as [Category, Place[]][]).flatMap(([category, items]) =>
  items.map(place => ({
    ...place,
    category,
    // Missing distance data is deliberately placed last, never treated as zero.
    distanceKm: place.name === 'Tempero da JU' ? 0 : exploreDistances[place.name]?.distanceKm ?? null,
    cost: category === 'food' || category === 'essentials' ? 'purchase' : ticketedPlaces.has(place.name) ? 'ticket' : 'free',
    proximity: place.name === 'Tempero da JU' ? 'opposite' : place.name === 'Parceiros Conveniência' ? 'street' : undefined,
  })),
)

const normalizeSearch = (value: string) => value.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim()
const categoryKeywords: Record<Category, string> = {
  food: 'food coffee restaurant cafe comer beber comida restaurante café',
  essentials: 'essentials essenciais servicios services shops groceries compras mercado supermercado farmácia pharmacy',
  beaches: 'beaches beach praia praias playa playas',
  sights: 'sights attractions things to see atrações turismo o que visitar qué visitar',
}
const searchIndex = new Map(explorePlaces.map(place => [place.name, normalizeSearch([
  place.name, place.location, place.type, ...Object.values(place.detail), categoryKeywords[place.category],
  // Meal intent for the guesthouse's pizza and burger recommendations.
  // These are dinner options, not a claim about live opening hours.
  place.category === 'food' && /pizza|burger/i.test(place.type) ? 'dinner supper jantar janta cena cenar' : '',
].join(' '))]))
const searchWords = new Map([...searchIndex].map(([name, text]) => [name, [...new Set(text.split(' '))]]))
const intentWords = new Set(['i', 'want', 'looking', 'look', 'find', 'for', 'near', 'nearby', 'me', 'please', 'the', 'a', 'an', 'to', 'quero', 'procuro', 'buscar', 'encontrar', 'perto', 'mim', 'de', 'um', 'uma', 'quiero', 'busco', 'cerca', 'mi', 'un', 'una'])

/** Bounded edit distance, including swapped neighboring letters. Short/numeric terms stay exact. */
function similarWord(term: string, word: string): boolean {
  if (term.length < 4 || /\d/.test(term)) return false
  const tolerance = term.length >= 8 ? 2 : 1
  if (Math.abs(term.length - word.length) > tolerance) return false
  const rows = Array.from({ length: term.length + 1 }, () => Array<number>(word.length + 1).fill(0))
  for (let i = 0; i <= term.length; i++) rows[i][0] = i
  for (let j = 0; j <= word.length; j++) rows[0][j] = j
  for (let i = 1; i <= term.length; i++) {
    for (let j = 1; j <= word.length; j++) {
      rows[i][j] = Math.min(rows[i - 1][j] + 1, rows[i][j - 1] + 1, rows[i - 1][j - 1] + Number(term[i - 1] !== word[j - 1]))
      if (i > 1 && j > 1 && term[i - 1] === word[j - 2] && term[i - 2] === word[j - 1]) {
        rows[i][j] = Math.min(rows[i][j], rows[i - 2][j - 2] + 1)
      }
    }
    if (Math.min(...rows[i]) > tolerance) return false
  }
  return rows[term.length][word.length] <= tolerance
}

type ExploreSearch = { category?: ExploreCategory; cost?: CostFilter; query?: string }

export function getExploreResults({ category = 'all', cost = 'all', query = '' }: ExploreSearch = {}): { places: ExplorePlace[]; approximate: boolean } {
  const terms = normalizeSearch(query).split(' ').filter(term => term && !intentWords.has(term)).slice(0, 16)
  const candidates = explorePlaces.filter(place =>
    (category === 'all' || place.category === category) &&
    (cost === 'all' || (cost === 'free' ? place.cost === 'free' : place.cost !== 'free')),
  )
  const exact = candidates.filter(place => terms.every(term => searchIndex.get(place.name)?.includes(term)))
  // Prefer literal matches; broaden only when none are available within the chosen filters.
  const approximate = exact.length === 0 && terms.length > 0
  const results = approximate ? candidates.filter(place => terms.every(term =>
    searchIndex.get(place.name)?.includes(term) || searchWords.get(place.name)?.some(word => similarWord(term, word)),
  )) : exact
  return {
    places: results.sort((a, b) => (a.distanceKm ?? Infinity) - (b.distanceKm ?? Infinity) ||
      Number(b.proximity === 'opposite') - Number(a.proximity === 'opposite') || a.name.localeCompare(b.name, 'pt-BR')),
    approximate: approximate && results.length > 0,
  }
}

export function getExplorePlaces(search: ExploreSearch = {}): ExplorePlace[] {
  return getExploreResults(search).places
}
