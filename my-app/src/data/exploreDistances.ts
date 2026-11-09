// Public-map road estimates reviewed 2026-11-09. See docs/explore-data.md.
export type DistanceEstimate = { distanceKm: number | null; coordinates: [number, number]; precision: 'street' | 'place'; source: string }
export const exploreDistances: Record<string, DistanceEstimate> = {
  "Thiago Pizza e Lanches": {
    "coordinates": [
      -48.6207061,
      -27.5594981
    ],
    "source": "https://www.openstreetmap.org/way/147042496",
    "precision": "street",
    "distanceKm": 3.4
  },
  "Restaurante e Churrascaria Chuleta na Chapa": {
    "coordinates": [
      -48.6235423,
      -27.5923203
    ],
    "source": "https://www.openstreetmap.org/way/207073853",
    "precision": "street",
    "distanceKm": 4.4
  },
  "Tempero da JU": {
    "coordinates": [
      -48.6388374,
      -27.5687253
    ],
    "source": "https://www.openstreetmap.org/way/469886359",
    "precision": "street",
    "distanceKm": 0.1
  },
  "Cesar Gourmet — Ipiranga": {
    "coordinates": [
      -48.6306745,
      -27.5686047
    ],
    "source": "https://www.openstreetmap.org/way/1197745677",
    "precision": "street",
    "distanceKm": 1.8
  },
  "Alemão Lanches e Porções": {
    "coordinates": [
      -48.6400667,
      -27.5684544
    ],
    "source": "https://www.openstreetmap.org/way/210000905",
    "precision": "street",
    "distanceKm": 0.2
  },
  "Restaurante Ipiranga": {
    "coordinates": [
      -48.6436519,
      -27.5670113
    ],
    "source": "https://www.openstreetmap.org/way/982898128",
    "precision": "street",
    "distanceKm": 1
  },
  "LaBrava Pizzaria": {
    "coordinates": [
      -48.6359367,
      -27.5661586
    ],
    "source": "https://www.openstreetmap.org/way/209289573",
    "precision": "street",
    "distanceKm": 0.6
  },
  "Pastelaria Valéria Caldo de Cana": {
    "coordinates": [
      -48.6382986,
      -27.5653482
    ],
    "source": "https://www.openstreetmap.org/way/530037208",
    "precision": "street",
    "distanceKm": 0.6
  },
  "Padaria e Confeitaria Santo Antônio": {
    "coordinates": [
      -48.63997,
      -27.5693544
    ],
    "source": "https://maps.app.goo.gl/DhcvXVjBsW4HYSkt6",
    "precision": "place",
    "distanceKm": 0
  },
  "Restaurante Sabor de Casa": {
    "coordinates": [
      -48.6306745,
      -27.5686047
    ],
    "source": "https://www.openstreetmap.org/way/1197745677",
    "precision": "street",
    "distanceKm": 1.8
  },
  "Parceiros Conveniência": {
    "coordinates": [
      -48.6388374,
      -27.5687253
    ],
    "source": "https://www.openstreetmap.org/way/469886359",
    "precision": "street",
    "distanceKm": 0.1
  },
  "Mercado Tibes 24hs": {
    "coordinates": [
      -48.6425276,
      -27.571344
    ],
    "source": "https://www.openstreetmap.org/way/470024467",
    "precision": "street",
    "distanceKm": 0.5
  },
  "Mercado Costa": {
    "coordinates": [
      -48.6385485,
      -27.5705001
    ],
    "source": "https://www.openstreetmap.org/way/465325639",
    "precision": "street",
    "distanceKm": 0.2
  },
  "Mercado Ipiranga": {
    "coordinates": [
      -48.6392128,
      -27.570394
    ],
    "source": "https://www.openstreetmap.org/way/147049528",
    "precision": "street",
    "distanceKm": 0.2
  },
  "Komprão Koch Atacadista": {
    "coordinates": [
      -48.6382986,
      -27.5653482
    ],
    "source": "https://www.openstreetmap.org/way/530037208",
    "precision": "street",
    "distanceKm": 0.6
  },
  "Farmácia do Cesar": {
    "coordinates": [
      -48.6403842,
      -27.5693346
    ],
    "source": "https://farmaciaqui.net/farmacia-do-cesar-sao-jose-sc-9894",
    "precision": "place",
    "distanceKm": 0.3
  },
  "Praia de Palmas": {
    "coordinates": [
      -48.538632,
      -27.3241853
    ],
    "source": "https://www.openstreetmap.org/node/6464400",
    "precision": "place",
    "distanceKm": 45.7
  },
  "Praia Grande": {
    "coordinates": [
      -48.5383267,
      -27.3634157
    ],
    "source": "https://www.openstreetmap.org/node/19981267",
    "precision": "place",
    "distanceKm": 37.6
  },
  "Praia das Cordas": {
    "coordinates": [
      -48.5301605,
      -27.3757203
    ],
    "source": "https://www.openstreetmap.org/node/6901993",
    "precision": "place",
    "distanceKm": 39.5
  },
  "Praia do Tinguá": {
    "coordinates": [
      -48.5382987,
      -27.3741426
    ],
    "source": "https://www.openstreetmap.org/node/6901983",
    "precision": "place",
    "distanceKm": 38.4
  },
  "Praia da Armação da Piedade": {
    "coordinates": [
      -48.5339033,
      -27.3797058
    ],
    "source": "https://www.openstreetmap.org/node/6901994",
    "precision": "place",
    "distanceKm": 39.3
  },
  "Praia de Calheiros": {
    "coordinates": [
      -48.5628159,
      -27.3158748
    ],
    "source": "https://www.openstreetmap.org/node/7535353",
    "precision": "place",
    "distanceKm": 41.1
  },
  "Praia de Ganchos de Fora": {
    "coordinates": [
      -48.5476939,
      -27.3067564
    ],
    "source": "https://www.openstreetmap.org/node/7535355",
    "precision": "place",
    "distanceKm": 43.2
  },
  "Praia da Guararema": {
    "coordinates": [
      -48.631156,
      -27.6366297
    ],
    "source": "https://www.openstreetmap.org/way/258866084",
    "precision": "street",
    "distanceKm": 10.4
  },
  "Praia do Forte": {
    "coordinates": [
      -48.519848,
      -27.4351485
    ],
    "source": "https://www.openstreetmap.org/node/7067388",
    "precision": "place",
    "distanceKm": 39.2
  },
  "Praia da Daniela": {
    "coordinates": [
      -48.5383758,
      -27.4488738
    ],
    "source": "https://www.openstreetmap.org/node/6464169",
    "precision": "place",
    "distanceKm": 39.7
  },
  "Praia de Jurerê": {
    "coordinates": [
      -48.499129,
      -27.4440655
    ],
    "source": "https://www.openstreetmap.org/way/828526447",
    "precision": "street",
    "distanceKm": 36.5
  },
  "Praia de Canasvieiras": {
    "coordinates": [
      -48.4547911,
      -27.4268131
    ],
    "source": "https://www.openstreetmap.org/node/6436280",
    "precision": "place",
    "distanceKm": 39.7
  },
  "Praia de Ponta das Canas": {
    "coordinates": [
      -48.4285018,
      -27.4030398
    ],
    "source": "https://www.openstreetmap.org/node/4453499",
    "precision": "place",
    "distanceKm": 44
  },
  "Praia da Barra da Lagoa": {
    "coordinates": [
      -48.4269664,
      -27.5713174
    ],
    "source": "https://www.openstreetmap.org/node/4199191",
    "precision": "place",
    "distanceKm": 34.3
  },
  "Praia da Joaquina": {
    "coordinates": [
      -48.4543517,
      -27.6342805
    ],
    "source": "https://www.openstreetmap.org/node/6455059",
    "precision": "place",
    "distanceKm": 28.8
  },
  "Praia do Campeche": {
    "coordinates": [
      -48.4804975,
      -27.6859294
    ],
    "source": "https://www.openstreetmap.org/node/6455060",
    "precision": "place",
    "distanceKm": 25.6
  },
  "Praia da Armação": {
    "coordinates": [
      -48.5079032,
      -27.7360351
    ],
    "source": "https://www.openstreetmap.org/node/6442370",
    "precision": "place",
    "distanceKm": 30.8
  },
  "Praia da Pinheira": {
    "coordinates": [
      -48.6021779,
      -27.8663926
    ],
    "source": "https://www.openstreetmap.org/node/6609409",
    "precision": "place",
    "distanceKm": 45.3
  },
  "Guarda do Embaú": {
    "coordinates": [
      -48.5923662,
      -27.9021238
    ],
    "source": "https://www.openstreetmap.org/node/12303386",
    "precision": "place",
    "distanceKm": 49.3
  },
  "Beto Carrero World": {
    "coordinates": [
      -48.6204422,
      -26.8041971
    ],
    "source": "https://www.openstreetmap.org/way/25101921",
    "precision": "place",
    "distanceKm": 108.6
  },
  "Água Show Park": {
    "coordinates": [
      -48.4192416,
      -27.4447405
    ],
    "source": "https://www.openstreetmap.org/node/11216557",
    "precision": "place",
    "distanceKm": 40.7
  },
  "Praça do CEU — Centro de Artes e Esportes Unificados": {
    "coordinates": [
      -48.6376659,
      -27.5713109
    ],
    "source": "https://www.openstreetmap.org/way/430883277",
    "precision": "street",
    "distanceKm": 0.4
  },
  "Parque Beira Mar": {
    "coordinates": [
      -48.6125741,
      -27.6028563
    ],
    "source": "https://www.openstreetmap.org/way/606415796",
    "precision": "place",
    "distanceKm": 6.9
  },
  "Centro Histórico de São José": {
    "coordinates": [
      -48.6275277,
      -27.616
    ],
    "source": "https://www.openstreetmap.org/node/20693915",
    "precision": "place",
    "distanceKm": 7.7
  },
  "Theatro Adolpho Mello": {
    "coordinates": [
      -48.6273884,
      -27.6154366
    ],
    "source": "https://www.openstreetmap.org/way/1062190292",
    "precision": "place",
    "distanceKm": 7.6
  },
  "Bica da Carioca": {
    "coordinates": [
      -48.6287234,
      -27.6157446
    ],
    "source": "https://www.openstreetmap.org/way/467362985",
    "precision": "street",
    "distanceKm": 7.8
  },
  "Jardim Botânico Max Hablitzel": {
    "coordinates": [
      -48.6558147,
      -27.5527064
    ],
    "source": "https://www.openstreetmap.org/node/10155284439",
    "precision": "place",
    "distanceKm": 3.8
  },
  "Ponte Hercílio Luz & Parque da Luz": {
    "coordinates": [
      -48.5654433,
      -27.5938202
    ],
    "source": "https://www.openstreetmap.org/way/376367899",
    "precision": "place",
    "distanceKm": 9.4
  },
  "Mercado Público de Florianópolis": {
    "source": "https://www.openstreetmap.org/relation/2995576",
    "precision": "place",
    "coordinates": [
      -48.55306,
      -27.5973289
    ],
    "distanceKm": 12.3
  },
  "Fortaleza de São José da Ponta Grossa": {
    "coordinates": [
      -48.5178891,
      -27.4315348
    ],
    "source": "https://www.openstreetmap.org/way/211031631",
    "precision": "place",
    "distanceKm": 38.9
  }
}
