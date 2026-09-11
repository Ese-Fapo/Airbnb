import { DoorOpen, FileText, Heart, Home, MapPin, MessageCircle, Navigation, Wifi, X } from "lucide-react";

import { hostWhatsappUrl } from "../data/contact";
import type { Page, Translation } from "../types";

export function MobileMenu({
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
    icon: React.ReactNode;
  }[] = [
    { page: "home", title: t.home, icon: <Home /> },
    { page: "getting-here", title: t.gettingHere, icon: <Navigation /> },
    { page: "guide", title: t.houseGuide, icon: <FileText /> },
    { page: "rules", title: t.houseRules, icon: <Heart /> },
    { page: "wifi", title: t.wifi, icon: <Wifi /> },
    { page: "nearby", title: t.exploreNearby, icon: <MapPin /> },
    { page: "checkout", title: t.checkout, icon: <DoorOpen /> },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
      <div className="absolute bottom-0 left-0 right-0 max-h-[calc(100svh-1rem)] overflow-y-auto rounded-t-[1.5rem] bg-[#f7f7f2] p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:p-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="min-w-0 pr-3 text-lg font-bold sm:text-xl">{t.guestGuide}</h2>
          <button onClick={close} className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
            <X size={19} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 max-[380px]:grid-cols-1">
          {items.map((item) => (
            <button
              key={item.page}
              onClick={() => navigate(item.page)}
              className="flex min-w-0 items-center gap-3 rounded-lg bg-white p-4 text-left"
            >
              <span className="text-[#ff385c]">{item.icon}</span>
              <span className="text-sm font-semibold">{item.title}</span>
            </button>
          ))}
        </div>

        <a
          href={hostWhatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#ff385c] py-4 font-semibold text-white"
        >
          <MessageCircle size={18} />
          {t.contactHost}
        </a>
      </div>
    </div>
  );
}
