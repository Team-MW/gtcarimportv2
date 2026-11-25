import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Icon, { type IconName } from "@/components/Icon";
import styles from "./importations.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Nos Importations | GT Cars Import",
  description: "Découvrez notre processus d'importation de véhicules allemands et nos packs disponibles.",
  path: "/importations",
});

const categories: { icon: IconName; name: string; ex: string; desc: string }[] = [
  { icon: "gauge", name: "Sportives", ex: "BMW M, AMG, RS, GTI, Type R…", desc: "Des performances exceptionnelles importées directement depuis le marché allemand." },
  { icon: "gem", name: "Luxe & Prestige", ex: "Porsche, Audi A8, Mercedes Classe S…", desc: "Le summum du raffinement, avec des options souvent indisponibles ailleurs." },
  { icon: "suv", name: "SUV & 4x4", ex: "BMW X5, GLE, Cayenne, Q7…", desc: "Polyvalence et puissance pour tous vos trajets, à prix optimisé." },
  { icon: "car", name: "Citadines & Compactes", ex: "Golf, A3, Classe A, 1 Series…", desc: "Les modèles les plus demandés, souvent 20–25% moins chers que sur le marché local." },
  { icon: "van", name: "Utilitaires", ex: "Sprinter, Crafter, Transit…", desc: "Des utilitaires récents et bien entretenus pour votre activité professionnelle." },
  { icon: "plug", name: "Électriques & Hybrides", ex: "iX, EQC, e-tron, Taycan…", desc: "La mobilité de demain à des tarifs compétitifs grâce au marché allemand." },
];

const etapes = [
  { num: "01", title: "Votre demande", desc: "Vous nous transmettez vos critères : marque, modèle, budget, options souhaitées." },
  { num: "02", title: "Recherche Active", desc: "Nous parcourons le marché allemand pour trouver les meilleures offres correspondant à votre profil." },
  { num: "03", title: "Expertise Physique", desc: "Un cabinet indépendant réalise une inspection complète et un essai routier sur place." },
  { num: "04", title: "Rapport & Validation", desc: "Vous recevez un rapport complet Carvertical + avis de nos experts avant de décider." },
  { num: "05", title: "Achat & Paiement", desc: "Transaction sécurisée. Nous gérons l'achat, la douane, la préparation au MFK et l'immatriculation suisse." },
  { num: "06", title: "Livraison", desc: "Votre voiture est livrée à Bâle, ou à domicile et en hôtel partout en Suisse en option. Clés en main." },
];

const galleryItems = [
  {
    name: "Audi RS3 Berline",
    img: "/cars/Audi-RS3-BERLINE-1024x768.jpg",
    desc: "Importation & Livraison clé en main",
  },
  {
    name: "BMW M3 Competition",
    img: "/cars/Bmw-M3-1024x768.jpg",
    desc: "Recherche sur mesure",
  },
  {
    name: "Dodge Challenger Scat Pack",
    img: "/cars/Dodge-Challenger-Scat-Pack-1024x768.jpg",
    desc: "Import & Homologation",
  },
  {
    name: "Dodge Charger Scat Pack",
    img: "/cars/Dodge-Charger-Scat-1024x768.jpg",
    desc: "Expertise physique sur place",
  },
  {
    name: "Mercedes-AMG GLC 43 Coupé",
    img: "/cars/Mercedes-Benz-GLC-43-AMG-Coupe-2-1024x768.jpg",
    desc: "Recherche sur mesure",
  },
  {
    name: "Porsche 911 Turbo S",
    img: "/cars/Porsche-911-992-Turbo-S-1024x768.jpg",
    desc: "Importation & Livraison clé en main",
  },
];


export default function Importations() {
  return (
    <main>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <p className="section-eyebrow">Toutes marques — Toutes gammes</p>
          <h1 className="section-title">Nos <span>Importations</span></h1>
          <div className="red-line" />
          <p className="section-subtitle">
            Nous importons tout type de véhicule directement depuis l'Allemagne, avec un service
            clé en main et une expertise reconnue depuis 2020.
          </p>
        </div>
      </section>

      {/* Catégories (Blanc) */}
      <section className="section-light section-pad">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-eyebrow">Ce que nous importons</p>
            <h2 className="section-title" style={{ color: "#111" }}>Toutes les <span>catégories</span></h2>
            <div className="red-line center" />
          </div>
          <div className={styles.catGrid}>
            {categories.map((c) => (
              <div key={c.name} className={styles.catCard}>
                <span className="icon-tile"><Icon name={c.icon} /></span>
                <h3 className={styles.catName}>{c.name}</h3>
                <p className={styles.catDesc}>{c.desc}</p>
                <p className={styles.catEx}>{c.ex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Importations Récentes */}
      <section className="section-dark section-pad">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-eyebrow">Nos dernières livraisons</p>
            <h2 className="section-title">Véhicules <span>importés</span></h2>
            <div className="red-line center" />
          </div>

          <div className={styles.gallery}>
            {galleryItems.map((item) => (
              <figure key={item.name} className={styles.galleryCard}>
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
                <figcaption className={styles.galleryCaption}>
                  <span className={styles.galleryName}>{item.name}</span>
                  <span className={styles.galleryDesc}>{item.desc}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Processus (Noir) */}
      <section className="section-dark-2 section-pad" style={{ borderTop: "1px solid var(--border-dark)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-eyebrow">Notre méthode</p>
            <h2 className="section-title">Comment ça <span>fonctionne ?</span></h2>
            <div className="red-line center" />
          </div>
          <ol className={styles.steps}>
            {etapes.map((e) => (
              <li key={e.num} className={styles.step}>
                <span className={styles.stepNum}>{e.num}</span>
                <h3 className={styles.stepTitle}>{e.title}</h3>
                <p className={styles.stepDesc}>{e.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="section-light section-pad">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title" style={{ color: "#111" }}>Prêt à commencer votre <span>projet</span> ?</h2>
          <div className="red-line center" />
          <p style={{ color: "var(--ink-soft)", maxWidth: "600px", margin: "0 auto 2rem", lineHeight: "1.8" }}>
            Remplissez notre formulaire de demande et un expert vous contacte sous 24h.
          </p>
          <Link href="/faire-une-demande" className="btn btn-primary btn-lg">
            Faire une demande
          </Link>
        </div>
      </section>
    </main>
  );
}
