import { DoorOpen, FileText, Heart, Home, Images, KeyRound, MapPin, MessageCircle, Navigation, Wifi, X } from "lucide-react";

import { hostWhatsappUrl } from "../data/contact";
import type { Page, Translation } from "../types";
import { Modal } from "./Modal";

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
    { page: "check-in", title: t.checkInInstructions, icon: <KeyRound /> },
    { page: "guide", title: t.houseGuide, icon: <FileText /> },
    { page: "photos", title: t.yourHome, icon: <Images /> },
    { page: "rules", title: t.houseRules, icon: <Heart /> },
    { page: "wifi", title: t.wifi, icon: <Wifi /> },
    { page: "nearby", title: t.exploreNearby, icon: <MapPin /> },
    { page: "checkout", title: t.checkout, icon: <DoorOpen /> },
  ];

  return (
    <Modal id="guest-menu" label={t.guestGuide} onClose={close} className="backdrop:backdrop-blur-sm">
      <div className="absolute bottom-0 left-0 right-0 max-h-[calc(100dvh-env(safe-area-inset-top)-1rem)] overflow-y-auto rounded-t-[1.5rem] bg-[#f7f7f2] p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:p-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="min-w-0 pr-3 text-lg font-bold sm:text-xl">{t.guestGuide}</h2>
          <button onClick={close} aria-label={t.close ?? "Close"} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white">
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
              <span className="text-[#c91e40]">{item.icon}</span>
              <span className="text-sm font-semibold">{item.title}</span>
            </button>
          ))}
        </div>

        <a
          href={hostWhatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#d92148] py-4 font-semibold text-white"
        >
          <MessageCircle size={18} />
          {t.contactHost}
        </a>
      </div>
    </Modal>
  );
}
