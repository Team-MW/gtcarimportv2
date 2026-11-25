import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Icon, { type IconName } from "@/components/Icon";
import styles from "./a-propos.module.css";

export const metadata: Metadata = pageMetadata({
  title: "À propos | GT Cars Import",
  description: "Découvrez GT Cars Import, spécialiste de l'importation de véhicules allemands depuis 2020. Notre équipe d'experts à votre service.",
  path: "/a-propos",
});

const team = [
  { name: "Patrick Rownicki", role: "Expert Allemand", initials: "PR" },
  { name: "Jürgen Schneller", role: "Service Immatriculation", initials: "JS" },
  { name: "Olivier Kammerer", role: "Commercial", initials: "OK" },
  { name: "Eduar. Just", role: "Expert Allemand", initials: "EJ" },
];

const valeurs: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "award",
    title: "Expertise",
    desc: "Nos experts possèdent une grande expérience que nous mettons à votre disposition.",
  },
  {
    icon: "shield",
    title: "Qualité",
    desc: "Nous vous proposons des véhicules de qualité à prix réduits.",
  },
  {
    icon: "lock",
    title: "Sécurité Bancaire",
    desc: "Toutes les transactions bancaires sont sécurisées par nos experts Allemands.",
  },
];

const avantages = [
  "Historique et kilométrages vérifiés",
  "Réactivité, disponibilité, efficacité",
  "Livraison par camion en Suisse et dans toute l'Europe",
  "Prestation clé en main",
  "Transactions bancaires sécurisées",
  "Essai routier effectué par les experts allemands avant l'achat",
];

export default function APropos() {
  return (
    <main>
      {/* ── PAGE HEADER ───────────────────────────── */}
      <section className="page-header">
        <div className="container">
          <p className="section-eyebrow">Qui sommes-nous</p>
          <h1 className="section-title">À propos de <span>GT Cars Import</span></h1>
          <div className="red-line" />
          <p className="section-subtitle">
            Créée en 2020, GT Cars Import est spécialisée dans la recherche et l'importation
            de véhicules toutes gammes et toutes marques directement depuis l'Allemagne.
          </p>
        </div>
      </section>

      {/* ── PRÉSENTATION (BLANC) ─────────────────── */}
      <section className="section-light section-pad">
        <div className="container">
          <div className={styles.twoColGrid}>
            <div>
              <p className="section-eyebrow">Notre histoire</p>
              <h2 className="section-title" style={{ color: "#111" }}>Une équipe de <span>passionnés</span></h2>
              <div className="red-line" />
              <p className={styles.bodyText}>
                Notre équipe de passionnés est à votre disposition pour vous aider à trouver le véhicule
                de vos rêves. Nous vous offrons un service clé en main et vous n'avez aucune démarche
                à effectuer dans votre futur projet automobile.
              </p>
              <p className={styles.bodyText} style={{ marginBottom: "2rem" }}>
                Nous réalisons toutes les étapes de votre projet d'importation, de la <strong>recherche du
                véhicule</strong> à la <strong>livraison à votre domicile</strong>, en passant par l'expertise
                physique, la négociation et l'immatriculation.
              </p>
              <div className={styles.avantagesList}>
                {avantages.map((a) => (
                  <div key={a} className={styles.avantageItem}>
                    <Icon name="check" size={17} />
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Valeurs */}
            <div className={styles.valeursList}>
              {valeurs.map((v) => (
                <div key={v.title} className={styles.valeurCard}>
                  <span className="icon-tile"><Icon name={v.icon} /></span>
                  <div>
                    <h3 className={styles.valeurTitle}>{v.title}</h3>
                    <p className={styles.valeurDesc}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE (NOIR) ─────────────────────────── */}
      <section className="section-dark-2 section-pad">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">Derrière GT Cars Import</p>
            <h2 className="section-title">Notre <span>Équipe</span></h2>
            <div className="red-line" style={{ margin: "0 auto 1.5rem" }} />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Des professionnels passionnés d'automobile à votre service.
            </p>
          </div>
          <div className={styles.team}>
            {team.map((member) => (
              <div key={member.name} className={styles.member}>
                <div className={styles.memberInitials}>{member.initials}</div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL (BLANC) ──────────────────────── */}
      <section className="section-light section-pad">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">Prêt à vous lancer ?</p>
          <h2 className="section-title" style={{ color: "#111" }}>
            N'attendez plus et faites une<br /><span>demande personnalisée</span>
          </h2>
          <div className="red-line center" />
          <Link href="/faire-une-demande" className="btn btn-primary btn-lg" style={{ marginTop: "1rem" }}>
            Faire une demande
          </Link>
        </div>
      </section>
    </main>
  );
}
