import type { ReactNode } from "react";
import { ArrowLeft, Bell } from "lucide-react";

import type { Language, Page, Translation } from "../types";
import { LanguageSwitcher } from "./LanguageSwitcher";

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
    <main className="mx-auto min-h-screen w-full max-w-6xl bg-[#f7f7f2] px-4 pb-32 shadow-2xl max-[360px]:px-3 md:my-4 md:rounded-2xl md:px-6 md:pb-36">
      <header className="sticky top-0 z-20 -mx-4 mb-5 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 bg-[#f7f7f2]/95 px-4 py-3 backdrop-blur max-[360px]:-mx-3 max-[360px]:px-3 md:-mx-6 md:px-6 md:py-4">
        <button
          onClick={onBack ?? (() => navigate(backPage))}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm transition hover:bg-[#fff0f3] hover:text-[#ff385c]"
        >
          <ArrowLeft size={19} />
        </button>

        <h1 className="min-w-0 truncate text-center text-sm font-bold sm:text-base">{title}</h1>

        {t && language && setLanguage ? (
          <LanguageSwitcher language={language} setLanguage={setLanguage} t={t} />
        ) : (
          <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
            <Bell size={18} />
          </button>
        )}
      </header>

      <div className="space-y-4 md:space-y-5">{children}</div>
    </main>
  );
}
