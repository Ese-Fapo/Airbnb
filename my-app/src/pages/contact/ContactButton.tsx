import { MessageCircle } from "lucide-react";

import { hostWhatsappUrl } from "../../data/contact";

export function ContactButton({ label }: { label: string }) {
  return (
    <a
      href={hostWhatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center justify-center gap-2 rounded-lg bg-[#ff385c] px-7 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:scale-[1.02]"
    >
      <MessageCircle size={18} />
      {label}
    </a>
  );
}
