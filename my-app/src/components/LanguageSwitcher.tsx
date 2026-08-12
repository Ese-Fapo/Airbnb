import type { Language, Translation } from "../types";

const languageOptions: {
  code: Language;
  label: string;
}[] = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
  { code: "es", label: "ES" },
];

export function LanguageSwitcher({
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
      className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[12px] font-semibold text-white backdrop-blur-md ${
        isHero ? "shadow-lg" : "border-[#e5e7df] bg-white text-[#17201c]"
      }`}
    >
      <span>{t.language}</span>
      <div className="inline-flex items-center gap-1">
        {languageOptions.map((option) => (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition ${
              language === option.code
                ? "bg-white text-[#ff385c]"
                : "bg-white/20 text-white/80 hover:bg-white/40"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
