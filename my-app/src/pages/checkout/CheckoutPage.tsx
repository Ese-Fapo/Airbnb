import { Heart } from "lucide-react";

import { PageLayout } from "../../components/PageLayout";
import { CheckRow } from "../../components/ui";
import { images } from "../../data/images";
import type { PageProps } from "../../types";

export function CheckoutPage({ language, setLanguage, t, navigate }: PageProps) {
  return (
    <PageLayout title={t.checkout} language={language} setLanguage={setLanguage} t={t} navigate={navigate}>
      <img src={images.bedroom} alt={t.bedroom} className="h-[205px] w-full rounded-lg object-cover" />

      <div>
        <p className="text-sm text-gray-500">{t.checkoutTime}</p>
        <h2 className="mt-1 text-2xl font-bold">11:00 AM</h2>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-bold">{t.pleaseLeave}</h3>
        <div className="space-y-3">
          <CheckRow text={t.lockDoors} />
          <CheckRow text={t.lightsAc} />
          <CheckRow text={t.trashOut} />
          <CheckRow text={t.keysLockbox} />
        </div>
      </div>

      <div className="rounded-lg border border-[#dfe4dd] bg-[#ecf3f2] p-5">
        <h3 className="font-semibold">{t.thankStay}</h3>
        <p className="mt-1 text-sm text-[#5f6b65]">{t.wonderfulVisit}</p>
        <Heart className="ml-auto mt-2 text-[#ff385c]" fill="#ff385c" size={24} />
      </div>
    </PageLayout>
  );
}
