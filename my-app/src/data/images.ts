import type { Language } from "../types";

const photo = (name: string) => `/guest-images/${name}.webp`;

export const images = {
  hero: photo("main.hero"),
  living: photo("room-double-single-bed"),
  stayBedroom: photo("bedroom-queenbed"),
  bedroom: photo("bedroom-queenbed"),
  exterior: photo("backyard"),
  wifi: photo("eating-area"),
  entrance: photo("entrancedoor"),
  passage: photo("passage"),
  passageSide: photo("passageside"),
  kitchen: photo("kitchen"),
  bathroom: photo("bathroom"),
  dining: photo("dinning"),
  remote: photo("remote-control"),
  grill: photo("grill"),
};

export type PropertyPhoto = {
  src: string;
  group: "arrival" | "bedrooms" | "inside" | "outdoors";
  title: Record<Language, string>;
};

export const propertyPhotos: PropertyPhoto[] = [
  { src: images.hero, group: "arrival", title: { en: "Street view of the property", pt: "Fachada vista da rua", es: "Fachada desde la calle" } },
  { src: images.passage, group: "arrival", title: { en: "Passage to the apartment", pt: "Passagem para o apartamento", es: "Pasaje al apartamento" } },
  { src: images.passageSide, group: "arrival", title: { en: "Side passage", pt: "Passagem lateral", es: "Pasaje lateral" } },
  { src: images.entrance, group: "arrival", title: { en: "Private entrance", pt: "Entrada privativa", es: "Entrada privada" } },
  { src: images.living, group: "bedrooms", title: { en: "Room with two single beds", pt: "Quarto com duas camas de solteiro", es: "Habitación con dos camas individuales" } },
  { src: photo("Tv-room-double-bed"), group: "bedrooms", title: { en: "Twin room and TV", pt: "Quarto de solteiro com TV", es: "Habitación individual con TV" } },
  { src: images.stayBedroom, group: "bedrooms", title: { en: "Queen bedroom", pt: "Quarto com cama queen", es: "Habitación con cama queen" } },
  { src: photo("tv-room-queen"), group: "bedrooms", title: { en: "TV and workspace", pt: "TV e espaço de trabalho", es: "TV y espacio de trabajo" } },
  { src: photo("room-pix"), group: "bedrooms", title: { en: "Bedroom overview", pt: "Vista do quarto", es: "Vista de la habitación" } },
  { src: photo("bedroom2"), group: "bedrooms", title: { en: "Bedroom detail", pt: "Detalhe do quarto", es: "Detalle de la habitación" } },
  { src: images.kitchen, group: "inside", title: { en: "Kitchen", pt: "Cozinha", es: "Cocina" } },
  { src: images.dining, group: "inside", title: { en: "Dining area", pt: "Área de jantar", es: "Comedor" } },
  { src: images.wifi, group: "inside", title: { en: "Dining table and welcome guide", pt: "Mesa e guia de boas-vindas", es: "Mesa y guía de bienvenida" } },
  { src: images.bathroom, group: "inside", title: { en: "Bathroom", pt: "Banheiro", es: "Baño" } },
  { src: photo("toilet-door"), group: "inside", title: { en: "Bathroom entrance", pt: "Entrada do banheiro", es: "Entrada del baño" } },
  { src: images.remote, group: "inside", title: { en: "Ceiling fan remote", pt: "Controle do ventilador", es: "Control del ventilador" } },
  { src: images.exterior, group: "outdoors", title: { en: "Backyard", pt: "Quintal", es: "Patio" } },
  { src: photo("outdoor"), group: "outdoors", title: { en: "Outdoor seating", pt: "Área externa para sentar", es: "Asientos exteriores" } },
  { src: photo("outdoor1"), group: "outdoors", title: { en: "Courtyard", pt: "Pátio", es: "Patio exterior" } },
  { src: photo("outdoor-sitting"), group: "outdoors", title: { en: "Outdoor sitting area", pt: "Área de estar externa", es: "Zona de estar exterior" } },
  { src: images.grill, group: "outdoors", title: { en: "Barbecue area", pt: "Área da churrasqueira", es: "Zona de parrilla" } },
  { src: photo("babeque-grill"), group: "outdoors", title: { en: "Barbecue grill", pt: "Churrasqueira", es: "Parrilla" } },
];
