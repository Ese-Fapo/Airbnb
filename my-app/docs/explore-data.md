# Explore recommendations

Reviewed 9 November 2026. The guide contains 46 places. Names, descriptions and category assignments are in `src/data/places.ts`; distance evidence is in `src/data/exploreDistances.ts`; sorting and cost classification are in `src/data/explorePlanning.ts`.

The host reported Farma + Popular and São Carlos closed, so both were removed. Farmácia do Cesar replaces them at Rua José Antônio Pereira, 2210, sala 01, Ipiranga, as listed by [Solutudo](https://www.solutudo.com.br/empresas/sc/s-jose/farmacias/farmacia-do-cesar-ltda-28001053). Its map pin comes from the directions link on [FarmáciAQUI](https://farmaciaqui.net/farmacia-do-cesar-sao-jose-sc-9894); OSRM returned 252.5 m by road, displayed as approximately 0.3 km. Published phone numbers differ, so no phone or fixed opening hours were added.

## Distance estimates

The guesthouse map pin (-48.6397281, -27.5691299) and the bakery pin/address came from the existing host-provided [Google Maps route](https://maps.app.goo.gl/DhcvXVjBsW4HYSkt6). Other locations were searched with Photon/OpenStreetMap and reviewed against their names, city and street. Each distance entry retains its coordinate source and whether it refers to a place or a street. Incorrect fuzzy matches were discarded; Jurerê uses a beach access point, and the public market was checked against its Centro address.

The OSRM public routing service calculated road-network distances from that origin. These are static estimates rounded to 0.1 km, not live traffic or guaranteed door-to-door distances. Street centroids, beach access, entrance location, one-way roads and map changes can affect estimates and ordering, particularly among nearby shops. Very small rounded distances display as less than 100 m. Tempero da JU is shown first as “Across the street”, based on the host's information. Parceiros is identified as being on the same street.

Every category and the combined list sort numerically by this estimate; unknown distances sort last. Filters preserve distance order. Recheck the origin, destination coordinates and routes when addresses change. Never use zero as a placeholder for an unknown distance.

## Cost labels

- **Free entry:** public beaches, public outdoor landmarks/parks, the public market building and ordinary theatre visits. Parking, food, shopping and optional activities are excluded.
- **Paid · purchases:** food, convenience stores, supermarkets and pharmacies. This describes consumption/purchases, not an entrance ticket.
- **Paid · ticket:** Beto Carrero World, Água Show Park and Fortaleza de São José da Ponta Grossa. Do not hardcode admission prices; discounts, exemptions and dates vary.

The [municipal botanical garden page](https://saojose.sc.gov.br/jardim-botanico-de-sao-jose/) confirms free admission. The [municipal theatre page](https://saojose.sc.gov.br/servico-theatro-adolpho-mello/) confirms free visits by appointment; performances may have separate admission. [UFSC](https://fortalezas.ufsc.br/horario-de-funcionamento-das-fortalezas/) confirms a fortress admission fee, with possible exemptions. [Água Show Park](https://www.aguashowpark.com.br/informa%C3%A7%C3%B5es-do-parque) and [Beto Carrero World](https://www.betocarrero.com.br/) sell dated tickets. Individual cards link to the place's source for current information.

Public map data: © OpenStreetMap contributors, [ODbL](https://www.openstreetmap.org/copyright). Routing: [OSRM](https://project-osrm.org/). No external geocoding or routing requests run in the guest's browser.
