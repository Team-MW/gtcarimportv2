import styles from "@/app/faire-une-demande/contact.module.css";
import type { Region } from "@/lib/region";
import JotForm from "@/components/JotForm";
import Icon, { type IconName } from "@/components/Icon";

const contacts: { icon: IconName; label: string; value: string; note?: string; href?: string }[] = [
  { icon: "phone", label: "Téléphone", value: "09 70 70 26 75", href: "tel:0970702675" },
  { icon: "chat", label: "WhatsApp", value: "Nous écrire", href: "https://wa.me/33756856934" },
  { icon: "mail", label: "E-mail", value: "gtcarsimport44@gmail.com", href: "mailto:gtcarsimport44@gmail.com" },
  { icon: "clock", label: "Horaires", value: "Lundi au vendredi, 10h\u00a0–\u00a018h", note: "Samedi sur rendez-vous" },
];

const engagements = (region: Region) => [
  "Réponse sous 24h",
  "Recherche personnalisée",
  "Expertise indépendante garantie",
  "Clé en main, aucune démarche",
  region === "ch" ? "Livraison en Suisse et en Europe" : "Livraison en France et en Europe",
];

export default function DemandePage({ region = "fr" }: { region?: Region }) {
  return (
    <main className={styles.page}>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <p className="section-eyebrow">Démarrez votre projet</p>
          <h1 className="section-title">Faire une <span>demande</span></h1>
          <div className="red-line" />
          <p className="section-subtitle">
            Remplissez ce formulaire et un expert GT Cars Import vous contacte sous <strong>24h</strong>.
          </p>
        </div>
      </section>

      {/* Coordonnées */}
      <section className={`section-light ${styles.contactBar}`}>
        <div className={`container ${styles.contactGrid}`}>
          {contacts.map((c) => {
            const body = (
              <>
                <span className="icon-tile"><Icon name={c.icon} size={20} /></span>
                <span>
                  <span className={styles.infoLabel}>{c.label}</span>
                  <span className={styles.infoValue}>{c.value}</span>
                  {c.note && <span className={styles.infoNote}>{c.note}</span>}
                </span>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                className={`${styles.infoItem} ${styles.infoLink}`}
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {body}
              </a>
            ) : (
              <div key={c.label} className={styles.infoItem}>{body}</div>
            );
          })}
        </div>
      </section>

      {/* Formulaire pleine largeur */}
      <section className={`section-dark ${styles.formSection}`}>
        <div className="container">
          <div className={styles.formHead}>
            <div>
              <p className="section-eyebrow">Formulaire</p>
              <h2 className={styles.formTitle}>Votre demande personnalisée</h2>
            </div>
            <ul className={styles.engagements}>
              {engagements(region).map((label) => (
                <li key={label}>
                  <Icon name="check" size={16} />
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.formCard}>
            <JotForm />
          </div>
        </div>
      </section>
    </main>
  );
}
