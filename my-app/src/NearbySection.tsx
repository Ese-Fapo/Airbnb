import { useState } from 'react'
import { ArrowRight, ExternalLink, MapPin } from 'lucide-react'
import './NearbySection.css'
import { propertyAddress } from './data/property'
import { places, type Category } from './data/places'
import type { Language } from './types'

const origin = propertyAddress
const directions = (destination: string) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`
const searchMore = (category: Category) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(category === 'food' ? 'restaurants near ' + origin : category === 'essentials' ? 'shops and services near ' + origin : category === 'beaches' ? 'beaches near Sao Jose Santa Catarina' : 'attractions near Sao Jose Santa Catarina')}`

const ui = {
  en:{eyebrow:'EXPLORE THE AREA',title:'Around Real Parque.',intro:'Food, practical services, beaches and sightseeing around Real Parque. Routes open from the guesthouse; check current details before you go.',tabs:{food:'Food & coffee',essentials:'Essentials',beaches:'Beaches',sights:'Things to see'},route:'Get directions',details:'Place details',more:'See more on Maps',water:'Beach water quality can change after rain. Check the latest state report before swimming.',check:'Check water quality'},
  pt:{eyebrow:'EXPLORE A REGIÃO',title:'Perto do Real Parque.',intro:'Comida, servi\u00e7os essenciais, praias e passeios perto do Real Parque. As rotas partem da hospedagem; confira os dados atuais antes de sair.',tabs:{food:'Comer e beber',essentials:'Essenciais',beaches:'Praias',sights:'O que visitar'},route:'Como chegar',details:'Mais detalhes',more:'Ver mais no Maps',water:'A balneabilidade pode mudar após chuvas. Confira o relatório estadual antes de entrar no mar.',check:'Ver balneabilidade'},
  es:{eyebrow:'EXPLORA LA ZONA',title:'Cerca de Real Parque.',intro:'Comida, servicios esenciales, playas y paseos cerca de Real Parque. Las rutas salen del alojamiento; consulta los datos actuales antes de salir.',tabs:{food:'Comida y café',essentials:'Servicios',beaches:'Playas',sights:'Qué visitar'},route:'Cómo llegar',details:'Más detalles',more:'Ver más en Maps',water:'La calidad del agua puede cambiar después de la lluvia. Consulta el informe estatal antes de bañarte.',check:'Ver calidad del agua'},
}

export function NearbySection({language}:{language:Language}) {
  const [category,setCategory] = useState<Category>('food')
  const t = ui[language]
  const categories: Category[] = ['food', 'essentials', 'beaches', 'sights']
  const mapLabel = language === 'pt' ? 'Ver localização' : language === 'es' ? 'Ver ubicación' : 'View location'
  return <section className="nearby-section section-wrap" id="explore">
    <div className="section-heading"><div><span className="eyebrow">{t.eyebrow}</span><h2>{t.title}</h2></div><p>{t.intro}</p></div>
    <div className="explore-tabs" role="tablist" aria-label={t.eyebrow}>{categories.map((key, index) => (
      <button
        key={key}
        id={`explore-tab-${key}`}
        role="tab"
        aria-selected={category === key}
        aria-controls="explore-panel"
        tabIndex={category === key ? 0 : -1}
        className={category === key ? 'selected' : ''}
        onClick={() => setCategory(key)}
        onKeyDown={(event) => {
          let next: number;
          if (event.key === 'ArrowRight') next = (index + 1) % categories.length;
          else if (event.key === 'ArrowLeft') next = (index - 1 + categories.length) % categories.length;
          else if (event.key === 'Home') next = 0;
          else if (event.key === 'End') next = categories.length - 1;
          else return;
          event.preventDefault();
          setCategory(categories[next]);
          document.getElementById(`explore-tab-${categories[next]}`)?.focus();
        }}
      >{t.tabs[key]}<span>{places[key].length}</span></button>
    ))}</div>
    <div id="explore-panel" role="tabpanel" aria-labelledby={`explore-tab-${category}`} tabIndex={0}>
    {category==='beaches'&&<div className="water-note"><p>{t.water}</p><a href="https://balneabilidade.ima.sc.gov.br/" target="_blank" rel="noreferrer">{t.check}<ExternalLink size={15}/></a></div>}
    <div className="places-grid">{places[category].map((place,index)=><article className="place-card" key={place.name}><div className="place-top"><span>{String(index+1).padStart(2,'0')} / {language === 'en' ? place.type : t.tabs[category]}</span><MapPin size={18}/></div><h3>{place.name}</h3><p>{place.detail[language]}</p><div className="place-location"><MapPin size={15}/>{place.location}</div><div className="place-actions"><a href={place.mapUrl ?? directions(place.name+', '+place.location)} aria-label={`${place.mapUrl ? mapLabel : t.route}: ${place.name}`} target="_blank" rel="noreferrer">{place.mapUrl ? mapLabel : t.route}<ArrowRight size={16}/></a><a href={place.source} aria-label={`${t.details}: ${place.name}`} target="_blank" rel="noreferrer">{place.source.includes('balneabilidade.ima.sc.gov.br') ? t.check : t.details}<ExternalLink size={14}/></a></div></article>)}</div>
    </div>
    <a className="explore-more" href={searchMore(category)} target="_blank" rel="noreferrer">{t.more}<ArrowRight size={17}/></a>
  </section>
}
