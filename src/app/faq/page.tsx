import Link from "next/link";
import type { Metadata } from "next";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "FAQ | GT Cars Import",
  description: "Toutes les réponses à vos questions sur l'importation de véhicules depuis l'Allemagne avec GT Cars Import.",
};

const faqs = [
  {
    q: "GT Cars Import est-elle toujours en activité ?",
    a: "Oui. GT Cars Import est en activité depuis 2020 et traite de nouvelles demandes d'importation chaque semaine. Vous pouvez nous joindre par téléphone au 09 70 70 26 75, par WhatsApp, par e-mail ou via le formulaire de demande : un expert vous recontacte sous 24h.",
  },
  {
    q: "Pourquoi acheter un véhicule en Allemagne ?",
    a: "L'Allemagne est le plus grand marché automobile d'Europe. Les prix sont souvent 15 à 25% moins élevés que sur le marché local grâce à la forte concurrence. Les véhicules sont généralement très bien entretenus et les normes de contrôle très strictes.",
  },
  {
    q: "Combien de temps prend une importation ?",
    a: "Une fois le véhicule trouvé et validé, la livraison par camion prend 5 à 10 jours. La phase de recherche dépend de vos critères, mais nous trouvons généralement un véhicule correspondant en quelques jours.",
  },
  {
    q: "Qu'est-ce qui est inclus dans vos frais ?",
    a: "Nos frais incluent systématiquement : la recherche personnalisée, la négociation, une expertise physique par un cabinet indépendant, un essai routier, le rapport Carvertical, la livraison par camion (pack frontière) et l'immatriculation complète.",
  },
  {
    q: "Est-ce que l'immatriculation est gérée par vos soins ?",
    a: "Oui, nous nous occupons de toutes les démarches administratives : homologation, contrôle technique si nécessaire, et immatriculation de votre véhicule. Vous n'avez rien à faire.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Toutes les transactions sont sécurisées et gérées par nos experts allemands. Nous vous informons de chaque étape et vous avez une totale transparence sur les coûts avant tout engagement.",
  },
  {
    q: "Puis-je choisir n'importe quel véhicule ?",
    a: "Oui ! Nous importons toutes marques et toutes gammes : sportives, SUV, berlines, citadines, utilitaires, électriques et hybrides. Si vous avez un modèle en tête, nous le cherchons pour vous.",
  },
  {
    q: "Y a-t-il une garantie sur les véhicules importés ?",
    a: "Nous sélectionnons uniquement des véhicules dont l'état a été validé par notre cabinet d'expertise indépendant. Le rapport Carvertical vous garantit la transparence de l'historique du véhicule.",
  },
  {
    q: "Comment fonctionne votre programme de parrainage ?",
    a: "Si vous êtes entièrement satisfait de nos services, recommandez-nous à votre entourage. Pour chaque client parrainé qui concrétise une importation, vous recevez 100€ de récompense.",
  },
];

export default function FAQ() {
  return (
    <main>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <p className="section-eyebrow">Vos questions</p>
          <h1 className="section-title">Questions <span>Fréquentes</span></h1>
          <div className="red-line" />
          <p className="section-subtitle">
            Tout ce que vous devez savoir sur l'importation de véhicules depuis l'Allemagne.
          </p>
        </div>
      </section>

      {/* FAQs (Blanc) */}
      <section className="section-light section-pad">
        <div className="container" style={{ maxWidth: "860px" }}>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary>
                  {faq.q}
                  <Icon name="chevron" size={20} />
                </summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Encore des questions (Noir) */}
      <section className="section-dark-2 section-pad">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">Vous n'avez pas trouvé votre réponse ?</p>
          <h2 className="section-title">Contactez notre <span>équipe</span></h2>
          <div className="red-line center" />
          <p className="section-subtitle" style={{ margin: "0 auto 2.5rem" }}>
            Nos conseillers sont disponibles pour répondre à toutes vos questions et vous accompagner dans votre projet.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:0970702675" className="btn btn-primary btn-lg">
              <Icon name="phone" size={17} /> 09 70 70 26 75
            </a>
            <Link href="/contact" className="btn btn-outline btn-lg">
              Formulaire de contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
