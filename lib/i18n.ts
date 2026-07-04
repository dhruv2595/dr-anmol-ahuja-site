export type Lang = "en" | "hi";

/** Core pages that exist in both languages ("" = home). */
const translatedPaths = ["", "/about-us", "/contact-us"];

/** Path of the same page in the other language; untranslated pages fall back
    to the Hindi home / their English original. */
export function switchLangPath(pathname: string, to: Lang): string {
  const bare = pathname.replace(/^\/hi(?=\/|$)/, "");
  const norm = bare === "/" ? "" : bare;
  if (to === "hi") {
    return translatedPaths.includes(norm) ? `/hi${norm}` || "/hi" : "/hi";
  }
  return norm === "" ? "/" : norm;
}

export function langFromPath(pathname: string): Lang {
  return pathname === "/hi" || pathname.startsWith("/hi/") ? "hi" : "en";
}

/** Home href for a language. */
export const homeHref = (lang: Lang) => (lang === "hi" ? "/hi" : "/");
