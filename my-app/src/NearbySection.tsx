import { useRef, useState } from 'react'
import { ArrowDownWideNarrow, ArrowRight, Check, ExternalLink, MapPin, Navigation, Search, Ticket, Waves, X } from 'lucide-react'
import './NearbySection.css'
import { propertyAddress } from './data/property'
import { places } from './data/places'
import { getExplorePlaces, type CostFilter, type ExploreCategory } from './data/explorePlanning'
import type { Language } from './types'

const directions = (destination: string) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(propertyAddress)}&destination=${encodeURIComponent(destination)}`
const searchMore = (category: ExploreCategory) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(category === 'food' ? 'restaurants near ' + propertyAddress : category === 'essentials' ? 'shops and services near ' + propertyAddress : category === 'beaches' ? 'beaches near Sao Jose Santa Catarina' : 'attractions near Sao Jose Santa Catarina')}`

const ui = {
  en: {
    eyebrow: 'YOUR LOCAL GUIDE', title: 'Find your next stop.',
    intro: 'A quick bite, a beach day or a little adventure. Explore from the guesthouse, starting with the closest places.',
    tabs: { all: 'All places', food: 'Food & coffee', essentials: 'Essentials', beaches: 'Beaches', sights: 'Things to see' },
    cost: 'Cost', search: 'Search nearby places', placeholder: 'Name, neighborhood, food or beach…', clearSearch: 'Clear search', searchHint: 'Results update as you type.', matching: 'matching',
    filters: { all: 'Any cost', free: 'Free entry', paid: 'Paid' },
    costs: { free: 'Free entry', purchase: 'Paid · purchases', ticket: 'Paid · ticket' },
    sorted: 'Closest to farthest', results: 'places', from: 'from the guesthouse', approximate: 'Approx. road distance',
    sameStreet: 'Same street', opposite: 'Across the street', unknown: 'Check distance on Maps',
    distanceNote: 'Approximate road distances. Some local stops use street locations; check Maps for the exact route.',
    costNote: 'Free entry excludes parking, food, shopping and optional activities. Check current ticket prices and hours before you go.',
    route: 'Get directions', details: 'Place details', map: 'View location', more: 'Explore more on Maps',
    water: 'Heading to the beach? Water quality can change after rain.', check: 'Check water quality',
    empty: 'No places found.', emptyHint: 'Try another name or neighborhood, or reset your search and filters.', reset: 'Reset search and filters',
    showMore: 'Show more places', remaining: 'remaining', distanceSources: 'Distance estimates:',
  },
  pt: {
    eyebrow: 'SEU GUIA DA REGIÃO', title: 'Descubra sua próxima parada.',
    intro: 'Um lanche, um dia de praia ou uma nova aventura. Explore a partir da hospedagem, começando pelos lugares mais próximos.',
    tabs: { all: 'Todos os lugares', food: 'Comer e beber', essentials: 'Essenciais', beaches: 'Praias', sights: 'O que visitar' },
    cost: 'Custo', search: 'Buscar lugares por perto', placeholder: 'Nome, bairro, comida ou praia…', clearSearch: 'Limpar busca', searchHint: 'Os resultados aparecem enquanto você digita.', matching: 'para',
    filters: { all: 'Qualquer custo', free: 'Entrada gratuita', paid: 'Pago' },
    costs: { free: 'Entrada gratuita', purchase: 'Pago · consumo', ticket: 'Pago · ingresso' },
    sorted: 'Do mais perto ao mais longe', results: 'lugares', from: 'da hospedagem', approximate: 'Distância aproximada por estrada',
    sameStreet: 'Na mesma rua', opposite: 'Em frente à casa', unknown: 'Confira a distância no Maps',
    distanceNote: 'Distâncias aproximadas por estrada. Alguns pontos locais usam a localização da rua; confira o trajeto exato no Maps.',
    costNote: 'Entrada gratuita não inclui estacionamento, alimentação, compras ou atividades opcionais. Confira ingressos e horários atuais antes de sair.',
    route: 'Como chegar', details: 'Mais detalhes', map: 'Ver localização', more: 'Explore mais no Maps',
    water: 'Vai à praia? A balneabilidade pode mudar após chuvas.', check: 'Ver balneabilidade',
    empty: 'Nenhum lugar encontrado.', emptyHint: 'Tente outro nome ou bairro, ou limpe a busca e os filtros.', reset: 'Limpar busca e filtros',
    showMore: 'Mostrar mais lugares', remaining: 'restantes', distanceSources: 'Estimativas de distância:',
  },
  es: {
    eyebrow: 'TU GUÍA DE LA ZONA', title: 'Descubre tu próxima parada.',
    intro: 'Algo para comer, un día de playa o una nueva aventura. Explora desde el alojamiento, empezando por los lugares más cercanos.',
    tabs: { all: 'Todos los lugares', food: 'Comida y café', essentials: 'Servicios', beaches: 'Playas', sights: 'Qué visitar' },
    cost: 'Costo', search: 'Buscar lugares cercanos', placeholder: 'Nombre, barrio, comida o playa…', clearSearch: 'Borrar búsqueda', searchHint: 'Los resultados se actualizan mientras escribes.', matching: 'para',
    filters: { all: 'Cualquier costo', free: 'Entrada gratuita', paid: 'De pago' },
    costs: { free: 'Entrada gratuita', purchase: 'De pago · consumo', ticket: 'De pago · entrada' },
    sorted: 'Del más cercano al más lejano', results: 'lugares', from: 'del alojamiento', approximate: 'Distancia aproximada por carretera',
    sameStreet: 'En la misma calle', opposite: 'Frente a la casa', unknown: 'Consulta la distancia en Maps',
    distanceNote: 'Distancias aproximadas por carretera. Algunos sitios locales usan la ubicación de la calle; consulta la ruta exacta en Maps.',
    costNote: 'La entrada gratuita no incluye estacionamiento, comida, compras ni actividades opcionales. Consulta entradas y horarios actuales antes de salir.',
    route: 'Cómo llegar', details: 'Más detalles', map: 'Ver ubicación', more: 'Explora más en Maps',
    water: '¿Vas a la playa? La calidad del agua puede cambiar después de la lluvia.', check: 'Ver calidad del agua',
    empty: 'Ningún lugar coincide con este filtro de costo.', emptyHint: 'Elige otro filtro de costo para ver lugares en esta categoría.', reset: 'Restablecer filtros',
    showMore: 'Mostrar más lugares', remaining: 'restantes', distanceSources: 'Estimaciones de distancia:',
  },
}

const categories: ExploreCategory[] = ['all', 'food', 'essentials', 'beaches', 'sights']
const costFilters: CostFilter[] = ['all', 'free', 'paid']

export function NearbySection({ language }: { language: Language }) {
  const [category, setCategory] = useState<ExploreCategory>('all')
  const [cost, setCost] = useState<CostFilter>('all')
  const [limit, setLimit] = useState(12)
  const [query, setQuery] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)
  const t = ui[language]
  const results = getExplorePlaces({ category, cost, query })
  const total = Object.values(places).reduce((count, items) => count + items.length, 0)
  const locale = language === 'pt' ? 'pt-BR' : language === 'es' ? 'es' : 'en'
  const selectCategory = (value: ExploreCategory) => { setCategory(value); setLimit(12) }
  const reset = () => { setQuery(''); setCategory('all'); setCost('all'); setLimit(12); searchRef.current?.focus() }
  const clearSearch = () => { setQuery(''); setLimit(12); searchRef.current?.focus() }

  return <section className="nearby-section section-wrap" id="explore" aria-labelledby="explore-heading">
    <div className="section-heading">
      <div><span className="eyebrow">{t.eyebrow}</span><h2 id="explore-heading">{t.title}</h2></div>
      <p>{t.intro}<sup><a className="explore-note-link" href="#explore-notes" aria-label={`${t.distanceNote} ${t.costNote}`} onClick={(event) => {
        event.preventDefault()
        const notes = document.getElementById('explore-notes')
        notes?.focus({ preventScroll: true })
        notes?.scrollIntoView({ block: 'start' })
      }}>*</a></sup></p>
    </div>
    <div className="explore-controls">
      <form role="search" className="explore-search" aria-label={t.search} onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="explore-search-input">{t.search}</label>
        <div className="explore-search-field">
          <Search size={20} aria-hidden="true" />
          <input ref={searchRef} id="explore-search-input" type="search" value={query} placeholder={t.placeholder}
            aria-controls="explore-panel" aria-describedby="explore-search-hint" autoComplete="off" enterKeyHint="search"
            onChange={(event) => { setQuery(event.target.value); setLimit(12) }}
            onKeyDown={(event) => { if (event.key === 'Escape') { event.preventDefault(); clearSearch() } }} />
          {query && <button type="button" onClick={clearSearch} aria-label={t.clearSearch}><X size={18} aria-hidden="true" /></button>}
        </div>
        <p id="explore-search-hint">{t.searchHint}</p>
      </form>
      <div className="explore-tabs" role="tablist" aria-label={t.eyebrow}>
        {categories.map((key, index) => <button
          key={key} id={`explore-tab-${key}`} role="tab" aria-selected={category === key}
          aria-controls="explore-panel" tabIndex={category === key ? 0 : -1}
          className={category === key ? 'selected' : ''} onClick={() => selectCategory(key)}
          onKeyDown={(event) => {
            let next: number
            if (event.key === 'ArrowRight') next = (index + 1) % categories.length
            else if (event.key === 'ArrowLeft') next = (index - 1 + categories.length) % categories.length
            else if (event.key === 'Home') next = 0
            else if (event.key === 'End') next = categories.length - 1
            else return
            event.preventDefault()
            selectCategory(categories[next])
            document.getElementById(`explore-tab-${categories[next]}`)?.focus()
          }}
        >{t.tabs[key]}<span>{key === 'all' ? total : places[key].length}</span></button>)}
      </div>
      <div className="explore-filter-row">
        <fieldset className="explore-cost-filter" aria-label={t.cost}><div>
          {costFilters.map(value => <button key={value} type="button" aria-pressed={cost === value}
            className={cost === value ? 'active' : ''} onClick={() => { setCost(value); setLimit(12) }}>
            {cost === value && <Check size={13} aria-hidden="true" />}{t.filters[value]}
          </button>)}
        </div></fieldset>
      </div>
    </div>
    <div id="explore-panel" role="tabpanel" aria-labelledby={`explore-tab-${category}`} tabIndex={0}>
      <div className="explore-results-bar"><p role="status" aria-live="polite" aria-atomic="true"><strong>{results.length}</strong> {t.results}{query.trim() && <> {t.matching} “{query.trim()}”</>}</p>
        <span><ArrowDownWideNarrow size={16} aria-hidden="true" />{t.sorted}</span></div>
      {category === 'beaches' && <div className="water-note"><p><Waves size={19} aria-hidden="true" />{t.water}</p>
        <a href="https://balneabilidade.ima.sc.gov.br/" target="_blank" rel="noreferrer">{t.check}<ExternalLink size={15} /></a></div>}
      {results.length ? <ol className="places-grid" aria-label={t.sorted}>
        {results.slice(0, limit).map((place, index) => <li className="place-card" key={place.name}>
          <div className="place-top"><span className="place-category"><span className="place-rank">{String(index + 1).padStart(2, '0')}</span>{t.tabs[place.category]}</span>
            <span className={`place-cost ${place.cost === 'free' ? 'free' : 'paid'}`}>{t.costs[place.cost]}</span></div>
          <h3>{place.name}</h3>
          <div className="place-distance" title={t.approximate}><Navigation size={15} aria-hidden="true" />
            <strong>{place.proximity === 'opposite' ? t.opposite : place.proximity === 'street' ? t.sameStreet
              : place.distanceKm === null ? t.unknown
              : place.distanceKm < 0.1 ? '< 100 m'
              : `≈ ${new Intl.NumberFormat(locale, { maximumFractionDigits: place.distanceKm < 10 ? 1 : 0 }).format(place.distanceKm)} km`}</strong>
            {place.distanceKm !== null && !place.proximity && <span>{t.from}</span>}
          </div>
          <p>{place.detail[language]}</p>
          <div className="place-location"><MapPin size={15} aria-hidden="true" />{place.location}</div>
          <div className="place-actions"><a href={place.mapUrl ?? directions(place.name + ', ' + place.location)}
            aria-label={`${place.mapUrl ? t.map : t.route}: ${place.name}`} target="_blank" rel="noreferrer">
            {place.mapUrl ? t.map : t.route}<ArrowRight size={16} aria-hidden="true" /></a>
            <a href={place.source} aria-label={`${t.details}: ${place.name}`} target="_blank" rel="noreferrer">
              {place.source.includes('balneabilidade.ima.sc.gov.br') ? t.check : t.details}<ExternalLink size={14} aria-hidden="true" /></a></div>
        </li>)}
      </ol> : <div className="explore-empty"><MapPin size={30} aria-hidden="true" /><h3>{t.empty}</h3><p>{t.emptyHint}</p><button type="button" onClick={reset}>{t.reset}</button></div>}
      {results.length > limit && <button type="button" className="explore-load-more" onClick={() => setLimit(value => value + 12)}>
        {t.showMore}<span>{results.length - limit} {t.remaining}</span><ArrowRight size={17} aria-hidden="true" /></button>}
    </div>
    <a className="explore-more" href={searchMore(category)} target="_blank" rel="noreferrer">{t.more}<ExternalLink size={15} aria-hidden="true" /></a>
    <p className="explore-data-credit">{t.distanceSources} <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OpenStreetMap</a> · <a href="https://project-osrm.org/" target="_blank" rel="noreferrer">OSRM</a></p>
    <div className="explore-notes" id="explore-notes" tabIndex={-1}><span aria-hidden="true">*</span><div><p><Navigation size={15} aria-hidden="true" />{t.distanceNote}</p><p><Ticket size={15} aria-hidden="true" />{t.costNote}</p></div></div>
  </section>
}
