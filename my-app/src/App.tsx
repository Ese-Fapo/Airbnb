import { useState, type ReactNode } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Ban,
  Bell,
  Car,
  Check,
  ChevronRight,
  Coffee,
  Copy,
  DoorOpen,
  FileText,
  Heart,
  Home,
  KeyRound,
  Leaf,
  Lightbulb,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Navigation,
  Phone,
  Recycle,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Utensils,
  Wifi,
  X,
} from "lucide-react";

type Page =
  | "home"
  | "getting-here"
  | "guide"
  | "rules"
  | "wifi"
  | "nearby"
  | "checkout";

const images = {
  hero: "/src/image/main.hero.jpeg",

  living: "/src/image/room-pix.avif",

  stayBedroom: "/src/image/bedroom2.avif",

  bedroom: "/src/image/remote-control.jpeg",

  exterior: "/src/image/backyard.avif",

  wifi: "/src/image/remote-control.jpeg",
};

type Language = "en" | "pt" | "es";
type Translation = typeof translations.en;

type PageProps = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
  navigate: (page: Page) => void;
};

const languageOptions: {
  code: Language;
  label: string;
}[] = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
  { code: "es", label: "ES" },
];

const translations = {
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
    fromAirport: "From Palm Beach International Airport:",
    directionStep1: "Head west on Airport Blvd",
    directionStep2: "Merge onto I-95 South",
    directionStep3: "Take exit 75 toward Palm Beach",
    directionStep4: "Turn right onto Willow Lane",
    directionStep5: "Follow the driveway to the private entrance",
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
    lightsAc: "Turn off lights and AC",
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
    lightsAc: "Desligue as luzes e o ar-condicionado",
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
    lightsAc: "Apaga las luces y el aire acondicionado",
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

      {page === "getting-here" && (
        <GettingHere
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

      {page === "rules" && (
        <HouseRules
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
        <Nearby
          language={language}
          setLanguage={changeLanguage}
          t={t}
          navigate={navigate}
        />
      )}

      {page === "checkout" && (
        <Checkout
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

      <button
        onClick={() => alert("Opening WhatsApp...")}
        className="
          fixed
          bottom-5
          left-1/2
          z-40
          flex
          -translate-x-1/2
          items-center
          justify-center
          gap-2
          rounded-lg
          bg-[#ff385c]
          px-7
          py-3.5
          text-sm
          font-semibold
          text-white
          shadow-xl
          transition
          hover:scale-[1.02]
        "
      >
        <MessageCircle size={18} />
        {t.contactHost}
      </button>

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

function LanguageSwitcher({
  language,
  setLanguage,
  t,
  variant = "page",
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
  variant?: "hero" | "page";
}) {
  const isHero = variant === "hero";

  return (
    <div
      className={
        `inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[12px] font-semibold text-white backdrop-blur-md ${
          isHero ? "shadow-lg" : "bg-white text-[#17201c] border-[#e5e7df]"
        }`
      }
    >
      <span>{t.language}</span>
      <div className="inline-flex items-center gap-1">
        {languageOptions.map((option) => (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            className={
              `rounded-full px-2.5 py-1 text-[11px] font-bold transition ${
                language === option.code
                  ? "bg-white text-[#ff385c]"
                  : "bg-white/20 text-white/80 hover:bg-white/40"
              }`
            }
          >
            {option.label}
          </button>
        ))}
      </div>
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
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl bg-[#f7f7f2] shadow-2xl md:my-4 md:overflow-hidden md:rounded-2xl">

      {/* HERO */}

      <section className="relative min-h-[41rem] overflow-hidden md:min-h-[45rem]">

        <img
          src={images.hero}
          alt="Beautiful  room"
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(12,18,17,0.76),rgba(12,18,17,0.18)_48%,rgba(255,56,92,0.24))]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#101816]/75 to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-between p-5">

          {/* TOP */}

          <div className="flex items-center justify-between">

            <button
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-lg
                border border-white/20
                bg-white/10
                text-white
                shadow-lg
                backdrop-blur-md
              "
            >
              <Menu size={21} />
            </button>

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
                text-[44px]
                font-black
                leading-[0.98]
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
                grid-cols-3
                gap-2
                rounded-xl
                border border-white/70
                bg-white/95
                p-3
                shadow-[0_20px_70px_rgba(0,0,0,0.28)]
                backdrop-blur
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

      <section className="px-5 pb-32 pt-8 md:px-8 md:pb-36 lg:px-10">

        <div className="mb-5 flex items-end justify-between">

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
          />

          <PropertyCard
            image={images.stayBedroom}
            title={t.bedroom}
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

/* =====================================================
   GETTING HERE
===================================================== */

function GettingHere({
  language,
  setLanguage,
  t,
  navigate,
}: PageProps) {
  const address = "R. Honória Virgilina Machado 196 - Real Parque, São José - SC, 88113-478";
  const phone = "+55 48 99046-843";

  return (
    <PageLayout
        title={t.gettingHere}
        language={language}
        setLanguage={setLanguage}
        t={t}
        navigate={navigate}
      >
      <img
        src={images.exterior}
        alt={t.property}
        className="h-[205px] w-full rounded-lg object-cover"
      />

      <Card>

        <div className="flex gap-4">

          <IconBox>
            <MapPin />
          </IconBox>

          <div className="flex-1">

            <h3 className="font-semibold">
              {t.address}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {address}
            </p>

          </div>

          <button
            onClick={() => navigator.clipboard?.writeText(address)}
            className="text-gray-400"
          >
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

            <h3 className="font-semibold">
              {t.directions}
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              {t.fromAirport}
            </p>

            <ol className="mt-3 space-y-2 text-sm leading-5 text-gray-600">

              <li>
                <b>1.</b> {t.directionStep1}
              </li>

              <li>
                <b>2.</b> {t.directionStep2}
              </li>

              <li>
                <b>3.</b> {t.directionStep3}
              </li>

              <li>
                <b>4.</b> {t.directionStep4}
              </li>

              <li>
                <b>5.</b> {t.directionStep5}
              </li>

            </ol>

          </div>

        </div>

      </Card>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
              "_blank"
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

      {/* MAP PLACEHOLDER */}

      <div className="relative h-[11.875rem] overflow-hidden rounded-lg bg-[#dfe8e6]">

        <div className="absolute inset-0 opacity-40">

          <div className="absolute left-[20%] top-0 h-full w-3 rotate-25 bg-white" />

          <div className="absolute left-[55%] top-0 h-full w-4 -rotate-35 bg-white" />

          <div className="absolute top-[40%] h-3 w-full rotate-5 bg-white" />

        </div>

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">

          <MapPin
            size={40}
            fill="#ff385c"
            className="text-[#ff385c]"
          />

          <span className="rounded-lg bg-white px-3 py-1 text-xs font-semibold shadow">
            {t.yourHome}
          </span>

        </div>

      </div>

    </PageLayout>
  );
}

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
        className="h-[205px] w-full rounded-lg object-cover"
      />

      <div className="space-y-2">

        <GuideRow
          icon={<KeyRound />}
          title={t.beforeArrive}
          description={t.allNeed}
        />

        <GuideRow
          icon={<KeyRound />}
          title={t.checkInInstructions}
          description={t.selfCheckIn}
        />

        <GuideRow
          icon={<Home />}
          title={t.amenities}
          description={t.included}
        />

        <GuideRow
          icon={<Lightbulb />}
          title={t.howThingsWork}
          description={t.devices}
        />

        <GuideRow
          icon={<Recycle />}
          title={t.trash}
          description={t.dispose}
        />

        <GuideRow
          icon={<Phone />}
          title={t.emergency}
          description={t.contacts}
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

/* =====================================================
   RULES
===================================================== */

function HouseRules({
  language,
  setLanguage,
  t,
  navigate,
}: PageProps) {
  return (
    <PageLayout
      title="House Rules"
      language={language}
      setLanguage={setLanguage}
      t={t}
      navigate={navigate}
    >

      <img
        src={images.bedroom}
        alt="Bedroom"
        className="h-[205px] w-full rounded-lg object-cover"
      />

      <RuleRow
        icon="🚭"
        title="No Smoking"
        description="Please smoke outside."
      />

      <RuleRow
        icon="🚫"
        title="No Parties"
        description="We love our quiet home."
      />

      <RuleRow
        icon="🔊"
        title="Quiet Hours"
        description="10 PM – 8 AM"
      />

      <RuleRow
        icon="🐾"
        title="Pets"
        description="No pets allowed."
      />

      <RuleRow
        icon="♡"
        title="Respect"
        description="Treat our home like your own."
      />

      <div className="rounded-lg border border-[#dfe4dd] bg-[#ecf3f2] p-5">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-semibold">
              Thank you for respecting
              our home & neighbors!
            </h3>

          </div>

          <Heart
            className="text-[#ff385c]"
            fill="#ff385c"
            size={25}
          />

        </div>

      </div>

    </PageLayout>
  );
}

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

        <div className="mt-2 flex items-center justify-between">

          <p className="text-xl font-bold">
            {password}
          </p>

          <button
            onClick={copyPassword}
            aria-label={copiedPassword ? "Password copied" : "Copy password"}
            className={`
              flex
              items-center
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
        className="h-[12.5rem] w-full rounded-lg object-cover"
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

function Nearby({
  language,
  setLanguage,
  t,
  navigate,
}: PageProps) {
  return (
    <PageLayout
      title="Explore Nearby"
      language={language}
      setLanguage={setLanguage}
      t={t}
      navigate={navigate}
    >

      <img
        src={images.exterior}
        alt="Backyard"
        className="h-[11.875rem] w-full rounded-lg object-cover"
      />

      <div>

        <p className="text-sm text-gray-500">
          Local favorites & things to do
        </p>

        <h2 className="mt-1 text-xl font-bold">
          A few good places nearby
        </h2>

      </div>

      <NearbyRow
        icon={<Utensils />}
        title="Restaurants"
        description="Great places to eat"
      />

      <NearbyRow
        icon={<Coffee />}
        title="Cafes & Coffee"
        description="Best local spots"
      />

      <NearbyRow
        icon={<Star />}
        title="Attractions"
        description="Things to see & do"
      />

      <NearbyRow
        icon={<ShoppingBag />}
        title="Shopping"
        description="Nearby shopping"
      />

      <NearbyRow
        icon={<ShoppingCart />}
        title="Groceries"
        description="Supermarkets nearby"
      />

    </PageLayout>
  );
}

/* =====================================================
   CHECKOUT
===================================================== */

function Checkout({
  language,
  setLanguage,
  t,
  navigate,
}: PageProps) {
  return (
    <PageLayout
      title="Check-out"
      language={language}
      setLanguage={setLanguage}
      t={t}
      navigate={navigate}
    >

      <img
        src={images.bedroom}
        alt="Bedroom"
        className="h-[205px] w-full rounded-lg object-cover"
      />

      <div>

        <p className="text-sm text-gray-500">
          Check-out Time
        </p>

        <h2 className="mt-1 text-2xl font-bold">
          11:00 AM
        </h2>

      </div>

      <div>

        <h3 className="mb-4 text-lg font-bold">
          Please Before You Leave
        </h3>

        <div className="space-y-3">

          <CheckRow text="Lock all doors and windows" />

          <CheckRow text="Turn off lights and AC" />

          <CheckRow text="Take out the trash" />

          <CheckRow text="Leave the keys in the lockbox" />

        </div>

      </div>

      <div className="rounded-lg border border-[#dfe4dd] bg-[#ecf3f2] p-5">

        <h3 className="font-semibold">
          Thank you for staying with us
        </h3>

        <p className="mt-1 text-sm text-[#5f6b65]">
          We hope you had a wonderful visit.
        </p>

        <Heart
          className="ml-auto mt-2 text-[#ff385c]"
          fill="#ff385c"
          size={24}
        />

      </div>

    </PageLayout>
  );
}

/* =====================================================
   PAGE LAYOUT
===================================================== */

function PageLayout({
  title,
  navigate,
  children,
  language,
  setLanguage,
  t,
}: {
  title: string;
  navigate: (page: Page) => void;
  children: ReactNode;
  language?: Language;
  setLanguage?: (language: Language) => void;
  t?: Translation;
}) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl bg-[#f7f7f2] px-5 pb-32 shadow-2xl md:my-4 md:rounded-2xl md:px-6 md:pb-36">

      <header
        className="
          sticky
          top-0
          z-20
          -mx-5
          mb-5
          flex
          items-center
          justify-between
          bg-[#f7f7f2]/95
          px-5
          py-4
          md:px-6
          backdrop-blur
        "
      >

        <button
          onClick={() => navigate("home")}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            bg-white
            shadow-sm
            transition
            hover:bg-[#fff0f3]
            hover:text-[#ff385c]
          "
        >
          <ArrowLeft size={19} />
        </button>

        <h1 className="font-bold">
          {title}
        </h1>

        {t && language && setLanguage ? (
        <LanguageSwitcher
          language={language}
          setLanguage={setLanguage}
          t={t}
        />
      ) : (
        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            bg-white
            shadow-sm
          "
        >
          <Bell size={18} />
        </button>
      )}

      </header>

      <div className="space-y-4 md:space-y-5">
        {children}
      </div>

    </main>
  );
}

/* =====================================================
   COMPONENTS
===================================================== */

function QuickAction({
  icon,
  title,
  description,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="
        flex
        group
        min-h-[5.625rem]
        flex-col
        items-center
        justify-center
        rounded-lg
        px-2
        py-3
        transition
        hover:-translate-y-0.5
        hover:bg-[#fff0f3]
        active:scale-95
        md:min-h-[6.25rem]
      "
    >
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff0f3] text-[#ff385c] shadow-sm ring-1 ring-[#ffd4dc] transition group-hover:bg-[#ff385c] group-hover:text-white">
        {icon}
      </div>

      <span className="text-center text-[12px] font-bold leading-4 text-[#17201c]">
        {title}
      </span>

      <span className="mt-0.5 text-center text-[10px] font-medium leading-3 text-[#68716c]">
        {description}
      </span>
    </button>
  );
}

function PropertyCard({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#e5e7df] bg-white shadow-sm">

      <img
        src={image}
        alt={title}
        className="h-[9.375rem] w-full object-cover"
      />

      <div className="p-4">
        <p className="font-semibold">
          {title}
        </p>
      </div>

    </div>
  );
}

function Card({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-[#e5e7df] bg-white p-5 shadow-sm md:p-6">
      {children}
    </div>
  );
}

function IconBox({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ecf3f2] text-[#123c3c]">
      {children}
    </div>
  );
}

function GuideRow({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <button
      className="
        flex
        w-full
        items-center
        gap-4
        rounded-lg
        border
        border-[#e5e7df]
        bg-white
        p-4
        md:p-5
        text-left
        shadow-sm
        transition
        hover:border-[#ffd0d9]
        hover:bg-[#fffafa]
      "
    >

      <IconBox>
        {icon}
      </IconBox>

      <div className="flex-1">

        <h3 className="text-sm font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          {description}
        </p>

      </div>

      <ChevronRight
        size={18}
        className="text-gray-400"
      />

    </button>
  );
}

function RuleRow({
  icon: _icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  const iconMap: Record<string, ReactNode> = {
    "No Smoking": <Ban size={20} />,
    "No Parties": <ShieldCheck size={20} />,
    "Quiet Hours": <Moon size={20} />,
    Pets: <Heart size={20} />,
    Respect: <Sparkles size={20} />,
  };
  const displayDescription =
    title === "Quiet Hours" ? "10 PM - 8 AM" : description;

  return (
    <div className="flex items-center gap-4 rounded-lg border border-[#e5e7df] bg-white p-4 shadow-sm transition hover:border-[#ffd0d9] md:p-5">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fff0f3] text-[#ff385c]">
        {iconMap[title] ?? _icon}
      </div>

      <div>

        <h3 className="text-sm font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          {displayDescription}
        </p>

      </div>

    </div>
  );
}

function NearbyRow({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <button className="flex w-full items-center gap-4 rounded-lg border border-[#e5e7df] bg-white p-4 text-left shadow-sm transition hover:border-[#ffd0d9] hover:bg-[#fffafa] md:p-5">

      <IconBox>
        {icon}
      </IconBox>

      <div className="flex-1">

        <h3 className="text-sm font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          {description}
        </p>

      </div>

      <ArrowRight
        size={17}
        className="text-gray-400"
      />

    </button>
  );
}

function CheckRow({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-[#e5e7df] bg-white p-4 shadow-sm md:p-5">

      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#fff0f3] text-[#ff385c]">

        <Check
          size={16}
          strokeWidth={3}
        />

      </div>

      <span className="text-sm">
        {text}
      </span>

    </div>
  );
}

/* =====================================================
   BOTTOM NAVIGATION
===================================================== */

function BottomNavigation({
  page,
  t,
  navigate,
}: {
  page: Page;
  t: Translation;
  navigate: (page: Page) => void;
}) {
  return (
    <nav
      className="
        fixed
        bottom-0
        left-1/2
        z-30
        w-full
        max-w-6xl
        -translate-x-1/2
        border-t
        border-[#e4e6dc]
        bg-white/95
        px-4
        pb-[calc(env(safe-area-inset-bottom)+8px)]
        pt-2
        shadow-[0_-5px_25px_rgba(0,0,0,0.05)]
        backdrop-blur
      "
    >

      <div className="grid grid-cols-4">

        <BottomItem
          active={page === "home"}
          icon={<Home />}
          label={t.home}
          onClick={() => navigate("home")}
        />

        <BottomItem
          active={page === "guide"}
          icon={<FileText />}
          label={t.guide}
          onClick={() => navigate("guide")}
        />

        <BottomItem
          active={page === "nearby"}
          icon={<MapPin />}
          label={t.explore}
          onClick={() => navigate("nearby")}
        />

        <BottomItem
          active={false}
          icon={<MessageCircle />}
          label="Contact"
          onClick={() => alert("Opening WhatsApp...")}
        />

      </div>

    </nav>
  );
}

function BottomItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex
        flex-col
        items-center
        gap-1
        rounded-xl
        py-2
        text-[10px]
        font-medium
        transition
        ${
          active
            ? "text-[#ff385c]"
            : "text-gray-500"
        }
      `}
    >

      <div>
        {icon}
      </div>

      <span>{label}</span>

    </button>
  );
}

/* =====================================================
   MOBILE MENU
===================================================== */

function MobileMenu({
  navigate,
  close,
  t,
}: {
  navigate: (page: Page) => void;
  close: () => void;
  t: Translation;
}) {
  const items: {
    page: Page;
    title: string;
    icon: ReactNode;
  }[] = [
    {
      page: "home",
      title: "Home",
      icon: <Home />,
    },
    {
      page: "getting-here",
      title: "Getting Here",
      icon: <Navigation />,
    },
    {
      page: "guide",
      title: "House Guide",
      icon: <FileText />,
    },
    {
      page: "rules",
      title: "House Rules",
      icon: <Heart />,
    },
    {
      page: "wifi",
      title: "WiFi",
      icon: <Wifi />,
    },
    {
      page: "nearby",
      title: "Explore Nearby",
      icon: <MapPin />,
    },
    {
      page: "checkout",
      title: "Check-out",
      icon: <DoorOpen />,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          rounded-t-[2rem]
          bg-[#f7f7f2]
          p-6
        "
      >

        <div className="mb-5 flex items-center justify-between">

          <h2 className="text-xl font-bold">
            Guest Guide
          </h2>

          <button
            onClick={close}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white"
          >
            <X size={19} />
          </button>

        </div>

        <div className="grid grid-cols-2 gap-2">

          {items.map((item) => (
            <button
              key={item.page}
              onClick={() => navigate(item.page)}
              className="
                flex
                items-center
                gap-3
                rounded-lg
                bg-white
                p-4
                text-left
              "
            >

              <span className="text-[#ff385c]">
                {item.icon}
              </span>

              <span className="text-sm font-semibold">
                {item.title}
              </span>

            </button>
          ))}

        </div>

        <button
          onClick={() => alert("Opening WhatsApp...")}
          className="
            mt-4
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-[#ff385c]
            py-4
            font-semibold
            text-white
          "
        >
          <MessageCircle size={18} />
          {t.contactHost}
        </button>

      </div>

    </div>
  );
}

export default App;
