import type { Metadata } from "next";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    title: "GT Cars Import | Import de véhicules allemands",
    description:
      "Courtier spécialiste de l'import de véhicules allemands depuis 2020. Recherche personnalisée, expertise physique, immatriculation et livraison clé en main en Suisse et en Europe.",
    path: "/",
  }),
  keywords:
    "import véhicule allemand, import voiture Allemagne, importation véhicule Suisse, courtier automobile, GT Cars Import, mandataire auto Allemagne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CH">
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
              "foundingDate": "2020",
              "image": "https://gtcarsimport.com/logo.webp",
              "logo": "https://gtcarsimport.com/logo.webp",
              "url": "https://gtcarsimport.com",
              "telephone": "+33970702675",
              "email": "gtcarsimport44@gmail.com",
              "sameAs": ["https://www.instagram.com/gtcarsimport"],
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
                "url": "https://gtcarsimport.com/faire-une-demande",
                "availableLanguage": ["fr"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Marktgasse 8",
                "addressLocality": "Bâle",
                "postalCode": "4051",
                "addressCountry": "CH"
              },
              "description": "Spécialiste de l'importation de véhicules allemands depuis 2020. Recherche personnalisée, expertise physique et livraison clé en main dans toute l'Europe."
            })
          }}
        />

        {/* Floating WhatsApp CTA */}
        <div className="floating-whatsapp-cta">
          <a 
            href="https://wa.me/33970702675" 
            className="btn" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Nous contacter sur WhatsApp"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </body>
    </html>
  );
}

