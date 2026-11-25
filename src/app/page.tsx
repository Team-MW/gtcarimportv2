import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/Counter";
import Icon, { type IconName } from "@/components/Icon";
import styles from "./page.module.css";

const avantages: { icon: IconName; label: string }[] = [
  { icon: "search", label: "Historique et kilométrages vérifiés" },
  { icon: "clock", label: "Réactivité, disponibilité, efficacité" },
  { icon: "truck", label: "Livraison par camion en 10 jours dans toute l'Europe" },
  { icon: "key", label: "Prestation clé en main" },
  { icon: "lock", label: "Transactions bancaires sécurisées" },
  { icon: "wheel", label: "Essai routier par nos experts allemands avant l'achat" },
];

const dernieres = [
  { name: "Porsche 911 Turbo S", img: "/cars/Porsche-911-992-Turbo-S-1024x768.jpg" },
  { name: "Audi RS3 Berline", img: "/cars/Audi-RS3-BERLINE-1024x768.jpg" },
  { name: "Mercedes-AMG GLC 43 Coupé", img: "/cars/Mercedes-Benz-GLC-43-AMG-Coupe-2-1024x768.jpg" },
];

const reviews = [
  {
    name: "wemaere alex",
    date: "il y a 1 année",
    text: "Une société sérieuse, je recommande sans hésitations !",
  },
  {
    name: "Isabella Marino",
    date: "il y a 1 année",
    text: "J'ai fait appel à Monsieur Guillas pour importer une Volkswagen Golf, et tout était nickel. Voiture impeccable, pas de surprise, et immatriculation gérée. Un service sérieux et efficace, je repasserai par eux !",
  },
  {
    name: "Markus Lehmann",
    date: "il y a 1 année",
    text: "Merci à Olivier pour son aide ! Je voulais une Audi A4 importée, il m'a trouvé exactement ce que je cherchais. Importation rapide et sans prise de tête, avec un super suivi. Je recommande sans hésiter !",
  },
  {
    name: "Chloé M",
    date: "il y a 1 année",
    text: "Je tiens à remercier Timoté et Patrick pour leur excellent travail ! Le véhicule est magnifique, rien à dire ! Je suis ravi de la qualité de leur service. Leur professionnalisme et leur attention aux détails m'ont totalement satisfait.",
  },
  {
    name: "Louis Mercier",
    date: "il y a 1 année",
    text: "J'ai commandé une Mercedes importée et tout s'est bien passé. Patrick Edwar a été dispo et pro. Voiture livrée propre, bien entretenue et à un prix plus bas que chez un concessionnaire français.",
  },
  {
    name: "Dabo Baradji",
    date: "il y a 1 année",
    text: "Je suis vraiment ravi de mon expérience avec GT Cars Import, tant pour l'accompagnement personnalisé que pour mon achat. L'équipe est d'une grande rigueur, à l'écoute et incarne un professionnalisme authentique. Je les recommande les yeux fermés !",
  },
];

function Stars() {
  return (
    <span className={styles.stars} aria-label="5 étoiles">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#e0a800">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className={styles.hero} id="accueil">
        <div className={styles.heroBg}>
          <Image
            src="/hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroBgImg}
          />
          <div className={styles.heroBgOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.heroEyebrow}>Import de Véhicules Allemands</p>
          <h1 className={styles.heroTitle}>
            Le courtier<br />à <span>votre service</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Spécialiste de la recherche et importation de véhicules toutes gammes
            et toutes marques directement depuis l'Allemagne.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/faire-une-demande" className="btn btn-primary btn-lg">
              Je recherche un véhicule
            </Link>
            <Link href="/a-propos" className="btn btn-outline btn-lg">
              En savoir plus
            </Link>
          </div>
        </div>
        <div className={styles.heroStats}>
          <div className={`container ${styles.heroStatsInner}`}>
            {[
              { end: 2020, suffix: "", l: "Année de création" },
              { end: 137, suffix: "+", l: "Avis Google" },
              { end: 10, suffix: "j", l: "Délai de livraison" },
              { end: 25, suffix: "%", l: "D'économies" },
            ].map((s) => (
              <div key={s.l} className={styles.heroStat}>
                <span className={styles.heroStatNum}>
                  <Counter end={s.end} suffix={s.suffix} />
                </span>
                <span className={styles.heroStatLabel}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRÉSENTATION (BLANC) ─────────────────────── */}
      <section className="section-light section-pad">
        <div className="container">
          <div className={styles.twoCol}>
            <div className={styles.twoColText}>
              <p className="section-eyebrow">À propos de nous</p>
              <h2 className="section-title" style={{ color: "#111" }}>
                GT Cars <span>Import</span>
              </h2>
              <div className="red-line" />
              <p className={styles.bodyText}>
                Créée en <strong>2020</strong>, GT Cars Import est spécialisée dans la recherche et
                l'importation de véhicules toutes gammes et toutes marques. Nous trouvons le modèle
                qui vous correspond grâce à une recherche personnalisée et un accompagnement sur mesure.
              </p>
              <p className={styles.bodyText} style={{ marginBottom: "2.25rem" }}>
                Notre service premium vous garantit une expérience sans contrainte : <strong>recherche personnalisée</strong>,
                expertise physique et <strong>livraison clé en main dans toute l'Europe</strong>.
              </p>
              <Link href="/a-propos" className="btn btn-outline-red">
                En savoir plus
              </Link>
            </div>
            <div className={styles.twoColFeatures}>
              {avantages.map((a) => (
                <div key={a.label} className={styles.avantageCard}>
                  <span className="icon-tile"><Icon name={a.icon} /></span>
                  <p>{a.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CABINET EXPERTISE (NOIR) ─────────────────── */}
      <section className="section-dark-2 section-pad">
        <div className="container">
          <div className={styles.centeredHead}>
            <p className="section-eyebrow">Notre processus</p>
            <h2 className="section-title">Cabinet d'<span>Expertise</span></h2>
            <div className="red-line center" />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Nos frais incluent systématiquement une expertise réalisée par un cabinet indépendant
              partout en Europe, garantissant une validation complète avant l'achat.
            </p>
          </div>
          <div className={styles.processGrid}>
            {[
              { num: "01", title: "Recherche", desc: "Nous analysons le marché allemand pour trouver le véhicule exact correspondant à vos critères." },
              { num: "02", title: "Expertise", desc: "Un cabinet indépendant réalise une expertise physique et un essai routier avant tout achat." },
              { num: "03", title: "Livraison", desc: "Votre véhicule est livré par camion à votre domicile dans toute l'Europe en 10 jours." },
            ].map((step) => (
              <div key={step.num} className={styles.processCard}>
                <span className={styles.processNum}>{step.num}</span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DERNIÈRES IMPORTATIONS (CLAIR) ───────────── */}
      <section className="section-off-white section-pad">
        <div className="container">
          <div className={styles.stripHead}>
            <div>
              <p className="section-eyebrow">Livrés à nos clients</p>
              <h2 className="section-title" style={{ color: "#111" }}>
                Dernières <span>importations</span>
              </h2>
            </div>
            <Link href="/importations" className={styles.stripLink}>
              Voir nos importations <Icon name="arrow" size={16} />
            </Link>
          </div>
          <div className={styles.strip}>
            {dernieres.map((d) => (
              <Link key={d.name} href="/importations" className={styles.stripItem}>
                <Image src={d.img} alt={d.name} fill sizes="(max-width: 768px) 100vw, 33vw" />
                <span className={styles.stripCaption}>{d.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIFS (BLANC) ──────────────────────────── */}
      <section className="section-light section-pad" id="tarifs">
        <div className="container">
          <div className={styles.centeredHead}>
            <p className="section-eyebrow">Transparence totale</p>
            <h2 className="section-title" style={{ color: "#111" }}>
              Nos <span>Tarifs</span>
            </h2>
            <div className="red-line center" />
          </div>

          <div className={styles.pricingGrid}>
            {/* Pack Principal */}
            <div className={styles.pricingCard}>
              <div className={styles.pricingBadge}>Le plus demandé</div>
              <h3 className={styles.pricingName}>Pack Clé en Main Frontière</h3>
              <p className={styles.pricingDesc}>
                Livraison incluse par camion dans notre dépôt à la frontière.<br />
                Délai 5/7 jours
              </p>
              <div className={styles.pricingPrice}>
                <span className={styles.pricingAmount}>1 490€</span>
                <span className={styles.pricingUnit}>tout compris</span>
              </div>
              <ul className={styles.pricingFeatures}>
                {[
                  "Recherche personnalisée",
                  "Négociation incluse",
                  "Expertise physique + essai routier",
                  "Rapport complet + Carvertical",
                  "Livraison par camion à Cologne (Köln)",
                  "Immatriculation complète incluse",
                ].map((f) => (
                  <li key={f} className={styles.pricingFeature}>
                    <Icon name="check" size={17} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/faire-une-demande" className={`btn btn-primary ${styles.pricingCta}`}>
                Faire une demande
              </Link>
            </div>

            {/* Option livraison */}
            <div className={`${styles.pricingCard} ${styles.pricingOption}`}>
              <div className={styles.pricingBadge}>Option</div>
              <h3 className={styles.pricingName}>Livraison à Domicile</h3>
              <p className={styles.pricingDesc}>
                Livraison sécurisée par camion directement chez vous, partout en Europe. Délai 10 jours.
              </p>
              <div className={styles.pricingPrice}>
                <span className={styles.pricingAmount}>+1€</span>
                <span className={styles.pricingUnit}>/ km</span>
              </div>
              <ul className={styles.pricingFeatures}>
                {[
                  "Livraison sécurisée par camion",
                  "À votre domicile ou bureau",
                  "Toute l'Europe en moins de 10 jours",
                  "Devis effectué avec les transporteurs",
                ].map((f) => (
                  <li key={f} className={`${styles.pricingFeature} ${styles.pricingFeatureLight}`}>
                    <Icon name="check" size={17} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/faire-une-demande" className={`btn btn-outline-red ${styles.pricingCta}`}>
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI ALLEMAGNE (NOIR) ─────────────────── */}
      <section className="section-dark section-pad">
        <div className="container">
          <div className={styles.twoCol}>
            <div>
              <p className="section-eyebrow">Notre expertise</p>
              <h2 className="section-title">Pourquoi l'<span>Allemagne</span> ?</h2>
              <div className="red-line" />
              <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
                L'achat d'une voiture en Allemagne offre plusieurs avantages décisifs. Les prix sont souvent
                inférieurs grâce à la concurrence accrue sur le marché. Les véhicules allemands sont généralement
                très bien entretenus en raison des normes de sécurité et de qualité strictes.
              </p>
              <div className={styles.keyPoints}>
                {[
                  "Plus de choix et des modèles récents",
                  "Des véhicules mieux entretenus",
                  "Jusqu'à 25% d'économies vs concessionnaire local",
                  "Expertise locale sur place avant achat",
                ].map((p) => (
                  <div key={p} className={styles.keyPoint}>
                    <Icon name="check" size={17} />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.parrainage}>
              <div className={styles.parrainageTag}>Parrainage</div>
              <h3 className={styles.parrainageTitle}>Recommandez-nous et recevez</h3>
              <div className={styles.parrainageAmount}>100€</div>
              <p className={styles.parrainageText}>
                Si vous êtes entièrement satisfait de nos services, recommandez-nous à votre entourage.
              </p>
              <Link href="/faire-une-demande" className="btn btn-outline">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AVIS (BLANC) ─────────────────────────────── */}
      <section className="section-off-white section-pad" id="avis">
        <div className="container">
          <div className={styles.centeredHead}>
            <p className="section-eyebrow">Ce que disent nos clients</p>
            <h2 className="section-title" style={{ color: "#111" }}>
              Ils nous font <span>confiance</span>
            </h2>
            <div className="red-line center" />
            <div className={styles.ratingBadge}>
              <Stars />
              <strong>Excellent</strong>
              <span>137 avis Google</span>
            </div>
          </div>

          <div className={`grid-3 ${styles.reviewsGrid}`}>
            {reviews.map((r) => (
              <div key={r.name} className={`card-light ${styles.reviewCard}`}>
                <Stars />
                <p className={styles.reviewText}>{r.text}</p>
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewAvatar}>
                    {r.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className={styles.reviewName}>{r.name}</p>
                    <p className={styles.reviewDate}>{r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.reviewsCta}>
            <a
              href="https://www.google.com/search?q=GT+Cars+Import+avis"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-red"
            >
              Voir tous les avis
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
