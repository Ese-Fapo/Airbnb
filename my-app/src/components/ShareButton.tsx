import { useRef, useState } from "react";
import { Check, Copy, Share2, X } from "lucide-react";
import type { Language } from "../types";
import { guestGuideUrl, shareGuestGuide } from "../data/sharing";
import { Modal } from "./Modal";

const labels = {
  en: {
    title: "Share guest guide", close: "Close sharing", description: "Send this guide to your travel companions or open it on another device.",
    share: "Share link", copy: "Copy link", copied: "Link copied", failed: "Copy isn’t available. Select the link above and copy it manually.",
    unavailable: "Device sharing isn’t available. You can copy the link below.", shared: "Link shared", link: "Guest guide link",
    message: "Everything you need for your stay at Real Parque Guesthouse.",
  },
  pt: {
    title: "Compartilhar guia", close: "Fechar compartilhamento", description: "Envie este guia para quem viaja com você ou abra em outro dispositivo.",
    share: "Compartilhar link", copy: "Copiar link", copied: "Link copiado", failed: "Não foi possível copiar. Selecione o link acima e copie manualmente.",
    unavailable: "O compartilhamento do dispositivo não está disponível. Copie o link abaixo.", shared: "Link compartilhado", link: "Link do guia",
    message: "Tudo para sua estadia na Hospedaria Real Parque.",
  },
  es: {
    title: "Compartir guía", close: "Cerrar opciones de compartir", description: "Envía esta guía a tus acompañantes o ábrela en otro dispositivo.",
    share: "Compartir enlace", copy: "Copiar enlace", copied: "Enlace copiado", failed: "No se pudo copiar. Selecciona el enlace de arriba y cópialo manualmente.",
    unavailable: "No se puede compartir desde este dispositivo. Copia el enlace de abajo.", shared: "Enlace compartido", link: "Enlace de la guía",
    message: "Todo para tu estancia en la Casa de Huéspedes Real Parque.",
  },
};

export function ShareButton({ language, variant = "page" }: { language: Language; variant?: "hero" | "page" }) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);
  const linkRef = useRef<HTMLInputElement>(null);
  const copy = labels[language];

  const share = async () => {
    setBusy(true);
    setStatus("");
    try {
      const result = await shareGuestGuide("Hospedaria Real Parque", copy.message);
      if (result === "unavailable") setStatus(copy.unavailable);
      if (result === "shared") setStatus(copy.shared);
    } finally {
      setBusy(false);
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(guestGuideUrl);
      setCopied(true);
      setStatus(copy.copied);
    } catch {
      setCopied(false);
      setStatus(copy.failed);
      linkRef.current?.focus();
      linkRef.current?.select();
    }
  };

  return (
    <>
      <button type="button" onClick={() => { setStatus(""); setCopied(false); setOpen(true); }}
        aria-label={copy.title} title={copy.title} aria-haspopup="dialog" aria-expanded={open}
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border shadow-sm transition ${variant === "hero" ? "border-white/25 bg-black/25 text-white backdrop-blur-md hover:bg-black/40" : "border-[#e5e7df] bg-white text-[#17201c] hover:bg-[#fff0f3] hover:text-[#c91e40]"}`}>
        <Share2 size={20} aria-hidden="true" />
      </button>
      {open && (
        <Modal label={copy.title} onClose={() => setOpen(false)}>
          <div className="flex min-h-full items-center justify-center p-4" onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
            <section className="max-h-[85dvh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-5 shadow-xl sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold">{copy.title}</h2>
                <button type="button" autoFocus onClick={() => setOpen(false)} aria-label={copy.close} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg hover:bg-[#fff0f3]"><X size={20} aria-hidden="true" /></button>
              </div>
              <p className="mt-2 text-sm leading-6 text-[#5f6b65]">{copy.description}</p>
              <label className="mt-5 block text-sm font-semibold" htmlFor="share-guide-link">{copy.link}</label>
              <input ref={linkRef} id="share-guide-link" type="url" readOnly value={guestGuideUrl} onFocus={(event) => event.currentTarget.select()} className="mt-2 w-full rounded-lg border border-[#dfe4dd] bg-[#f7f7f2] p-3 text-sm" />
              <div className="mt-4 flex flex-wrap gap-3">
                <button type="button" onClick={share} disabled={busy} className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-[#d92148] px-4 py-3 text-sm font-semibold text-white hover:bg-[#c91e40] disabled:opacity-60"><Share2 size={18} aria-hidden="true" />{copy.share}</button>
                <button type="button" onClick={copyLink} className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg border border-[#dfe4dd] px-4 py-3 text-sm font-semibold hover:bg-[#f7f7f2]">{copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}{copied ? copy.copied : copy.copy}</button>
              </div>
              <p role="status" aria-live="polite" className="mt-3 text-sm leading-5 text-[#0f766e]">{status}</p>
            </section>
          </div>
        </Modal>
      )}
    </>
  );
}
