import type { ReactNode } from "react";

export type Page =
  | "home"
  | "photos"
  | "getting-here"
  | "guide"
  | "before-arrive"
  | "check-in"
  | "amenities"
  | "how-things-work"
  | "trash-recycling"
  | "emergency"
  | "rules"
  | "wifi"
  | "nearby"
  | "checkout";

export type Language = "en" | "pt" | "es";

export type Translation = Record<string, string>;

export type PageProps = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
  navigate: (page: Page) => void;
};

export type WithChildren = {
  children: ReactNode;
};
