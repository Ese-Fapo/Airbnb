import { NearbySection } from "../../NearbySection";
import { PageLayout } from "../../components/PageLayout";
import type { PageProps } from "../../types";

export function ExplorePage({ language, setLanguage, t, navigate }: PageProps) {
  return (
    <PageLayout title={t.exploreNearby} language={language} setLanguage={setLanguage} t={t} navigate={navigate}>
      <NearbySection language={language} />
    </PageLayout>
  );
}
