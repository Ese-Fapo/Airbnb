import type { Page } from "../types";

export const pages = [
  "home", "photos", "getting-here", "guide", "before-arrive", "check-in",
  "amenities", "how-things-work", "trash-recycling", "emergency", "rules",
  "wifi", "nearby", "checkout",
] as const satisfies readonly Page[];

export function pageFromHash(hash: string): Page {
  const value = hash.replace(/^#/, "");
  return pages.find((page) => page === value) ?? "home";
}
