import type { Metadata } from "next";
import { pageMetadata } from "./seo";
import type { Region } from "./region";

/**
 * Registre des pages du site (adresses françaises).
 * Chaque page existe aussi en version suisse : /ch/…-sw/.
 */
export const PAGES = {
  home: {
    path: "/",
    title: "GT Cars Import | Import de véhicules allemands",
    description:
      "Courtier spécialiste de l'import de véhicules allemands. Recherche personnalisée, expertise physique, immatriculation et livraison clé en main en Suisse et en Europe.",
    changeFrequency: "weekly",
    priority: 1,
  },
  importations: {
    path: "/importations/",
    title: "Nos Importations | GT Cars Import",
    description: "Découvrez notre processus d'importation de véhicules allemands et nos packs disponibles.",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  demande: {
    path: "/faire-une-demande/",
    title: "Faire une demande | GT Cars Import",
    description: "Faites une demande personnalisée d'importation de véhicule. Notre équipe vous recontacte sous 24h.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  faq: {
    path: "/faq/",
    title: "FAQ | GT Cars Import",
    description: "Toutes les réponses à vos questions sur l'importation de véhicules depuis l'Allemagne avec GT Cars Import.",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  remerciement: {
    path: "/page-de-remerciement/",
    title: "Merci pour votre demande | GT Cars Import",
    description: "Votre demande d'importation a bien été reçue. Notre équipe vous contacte sous 72h.",
    noindex: true,
  },
  mentions: {
    path: "/mentions-legales/",
    title: "Mentions Légales | GT Cars Import",
    description: "Mentions légales et informations juridiques du site GT Cars Import.",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  confidentialite: {
    path: "/politique-de-confidentialite/",
    title: "Politique de Confidentialité | GT Cars Import",
    description: "Politique de confidentialité et protection des données personnelles de GT Cars Import.",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  cgv: {
    path: "/conditions-generales-de-ventes/",
    title: "Conditions Générales de Vente | GT Cars Import",
    description: "Conditions générales de vente de GT Cars Import.",
    changeFrequency: "yearly",
    priority: 0.3,
  },
} satisfies Record<string, PageEntry>;

export interface PageEntry {
  path: string;
  title: string;
  description: string;
  changeFrequency?: "weekly" | "monthly" | "yearly";
  priority?: number;
  /** Page exclue des moteurs de recherche et du sitemap. */
  noindex?: boolean;
}

export type PageKey = keyof typeof PAGES;

/** Métadonnées d'une page pour la version française ou suisse. */
export function metaFor(key: PageKey, region: Region = "fr"): Metadata {
  const p: PageEntry = PAGES[key];
  const meta = pageMetadata({ title: p.title, description: p.description, path: p.path, region });
  return p.noindex ? { ...meta, robots: { index: false, follow: true } } : meta;
}
