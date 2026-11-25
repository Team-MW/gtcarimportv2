import type { Metadata } from "next";

export const SITE_URL = "https://gtcarsimport.com";
export const SITE_NAME = "GT Cars Import";

const OG_IMAGE = { url: "/hero.webp", width: 2560, height: 1505, alt: "GT Cars Import" };

interface PageMeta {
  title: string;
  description: string;
  /** Chemin de la page, ex. "/faq". Sert à l'URL canonique. */
  path: string;
}

/**
 * Métadonnées d'une page : chaque page déclare sa propre URL canonique.
 * Ne pas mettre `alternates.canonical` dans le layout racine, sinon toutes
 * les pages héritent de la canonique de l'accueil.
 */
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "fr_CH",
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
