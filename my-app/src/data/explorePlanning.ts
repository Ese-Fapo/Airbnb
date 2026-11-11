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
].join(' '))]))

export function getExplorePlaces({ category = 'all', cost = 'all', query = '' }: {
  category?: ExploreCategory
  cost?: CostFilter
  query?: string
} = {}): ExplorePlace[] {
  const terms = normalizeSearch(query).split(' ').filter(Boolean)
  return explorePlaces.filter(place =>
    (category === 'all' || place.category === category) &&
    (cost === 'all' || (cost === 'free' ? place.cost === 'free' : place.cost !== 'free')) &&
    terms.every(term => searchIndex.get(place.name)?.includes(term)),
  ).sort((a, b) => (a.distanceKm ?? Infinity) - (b.distanceKm ?? Infinity) ||
    Number(b.proximity === 'opposite') - Number(a.proximity === 'opposite') || a.name.localeCompare(b.name, 'pt-BR'))
}
