export const guestGuideUrl = "https://airbnb-xi-sepia.vercel.app/";

/** Keep shared links on the public homepage, including from previews and subpages. */
export async function shareGuestGuide(title: string, text: string): Promise<"shared" | "cancelled" | "unavailable"> {
  const data = { title, text, url: guestGuideUrl };
  if (typeof navigator.share !== "function") return "unavailable";
  try {
    if (navigator.canShare && !navigator.canShare(data)) return "unavailable";
    await navigator.share(data);
    return "shared";
  } catch (error) {
    // Closing the device's share sheet is a normal action, not an error.
    return error instanceof Error && error.name === "AbortError" ? "cancelled" : "unavailable";
  }
}
