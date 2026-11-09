import { propertyMapUrl } from "./property"
import type { Language } from "../types"
export type Category = 'food' | 'essentials' | 'beaches' | 'sights'
export type Place = {
  name: string
  location: string
  type: string
  detail: Record<Language, string>
  source: string
  mapUrl?: string
}

export const places: Record<Category, Place[]> = {
  food: [
    {
      name: 'Thiago Pizza e Lanches',
      location: 'R. Emídio Francisco da Silva, 452 · Ipiranga, São José',
      type: 'Pizza & snacks',
      detail: {
        en: 'Pizza and snacks in neighboring Ipiranga. Confirm current hours and ordering options before visiting.',
        pt: 'Pizzas e lanches no bairro vizinho Ipiranga. Confirme os horários e as opções de pedido antes de visitar.',
        es: 'Pizzas y bocadillos en el barrio vecino de Ipiranga. Confirma los horarios y las opciones para pedir antes de ir.',
      },
      source: 'https://www.benditoguia.com.br/empresa/thiago-pizza-e-lanches-melhor-pizzaria-em-sao-jose-cardapio-de-ipiranga-melhor-ipiranga-lanchonete-jose-jose-sc',
    },
    {
      name: 'Restaurante e Churrascaria Chuleta na Chapa',
      location: 'R. Lindolfo Jásper, 4 · Roçado, São José',
      type: 'Brazilian meals & barbecue',
      detail: {
        en: 'Brazilian restaurant and barbecue option in Roçado. Check current opening days and hours before making the trip.',
        pt: 'Restaurante de comida brasileira e churrasco no Roçado. Confira os dias e horários atuais antes de sair.',
        es: 'Restaurante de comida brasileña y parrilla en Roçado. Consulta los días y horarios actuales antes de salir.',
      },
      source: 'https://www.tripadvisor.com.br/Restaurant_Review-g2151496-d8218713-Reviews-Restaurante_Chuleta_Na_Chapa-Sao_Jose_State_of_Santa_Catarina.html',
    },
    {
      name: 'Tempero da JU',
      location: 'R. Honório Virgilina Machado, 21 · Real Parque, São José',
      type: 'Lunch restaurant',
      detail: {
        en: 'Lunch restaurant directly opposite the house.',
        pt: 'Restaurante que serve almoço, bem em frente à casa.',
        es: 'Restaurante que sirve almuerzo, justo enfrente de la casa.',
      },
      source: propertyMapUrl,
      mapUrl: propertyMapUrl,
    },
    {
      name: 'Cesar Gourmet — Ipiranga',
      location: 'R. Otto Júlio Malina, 1723 · Ipiranga, São José',
      type: 'Burgers & snacks',
      detail: {
        en: 'Local snack restaurant in Ipiranga, with takeaway available. Check current hours before visiting.',
        pt: 'Lanchonete no Ipiranga, com opção de retirada. Confira o horário atual antes de visitar.',
        es: 'Local de comida rápida en Ipiranga, con opción para llevar. Consulta el horario antes de ir.',
      },
      source: 'https://es.restaurantguru.com/Cesar-Gourmet-Ipiranga-Sao-Jose',
    },
    {
      name: 'Alemão Lanches e Porções',
      location: 'R. Joaquim Vieira Padilha, 620 · Real Parque, São José',
      type: 'Burgers & snacks',
      detail: {
        en: 'A local option for burgers and snacks in Real Parque. Confirm the current location and hours before visiting: (48) 3346-7104.',
        pt: 'Opção de lanches e hambúrgueres no Real Parque. Confirme o endereço e o horário antes de visitar: (48) 3346-7104.',
        es: 'Opción de hamburguesas y bocadillos en Real Parque. Confirma la dirección y el horario antes de ir: (48) 3346-7104.',
      },
      source: 'https://www.tripadvisor.com.br/Restaurant_Review-g2151496-d8215507-Reviews-Alemao_Lanches-Sao_Jose_State_of_Santa_Catarina.html',
    },
    { name:'Restaurante Ipiranga', location:'R. Alceu Amoroso Lima, 340 · Real Parque, São José', type:'Brazilian lunch', detail:{en:'Local lunch restaurant with a buffet and grilled dishes.',pt:'Restaurante local para almoço, com buffet e grelhados.',es:'Restaurante local para almorzar, con buffet y platos a la parrilla.'}, source:'https://cardapiosvip.com.br/restaurante/restaurante-ipiranga' },
    { name:'LaBrava Pizzaria', location:'R. Vereador Pedro Paulo Kremer, 12, sala 04 · Real Parque, São José', type:'Pizza', detail:{en:'Neighborhood pizza for takeaway or delivery.',pt:'Pizza no bairro para retirada ou entrega.',es:'Pizza del barrio para llevar o pedir a domicilio.'}, source:'https://wepede.com.br/r/labrava-pizzaria-vgtt4/' },
    { name:'Pastelaria Valéria Caldo de Cana', location:'R. Franklin Cascaes · Real Parque, São José', type:'Pastel & sugarcane juice', detail:{en:'A neighborhood stop for pastel and sugarcane juice.',pt:'Pastel e caldo de cana no bairro.',es:'Pastel brasileño y jugo de caña en el barrio.'}, source:'https://www.locaisdobrasil.com.br/encontre/restaurantes/real-parque/sao-jose-sc' },
    { name:'Padaria e Confeitaria Santo Antônio', location:'R. José Antônio Pereira, 2188 · Ipiranga, São José', type:'Bakery & coffee', detail:{en:'Bread, coffee and breakfast essentials near the guesthouse.',pt:'Pães, café e itens para o café da manhã perto da hospedagem.',es:'Pan, café y productos para desayunar cerca del alojamiento.'}, source:'https://maps.app.goo.gl/DhcvXVjBsW4HYSkt6' },
    { name:'Restaurante Sabor de Casa', location:'R. Otto Júlio Malina, 808 · Ipiranga, São José', type:'Casual meals', detail:{en:'Simple local meals in the neighboring Ipiranga area.',pt:'Refeições simples no bairro vizinho Ipiranga.',es:'Comidas sencillas en el barrio vecino de Ipiranga.'}, source:'https://www.guiatelefone.com/empresas/sao-jose-sc/bairro/ipiranga/lanches-e-salgados/lanchonetes' },
    {
      // Business name and full address supplied by the host.
      name: 'Parceiros Conveniência',
      location: 'R. Honória Virgilina Machado, 310 · Real Parque, São José - SC · CEP 88113-478',
      type: 'Convenience store',
      detail: {
        en: 'Neighborhood convenience store selling alcoholic drinks, water, cigarettes and a wide selection of other beverages. Check current hours before visiting.',
        pt: 'Conveniência do bairro com bebidas alcoólicas, água, cigarros e uma grande variedade de outras bebidas. Confira o horário atual antes de visitar.',
        es: 'Tienda de conveniencia del barrio con bebidas alcohólicas, agua, cigarrillos y una amplia variedad de otras bebidas. Consulta el horario actual antes de ir.',
      },
      source: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Parceiros Conveniência, Rua Honória Virgilina Machado, 310, Real Parque, São José - SC, 88113-478')}`,
    },
  ],
  essentials: [
    {
      name: 'Mercado Tibes 24hs',
      location: 'Servidão Olaires Maria dos Santos, s/n · São José · CEP 88111-685',
      type: 'Neighborhood market',
      detail: {
        en: 'Neighborhood market for everyday essentials, open 24 hours. Phone: (48) 98442-2528.',
        pt: 'Mercado de bairro para compras do dia a dia, aberto 24 horas. Telefone: (48) 98442-2528.',
        es: 'Mercado de barrio para compras diarias, abierto las 24 horas. Teléfono: (48) 98442-2528.',
      },
      source: 'https://restaurantguru.com.br/Mercado-Tibes-24hs-Sao-Jose',
    },
    {
      name: 'Mercado Costa',
      location: 'R. Jos\u00e9 Ant\u00f4nio Pereira, 1144 \u00b7 Ipiranga, S\u00e3o Jos\u00e9',
      type: 'Neighborhood market',
      detail: {
        en: 'A nearby grocery market for everyday essentials.',
        pt: 'Mercado pr\u00f3ximo para compras do dia a dia.',
        es: 'Mercado cercano para las compras diarias.',
      },
      source: 'https://www.lojalocal.com/12860108000133',
    },
    {
      name: 'Mercado Ipiranga',
      location: 'R. Jo\u00e3o Paulo Gaspar, 2565 \u00b7 Ipiranga, S\u00e3o Jos\u00e9',
      type: 'Neighborhood market',
      detail: {
        en: 'Another local grocery option in the neighboring Ipiranga area.',
        pt: 'Outra op\u00e7\u00e3o de mercado no bairro vizinho Ipiranga.',
        es: 'Otra opci\u00f3n de mercado en el barrio vecino de Ipiranga.',
      },
      source: 'https://br.todosnegocios.com/pt/mercado-ipiranga_3t-48-3258-3967',
    },
    {
      name: 'Kompr\u00e3o Koch Atacadista',
      location: 'R. Franklin Cascaes, 2360 \u00b7 Real Parque, S\u00e3o Jos\u00e9',
      type: 'Wholesale supermarket',
      detail: {
        en: 'Larger grocery and household shopping in Real Parque.',
        pt: 'Atacarejo para compras de alimentos e itens para a casa no Real Parque.',
        es: 'Supermercado mayorista para alimentos y productos del hogar en Real Parque.',
      },
      source: 'https://komprao.com.br/lojas/',
    },
    {
      name: 'Farmácia do Cesar',
      location: 'R. José Antônio Pereira, 2210, sala 01 · Ipiranga, São José - SC · CEP 88111-490',
      type: 'Pharmacy',
      detail: {
        en: 'Neighborhood pharmacy for medicines and personal care items. Check current opening hours before visiting.',
        pt: 'Farmácia do bairro para medicamentos e itens de higiene. Confira o horário atual antes de visitar.',
        es: 'Farmacia del barrio para medicamentos y artículos de higiene. Consulta el horario actual antes de ir.',
      },
      source: 'https://www.solutudo.com.br/empresas/sc/s-jose/farmacias/farmacia-do-cesar-ltda-28001053',
    },
  ],
  beaches: [
    {
      name: 'Praia de Palmas',
      location: 'Palmas · Governador Celso Ramos',
      type: 'Beach day & village',
      detail: {
        en: 'A popular beach with shops and restaurants nearby, for a day trip to Governador Celso Ramos.',
        pt: 'Praia procurada por visitantes, com comércio e restaurantes por perto, para um passeio de um dia em Governador Celso Ramos.',
        es: 'Playa popular con tiendas y restaurantes cerca, para una excursión de un día a Governador Celso Ramos.',
      },
      source: 'https://scturismo.com.br/governador-celso-ramos/',
    },
    {
      name: 'Praia Grande',
      location: 'Praia Grande · Governador Celso Ramos',
      type: 'Coastal scenery',
      detail: {
        en: 'Another beach to explore on a coastal day trip to Governador Celso Ramos.',
        pt: 'Mais uma praia para conhecer em um passeio pelo litoral de Governador Celso Ramos.',
        es: 'Otra playa para conocer durante una excursión por la costa de Governador Celso Ramos.',
      },
      source: 'https://scturismo.com.br/governador-celso-ramos/',
    },
    {
      name: 'Praia das Cordas',
      location: 'Armação da Piedade · Governador Celso Ramos',
      type: 'Small beach & waves',
      detail: {
        en: 'A small, scenic beach where waves can attract surfers. Check sea conditions before swimming.',
        pt: 'Praia pequena e bonita, com ondas que podem atrair surfistas. Confira as condições do mar antes do banho.',
        es: 'Playa pequeña y pintoresca cuyas olas pueden atraer surfistas. Consulta el estado del mar antes de bañarte.',
      },
      source: 'https://governadorcelsoramos.sc.gov.br/uploads/sites/392/2023/08/LEITURA-TECNICA_GCRFINAL_Rev_09-08-23.pdf',
    },
    {
      name: 'Praia do Tinguá',
      location: 'Tinguá · Governador Celso Ramos',
      type: 'Cove & boating',
      detail: {
        en: 'A sheltered cove popular with boats; it can be lively during the summer.',
        pt: 'Enseada abrigada procurada por embarcações; pode ficar movimentada no verão.',
        es: 'Ensenada resguardada popular entre embarcaciones; puede estar animada en verano.',
      },
      source: 'https://curtalitoralsc.com.br/praias/praia-do-tingua/',
    },
    {
      name: 'Praia da Armação da Piedade',
      location: 'Armação da Piedade · Governador Celso Ramos',
      type: 'Beach & heritage',
      detail: {
        en: 'Combine a coastal outing with the historic Nossa Senhora da Piedade church and local fishing heritage.',
        pt: 'Combine o passeio à beira-mar com a histórica Igreja Nossa Senhora da Piedade e a tradição pesqueira local.',
        es: 'Combina el paseo costero con la histórica iglesia Nossa Senhora da Piedade y la tradición pesquera local.',
      },
      source: 'https://scturismo.com.br/governador-celso-ramos/',
    },
    {
      name: 'Praia de Calheiros',
      location: 'Calheiros · Governador Celso Ramos',
      type: 'Fishing village',
      detail: {
        en: 'A beach frequented by local residents, with fishing boats in the bay.',
        pt: 'Praia frequentada por moradores da região, com barcos de pesca na baía.',
        es: 'Playa frecuentada por residentes de la zona, con barcos de pesca en la bahía.',
      },
      source: 'https://governadorcelsoramos.sc.gov.br/uploads/sites/392/2023/08/LEITURA-TECNICA_GCRFINAL_Rev_09-08-23.pdf',
    },
    {
      name: 'Praia de Ganchos de Fora',
      location: 'Ganchos de Fora · Governador Celso Ramos',
      type: 'Village & coastal views',
      detail: {
        en: 'A fishing village beach with rocky coastal scenery.',
        pt: 'Praia de vila de pescadores, com paisagens de costões rochosos.',
        es: 'Playa de un pueblo de pescadores, con paisajes de costa rocosa.',
      },
      source: 'https://governadorcelsoramos.sc.gov.br/uploads/sites/392/2023/08/LEITURA-TECNICA_GCRFINAL_Rev_09-08-23.pdf',
    },
    { name:'Praia da Guararema', location:'Ponta de Baixo · São José', type:'São José', detail:{en:'The city’s small bay beach with a deck and waterfront restaurants. Check water quality before swimming.',pt:'Praia da cidade, com deck e restaurantes à beira-mar. Confira a balneabilidade antes do banho.',es:'Playa de la ciudad con paseo y restaurantes. Consulta la calidad del agua antes de bañarte.'}, source:'https://saojose.sc.gov.br/praia-da-guararema-em-ponta-de-baixo-e-considerada-propria-para-banho/76033/' },
    { name:'Praia do Forte', location:'Norte da Ilha · Florianópolis', type:'Beach + history', detail:{en:'A beach beside the São José da Ponta Grossa fortress.',pt:'Praia ao lado da Fortaleza de São José da Ponta Grossa.',es:'Playa junto a la Fortaleza de São José da Ponta Grossa.'}, source:'https://fortalezas.ufsc.br/fortaleza-ponta-grossa/guia-fortaleza-de-sao-jose-da-ponta-grossa/' },
    { name:'Praia da Daniela', location:'Norte da Ilha · Florianópolis', type:'Sheltered coast', detail:{en:'A north-island beach often chosen by families.',pt:'Praia do norte da ilha procurada por famílias.',es:'Playa del norte de la isla popular entre familias.'}, source:'https://www.setur.sc.gov.br/verao-em-santa-catarina-descubra-melhores-praias-para-aproveitar-com-a-familia/' },
    { name:'Praia de Jurerê', location:'Norte da Ilha · Florianópolis', type:'North island', detail:{en:'A north-island beach with places to eat nearby.',pt:'Praia do norte da ilha com opções de alimentação por perto.',es:'Playa del norte de la isla con opciones para comer cerca.'}, source:'https://balneabilidade.ima.sc.gov.br/' },
    { name:'Praia de Canasvieiras', location:'Norte da Ilha · Florianópolis', type:'Beach town', detail:{en:'A lively beach area with shops and places to eat.',pt:'Balneário movimentado com comércio e restaurantes.',es:'Zona de playa animada con tiendas y restaurantes.'}, source:'https://balneabilidade.ima.sc.gov.br/' },
    { name:'Praia de Ponta das Canas', location:'Norte da Ilha · Florianópolis', type:'North island', detail:{en:'Another north-island beach to explore.',pt:'Mais uma praia para conhecer no norte da ilha.',es:'Otra playa para conocer en el norte de la isla.'}, source:'https://balneabilidade.ima.sc.gov.br/' },
    { name:'Praia da Barra da Lagoa', location:'Leste da Ilha · Florianópolis', type:'East coast', detail:{en:'An east-island beach near the Barra da Lagoa neighborhood.',pt:'Praia do leste da ilha junto ao bairro Barra da Lagoa.',es:'Playa del este de la isla junto al barrio Barra da Lagoa.'}, source:'https://balneabilidade.ima.sc.gov.br/' },
    { name:'Praia da Joaquina', location:'Leste da Ilha · Florianópolis', type:'Surf & dunes', detail:{en:'An open-coast beach known for its waves and nearby dunes.',pt:'Praia de mar aberto conhecida pelas ondas e dunas próximas.',es:'Playa de mar abierto conocida por sus olas y dunas cercanas.'}, source:'https://balneabilidade.ima.sc.gov.br/' },
    { name:'Praia do Campeche', location:'Sul da Ilha · Florianópolis', type:'Open coast', detail:{en:'A long south-island beach with ocean views.',pt:'Praia extensa no sul da ilha, com vista para o mar aberto.',es:'Playa extensa en el sur de la isla, frente al mar abierto.'}, source:'https://balneabilidade.ima.sc.gov.br/' },
    { name:'Praia da Armação', location:'Sul da Ilha · Florianópolis', type:'South island', detail:{en:'A south-island beach and village for a longer outing.',pt:'Praia e vila no sul da ilha para um passeio mais longo.',es:'Playa y pueblo del sur de la isla para una excursión más larga.'}, source:'https://balneabilidade.ima.sc.gov.br/' },
    { name:'Praia da Pinheira', location:'Pinheira · Palhoça', type:'South coast', detail:{en:'A beach trip south of São José, in Palhoça.',pt:'Passeio de praia ao sul de São José, em Palhoça.',es:'Excursión de playa al sur de São José, en Palhoça.'}, source:'https://www.setur.sc.gov.br/verao-em-santa-catarina-descubra-melhores-praias-para-aproveitar-com-a-familia/' },
    { name:'Guarda do Embaú', location:'Guarda do Embaú · Palhoça', type:'Beach & nature', detail:{en:'A scenic Palhoça beach and village for a longer outing.',pt:'Praia e vila de Palhoça para um passeio mais longo.',es:'Playa y pueblo de Palhoça para una excursión más larga.'}, source:'https://www.setur.sc.gov.br/verao-em-santa-catarina-descubra-melhores-praias-para-aproveitar-com-a-familia/' },
  ],
  sights: [
    {
      name: 'Parque Ambiental dos Sabiás',
      location: 'R. Francisco Inácio do Nascimento, 5072 · Forquilhas, São José',
      type: 'Nature & environmental park',
      detail: {
        en: 'Nature park with an ecological trail, pond, native-plant nursery and picnic areas.',
        pt: 'Parque ambiental com trilha ecológica, açude, viveiro de plantas nativas e áreas para piquenique.',
        es: 'Parque natural con sendero ecológico, estanque, vivero de plantas nativas y zonas para picnic.',
      },
      source: 'https://saojose.sc.gov.br/horto-florestal-visita-ao-horto-florestal-parque-ambiental-dos-sabias/',
    },
    {
      name: 'Parque Costa Azul',
      location: 'R. Marcílio Dias, esquina com R. Eugênio Raulino Koerich · Novo Estreito, Florianópolis',
      type: 'Outdoor recreation',
      detail: {
        en: 'Public park with a playground, sports courts, exercise areas and space for a picnic.',
        pt: 'Parque público com playground, quadras esportivas, áreas de exercício e espaço para piquenique.',
        es: 'Parque público con zona infantil, canchas deportivas, áreas de ejercicio y espacio para picnic.',
      },
      source: 'https://www.wkoerich.com.br/wlife/wkoerich-realiza-acoes-em-comemoracao-a-entrega-do-parque-costa-azul/',
    },
    {
      name: 'Parque Pedra Branca',
      location: 'R. das Figueiras · Cidade Universitária Pedra Branca, Palhoça',
      type: 'Lakeside park',
      detail: {
        en: 'Also known as Lagos Pedra Branca, a green space for a walk beside the lakes.',
        pt: 'Também conhecido como Lagos Pedra Branca, um espaço verde para caminhar ao redor dos lagos.',
        es: 'También conocido como Lagos Pedra Branca, un espacio verde para pasear junto a los lagos.',
      },
      source: 'https://www.mypacer.com/parks/136930/lagos-pedra-branca-palhoca',
    },
    {
      name: 'Beto Carrero World',
      location: 'Praia de Armação · Penha, SC',
      type: 'Theme park & shows',
      detail: {
        en: 'Theme park in Penha with rides and live shows, for a full-day outing farther north. Check the official calendar, tickets and attraction restrictions before planning your trip.',
        pt: 'Parque temático em Penha com brinquedos e shows ao vivo, para um passeio de dia inteiro mais ao norte. Confira o calendário oficial, os ingressos e as restrições das atrações antes de planejar a viagem.',
        es: 'Parque temático en Penha con atracciones y espectáculos en vivo, para una excursión de día completo más al norte. Consulta el calendario oficial, las entradas y las restricciones antes de planificar el viaje.',
      },
      source: 'https://www.betocarrero.com.br/',
    },
    {
      name: 'Água Show Park',
      location: 'Rod. Armando Calil Bullos (SC-403), 3868 · Ingleses, Florianópolis',
      type: 'Water park',
      detail: {
        en: 'Water park in Ingleses with slides, pools and children’s attractions. Check the official calendar, tickets and attraction rules before visiting.',
        pt: 'Parque aquático nos Ingleses com toboáguas, piscinas e atrações infantis. Confira o calendário oficial, os ingressos e as regras das atrações antes de visitar.',
        es: 'Parque acuático en Ingleses con toboganes, piscinas y atracciones infantiles. Consulta el calendario oficial, las entradas y las normas de las atracciones antes de ir.',
      },
      source: 'https://www.aguashowpark.com.br/',
    },
    {
      name: 'Praça do CEU — Centro de Artes e Esportes Unificados',
      location: 'R. Eduardo Mikulki, 124, esquina com R. José Antônio Pereira · Ipiranga, São José',
      type: 'Arts, sports & recreation',
      detail: {
        en: 'Community arts and sports space with a playground, skate park, walking track, library and amphitheatre. Check the current activity schedule before visiting.',
        pt: 'Espaço de artes, esportes e convivência com playground, pista de skate, pista de caminhada, biblioteca e anfiteatro. Confira a programação atual antes de visitar.',
        es: 'Espacio comunitario de arte y deporte con parque infantil, pista de skate, sendero para caminar, biblioteca y anfiteatro. Consulta la programación antes de ir.',
      },
      source: 'https://saojose.sc.gov.br/praca-do-ceu-projeta-ampliacao-de-atividades-em-2026-com-foco-no-projeto-mulheres-ativas/94876/',
    },
    { name:'Parque Beira-Mar de São José', location:'Beira-Mar · São José', type:'Waterfront park', detail:{en:'Seafront walks, playground and skate area beside the Arena Multiuso.',pt:'Passeio à beira-mar, playground e pista de skate ao lado da Arena Multiuso.',es:'Paseo marítimo, parque infantil y pista de skate junto a la Arena Multiuso.'}, source:'https://saojose.sc.gov.br/parque-beira-mar-sao-jose/38615/' },
    { name:'Centro Histórico de São José', location:'Centro Histórico · São José', type:'History & architecture', detail:{en:'Colorful historic buildings, Praça Hercílio Luz, the church and local museums.',pt:'Casario histórico, Praça Hercílio Luz, Igreja Matriz e museus.',es:'Casas históricas, Praça Hercílio Luz, iglesia y museos.'}, source:'https://saojose.sc.gov.br/centro-historico-turismo/38616/' },
    { name:'Theatro Adolpho Mello', location:'Praça Hercílio Luz · Centro Histórico, São José', type:'Historic theatre', detail:{en:'Historic theatre with free visits by appointment. Performances may have separate admission; check the current programme.',pt:'Teatro histórico com visitação gratuita mediante agendamento. Espetáculos podem ter cobrança à parte; confira a programação atual.',es:'Teatro histórico con visitas gratuitas con cita previa. Los espectáculos pueden tener entrada aparte; consulta la programación actual.'}, source:'https://saojose.sc.gov.br/servico-theatro-adolpho-mello/' },
    { name:'Bica da Carioca', location:'Centro Histórico · São José', type:'Historic landmark', detail:{en:'A restored nineteenth-century water source near the main church.',pt:'Antiga fonte de água do século XIX, perto da Igreja Matriz.',es:'Antigua fuente de agua del siglo XIX cerca de la iglesia principal.'}, source:'https://saojose.sc.gov.br/pontos-turisticos/' },
    { name:'Jardim Botânico Max Hablitzel', location:'R. Cauassú, s/n · Potecas, São José', type:'Garden & nature', detail:{en:'Botanical garden with trails, a sensory garden and native plants.',pt:'Jardim botânico com trilhas, jardim sensorial e plantas nativas.',es:'Jardín botánico con senderos, jardín sensorial y plantas nativas.'}, source:'https://saojose.sc.gov.br/jardim-botanico/' },
    { name:'Parque da Luz', location:'Centro · Florianópolis', type:'Park & city landmark', detail:{en:'A green space for a stroll beside the iconic Hercílio Luz bridge.',pt:'Área verde para passear ao lado da emblemática Ponte Hercílio Luz.',es:'Un espacio verde para pasear junto al emblemático puente Hercílio Luz.'}, source:'https://visitefloripa.com.br/o-que-ver/parque-da-luz/' },
    { name:'Mercado Público de Florianópolis', location:'Centro · Florianópolis', type:'Food & culture', detail:{en:'Historic market for local food and a look around the city center.',pt:'Mercado histórico para provar a gastronomia local e conhecer o centro.',es:'Mercado histórico para probar comida local y recorrer el centro.'}, source:'https://visitefloripa.com.br/o-que-ver/mercado-publico/' },
    { name:'Fortaleza de São José da Ponta Grossa', location:'Praia do Forte · Florianópolis', type:'Fortress & views', detail:{en:'An eighteenth-century coastal fortress open to visitors; check admission details.',pt:'Fortaleza costeira do século XVIII aberta à visitação; confira ingressos.',es:'Fortaleza costera del siglo XVIII abierta a visitas; consulta las entradas.'}, source:'https://fortalezas.ufsc.br/fortaleza-ponta-grossa/guia-fortaleza-de-sao-jose-da-ponta-grossa/' },
  ],
}

