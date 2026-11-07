import { useState } from "react";
import { Car, Copy, MapPin, Navigation, Phone } from "lucide-react";

import { images } from "../../data/images";
import type { PageProps } from "../../types";
import { PageLayout } from "../../components/PageLayout";
import { Card, IconBox } from "../../components/ui";
import { hostPhoneNumber } from "../../data/contact";
import { propertyAddress, propertyMapUrl } from "../../data/property";

export function DirectionPage({ language, setLanguage, t, navigate }: PageProps) {
  const address = propertyAddress;
  const [addressCopied, setAddressCopied] = useState(false);
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setAddressCopied(true);
      window.setTimeout(() => setAddressCopied(false), 1800);
    } catch {
      setAddressCopied(false);
    }
  };
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
      title: "Informações de estacionamento",
      description:
        "Não há estacionamento para hóspedes dentro da propriedade. Os hóspedes devem estacionar na rua perto do apartamento.",
      instructions: [
        "Estacione somente em vagas permitidas na rua e evite bloquear portões, garagens ou entradas.",
        "Verifique as placas próximas sobre limpeza de rua, horários restritos ou áreas exclusivas para moradores.",
        "Tranque o veículo e evite deixar objetos de valor visíveis.",
        "O bairro é tranquilo, e a maioria dos moradores estaciona na rua sem problemas.",
      ],
    },
    es: {
      title: "Información de estacionamiento",
      description:
        "No hay estacionamiento para huéspedes dentro de la propiedad. Los huéspedes deben usar estacionamiento en la calle cerca del apartamento.",
      instructions: [
        "Estaciona solo en espacios permitidos en la calle y evita bloquear portones, garajes o entradas.",
        "Revisa las señales cercanas por reglas de limpieza de calle, horarios restringidos o areas solo para residentes.",
        "Cierra tu vehículo con llave y evita dejar objetos de valor visibles.",
        "El barrio es tranquilo, y la mayoría de los residentes estaciona en la calle sin problemas.",
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
      <img src={images.hero} alt={t.property} className="h-[11.875rem] w-full rounded-lg object-cover sm:h-[205px]" />

      <Card>
        <div className="flex min-w-0 gap-3 sm:gap-4">
          <IconBox>
            <MapPin />
          </IconBox>
          <div className="flex-1">
            <h3 className="font-semibold">{t.address}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">{address}</p>
          </div>
          <button onClick={copyAddress} aria-label={addressCopied ? t.copied : t.copy} className="flex h-11 w-11 shrink-0 items-center justify-center text-gray-600">
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
        <a
          href={propertyMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 items-center justify-center gap-2 rounded-lg bg-[#d92148] px-3 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c91e40]"
        >
          <Navigation size={17} />
          {t.openMaps}
        </a>

        <a
          href={`tel:${hostPhoneNumber.replace(/[^+\d]/g, "")}`}
          className="flex min-w-0 items-center justify-center gap-2 rounded-lg bg-[#ecf3f2] px-3 py-4 text-sm font-semibold text-[#123c3c] transition hover:bg-[#dcebe8]"
        >
          <Phone size={17} />
          {t.callHost}
        </a>
      </div>

      <section className="space-y-3">
        <div>
          <h2 className="text-lg font-bold">
            {language === "pt" ? "Reconheça a entrada pelas fotos" : language === "es" ? "Reconoce la entrada en las fotos" : "Recognize the entrance in photos"}
          </h2>
          <p className="mt-1 text-sm leading-5 text-[#5f6b65]">
            {language === "pt" ? "Estas imagens mostram a fachada, a passagem e a entrada privativa da hospedagem." : language === "es" ? "Estas imágenes muestran la fachada, el pasaje y la entrada privada." : "These photos show the street frontage, passage and private apartment entrance."}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { src: images.hero, en: "Street frontage", pt: "Fachada", es: "Fachada" },
            { src: images.passage, en: "Passage", pt: "Passagem", es: "Pasaje" },
            { src: images.passageSide, en: "Side passage", pt: "Passagem lateral", es: "Pasaje lateral" },
            { src: images.entrance, en: "Private entrance", pt: "Entrada privativa", es: "Entrada privada" },
          ].map((view) => (
            <figure key={view.src} className="overflow-hidden rounded-lg border border-[#e5e7df] bg-white shadow-sm">
              <img src={view.src} alt={view[language]} loading="lazy" className="h-36 w-full object-cover sm:h-40" />
              <figcaption className="p-3 text-xs font-semibold">{view[language]}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
