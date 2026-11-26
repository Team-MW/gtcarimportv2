/**
 * Deux versions du site :
 *  - France : adresses d'origine (/faq/, /importations/…)
 *  - Suisse : préfixe "/ch" + suffixe "-sw" (/ch/home-sw/, /ch/faq-sw/…),
 *    comme sur l'ancien site WordPress.
 */
export type Region = "fr" | "ch";

const CH = "/ch";
const SW = "-sw";

function splitHref(href: string) {
  const m = href.match(/^([^?#]*)(.*)$/);
  return { path: m?.[1] ?? href, rest: m?.[2] ?? "" };
}

const withSlash = (p: string) => (p.endsWith("/") ? p : `${p}/`);

/** Vrai si l'adresse appartient à la version suisse (/ch/…-sw/). */
export function isSwissPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  return /^\/ch\/[^/]+-sw\/?$/.test(splitHref(pathname).path);
}

/** Adresse française -> adresse suisse ("/" -> "/ch/home-sw/", "/faq" -> "/ch/faq-sw/"). */
export function toSwiss(href: string): string {
  if (!href.startsWith("/")) return href; // liens externes, ancres, tel:, mailto:
  const { path, rest } = splitHref(href);
  if (isSwissPath(path)) return withSlash(path) + rest;
  if (path === "" || path === "/") return `${CH}/home${SW}/` + rest;
  return `${CH}${path.replace(/\/$/, "")}${SW}/` + rest;
}

/** Adresse suisse -> adresse française ("/ch/home-sw/" -> "/"). */
export function toFrench(href: string): string {
  const { path, rest } = splitHref(href);
  if (!isSwissPath(path)) return withSlash(path) + rest;
  const base = path.replace(/\/$/, "").slice(CH.length, -SW.length);
  return (base === "/home" ? "/" : withSlash(base)) + rest;
}

/** Adapte un lien interne à la version du site sur laquelle on se trouve. */
export function localize(href: string, region: Region): string {
  if (!href.startsWith("/")) return href;
  return region === "ch" ? toSwiss(href) : href;
}
