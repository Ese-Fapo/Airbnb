import { useState } from "react";

import {
  Car,
  Check,
  CheckCircle2,
  Copy,
  DoorOpen,
  FileText,
  Home,
  Images,
  KeyRound,
  Leaf,
  Lightbulb,
  MapPin,
  Menu,
  Phone,
  Recycle,
  ShieldAlert,
  Sparkles,
  Wifi,
} from "lucide-react";

import { BottomNavigation } from "./components/BottomNavigation";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { MobileMenu } from "./components/MobileMenu";
import { PageLayout } from "./components/PageLayout";
import { Card, GuideRow, PropertyCard, QuickAction } from "./components/ui";
import { images } from "./data/images";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { ContactButton } from "./pages/contact/ContactButton";
import { DirectionPage } from "./pages/direction/DirectionPage";
import { ExplorePage } from "./pages/explore/ExplorePage";
import { HouseRulesPage } from "./pages/house-rules/HouseRulesPage";
import type { Language, Page, PageProps } from "./types";

const translations: Record<Language, Record<string, string>> = {
  en: {
    language: "Language",
    contactHost: "Contact host",
    guestGuide: "Guest guide",
    welcomeTo: "Welcome to",
    heroTitleLine1: "Real Parque",
    heroTitleLine2: "Guest Home",
    heroDescription:
      "Arrival details, house essentials, WiFi, checkout steps, and local favorites in one simple place.",
    fastCheckIn: "Fast check-in",
    localTips: "Local tips",
    gettingHere: "Getting Here",
    directions: "Directions",
    houseGuide: "House Guide",
    amenities: "Amenities",
    houseRules: "House Rules",
    stayNotes: "Stay notes",
    wifi: "WiFi",
    network: "Network",
    exploreNearby: "Explore Nearby",
    localPicks: "Local picks",
    checkout: "Check-out",
    beforeLeaving: "Before leaving",
    yourStay: "Your stay",
    makeHome: "Make yourself at home",
    livingRoom: "Room 1",
    bedroom: "Bedroom",
    everythingHere: "Everything you need is here",
    everythingHereText:
      "Start with the arrival details, then use the guide for house rules, WiFi, and nearby suggestions.",
    property: "Property",
    address: "Address",
    fromAirport: "From Roderveria take a bus (Barrio Ipiranga) to the Real Parque neighborhood, then walk to the house",
    directionStep1: "Call an uber or taxi to the house (best option)",
    directionStep2: "Use your GPS to navigate to the house",
    directionStep3: "call the host if you have any trouble finding the house",
   
    openMaps: "Open in Maps",
    callHost: "Call Host",
    yourHome: "Your Home",
    livingRoomAlt: "Room 1",
    beforeArrive: "Before You Arrive",
    allNeed: "All you need to know",
    checkInInstructions: "Check-in Instructions",
    selfCheckIn: "Easy self check-in steps",
    included: "What's included",
    howThingsWork: "How Things Work",
    devices: "Devices & appliances",
    trash: "Trash & Recycling",
    dispose: "How to dispose",
    emergency: "Emergency Info",
    contacts: "Important contacts",
    enjoyStay: "Enjoy your stay",
    ready: "Everything you need is ready for you.",
    noSmoking: "No Smoking",
    smokeOutside: "Please smoke outside.",
    noParties: "No Parties",
    quietHome: "We love our quiet home.",
    quietHours: "Quiet Hours",
    quietTime: "10 PM - 8 AM",
    pets: "Pets",
    noPets: "No pets allowed.",
    respect: "Respect",
    respectDesc: "Treat our home like your own.",
    thankRespect: "Thank you for respecting our home and neighbors!",
    password: "Password",
    copyPassword: "Copy password",
    passwordCopied: "Password copied",
    copied: "Copied",
    copy: "Copy",
    wifiRouter: "WiFi router",
    trouble: "Having trouble?",
    contactHelp: "Contact us if you need help.",
    backyard: "Backyard",
    localFavorites: "Local favorites & things to do",
    goodPlaces: "A few good places nearby",
    restaurants: "Restaurants",
    eat: "Great places to eat",
    cafes: "Cafes & Coffee",
    coffeeSpots: "Best local spots",
    attractions: "Attractions",
    thingsToDo: "Things to see & do",
    shopping: "Shopping",
    nearbyShopping: "Nearby shopping",
    groceries: "Groceries",
    supermarkets: "Supermarkets nearby",
    checkoutTime: "Check-out Time",
    pleaseLeave: "Please Before You Leave",
    lockDoors: "Lock all doors and windows",
    lightsAc: "Turn off lights and ceiling fans",
    trashOut: "Take out the trash",
    keysLockbox: "Leave the keys in the lockbox",
    thankStay: "Thank you for staying with us",
    wonderfulVisit: "We hope you had a wonderful visit.",
    home: "Home",
    guide: "Guide",
    explore: "Explore",
    contact: "Contact",
  },
  pt: {
    language: "Idioma",
    contactHost: "Falar com anfitrião",
    guestGuide: "Guia do hóspede",
    welcomeTo: "Bem-vindo a",
    heroTitleLine1: "Real Parque",
    heroTitleLine2: "Casa de Hóspedes",
    heroDescription:
      "Detalhes de chegada, itens essenciais da casa, WiFi, saída e favoritos locais em um só lugar.",
    fastCheckIn: "Check-in rápido",
    localTips: "Dicas locais",
    gettingHere: "Como Chegar",
    directions: "Rotas",
    houseGuide: "Guia da Casa",
    amenities: "Comodidades",
    houseRules: "Regras da Casa",
    stayNotes: "Notas da estadia",
    wifi: "WiFi",
    network: "Rede",
    exploreNearby: "Explore por Perto",
    localPicks: "Dicas locais",
    checkout: "Check-out",
    beforeLeaving: "Antes de sair",
    yourStay: "Sua estadia",
    makeHome: "Sinta-se em casa",
    livingRoom: "Quatro 1",
    bedroom: "Quatro 2",
    everythingHere: "Tudo que você precisa está aqui",
    everythingHereText:
      "Comece pelos detalhes de chegada e use o guia para regras da casa, WiFi e sugestões próximas.",
    property: "Propriedade",
    address: "Endereço",
    fromAirport: "A partir do Aeroporto Internacional de Palm Beach:",
    directionStep1: "Siga para oeste pela Airport Blvd",
    directionStep2: "Entre na I-95 South",
    directionStep3: "Pegue a saída 75 em direção a Palm Beach",
    directionStep4: "Vire à direita na Willow Lane",
    directionStep5: "Siga pela entrada até o acesso privativo",
    openMaps: "Abrir no Maps",
    callHost: "Ligar para anfitrião",
    yourHome: "Sua Casa",
    livingRoomAlt: "Quatro ",
    beforeArrive: "Antes de Chegar",
    allNeed: "Tudo que você precisa saber",
    checkInInstructions: "Instruções de Check-in",
    selfCheckIn: "Passos simples para self check-in",
    included: "O que está incluído",
    howThingsWork: "Como Tudo Funciona",
    devices: "Aparelhos e equipamentos",
    trash: "Lixo e Reciclagem",
    dispose: "Como descartar",
    emergency: "Informações de Emergência",
    contacts: "Contatos importantes",
    enjoyStay: "Aproveite sua estadia",
    ready: "Tudo está pronto para você.",
    noSmoking: "Não Fumar",
    smokeOutside: "Por favor, fume do lado de fora.",
    noParties: "Sem Festas",
    quietHome: "Valorizamos nossa casa tranquila.",
    quietHours: "Horário de Silêncio",
    quietTime: "22h - 8h",
    pets: "Animais",
    noPets: "Não são permitidos animais.",
    respect: "Respeito",
    respectDesc: "Trate nossa casa como se fosse sua.",
    thankRespect: "Obrigado por respeitar nossa casa e vizinhos!",
    password: "Senha",
    copyPassword: "Copiar senha",
    passwordCopied: "Senha copiada",
    copied: "Copiado",
    copy: "Copiar",
    wifiRouter: "Roteador WiFi",
    trouble: "Com problemas?",
    contactHelp: "Fale conosco se precisar de ajuda.",
    backyard: "Quintal",
    localFavorites: "Favoritos locais e coisas para fazer",
    goodPlaces: "Alguns bons lugares por perto",
    restaurants: "Restaurantes",
    eat: "Ótimos lugares para comer",
    cafes: "Cafés",
    coffeeSpots: "Melhores lugares locais",
    attractions: "Atrações",
    thingsToDo: "Coisas para ver e fazer",
    shopping: "Compras",
    nearbyShopping: "Compras por perto",
    groceries: "Mercados",
    supermarkets: "Supermercados por perto",
    checkoutTime: "Horário de Check-out",
    pleaseLeave: "Antes de Sair",
    lockDoors: "Tranque todas as portas e janelas",
    lightsAc: "Desligue as luzes e os ventiladores de teto",
    trashOut: "Leve o lixo para fora",
    keysLockbox: "Deixe as chaves no cofre",
    thankStay: "Obrigado por se hospedar conosco",
    wonderfulVisit: "Esperamos que tenha tido uma ótima visita.",
    home: "Início",
    guide: "Guia",
    explore: "Explorar",
    contact: "Contato",
  },
  es: {
    language: "Idioma",
    contactHost: "Contactar anfitrión",
    guestGuide: "Guía del huésped",
    welcomeTo: "Bienvenido a",
    heroTitleLine1: "Real Parque",
    heroTitleLine2: "Casa de Huéspedes",
    heroDescription:
      "Detalles de llegada, esenciales de la casa, WiFi, salida y favoritos locales en un solo lugar.",
    fastCheckIn: "Check-in rápido",
    localTips: "Consejos locales",
    gettingHere: "Cómo Llegar",
    directions: "Direcciones",
    houseGuide: "Guía de la Casa",
    amenities: "Comodidades",
    houseRules: "Reglas de la Casa",
    stayNotes: "Notas",
    wifi: "WiFi",
    network: "Red",
    exploreNearby: "Explorar Cerca",
    localPicks: "Favoritos",
    checkout: "Check-out",
    beforeLeaving: "Antes de salir",
    yourStay: "Tu estadía",
    makeHome: "Siéntete como en casa",
    livingRoom: "Dormitorio",
    bedroom: "Dormitorio",
    everythingHere: "Todo lo que necesitas está aquí",
    everythingHereText:
      "Empieza con los detalles de llegada y usa la guía para reglas de la casa, WiFi y sugerencias cercanas.",
    property: "Propiedad",
    address: "Dirección",
    fromAirport: "Desde el Aeropuerto Internacional de Palm Beach:",
    directionStep1: "Dirígete al oeste por Airport Blvd",
    directionStep2: "Incorpórate a I-95 South",
    directionStep3: "Toma la salida 75 hacia Palm Beach",
    directionStep4: "Gira a la derecha en Willow Lane",
    directionStep5: "Sigue la entrada hasta el acceso privado",
    openMaps: "Abrir en Maps",
    callHost: "Llamar anfitrión",
    yourHome: "Tu Casa",
    livingRoomAlt: "Quatro 2",
    beforeArrive: "Antes de Llegar",
    allNeed: "Todo lo que necesitas saber",
    checkInInstructions: "Instrucciones de Check-in",
    selfCheckIn: "Pasos simples de self check-in",
    included: "Qué está incluido",
    howThingsWork: "Cómo Funciona Todo",
    devices: "Dispositivos y electrodomésticos",
    trash: "Basura y Reciclaje",
    dispose: "Cómo desechar",
    emergency: "Información de Emergencia",
    contacts: "Contactos importantes",
    enjoyStay: "Disfruta tu estadía",
    ready: "Todo está listo para ti.",
    noSmoking: "No Fumar",
    smokeOutside: "Por favor, fuma afuera.",
    noParties: "Sin Fiestas",
    quietHome: "Nos encanta nuestra casa tranquila.",
    quietHours: "Horas de Silencio",
    quietTime: "10 PM - 8 AM",
    pets: "Mascotas",
    noPets: "No se permiten mascotas.",
    respect: "Respeto",
    respectDesc: "Trata nuestra casa como la tuya.",
    thankRespect: "Gracias por respetar nuestra casa y vecinos!",
    password: "Contraseña",
    copyPassword: "Copiar contraseña",
    passwordCopied: "Contraseña copiada",
    copied: "Copiado",
    copy: "Copiar",
    wifiRouter: "Router WiFi",
    trouble: "¿Tienes problemas?",
    contactHelp: "Contáctanos si necesitas ayuda.",
    backyard: "Patio",
    localFavorites: "Favoritos locales y cosas para hacer",
    goodPlaces: "Algunos buenos lugares cerca",
    restaurants: "Restaurantes",
    eat: "Buenos lugares para comer",
    cafes: "Cafés",
    coffeeSpots: "Mejores lugares locales",
    attractions: "Atracciones",
    thingsToDo: "Cosas para ver y hacer",
    shopping: "Compras",
    nearbyShopping: "Compras cercanas",
    groceries: "Supermercados",
    supermarkets: "Supermercados cercanos",
    checkoutTime: "Hora de Check-out",
    pleaseLeave: "Antes de Salir",
    lockDoors: "Cierra todas las puertas y ventanas",
    lightsAc: "Apaga las luces y los ventiladores de techo",
    trashOut: "Saca la basura",
    keysLockbox: "Deja las llaves en la caja de seguridad",
    thankStay: "Gracias por hospedarte con nosotros",
    wonderfulVisit: "Esperamos que hayas tenido una visita maravillosa.",
    home: "Inicio",
    guide: "Guía",
    explore: "Explorar",
    contact: "Contacto",
  },
};

function getDefaultLanguage(): Language {
  const storedLanguage = window.localStorage.getItem("guest-guide-language");
  if (storedLanguage === "en" || storedLanguage === "pt" || storedLanguage === "es") {
    return storedLanguage;
  }

  const deviceLanguage = window.navigator.language.toLowerCase();
  if (deviceLanguage.startsWith("pt")) return "pt";
  if (deviceLanguage.startsWith("es")) return "es";
  return "en";
}

function App() {
  const [page, setPage] = useState<Page>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>(getDefaultLanguage);
  const t = translations[language];

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    window.localStorage.setItem("guest-guide-language", newLanguage);
  };

  const navigate = (newPage: Page) => {
    setPage(newPage);
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#f7f7f2] text-[#17201c]">

      {page === "home" && (
        <HomePage
          language={language}
          setLanguage={changeLanguage}
          t={t}
          navigate={navigate}
        />
      )}

      {page === "photos" && (
        <PhotoGalleryPage
          language={language}
          setLanguage={changeLanguage}
          t={t}
          navigate={navigate}
        />
      )}

      {page === "getting-here" && (
        <DirectionPage
          language={language}
          setLanguage={changeLanguage}
          t={t}
          navigate={navigate}
        />
      )}

      {page === "guide" && (
        <HouseGuide
          language={language}
          setLanguage={changeLanguage}
          t={t}
          navigate={navigate}
        />
      )}

      {(page === "before-arrive" ||
        page === "check-in" ||
        page === "amenities" ||
        page === "how-things-work" ||
        page === "trash-recycling" ||
        page === "emergency") && (
        <GuideDetailPage
          page={page}
          language={language}
          setLanguage={changeLanguage}
          t={t}
          navigate={navigate}
        />
      )}

      {page === "rules" && (
        <HouseRulesPage
          language={language}
          setLanguage={changeLanguage}
          t={t}
          navigate={navigate}
        />
      )}

      {page === "wifi" && (
        <WifiPage
          language={language}
          setLanguage={changeLanguage}
          t={t}
          navigate={navigate}
        />
      )}

      {page === "nearby" && (
        <ExplorePage
          language={language}
          setLanguage={changeLanguage}
          t={t}
          navigate={navigate}
        />
      )}

      {page === "checkout" && (
        <CheckoutPage
          language={language}
          setLanguage={changeLanguage}
          t={t}
          navigate={navigate}
        />
      )}

      <BottomNavigation
        page={page}
        t={t}
        navigate={navigate}
      />

      <button
        onClick={() => setMenuOpen(true)}
        className="
          fixed
          bottom-24
          left-5
          z-40
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-lg
          bg-[#ff385c]
          text-white
          shadow-xl
          transition
          hover:scale-105
          md:hidden
        "
      >
        <Menu size={21} />
      </button>

      <ContactButton label={t.contactHost} />

      {menuOpen && (
        <MobileMenu
          t={t}
          navigate={navigate}
          close={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}

/* =====================================================
   HOME
===================================================== */

function HomePage({
  language,
  setLanguage,
  t,
  navigate,
}: PageProps) {
  const photoActionLabel = {
    en: "View photos",
    pt: "Ver fotos",
    es: "Ver fotos",
  }[language];

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl bg-[#f7f7f2] shadow-2xl md:my-4 md:overflow-hidden md:rounded-2xl">

      {/* HERO */}

      <section className="relative min-h-[100svh] overflow-hidden md:min-h-[45rem]">

        <img
          src={images.hero}
          alt="Beautiful  room"
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(12,18,17,0.76),rgba(12,18,17,0.18)_48%,rgba(255,56,92,0.24))]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#101816]/75 to-transparent" />

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-between p-4 sm:p-5 md:min-h-[45rem]">

          {/* TOP */}

          <div className="flex items-center justify-end">

            <LanguageSwitcher
              language={language}
              setLanguage={setLanguage}
              t={t}
              variant="hero"
            />

          </div>

          {/* TEXT */}

          <div className="pb-1 text-white">

            <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
              <Sparkles size={13} />
              {t.guestGuide}
            </div>

            <p className="mb-1 text-[15px] font-semibold uppercase tracking-[0.18em] text-[#ffd6de]">
              {t.welcomeTo}
            </p>

            <h1
              className="
                max-w-[560px]
                text-[38px]
                font-black
                leading-[0.98]
                min-[380px]:text-[44px]
                md:text-[58px]
                lg:text-[68px]
              "
            >
              {t.heroTitleLine1}
              <br />
              {t.heroTitleLine2}
            </h1>

            <p className="mt-5 max-w-[440px] text-[16px] leading-6 text-white/90 md:text-[17px]">
              {t.heroDescription}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-white/20 bg-white/10 px-3 py-1 text-[12px] font-medium text-white/90 backdrop-blur-sm">
                {t.fastCheckIn}
              </span>
              <span className="rounded-lg border border-white/20 bg-white/10 px-3 py-1 text-[12px] font-medium text-white/90 backdrop-blur-sm">
                {t.localTips}
              </span>
            </div>

            {/* QUICK MENU */}

            <div
              className="
                mt-7
                grid
                grid-cols-2
                gap-2
                rounded-xl
                border border-white/70
                bg-white/95
                p-3
                shadow-[0_20px_70px_rgba(0,0,0,0.28)]
                backdrop-blur
                sm:grid-cols-3
                md:grid-cols-6
                md:gap-3
              "
            >

              <QuickAction
                icon={<Car />}
                title={t.gettingHere}
                description={t.directions}
                onClick={() => navigate("getting-here")}
              />

              <QuickAction
                icon={<Home />}
                title={t.houseGuide}
                description={t.amenities}
                onClick={() => navigate("guide")}
              />

              <QuickAction
                icon={<FileText />}
                title={t.houseRules}
                description={t.stayNotes}
                onClick={() => navigate("rules")}
              />

              <QuickAction
                icon={<Wifi />}
                title={t.wifi}
                description={t.network}
                onClick={() => navigate("wifi")}
              />

              <QuickAction
                icon={<MapPin />}
                title={t.exploreNearby}
                description={t.localPicks}
                onClick={() => navigate("nearby")}
              />

              <QuickAction
                icon={<DoorOpen />}
                title={t.checkout}
                description={t.beforeLeaving}
                onClick={() => navigate("checkout")}
              />

            </div>

          </div>
        </div>
      </section>

      {/* PROPERTY INFORMATION */}

      <section className="px-4 pb-32 pt-8 sm:px-5 md:px-8 md:pb-36 lg:px-10">

        <div className="mb-5 flex items-end justify-between gap-4">

          <div>
            <p className="text-sm text-[#5f6b65]">
              {t.yourStay}
            </p>

            <h2 className="text-2xl font-bold">
              {t.makeHome}
            </h2>
          </div>

          <Sparkles
              className="text-[#ff385c]"
            size={23}
          />

        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

          <PropertyCard
            image={images.living}
            title={t.livingRoom}
            onClick={() => navigate("photos")}
            actionLabel={photoActionLabel}
          />

          <PropertyCard
            image={images.stayBedroom}
            title={t.bedroom}
            onClick={() => navigate("photos")}
            actionLabel={photoActionLabel}
          />

        </div>

        <div className="mt-4 rounded-lg border border-[#dfe4dd] bg-[#ecf3f2] p-5 md:p-6">

          <Leaf
            size={25}
            className="text-[#0f766e]"
          />

          <h3 className="mt-3 font-bold">
            {t.everythingHere}
          </h3>

          <p className="mt-1 text-sm leading-5 text-[#5f6b65]">
            {t.everythingHereText}
          </p>

        </div>

      </section>

    </main>
  );
}

function PhotoGalleryPage({
  language,
  setLanguage,
  t,
  navigate,
}: PageProps) {
  const photoLabels = {
    en: {
      title: "Photo gallery",
      subtitle: "A closer look at the apartment",
      featured: "Featured space",
      tap: "Photos use the current listing images and can be replaced with updated room photos anytime.",
    },
    pt: {
      title: "Galeria de fotos",
      subtitle: "Uma visao mais proxima do apartamento",
      featured: "Espaco principal",
      tap: "As fotos usam as imagens atuais do anuncio e podem ser substituidas por fotos atualizadas dos quartos quando quiser.",
    },
    es: {
      title: "Galeria de fotos",
      subtitle: "Una vista mas cercana del apartamento",
      featured: "Espacio principal",
      tap: "Las fotos usan las imagenes actuales del anuncio y pueden reemplazarse por fotos actualizadas de las habitaciones cuando quieras.",
    },
  };
  const copy = photoLabels[language];
  const galleryPhotos = [
    { image: images.hero, title: copy.featured },
    { image: images.living, title: t.livingRoom },
    { image: images.stayBedroom, title: t.bedroom },
    { image: images.exterior, title: t.backyard },
    { image: images.wifi, title: t.wifiRouter },
  ];

  return (
    <PageLayout
      title={copy.title}
      language={language}
      setLanguage={setLanguage}
      t={t}
      navigate={navigate}
    >
      <section className="overflow-hidden rounded-lg border border-[#e5e7df] bg-white shadow-sm">
        <div className="relative h-[18rem] sm:h-[24rem]">
          <img src={galleryPhotos[0].image} alt={galleryPhotos[0].title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,18,17,0.08),rgba(12,18,17,0.68))]" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="mb-2 inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] backdrop-blur">
              <Images size={15} />
              {t.makeHome}
            </div>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl">{copy.subtitle}</h2>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {galleryPhotos.slice(1).map((photo) => (
          <figure key={photo.title} className="overflow-hidden rounded-lg border border-[#e5e7df] bg-white shadow-sm">
            <img src={photo.image} alt={photo.title} className="h-[13rem] w-full object-cover sm:h-[15rem]" />
            <figcaption className="p-4 text-sm font-semibold">{photo.title}</figcaption>
          </figure>
        ))}
      </div>

      <div className="rounded-lg border border-[#dfe4dd] bg-[#ecf3f2] p-5">
        <p className="text-sm leading-5 text-[#5f6b65]">{copy.tap}</p>
      </div>
    </PageLayout>
  );
}

/* =====================================================
   GETTING HERE
===================================================== */

/* =====================================================
   HOUSE GUIDE
===================================================== */

function HouseGuide({
  language,
  setLanguage,
  t,
  navigate,
}: PageProps) {
  return (
    <PageLayout
        title={t.houseGuide}
        language={language}
        setLanguage={setLanguage}
        t={t}
        navigate={navigate}
      >
      <img
        src={images.living}
        alt={t.livingRoomAlt}
        className="h-[11.875rem] w-full rounded-lg object-cover sm:h-[205px]"
      />

      <div className="space-y-2">

        <GuideRow
          icon={<KeyRound />}
          title={t.beforeArrive}
          description={t.allNeed}
          onClick={() => navigate("before-arrive")}
        />

        <GuideRow
          icon={<KeyRound />}
          title={t.checkInInstructions}
          description={t.selfCheckIn}
          onClick={() => navigate("check-in")}
        />

        <GuideRow
          icon={<Home />}
          title={t.amenities}
          description={t.included}
          onClick={() => navigate("amenities")}
        />

        <GuideRow
          icon={<Lightbulb />}
          title={t.howThingsWork}
          description={t.devices}
          onClick={() => navigate("how-things-work")}
        />

        <GuideRow
          icon={<Recycle />}
          title={t.trash}
          description={t.dispose}
          onClick={() => navigate("trash-recycling")}
        />

        <GuideRow
          icon={<Phone />}
          title={t.emergency}
          description={t.contacts}
          onClick={() => navigate("emergency")}
        />

      </div>

      <div className="rounded-lg border border-[#dfe4dd] bg-[#ecf3f2] p-5">
        <h3 className="font-semibold">{t.enjoyStay}</h3>
        <p className="mt-1 text-sm text-[#5f6b65]">
          {t.ready}
        </p>
        <Leaf className="ml-auto mt-3 text-[#0f766e]" size={27} />
      </div>

    </PageLayout>
  );
}

const guideDetails = {
  "before-arrive": {
    titleKey: "beforeArrive",
    eyebrow: "Arrival prep",
    image: images.hero,
    icon: <KeyRound />,
    summary:
      "Welcome to your cozy private apartment in Real Parque, one of the city's most charming and well-located neighborhoods. Keep these details handy so check-in is calm and quick.",
    sections: [
      {
        title: "Before you leave",
        items: [
          "Confirm your arrival window with the host if your plans change.",
          "Save the address and WiFi details in case mobile service is weak.",
          "Review the check-in instructions before reaching the building.",
          "The apartment is surrounded by local shops, bakeries, pharmacies, cafes, and markets within walking distance.",
          "Please bring your own towels. Towels can be provided upon prior request.",
        ],
      },
      {
        title: "What to bring",
        items: [
          "Please bring your personal toiletries, such as soap, shampoo, conditioner, toothpaste, toothbrush, deodorant, and any other hygiene products you may need.",
          "Bath and beach towels.",
          "Personal medications.",
          "Comfortable clothes and sleepwear.",
          "Chargers for your phone and other devices.",
          "Slippers or indoor footwear.",
          "Sunscreen and insect repellent.",
          "Groceries, snacks, drinks, or any special food items.",
          "Laundry detergent, if you plan to wash clothes.",
          "A valid ID for check-in.",
          "Basic kitchen utensils are available in the apartment, but guests should bring their preferred food, drinks, and personal-use items.",
        ],
      },
      {
        title: "Friendly notice",
        items: [
          "A small group meets in the space at the back of the building every Saturday morning from 8:45 AM to 9:15 AM.",
          "Your privacy will not be affected during this time.",
          "If this causes any inconvenience, we recommend avoiding Friday evening bookings.",
        ],
      },
    ],
    tip: "Message the host early if you need luggage timing help or a special arrival arrangement.",
  },
  "check-in": {
    titleKey: "checkInInstructions",
    eyebrow: "Self check-in",
    image: images.living,
    icon: <DoorOpen />,
    summary:
      "Use these steps when you arrive. The process is designed to be simple, private, and easy to follow.",
    sections: [
      {
        title: "At the property",
        items: [
          "Go to the private entrance and locate the lockbox near the door.",
          "Enter the code shared by the host before arrival.",
          "Return the key to the lockbox whenever you leave the home.",
          "You will have private access to the apartment during your stay and will not share the space with anyone.",
        ],
      },
      {
        title: "After entering",
        items: [
          "Lock the entrance behind you.",
          "Check that the WiFi connects and the main lights work.",
          "Send a quick message to the host if anything looks different than expected.",
        ],
      },
    ],
    tip: "If the code does not work, wait a few seconds and try again slowly before contacting the host.",
  },
  amenities: {
    titleKey: "amenities",
    eyebrow: "About the space",
    image: images.stayBedroom,
    icon: <Home />,
    summary:
      "This is a private apartment with two bedrooms and a full kitchen. The entire apartment is exclusively yours during your stay.",
    sections: [
      {
        title: "Property details",
        items: [
          "Private apartment in Real Parque with two bedrooms and a full kitchen.",
          "You will not share the apartment with anyone during your stay.",
          "Local shops, bakeries, pharmacies, cafes, and markets are within walking distance.",
          "Basic kitchen utensils are available for simple meals and drinks.",
          "Cups, spoons, and plates are provided in sets of 4. A fee of 40 applies for each broken or lost item.",
          "Please bring preferred food, drinks, toiletries, towels, and personal-use items.",
        ],
      },
      {
        title: "Room configuration and access",
        items: [
          "Bookings for 1 to 2 guests include access to 1 bedroom.",
          "Bookings for 3 to 4 guests include access to 2 bedrooms.",
          "The second bedroom remains locked for smaller bookings and can be unlocked upon prior request.",
          "One room has 2 single beds, ideal for guests who prefer to sleep separately.",
          "One room has 1 queen bed, available for bookings of 3 to 4 guests or for guests who wish to share the same bed upon request.",
        ],
      },
      {
        title: "Room amenities",
        items: [
          "Television in each room.",
          "Bed linens and blankets.",
          "2 pillows per bed.",
          "Modern ceiling fans with remote control.",
          "Double wardrobe with hangers.",
        ],
      },
    ],
    tip: "Need a different bed setup or access to the second room? Contact the host before arrival so everything can be prepared.",
  },
  "how-things-work": {
    titleKey: "howThingsWork",
    eyebrow: "Devices",
    image: images.wifi,
    icon: <Lightbulb />,
    summary:
      "Most controls are straightforward. These notes help keep the home comfortable and avoid accidental changes.",
    sections: [
      {
        title: "Lights and ceiling fans",
        items: [
          "Turn off lights when leaving the home.",
          "Use the remote controls to adjust the modern ceiling fans.",
          "Turn off the ceiling fans when leaving the home.",
        ],
      },
      {
        title: "TV and appliances",
        items: [
          "Use the provided remote controls and leave them where you found them.",
          "Do not unplug routers, smart devices, or labeled equipment.",
          "Ask the host before changing device settings or moving appliances.",
        ],
      },
    ],
    tip: "If something is unresponsive, check the power first, then message the host before resetting equipment.",
  },
  "trash-recycling": {
    titleKey: "trash",
    eyebrow: "Keep it tidy",
    image: images.exterior,
    icon: <Recycle />,
    summary:
      "A little cleanup keeps the stay comfortable and helps the next guest arrive to the same fresh space.",
    sections: [
      {
        title: "During your stay",
        items: [
          "Bag household trash before placing it in the outside bin.",
          "Separate clean bottles, cans, and paper when recycling is available.",
          "Do not leave food waste open indoors overnight.",
        ],
      },
      {
        title: "Before checkout",
        items: [
          "Tie trash bags securely.",
          "Place trash in the designated bin area.",
          "Leave bulky items or special disposal questions for the host.",
        ],
      },
    ],
    tip: "When in doubt, bag it neatly and ask the host where it should go.",
  },
  emergency: {
    titleKey: "emergency",
    eyebrow: "Important contacts",
    image: images.hero,
    icon: <ShieldAlert />,
    summary:
      "For urgent issues, prioritize safety first. Use emergency services for immediate danger, then notify the host.",
    sections: [
      {
        title: "Immediate danger",
        items: [
          "Call local emergency services right away for fire, medical emergencies, or active danger.",
          "Leave the property if staying inside feels unsafe.",
          "Do not attempt risky repairs yourself.",
        ],
      },
      {
        title: "Property issues",
        items: [
          "Contact the host for lockouts, leaks, outages, or urgent maintenance.",
          "Send photos when it helps explain the issue.",
          "Keep walkways and exits clear while waiting for help.",
        ],
      },
    ],
    tip: "For non-urgent questions, use the contact button so the host can respond with the right details.",
  },
};

type GuideDetailKey = keyof typeof guideDetails;
type GuideDetailCopy = {
  eyebrow: string;
  summary: string;
  sections: Array<{
    title: string;
    items: string[];
  }>;
  tip: string;
};

const guideDetailCopy = {
  en: guideDetails,
  pt: {
    "before-arrive": {
      eyebrow: "Preparacao",
      summary:
        "Bem-vindo ao seu apartamento privativo e aconchegante no Real Parque, um dos bairros mais charmosos e bem localizados da cidade. Tenha estes detalhes a mao para fazer o check-in com tranquilidade.",
      sections: [
        {
          title: "Antes de sair",
          items: [
            "Confirme seu horario de chegada com o anfitriao se seus planos mudarem.",
            "Salve o endereco e os dados do WiFi caso o sinal de celular esteja fraco.",
            "Revise as instrucoes de check-in antes de chegar ao predio.",
            "O apartamento fica perto de lojas locais, padarias, farmacias, cafes e mercados, tudo a uma curta caminhada.",
            "Por favor, traga suas proprias toalhas. Podemos fornecer toalhas mediante solicitacao previa.",
          ],
        },
        {
          title: "O que trazer",
          items: [
            "Traga seus itens pessoais de higiene, como sabonete, shampoo, condicionador, creme dental, escova de dentes, desodorante e outros produtos que precisar.",
            "Toalhas de banho e de praia.",
            "Medicamentos pessoais.",
            "Roupas confortaveis e roupa de dormir.",
            "Carregadores para celular e outros dispositivos.",
            "Chinelos ou calcado para usar dentro de casa.",
            "Protetor solar e repelente.",
            "Compras, lanches, bebidas ou alimentos especiais.",
            "Sabao para roupa, caso pretenda lavar roupas.",
            "Documento de identificacao valido para o check-in.",
            "Utensilios basicos de cozinha estao disponiveis no apartamento, mas os hospedes devem trazer seus alimentos, bebidas e itens de uso pessoal preferidos.",
          ],
        },
        {
          title: "Aviso amigavel",
          items: [
            "Um pequeno grupo se reune no espaco nos fundos do predio todos os sabados pela manha, das 8h45 as 9h15.",
            "Sua privacidade nao sera afetada durante esse periodo.",
            "Se isso causar algum inconveniente, recomendamos evitar reservas para sexta-feira a noite.",
          ],
        },
      ],
      tip: "Avise o anfitriao com antecedencia se precisar de ajuda com malas, horario de chegada ou alguma organizacao especial.",
    },
    "check-in": {
      eyebrow: "Self check-in",
      summary:
        "Use estes passos quando chegar. O processo foi pensado para ser simples, privativo e facil de seguir.",
      sections: [
        {
          title: "Na propriedade",
          items: [
            "Va ate a entrada privativa e localize o cofre de chaves perto da porta.",
            "Digite o codigo compartilhado pelo anfitriao antes da chegada.",
            "Devolva a chave ao cofre sempre que sair da acomodacao.",
            "Voce tera acesso privativo ao apartamento durante a estadia e nao compartilhara o espaco com ninguem.",
          ],
        },
        {
          title: "Depois de entrar",
          items: [
            "Tranque a entrada atras de voce.",
            "Confira se o WiFi conecta e se as luzes principais funcionam.",
            "Envie uma mensagem rapida ao anfitriao se algo estiver diferente do esperado.",
          ],
        },
      ],
      tip: "Se o codigo nao funcionar, aguarde alguns segundos e tente novamente com calma antes de contatar o anfitriao.",
    },
    amenities: {
      eyebrow: "Sobre o espaco",
      summary:
        "Este e um apartamento privativo com dois quartos e cozinha completa. O apartamento inteiro sera exclusivamente seu durante a estadia.",
      sections: [
        {
          title: "Detalhes da propriedade",
          items: [
            "Apartamento privativo no Real Parque com dois quartos e cozinha completa.",
            "Voce nao compartilhara o apartamento com ninguem durante a estadia.",
            "Lojas locais, padarias, farmacias, cafes e mercados ficam a uma curta caminhada.",
            "Utensilios basicos de cozinha estao disponiveis para refeicoes e bebidas simples.",
            "Copos, colheres e pratos sao fornecidos em conjuntos de 4. Sera cobrada uma taxa de 40 por cada item quebrado ou perdido.",
            "Traga alimentos, bebidas, itens de higiene, toalhas e objetos de uso pessoal de sua preferencia.",
          ],
        },
        {
          title: "Configuracao dos quartos e acesso",
          items: [
            "Reservas para 1 a 2 hospedes incluem acesso a 1 quarto.",
            "Reservas para 3 a 4 hospedes incluem acesso a 2 quartos.",
            "O segundo quarto permanece trancado para reservas menores e pode ser liberado mediante solicitacao previa.",
            "Um quarto tem 2 camas de solteiro, ideal para hospedes que preferem dormir separados.",
            "Um quarto tem 1 cama queen, disponivel para reservas de 3 a 4 hospedes ou para hospedes que desejam compartilhar a mesma cama mediante solicitacao.",
          ],
        },
        {
          title: "Comodidades dos quartos",
          items: [
            "Televisao em cada quarto.",
            "Roupa de cama e cobertores.",
            "2 travesseiros por cama.",
            "Ventiladores de teto modernos com controle remoto.",
            "Guarda-roupa duplo com cabides.",
          ],
        },
      ],
      tip: "Precisa de outra configuracao de camas ou acesso ao segundo quarto? Fale com o anfitriao antes da chegada para que tudo seja preparado.",
    },
    "how-things-work": {
      eyebrow: "Aparelhos",
      summary:
        "A maioria dos controles e simples. Estas observacoes ajudam a manter a acomodacao confortavel e evitam mudancas acidentais.",
      sections: [
        {
          title: "Luzes e ventiladores de teto",
          items: [
            "Desligue as luzes ao sair da acomodacao.",
            "Use os controles remotos para ajustar os ventiladores de teto modernos.",
            "Desligue os ventiladores de teto ao sair da acomodacao.",
          ],
        },
        {
          title: "TV e eletrodomesticos",
          items: [
            "Use os controles remotos fornecidos e deixe-os onde os encontrou.",
            "Nao desligue roteadores, dispositivos inteligentes ou equipamentos identificados da tomada.",
            "Pergunte ao anfitriao antes de mudar configuracoes de dispositivos ou mover eletrodomesticos.",
          ],
        },
      ],
      tip: "Se algo nao responder, verifique a energia primeiro e envie mensagem ao anfitriao antes de reiniciar equipamentos.",
    },
    "trash-recycling": {
      eyebrow: "Mantenha organizado",
      summary:
        "Um pouco de cuidado com a limpeza mantem a estadia confortavel e ajuda o proximo hospede a encontrar o espaco fresco.",
      sections: [
        {
          title: "Durante a estadia",
          items: [
            "Coloque o lixo domestico em sacos antes de leva-lo para a lixeira externa.",
            "Separe garrafas, latas e papeis limpos quando houver reciclagem disponivel.",
            "Nao deixe restos de comida abertos dentro do apartamento durante a noite.",
          ],
        },
        {
          title: "Antes do check-out",
          items: [
            "Amarre bem os sacos de lixo.",
            "Coloque o lixo na area designada.",
            "Consulte o anfitriao sobre itens grandes ou descarte especial.",
          ],
        },
      ],
      tip: "Na duvida, coloque tudo em saco fechado e pergunte ao anfitriao onde deve descartar.",
    },
    emergency: {
      eyebrow: "Contatos importantes",
      summary:
        "Em situacoes urgentes, priorize a seguranca. Acione os servicos de emergencia em caso de perigo imediato e depois avise o anfitriao.",
      sections: [
        {
          title: "Perigo imediato",
          items: [
            "Ligue imediatamente para os servicos de emergencia locais em caso de incendio, emergencia medica ou perigo ativo.",
            "Saia da propriedade se permanecer dentro parecer inseguro.",
            "Nao tente fazer reparos perigosos por conta propria.",
          ],
        },
        {
          title: "Problemas na propriedade",
          items: [
            "Contate o anfitriao para problemas com chaves, vazamentos, falta de energia ou manutencao urgente.",
            "Envie fotos quando isso ajudar a explicar o problema.",
            "Mantenha corredores e saidas livres enquanto aguarda ajuda.",
          ],
        },
      ],
      tip: "Para perguntas nao urgentes, use o botao de contato para que o anfitriao responda com as informacoes certas.",
    },
  },
  es: {
    "before-arrive": {
      eyebrow: "Preparacion",
      summary:
        "Bienvenido a tu apartamento privado y acogedor en Real Parque, uno de los barrios mas encantadores y mejor ubicados de la ciudad. Ten estos detalles a mano para que el check-in sea tranquilo y rapido.",
      sections: [
        {
          title: "Antes de salir",
          items: [
            "Confirma tu horario de llegada con el anfitrion si tus planes cambian.",
            "Guarda la direccion y los datos del WiFi por si la senal movil es debil.",
            "Revisa las instrucciones de check-in antes de llegar al edificio.",
            "El apartamento esta rodeado de tiendas locales, panaderias, farmacias, cafes y mercados a poca distancia a pie.",
            "Por favor, trae tus propias toallas. Podemos proporcionarlas con solicitud previa.",
          ],
        },
        {
          title: "Que traer",
          items: [
            "Trae tus articulos personales de higiene, como jabon, shampoo, acondicionador, pasta dental, cepillo de dientes, desodorante y cualquier otro producto que necesites.",
            "Toallas de bano y de playa.",
            "Medicamentos personales.",
            "Ropa comoda y ropa para dormir.",
            "Cargadores para tu telefono y otros dispositivos.",
            "Pantuflas o calzado para interior.",
            "Protector solar y repelente de insectos.",
            "Comestibles, snacks, bebidas o alimentos especiales.",
            "Detergente para ropa, si planeas lavar ropa.",
            "Documento de identidad valido para el check-in.",
            "Hay utensilios basicos de cocina disponibles en el apartamento, pero los huespedes deben traer sus alimentos, bebidas y articulos personales preferidos.",
          ],
        },
        {
          title: "Aviso amable",
          items: [
            "Un pequeno grupo se reune en el espacio de la parte trasera del edificio todos los sabados por la manana, de 8:45 AM a 9:15 AM.",
            "Tu privacidad no se vera afectada durante este tiempo.",
            "Si esto te causa algun inconveniente, recomendamos evitar reservas para los viernes por la noche.",
          ],
        },
      ],
      tip: "Escribe al anfitrion con anticipacion si necesitas ayuda con equipaje, horario de llegada o algun arreglo especial.",
    },
    "check-in": {
      eyebrow: "Self check-in",
      summary:
        "Usa estos pasos cuando llegues. El proceso esta pensado para ser simple, privado y facil de seguir.",
      sections: [
        {
          title: "En la propiedad",
          items: [
            "Ve a la entrada privada y localiza la caja de seguridad cerca de la puerta.",
            "Ingresa el codigo compartido por el anfitrion antes de la llegada.",
            "Devuelve la llave a la caja de seguridad cada vez que salgas de la casa.",
            "Tendras acceso privado al apartamento durante tu estadia y no compartiras el espacio con nadie.",
          ],
        },
        {
          title: "Despues de entrar",
          items: [
            "Cierra la entrada con llave detras de ti.",
            "Comprueba que el WiFi conecte y que las luces principales funcionen.",
            "Envia un mensaje rapido al anfitrion si algo se ve diferente a lo esperado.",
          ],
        },
      ],
      tip: "Si el codigo no funciona, espera unos segundos e intentalo de nuevo con calma antes de contactar al anfitrion.",
    },
    amenities: {
      eyebrow: "Sobre el espacio",
      summary:
        "Este es un apartamento privado con dos dormitorios y cocina completa. Todo el apartamento sera exclusivamente tuyo durante la estadia.",
      sections: [
        {
          title: "Detalles de la propiedad",
          items: [
            "Apartamento privado en Real Parque con dos dormitorios y cocina completa.",
            "No compartiras el apartamento con nadie durante tu estadia.",
            "Tiendas locales, panaderias, farmacias, cafes y mercados estan a poca distancia a pie.",
            "Hay utensilios basicos de cocina disponibles para comidas y bebidas simples.",
            "Vasos, cucharas y platos se proporcionan en juegos de 4. Se cobrara una tarifa de 40 por cada articulo roto o perdido.",
            "Trae tus alimentos, bebidas, articulos de higiene, toallas y articulos personales preferidos.",
          ],
        },
        {
          title: "Configuracion de habitaciones y acceso",
          items: [
            "Reservas para 1 a 2 huespedes incluyen acceso a 1 dormitorio.",
            "Reservas para 3 a 4 huespedes incluyen acceso a 2 dormitorios.",
            "El segundo dormitorio permanece cerrado para reservas pequenas y puede abrirse con solicitud previa.",
            "Una habitacion tiene 2 camas individuales, ideal para huespedes que prefieren dormir separados.",
            "Una habitacion tiene 1 cama queen, disponible para reservas de 3 a 4 huespedes o para huespedes que desean compartir la misma cama con solicitud previa.",
          ],
        },
        {
          title: "Comodidades de las habitaciones",
          items: [
            "Television en cada habitacion.",
            "Ropa de cama y mantas.",
            "2 almohadas por cama.",
            "Ventiladores de techo modernos con control remoto.",
            "Armario doble con perchas.",
          ],
        },
      ],
      tip: "Necesitas otra configuracion de camas o acceso al segundo dormitorio? Contacta al anfitrion antes de la llegada para que todo pueda prepararse.",
    },
    "how-things-work": {
      eyebrow: "Dispositivos",
      summary:
        "La mayoria de los controles son simples. Estas notas ayudan a mantener el apartamento comodo y evitan cambios accidentales.",
      sections: [
        {
          title: "Luces y ventiladores de techo",
          items: [
            "Apaga las luces al salir de la casa.",
            "Usa los controles remotos para ajustar los ventiladores de techo modernos.",
            "Apaga los ventiladores de techo al salir de la casa.",
          ],
        },
        {
          title: "TV y electrodomesticos",
          items: [
            "Usa los controles remotos proporcionados y dejalos donde los encontraste.",
            "No desconectes routers, dispositivos inteligentes ni equipos etiquetados.",
            "Pregunta al anfitrion antes de cambiar configuraciones de dispositivos o mover electrodomesticos.",
          ],
        },
      ],
      tip: "Si algo no responde, revisa primero la energia y escribe al anfitrion antes de reiniciar equipos.",
    },
    "trash-recycling": {
      eyebrow: "Mantenlo ordenado",
      summary:
        "Un poco de limpieza mantiene la estadia comoda y ayuda a que el proximo huesped encuentre el espacio fresco.",
      sections: [
        {
          title: "Durante tu estadia",
          items: [
            "Coloca la basura domestica en bolsas antes de llevarla al contenedor exterior.",
            "Separa botellas, latas y papel limpios cuando haya reciclaje disponible.",
            "No dejes restos de comida abiertos dentro del apartamento durante la noche.",
          ],
        },
        {
          title: "Antes del check-out",
          items: [
            "Ata bien las bolsas de basura.",
            "Coloca la basura en el area designada.",
            "Consulta al anfitrion sobre articulos grandes o descarte especial.",
          ],
        },
      ],
      tip: "Si tienes dudas, ponlo en una bolsa cerrada y pregunta al anfitrion donde debe ir.",
    },
    emergency: {
      eyebrow: "Contactos importantes",
      summary:
        "En situaciones urgentes, prioriza la seguridad. Llama a los servicios de emergencia si hay peligro inmediato y luego avisa al anfitrion.",
      sections: [
        {
          title: "Peligro inmediato",
          items: [
            "Llama de inmediato a los servicios de emergencia locales en caso de incendio, emergencia medica o peligro activo.",
            "Sal de la propiedad si permanecer dentro no se siente seguro.",
            "No intentes hacer reparaciones riesgosas por tu cuenta.",
          ],
        },
        {
          title: "Problemas en la propiedad",
          items: [
            "Contacta al anfitrion por cierres, filtraciones, cortes de energia o mantenimiento urgente.",
            "Envia fotos cuando ayuden a explicar el problema.",
            "Manten pasillos y salidas libres mientras esperas ayuda.",
          ],
        },
      ],
      tip: "Para preguntas no urgentes, usa el boton de contacto para que el anfitrion responda con los detalles correctos.",
    },
  },
} satisfies Record<Language, Record<GuideDetailKey, GuideDetailCopy>>;

function GuideDetailPage({
  page,
  language,
  setLanguage,
  t,
  navigate,
}: PageProps & { page: GuideDetailKey }) {
  const detail = guideDetails[page];
  const copy = guideDetailCopy[language][page];
  const title = t[detail.titleKey] ?? detail.eyebrow;

  return (
    <PageLayout
      title={title}
      language={language}
      setLanguage={setLanguage}
      t={t}
      navigate={navigate}
      backPage="guide"
    >
      <section className="overflow-hidden rounded-lg border border-[#e5e7df] bg-white shadow-sm">
        <div className="relative h-[12.5rem] sm:h-[14rem]">
          <img src={detail.image} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,18,17,0.05),rgba(12,18,17,0.66))]" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="mb-2 inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] backdrop-blur">
              {detail.icon}
              {copy.eyebrow}
            </div>
            <h2 className="text-xl font-black leading-tight sm:text-2xl">{title}</h2>
          </div>
        </div>
        <p className="p-5 text-sm leading-6 text-[#5f6b65] md:p-6">
          {copy.summary}
        </p>
      </section>

      {copy.sections.map((section) => (
        <Card key={section.title}>
          <h3 className="text-base font-bold">{section.title}</h3>
          <div className="mt-4 space-y-3">
            {section.items.map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#0f766e]" size={18} />
                <p className="text-sm leading-5 text-[#4f5a55]">{item}</p>
              </div>
            ))}
          </div>
        </Card>
      ))}

      <div className="rounded-lg border border-[#dfe4dd] bg-[#ecf3f2] p-5">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#0f766e]">
            <Sparkles size={19} />
          </div>
          <div>
            <h3 className="font-semibold">
              {language === "pt" ? "Dica util" : language === "es" ? "Consejo util" : "Helpful tip"}
            </h3>
            <p className="mt-1 text-sm leading-5 text-[#5f6b65]">{copy.tip}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

/* =====================================================
   RULES
===================================================== */

/* =====================================================
   WIFI
===================================================== */

function WifiPage({
  language,
  setLanguage,
  t,
  navigate,
}: PageProps) {
  const password = "Rolayo2025!?";
  const [copiedPassword, setCopiedPassword] = useState(false);

  const copyPassword = async () => {
    await navigator.clipboard?.writeText(password);
    setCopiedPassword(true);
    window.setTimeout(() => setCopiedPassword(false), 1800);
  };

  return (
    <PageLayout
      title="WiFi"
      language={language}
      setLanguage={setLanguage}
      t={t}
      navigate={navigate}
    >

      <div className="rounded-lg border border-[#dfe4dd] bg-[#ecf3f2] px-5 py-8 text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-lg bg-white text-[#123c3c]">

          <Wifi size={46} />

        </div>

        <p className="mt-6 text-sm text-[#5f6b65]">
          Network
        </p>

        <h2 className="mt-1 text-xl font-bold">
          ROLLY_5G
        </h2>

      </div>

      <Card>

        <p className="text-sm text-gray-500">
          Password
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-lg font-bold sm:text-xl">
            {password}
          </p>

          <button
            onClick={copyPassword}
            aria-label={copiedPassword ? "Password copied" : "Copy password"}
            className={`
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-lg
              px-3
              py-3
              text-sm
              font-semibold
              transition
              ${
                copiedPassword
                  ? "bg-[#ecf3f2] text-[#0f766e]"
                  : "bg-[#fff0f3] text-[#ff385c] hover:bg-[#ffe1e8]"
              }
              sm:w-auto
            `}
          >
            {copiedPassword ? (
              <>
                <Check size={18} />
                Copied
              </>
            ) : (
              <>
                <Copy size={18} />
                Copy
              </>
            )}
          </button>

        </div>

      </Card>

      <img
        src={images.wifi}
        alt="WiFi router"
        className="h-[11.875rem] w-full rounded-lg object-cover sm:h-[12.5rem]"
      />

      <Card>

        <div className="flex gap-3">

          <div>

            <h3 className="font-semibold">
              Having trouble?
            </h3>

            <p className="mt-1 text-sm leading-5 text-gray-500">
            Contact us
              if you need help.
            </p>

          </div>

        </div>

      </Card>

    </PageLayout>
  );
}

/* =====================================================
   NEARBY
===================================================== */

/* =====================================================
   CHECKOUT
===================================================== */

/* =====================================================
   PAGE LAYOUT
===================================================== */

/* =====================================================
   BOTTOM NAVIGATION
===================================================== */

/* =====================================================
   MOBILE MENU
===================================================== */

export default App;
