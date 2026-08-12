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
      className={`inline-flex items-center gap-1 rounded-lg border p-1 text-[12px] font-semibold shadow-sm backdrop-blur-md ${
        isHero
          ? "border-white/25 bg-black/25 text-white"
          : "border-[#e5e7df] bg-white text-[#17201c]"
      }`}
      aria-label={t.language}
    >
      <div className="inline-flex items-center gap-1">
        {languageOptions.map((option) => (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            className={`min-w-9 rounded-md px-2.5 py-1.5 text-[11px] font-bold transition ${
              language === option.code
                ? "bg-[#ff385c] text-white shadow-sm"
                : isHero
                  ? "text-white/80 hover:bg-white/15 hover:text-white"
                  : "text-[#68716c] hover:bg-[#fff0f3] hover:text-[#ff385c]"
            }`}
            aria-pressed={language === option.code}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
