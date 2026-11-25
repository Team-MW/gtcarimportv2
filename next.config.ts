import type { NextConfig } from "next";

// Anciennes adresses du site WordPress -> nouvelles pages (redirections permanentes).
const legacyRedirects: [string, string][] = [
  // Version suisse de l'ancien site
  ["/ch", "/"],
  ["/ch/home-sw", "/"],
  ["/ch/a-propos-2", "/"],
  // Page À propos supprimée
  ["/a-propos", "/"],
  ["/ch/nos-importations-sw", "/importations/"],
  ["/ch/faq-sw", "/faq/"],
  ["/ch/faire-une-demande-sw", "/faire-une-demande/"],
  // Pages sans équivalent
  ["/page-de-remerciement", "/faire-une-demande/"],
  ["/home", "/"],
  // Adresses courtes utilisées pendant la refonte
  ["/contact", "/faire-une-demande/"],
  ["/confidentialite", "/politique-de-confidentialite/"],
  ["/cgv", "/conditions-generales-de-ventes/"],
  // Images indexées de l'ancien site
  ["/wp-content/uploads/2025/04/Audi-RS3-BERLINE-1024x768.jpg", "/cars/Audi-RS3-BERLINE-1024x768.jpg"],
  ["/wp-content/uploads/2025/04/Bmw-M3-MALUS-1024x768.jpg", "/cars/Bmw-M3-1024x768.jpg"],
  ["/wp-content/uploads/2025/04/Dodge-Challenger-Scat-Pack-MALUS-ALPINE-1024x768.jpg", "/cars/Dodge-Challenger-Scat-Pack-1024x768.jpg"],
  ["/wp-content/uploads/2025/04/Dodge-Charger-Scat-1024x768.jpg", "/cars/Dodge-Charger-Scat-1024x768.jpg"],
  ["/wp-content/uploads/2025/04/Mercedes-Benz-GLC-43-AMG-Coupe-2-1024x768.jpg", "/cars/Mercedes-Benz-GLC-43-AMG-Coupe-2-1024x768.jpg"],
  ["/wp-content/uploads/2025/04/Porsche-911-992-Turbo-S-1024x768.jpg", "/cars/Porsche-911-992-Turbo-S-1024x768.jpg"],
  ["/wp-content/uploads/2025/04/banner-gtcarsimport3-min-scaled.webp", "/hero.webp"],
];

const nextConfig: NextConfig = {
  // L'ancien site utilisait des adresses avec barre finale (/faq/) : on les garde à l'identique.
  trailingSlash: true,
  async redirects() {
    return legacyRedirects.flatMap(([source, destination]) => {
      const isFile = /\.[a-z0-9]+$/i.test(source);
      const sources = isFile ? [source] : [source, `${source}/`];
      return sources.map((s) => ({ source: s, destination, permanent: true }));
    });
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://form.jotform.com https://*.jotform.com",
              "frame-src 'self' https://form.jotform.com https://*.jotform.com",
              "img-src 'self' data: https: blob:",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.jotform.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "connect-src 'self' https://*.jotform.com wss://*.jotform.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
