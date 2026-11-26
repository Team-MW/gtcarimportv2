import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";
import { PAGES } from "@/lib/pages";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

// Valeurs par défaut uniquement : chaque page déclare sa canonique et son hreflang (voir lib/pages.ts).
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGES.home.title,
  description: PAGES.home.description,
  keywords:
    "import véhicule allemand, import voiture Allemagne, importation véhicule Suisse, courtier automobile, GT Cars Import, mandataire auto Allemagne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <div style={{ paddingTop: "0" }}>
          {children}
        </div>
        <Footer />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "@id": "https://gtcarsimport.com/#organization",
              "name": "GT Cars Import",
              "alternateName": ["GTCARSIMPORT", "GT Cars Import Bâle"],
              "legalName": "GTA Invest",
              "identifier": {
                "@type": "PropertyValue",
                "propertyID": "CHE (Registre du Commerce suisse)",
                "value": "CHE-218.075.398"
              },
              "image": "https://gtcarsimport.com/logo.webp",
              "logo": "https://gtcarsimport.com/logo.webp",
              "url": "https://gtcarsimport.com",
              "telephone": "+33970702675",
              "email": "gtcarsimport44@gmail.com",
              "sameAs": ["https://www.instagram.com/gt_cars_import/"],
              "areaServed": ["CH", "Europe"],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "10:00",
                  "closes": "18:00"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "telephone": "+33970702675",
                "email": "gtcarsimport44@gmail.com",
                "url": "https://gtcarsimport.com/faire-une-demande/",
                "availableLanguage": ["fr"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Marktgasse 8",
                "addressLocality": "Bâle",
                "postalCode": "4051",
                "addressCountry": "CH"
              },
              "description": "Spécialiste de l'importation de véhicules allemands. Recherche personnalisée, expertise physique et livraison clé en main dans toute l'Europe."
            })
          }}
        />

        <CookieConsent />

        <WhatsAppButton />
      </body>
    </html>
  );
}

