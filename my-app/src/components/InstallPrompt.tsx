import { useEffect, useState } from "react";
import { CheckCircle2, Download, X } from "lucide-react";

import type { Language } from "../types";

type InstallEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const labels: Record<Language, { install: string; dismiss: string; success: string; dismissSuccess: string; ios: string; other: string }> = {
  en: {
    install: "Install",
    dismiss: "Dismiss install prompt",
    success: "App installed successfully! You can now open it from your home screen or app launcher.",
    dismissSuccess: "Dismiss installation confirmation",
    ios: "Tap Share, then Add to Home Screen.",
    other: "Open your browser menu and choose Install app or Add to Home Screen.",
  },
  pt: {
    install: "Instalar",
    dismiss: "Fechar aviso de instala\u00e7\u00e3o",
    success: "Aplicativo instalado com sucesso! Agora você pode abri-lo pela tela inicial ou pela lista de aplicativos.",
    dismissSuccess: "Fechar confirmação de instalação",
    ios: "Toque em Compartilhar e depois em Adicionar \u00e0 Tela de In\u00edcio.",
    other: "Abra o menu do navegador e escolha Instalar app ou Adicionar \u00e0 Tela de In\u00edcio.",
  },
  es: {
    install: "Instalar",
    dismiss: "Cerrar aviso de instalaci\u00f3n",
    success: "¡Aplicación instalada correctamente! Ahora puedes abrirla desde la pantalla de inicio o la lista de aplicaciones.",
    dismissSuccess: "Cerrar confirmación de instalación",
    ios: "Toca Compartir y luego Agregar a pantalla de inicio.",
    other: "Abre el men\u00fa del navegador y elige Instalar app o Agregar a pantalla de inicio.",
  },
};

export function InstallPrompt({ language }: { language: Language }) {
  const [installEvent, setInstallEvent] = useState<InstallEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [installed, setInstalled] = useState(
    () => window.matchMedia("(display-mode: standalone)").matches ||
      Boolean((navigator as Navigator & { standalone?: boolean }).standalone),
  );

  useEffect(() => {
    const onBeforeInstall = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as InstallEvent);
      setShowInstructions(false);
    };
    const onInstalled = () => {
      setInstalled(true);
      setInstallEvent(null);
      setShowInstructions(false);
      setShowSuccess(true);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (showSuccess) {
    return (
      <aside className="fixed bottom-24 right-4 z-40 flex max-w-[calc(100vw-2rem)] items-start gap-3 rounded-xl border border-[#b9d8ce] bg-white p-4 shadow-xl sm:max-w-sm">
        <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-[#0f766e]" aria-hidden="true" />
        <p role="status" aria-live="polite" aria-atomic="true" className="text-sm font-medium leading-6 text-[#17201c]">
          {labels[language].success}
        </p>
        <button
          type="button"
          onClick={() => setShowSuccess(false)}
          aria-label={labels[language].dismissSuccess}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-gray-600 transition hover:bg-[#ecf3f2]"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </aside>
    );
  }

  if (dismissed || installed) return null;

  const dismiss = () => {
    setDismissed(true);
  };
  const install = async () => {
    if (!installEvent) {
      setShowInstructions(true);
      return;
    }
    try {
      await installEvent.prompt();
      await installEvent.userChoice;
    } catch {
      setShowInstructions(true);
    }
    setInstallEvent(null);
  };

  const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  return (
    <aside
      aria-label={labels[language].install}
      className="fixed bottom-24 right-4 z-40 max-w-[calc(100vw-2rem)] rounded-xl border border-[#ffd6de] bg-white p-2 shadow-xl"
    >
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={install}
          className="inline-flex items-center gap-2 rounded-lg bg-[#d92148] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c91e40]"
        >
          <Download size={16} />
          {labels[language].install}
        </button>
        <button
          type="button"
          onClick={dismiss}
          aria-label={labels[language].dismiss}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-gray-500 transition hover:bg-[#fff0f3] hover:text-[#c91e40]"
        >
          <X size={18} />
        </button>
      </div>
      {showInstructions && (
        <p className="max-w-xs px-2 pb-1 pt-2 text-xs leading-5 text-gray-600" role="status">
          {isIos ? labels[language].ios : labels[language].other}
        </p>
      )}
    </aside>
  );
}
