import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

import type { Language, Page, Translation } from "../types";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ShareButton } from "./ShareButton";

export function PageLayout({
  title,
  navigate,
  children,
  language,
  setLanguage,
  t,
  backPage = "home",
  onBack,
}: {
  title: string;
  navigate: (page: Page) => void;
  children: ReactNode;
  language?: Language;
  setLanguage?: (language: Language) => void;
  t?: Translation;
  backPage?: Page;
  onBack?: () => void;
}) {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto min-h-screen w-full max-w-6xl bg-[#f7f7f2] px-4 pb-[calc(env(safe-area-inset-bottom)+8rem)] shadow-2xl max-[360px]:px-3 md:my-4 md:rounded-2xl md:px-6 md:pb-36">
      <header className="sticky top-0 z-20 -mx-4 mb-5 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 gap-y-2 bg-[#f7f7f2]/95 px-4 py-3 backdrop-blur max-[360px]:-mx-3 max-[360px]:px-3 md:-mx-6 md:grid-cols-[auto_minmax(0,1fr)_auto] md:px-6 md:py-4">
        <button
          onClick={onBack ?? (() => navigate(backPage))}
          aria-label={language === "pt" ? "Voltar" : language === "es" ? "Volver" : "Back"}
          className="ml-14 flex h-11 w-11 items-center justify-center rounded-lg bg-white shadow-sm transition hover:bg-[#fff0f3] hover:text-[#c91e40] md:ml-0"
        >
          <ArrowLeft size={19} />
        </button>

        <div className="col-span-2 row-start-2 flex min-w-0 items-center justify-center gap-3 md:col-span-1 md:row-start-auto">
          <h1 className="min-w-0 text-center text-sm font-bold sm:text-base">{title}</h1>
          {language && <ShareButton language={language} />}
        </div>

        {t && language && setLanguage ? (
          <div className="justify-self-end"><LanguageSwitcher language={language} setLanguage={setLanguage} t={t} /></div>
        ) : null}
      </header>

      <div className="space-y-4 md:space-y-5">{children}</div>
    </main>
  );
}
