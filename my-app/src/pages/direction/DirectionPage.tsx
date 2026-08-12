import { Copy, MapPin, Navigation, Phone } from "lucide-react";

import { images } from "../../data/images";
import type { PageProps } from "../../types";
import { PageLayout } from "../../components/PageLayout";
import { Card, IconBox } from "../../components/ui";

export function DirectionPage({ language, setLanguage, t, navigate }: PageProps) {
  const address = "R. Honoria Virgilina Machado 196 - Real Parque, Sao Jose - SC, 88113-478";
  const phone = "+55 48 99046-843";

  return (
    <PageLayout title={t.gettingHere} language={language} setLanguage={setLanguage} t={t} navigate={navigate}>
      <img src={images.exterior} alt={t.property} className="h-[205px] w-full rounded-lg object-cover" />

      <Card>
        <div className="flex gap-4">
          <IconBox>
            <MapPin />
          </IconBox>
          <div className="flex-1">
            <h3 className="font-semibold">{t.address}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">{address}</p>
          </div>
          <button onClick={() => navigator.clipboard?.writeText(address)} className="text-gray-400">
            <Copy size={19} />
          </button>
        </div>
      </Card>

      <Card>
        <div className="flex gap-4">
          <IconBox>
            <Navigation />
          </IconBox>
          <div>
            <h3 className="font-semibold">{t.directions}</h3>
            <p className="mt-3 text-sm text-gray-500">{t.fromAirport}</p>
            <ol className="mt-3 space-y-2 text-sm leading-5 text-gray-600">
              <li><b>1.</b> {t.directionStep1}</li>
              <li><b>2.</b> {t.directionStep2}</li>
              <li><b>3.</b> {t.directionStep3}</li>
              <li><b>4.</b> {t.directionStep4}</li>
              <li><b>5.</b> {t.directionStep5}</li>
            </ol>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
              "_blank",
            )
          }
          className="flex items-center justify-center gap-2 rounded-lg bg-[#ff385c] py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e92f51]"
        >
          <Navigation size={17} />
          {t.openMaps}
        </button>

        <button
          onClick={() => window.open(`tel:${phone}`, "_blank")}
          className="flex items-center justify-center gap-2 rounded-lg bg-[#ecf3f2] py-4 text-sm font-semibold text-[#123c3c] transition hover:bg-[#dcebe8]"
        >
          <Phone size={17} />
          {t.callHost}
        </button>
      </div>

      <div className="relative h-[11.875rem] overflow-hidden rounded-lg bg-[#dfe8e6]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-[20%] top-0 h-full w-3 rotate-25 bg-white" />
          <div className="absolute left-[55%] top-0 h-full w-4 -rotate-35 bg-white" />
          <div className="absolute top-[40%] h-3 w-full rotate-5 bg-white" />
        </div>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <MapPin size={40} fill="#ff385c" className="text-[#ff385c]" />
          <span className="rounded-lg bg-white px-3 py-1 text-xs font-semibold shadow">{t.yourHome}</span>
        </div>
      </div>
    </PageLayout>
  );
}
