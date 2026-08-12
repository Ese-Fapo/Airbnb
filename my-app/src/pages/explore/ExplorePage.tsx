import { Coffee, ShoppingBag, ShoppingCart, Star, Utensils } from "lucide-react";

import { PageLayout } from "../../components/PageLayout";
import { NearbyRow } from "../../components/ui";
import { images } from "../../data/images";
import type { PageProps } from "../../types";

export function ExplorePage({ language, setLanguage, t, navigate }: PageProps) {
  return (
    <PageLayout title={t.exploreNearby} language={language} setLanguage={setLanguage} t={t} navigate={navigate}>
      <img src={images.exterior} alt={t.backyard} className="h-[11.875rem] w-full rounded-lg object-cover" />

      <div>
        <p className="text-sm text-gray-500">{t.localFavorites}</p>
        <h2 className="mt-1 text-xl font-bold">{t.goodPlaces}</h2>
      </div>

      <NearbyRow icon={<Utensils />} title={t.restaurants} description={t.eat} />
      <NearbyRow icon={<Coffee />} title={t.cafes} description={t.coffeeSpots} />
      <NearbyRow icon={<Star />} title={t.attractions} description={t.thingsToDo} />
      <NearbyRow icon={<ShoppingBag />} title={t.shopping} description={t.nearbyShopping} />
      <NearbyRow icon={<ShoppingCart />} title={t.groceries} description={t.supermarkets} />
    </PageLayout>
  );
}
