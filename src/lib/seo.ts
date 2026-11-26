import type { Metadata } from "next";
import { type Region, toFrench, toSwiss } from "./region";

export const SITE_URL = "https://gtcarsimport.com";
export const SITE_NAME = "GT Cars Import";

const OG_IMAGE = { url: "/hero.webp", width: 2560, height: 1505, alt: "GT Cars Import" };

interface PageMeta {
  title: string;
  description: string;
  /** Chemin de la page française, ex. "/faq/". La version suisse en est déduite. */
  path: string;
  /** Version du site : "fr" (par défaut) ou "ch" (adresses /ch/…-sw/). */
  region?: Region;
}

/**
 * Métadonnées d'une page : chaque page déclare sa propre URL canonique et le lien
 * vers sa jumelle (hreflang fr-FR / fr-CH).
 * Ne pas mettre `alternates.canonical` dans le layout racine, sinon toutes
 * les pages héritent de la canonique de l'accueil.
 */
export function pageMetadata({ title, description, path, region = "fr" }: PageMeta): Metadata {
  const frPath = toFrench(path);
  const chPath = toSwiss(frPath);
  const url = region === "ch" ? chPath : frPath;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { "fr-FR": frPath, "fr-CH": chPath, "x-default": frPath },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: region === "ch" ? "fr_CH" : "fr_FR",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
