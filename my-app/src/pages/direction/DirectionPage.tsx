import { Car, Copy, MapPin, Navigation, Phone } from "lucide-react";

import { images } from "../../data/images";
import type { PageProps } from "../../types";
import { PageLayout } from "../../components/PageLayout";
import { Card, IconBox } from "../../components/ui";

export function DirectionPage({ language, setLanguage, t, navigate }: PageProps) {
  const address = "R. Honoria Virgilina Machado 196 - Real Parque, Sao Jose - SC, 88113-478";
  const phone = "+55 48 99046-843";
  const parkingCopy = {
    en: {
      title: "Parking Information",
      description:
        "There is no guest parking within the premises. Guests should use street parking near the apartment.",
      instructions: [
        "Park only in permitted street spaces and avoid blocking gates, garages, or driveways.",
        "Lock your vehicle and avoid leaving valuables visible inside.",
        "The neighborhood is calm, and most residents park on the street without problems.",
      ],
    },
    pt: {
      title: "Informacoes de estacionamento",
      description:
        "Nao ha estacionamento para hospedes dentro da propriedade. Os hospedes devem estacionar na rua perto do apartamento.",
      instructions: [
        "Estacione somente em vagas permitidas na rua e evite bloquear portoes, garagens ou entradas.",
        "Verifique as placas proximas sobre limpeza de rua, horarios restritos ou areas exclusivas para moradores.",
        "Tranque o veiculo e evite deixar objetos de valor visiveis.",
        "O bairro e tranquilo, e a maioria dos moradores estaciona na rua sem problemas.",
      ],
    },
    es: {
      title: "Informacion de estacionamiento",
      description:
        "No hay estacionamiento para huespedes dentro de la propiedad. Los huespedes deben usar estacionamiento en la calle cerca del apartamento.",
      instructions: [
        "Estaciona solo en espacios permitidos en la calle y evita bloquear portones, garajes o entradas.",
        "Revisa las senales cercanas por reglas de limpieza de calle, horarios restringidos o areas solo para residentes.",
        "Cierra tu vehiculo con llave y evita dejar objetos de valor visibles.",
        "El barrio es tranquilo, y la mayoria de los residentes estaciona en la calle sin problemas.",
      ],
    },
  };
  const parking = parkingCopy[language];
  const directionSteps = [
    t.directionStep1,
    t.directionStep2,
    t.directionStep3,
    t.directionStep4,
    t.directionStep5,
  ].filter(Boolean);

  return (
    <PageLayout title={t.gettingHere} language={language} setLanguage={setLanguage} t={t} navigate={navigate}>
      <img src={images.exterior} alt={t.property} className="h-[11.875rem] w-full rounded-lg object-cover sm:h-[205px]" />

      <Card>
        <div className="flex min-w-0 gap-3 sm:gap-4">
          <IconBox>
            <MapPin />
          </IconBox>
          <div className="flex-1">
            <h3 className="font-semibold">{t.address}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">{address}</p>
          </div>
          <button onClick={() => navigator.clipboard?.writeText(address)} className="shrink-0 text-gray-400">
            <Copy size={19} />
          </button>
        </div>
      </Card>

      <Card>
        <div className="flex min-w-0 gap-3 sm:gap-4">
          <IconBox>
            <Navigation />
          </IconBox>
          <div className="min-w-0">
            <h3 className="font-semibold">{t.directions}</h3>
            <p className="mt-3 text-sm text-gray-500">{t.fromAirport}</p>
            <ol className="mt-3 space-y-2 text-sm leading-5 text-gray-600">
              {directionSteps.map((step, index) => (
                <li key={step}>
                  <b>{index + 1}.</b> {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex min-w-0 gap-3 sm:gap-4">
          <IconBox>
            <Car />
          </IconBox>
          <div className="min-w-0">
            <h3 className="font-semibold">{parking.title}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              {parking.description}
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-5 text-gray-600">
              {parking.instructions.map((instruction) => (
                <li key={instruction}>{instruction}</li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
              "_blank",
            )
          }
          className="flex min-w-0 items-center justify-center gap-2 rounded-lg bg-[#ff385c] px-3 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e92f51]"
        >
          <Navigation size={17} />
          {t.openMaps}
        </button>

        <button
          onClick={() => window.open(`tel:${phone}`, "_blank")}
          className="flex min-w-0 items-center justify-center gap-2 rounded-lg bg-[#ecf3f2] px-3 py-4 text-sm font-semibold text-[#123c3c] transition hover:bg-[#dcebe8]"
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
