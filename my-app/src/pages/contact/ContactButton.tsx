import { MessageCircle } from "lucide-react";

import { hostWhatsappUrl } from "../../data/contact";

export function ContactButton({ label }: { label: string }) {
  return (
    <a
      href={hostWhatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="app-contact-button fixed bottom-24 left-6 z-40 hidden items-center justify-center gap-2 rounded-lg bg-[#d92148] px-7 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:scale-[1.02] md:flex"
    >
      <MessageCircle size={18} />
      {label}
    </a>
  );
}
