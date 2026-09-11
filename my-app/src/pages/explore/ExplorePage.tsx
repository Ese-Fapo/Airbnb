import { useState } from "react";
import { Clock, Coffee, MapPin, ShoppingBag, ShoppingCart, Star, Utensils } from "lucide-react";

import { PageLayout } from "../../components/PageLayout";
import { Card, IconBox, NearbyRow } from "../../components/ui";
import { images } from "../../data/images";
import type { PageProps } from "../../types";

type NearbyCategory = "restaurants" | "cafes" | "attractions" | "shopping" | "groceries";
type MapCopy = {
  mapTitle: string;
  openMap: string;
  localTip: string;
  localTipText: string;
};

const propertyAddress = "R. Honoria Virgilina Machado 196 - Real Parque, Sao Jose - SC";

const mapCopy: Record<PageProps["language"], MapCopy> = {
  en: {
    mapTitle: "Map nearby",
    openMap: "Open map",
    localTip: "Local tip",
    localTipText:
      "These are placeholder recommendations for now. Replace them with your favorite verified places whenever you are ready.",
  },
  pt: {
    mapTitle: "Mapa proximo",
    openMap: "Abrir mapa",
    localTip: "Dica local",
    localTipText:
      "Estas recomendacoes sao temporarias por enquanto. Substitua pelos seus lugares favoritos verificados quando quiser.",
  },
  es: {
    mapTitle: "Mapa cercano",
    openMap: "Abrir mapa",
    localTip: "Consejo local",
    localTipText:
      "Estas recomendaciones son temporales por ahora. Reemplazalas con tus lugares favoritos verificados cuando quieras.",
  },
};

function getMapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

const nearbyPlaces: Record<
  NearbyCategory,
  Array<{
    name: string;
    distance: string;
    note: string;
    hours: string;
    mapUrl?: string;
  }>
> = {
  restaurants: [
    {
      name: "Restaurante Ipiranga",
      distance: "8 min walk",
      note: "Casual local spot for lunch plates, grilled meats, and simple family lunch.",
      hours: "Lunch ",
      mapUrl: "https://maps.app.goo.gl/AGnr9Wbjj4BJXrtd9",
    },
    {
      name: "Canto de lanche",
      distance: "1 min walk",
      note: "light Dinner oppsite the house.",
      hours: "Dinner friendly",
    },
    {
      name: "Sabor de Bairro",
      distance: "4 min walk",
      note: "Good option for a quick everyday meal without needing a car.",
      hours: "Best at lunchtime",
    },
  ],
  cafes: [
    {
      name: "Padaria e Confeitaria Santo Antonio",
      distance: "1 min walk",
      note: "Fresh bread, coffee, pastries, and breakfast basics.",
      hours: "All Day",
      mapUrl: "https://maps.app.goo.gl/DhcvXVjBsW4HYSkt6",
    },
    {
      name: "Cafe do Parque",
      distance: "8 min walk",
      note: "Quiet place for espresso, a snack, or a short laptop session.",
      hours: "Daytime",
    },
    {
      name: "Doce Esquina",
      distance: "10 min walk",
      note: "Desserts, cakes, and a relaxed afternoon coffee stop.",
      hours: "Afternoon",
    },
  ],
  attractions: [
    {
      name: "Real Parque Walk",
      distance: "3 min walk",
      note: "Take a simple neighborhood stroll to get familiar with shops and services.",
      hours: "Anytime",
    },
    {
      name: "Beira-Mar de Sao Jose",
      distance: "15 min drive",
      note: "Waterfront area for walking, views, and an easy evening outing.",
      hours: "Late afternoon",
    },
    {
      name: "Centro Historico de Sao Jose",
      distance: "18 min drive",
      note: "Historic streets, small restaurants, and a pleasant cultural stop.",
      hours: "Daytime",
    },
  ],
  shopping: [
    {
      name: "Shopping Itaguacu",
      distance: "12 min drive",
      note: "Convenient mall for clothes, pharmacy items, meals, and errands.",
      hours: "Daily",
    },
    {
      name: "Kobrasol Shops",
      distance: "14 min drive",
      note: "Busy commercial area with stores, banks, salons, and services.",
      hours: "Business hours",
    },
    {
      name: "Local Convenience Stores",
      distance: "5-10 min walk",
      note: "Good for quick basics, drinks, and forgotten travel items.",
      hours: "Varies",
    },
  ],
  groceries: [
    {
      name: "Mercado Real",
      distance: "5 min walk",
      note: "Closest option for basic groceries, drinks, snacks, and household items.",
      hours: "Daily",
    },
    {
      name: "Farmacia e Mercado Popular",
      distance: "7 min walk",
      note: "Useful for personal care items, medicine basics, and small purchases.",
      hours: "Daytime and evening",
    },
    {
      name: "Supermercado Familiar",
      distance: "10 min walk",
      note: "Better for a fuller grocery run if you plan to cook.",
      hours: "Daily",
    },
  ],
};

export function ExplorePage({ language, setLanguage, t, navigate }: PageProps) {
  const [selectedCategory, setSelectedCategory] = useState<NearbyCategory | null>(null);
  const categories: Array<{
    key: NearbyCategory;
    icon: React.ReactNode;
    title: string;
    description: string;
  }> = [
    { key: "restaurants", icon: <Utensils />, title: t.restaurants, description: t.eat },
    { key: "cafes", icon: <Coffee />, title: t.cafes, description: t.coffeeSpots },
    { key: "attractions", icon: <Star />, title: t.attractions, description: t.thingsToDo },
    { key: "shopping", icon: <ShoppingBag />, title: t.shopping, description: t.nearbyShopping },
    { key: "groceries", icon: <ShoppingCart />, title: t.groceries, description: t.supermarkets },
  ];

  const selected = categories.find((category) => category.key === selectedCategory);
  const copy = mapCopy[language];

  if (selectedCategory && selected) {
    const categoryMapQuery = `${selected.title} near ${propertyAddress}`;

    return (
      <PageLayout
        title={selected.title}
        language={language}
        setLanguage={setLanguage}
        t={t}
        navigate={navigate}
        onBack={() => setSelectedCategory(null)}
      >
        <img src={images.exterior} alt={selected.title} className="h-[11.875rem] w-full rounded-lg object-cover sm:h-[205px]" />

        <div>
          <p className="text-sm text-gray-500">{t.goodPlaces}</p>
          <h2 className="mt-1 text-xl font-bold">{selected.description}</h2>
        </div>

        <section className="rounded-lg border border-[#e5e7df] bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <IconBox>
                <MapPin />
              </IconBox>
              <div>
                <h3 className="text-sm font-semibold">{copy.mapTitle}</h3>
                <p className="mt-1 text-xs text-gray-500">{propertyAddress}</p>
              </div>
            </div>
            <button
              onClick={() => window.open(getMapsSearchUrl(categoryMapQuery), "_blank")}
              className="flex w-full shrink-0 items-center justify-center rounded-lg bg-[#fff0f3] px-3 py-2 text-xs font-semibold text-[#ff385c] transition hover:bg-[#ffe1e8] sm:w-auto"
            >
              {copy.openMap}
            </button>
          </div>
        </section>

        <div className="space-y-3">
          {nearbyPlaces[selectedCategory].map((place) => (
            <Card key={place.name}>
              <div className="flex min-w-0 gap-3 sm:gap-4">
                <IconBox>{selected.icon}</IconBox>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold">{place.name}</h3>
                  <p className="mt-2 text-sm leading-5 text-gray-600">{place.note}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-lg bg-[#ecf3f2] px-3 py-1 text-xs font-semibold text-[#123c3c]">
                      <MapPin size={13} />
                      {place.distance}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-lg bg-[#fff0f3] px-3 py-1 text-xs font-semibold text-[#ff385c]">
                      <Clock size={13} />
                      {place.hours}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      window.open(place.mapUrl ?? getMapsSearchUrl(`${place.name} ${propertyAddress}`), "_blank")
                    }
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#ff385c] px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#e92f51] sm:w-auto"
                  >
                    <MapPin size={14} />
                    {copy.openMap}
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="rounded-lg border border-[#dfe4dd] bg-[#ecf3f2] p-5">
          <h3 className="font-semibold">{copy.localTip}</h3>
          <p className="mt-1 text-sm leading-5 text-[#5f6b65]">
            {copy.localTipText}
          </p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={t.exploreNearby} language={language} setLanguage={setLanguage} t={t} navigate={navigate}>
      <img src={images.exterior} alt={t.backyard} className="h-[11.875rem] w-full rounded-lg object-cover sm:h-[205px]" />

      <div>
        <p className="text-sm text-gray-500">{t.localFavorites}</p>
        <h2 className="mt-1 text-xl font-bold">{t.goodPlaces}</h2>
      </div>

      {categories.map((category) => (
        <NearbyRow
          key={category.key}
          icon={category.icon}
          title={category.title}
          description={category.description}
          onClick={() => setSelectedCategory(category.key)}
        />
      ))}
    </PageLayout>
  );
}
