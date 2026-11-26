import type { Metadata } from "next";
import Image from "next/image";
import { metaFor } from "@/lib/pages";
import Icon, { type IconName } from "@/components/Icon";
import styles from "./merci.module.css";

export const metadata: Metadata = metaFor("remerciement");

const voitures = [
  { img: "/cars/Audi-RS3-BERLINE-1024x768.jpg", alt: "Audi RS3 Berline rouge importée par GT Cars Import" },
  { img: "/cars/Bmw-M3-1024x768.jpg", alt: "BMW M3 verte importée par GT Cars Import" },
  { img: "/cars/Dodge-Challenger-Scat-Pack-1024x768.jpg", alt: "Dodge Challenger Scat Pack bleue importée par GT Cars Import" },
  { img: "/cars/Dodge-Charger-Scat-1024x768.jpg", alt: "Dodge Charger Scat Pack orange importée par GT Cars Import" },
  { img: "/cars/Mercedes-Benz-GLC-43-AMG-Coupe-2-1024x768.jpg", alt: "Mercedes-AMG GLC 43 Coupé blanc importé par GT Cars Import" },
  { img: "/cars/Porsche-911-992-Turbo-S-1024x768.jpg", alt: "Porsche 911 992 Turbo S blanche importée par GT Cars Import" },
];

const atouts: { icon: IconName; label: string }[] = [
  { icon: "search", label: "Historique et kilométrages vérifiés" },
  { icon: "award", label: "Réactivité, disponibilité, efficacité" },
  { icon: "truck", label: "Livraison par camion en 10 jours dans toute la France" },
  { icon: "key", label: "Prestation clés en main" },
  { icon: "shield", label: "Transactions bancaires sécurisées" },
  { icon: "car", label: "Essai routier effectué par les experts allemands avant l'achat" },
];

export default function PageDeRemerciement() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────── */}
      <section className={styles.hero}>
        <Image src="/hero.webp" alt="" fill priority sizes="100vw" className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>
            <span aria-hidden="true">✅</span> Votre demande d&apos;importation a bien été reçue&nbsp;!
          </h1>
          <p className={styles.heroText}>
            Notre équipe analyse votre demande et vous contacte sous 72h.
          </p>
          <a
            href="https://www.instagram.com/gt_cars_import/"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.heroBtn}`}
          >
            <Icon name="instagram" size={18} /> Instagram
          </a>
        </div>
      </section>

      {/* ── GALERIE ──────────────────────────────── */}
      <section className={styles.gallery}>
        <div className={`container ${styles.galleryGrid}`}>
          {voitures.map((v) => (
            <div key={v.img} className={styles.galleryItem}>
              <Image src={v.img} alt={v.alt} fill sizes="(min-width: 768px) 45vw, 100vw" />
            </div>
          ))}
        </div>
      </section>

      {/* ── ATOUTS ───────────────────────────────── */}
      <section className={styles.atouts}>
        <div className={`container ${styles.atoutsGrid}`}>
          {atouts.map((a) => (
            <div key={a.label} className={styles.atout}>
              <span className={styles.atoutIcon}><Icon name={a.icon} size={44} /></span>
              <p className={styles.atoutLabel}>{a.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
