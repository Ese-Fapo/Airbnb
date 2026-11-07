import { Ban, CircleDollarSign, Flower2, GlassWater, Heart, Moon, ShieldAlert, ShieldCheck, Sparkles } from "lucide-react";

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
      <RuleRow icon={<ShieldAlert size={20} />} title={t.noStealing} description={t.noStealingDesc} />
      <RuleRow icon={<GlassWater size={20} />} title={t.noBreakingGlasses} description={t.noBreakingGlassesDesc} />
      <RuleRow icon={<Flower2 size={20} />} title={t.gardenRules} description={t.gardenRulesDesc} />
      <RuleRow icon={<CircleDollarSign size={20} />} title={t.brokenItems} description={t.brokenItemsDesc} />

      <div className="rounded-lg border border-[#dfe4dd] bg-[#ecf3f2] p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold">{t.thankRespect}</h3>
          </div>
          <Heart className="text-[#c91e40]" fill="#ff385c" size={25} />
        </div>
      </div>
    </PageLayout>
  );
}
