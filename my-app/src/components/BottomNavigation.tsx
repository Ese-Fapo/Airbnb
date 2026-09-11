import { FileText, Home, MapPin, MessageCircle } from "lucide-react";

import { hostWhatsappUrl } from "../data/contact";
import type { Page, Translation } from "../types";

export function BottomNavigation({
  page,
  t,
  navigate,
}: {
  page: Page;
  t: Translation;
  navigate: (page: Page) => void;
}) {
  const guidePages: Page[] = [
    "guide",
    "before-arrive",
    "check-in",
    "amenities",
    "how-things-work",
    "trash-recycling",
    "emergency",
    "rules",
    "wifi",
    "checkout",
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 z-30 w-full max-w-6xl -translate-x-1/2 border-t border-[#e4e6dc] bg-white/95 px-2 pb-[calc(env(safe-area-inset-bottom)+8px)] pt-2 shadow-[0_-5px_25px_rgba(0,0,0,0.05)] backdrop-blur sm:px-4">
      <div className="grid grid-cols-4">
        <BottomItem active={page === "home"} icon={<Home />} label={t.home} onClick={() => navigate("home")} />
        <BottomItem active={guidePages.includes(page)} icon={<FileText />} label={t.guide} onClick={() => navigate("guide")} />
        <BottomItem active={page === "nearby"} icon={<MapPin />} label={t.explore} onClick={() => navigate("nearby")} />
        <BottomItem active={false} href={hostWhatsappUrl} icon={<MessageCircle />} label={t.contact} />
      </div>
    </nav>
  );
}

function BottomItem({
  icon,
  label,
  active,
  onClick,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick?: () => void;
  href?: string;
}) {
  const className = `flex min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-2 text-[10px] font-medium transition ${
    active ? "text-[#ff385c]" : "text-gray-500"
  }`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        <div>{icon}</div>
        <span className="max-w-full truncate">{label}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      <div>{icon}</div>
      <span className="max-w-full truncate">{label}</span>
    </button>
  );
}
