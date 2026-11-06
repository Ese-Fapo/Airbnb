import { Ban, Heart, Moon, ShieldCheck, Sparkles } from "lucide-react";

import { PageLayout } from "../../components/PageLayout";
import { RuleRow } from "../../components/ui";
import { images } from "../../data/images";
import type { PageProps } from "../../types";

export function HouseRulesPage({ language, setLanguage, t, navigate }: PageProps) {
  return (
    <PageLayout title={t.houseRules} language={language} setLanguage={setLanguage} t={t} navigate={navigate}>
      <img src={images.exterior} alt={t.backyard} className="h-[11.875rem] w-full rounded-lg object-cover sm:h-[205px]" />

      <RuleRow icon={<Ban size={20} />} title={t.noSmoking} description={t.smokeOutside} />
      <RuleRow icon={<ShieldCheck size={20} />} title={t.noParties} description={t.quietHome} />
      <RuleRow icon={<Moon size={20} />} title={t.quietHours} description={t.quietTime} />
      <RuleRow icon={<Heart size={20} />} title={t.pets} description={t.noPets} />
      <RuleRow icon={<Sparkles size={20} />} title={t.respect} description={t.respectDesc} />

      <div className="rounded-lg border border-[#dfe4dd] bg-[#ecf3f2] p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold">{t.thankRespect}</h3>
          </div>
          <Heart className="text-[#ff385c]" fill="#ff385c" size={25} />
        </div>
      </div>
    </PageLayout>
  );
}
