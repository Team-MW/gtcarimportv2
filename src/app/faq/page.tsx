import Link from "@/components/LocalLink";
import type { Metadata } from "next";
import { metaFor } from "@/lib/pages";
import Icon from "@/components/Icon";

export const metadata: Metadata = metaFor("faq");

const faqs = [
  {
    q: "GT Cars Import est-elle toujours en activité ?",
    a: "Oui. GT Cars Import est en activité et traite de nouvelles demandes d'importation chaque semaine. Vous pouvez nous joindre par téléphone au 09 70 70 26 75, par WhatsApp, par e-mail ou via le formulaire de demande : un expert vous recontacte sous 24h.",
  },
  {
    q: "Pourquoi acheter un véhicule en Allemagne ?",
    a: "L'Allemagne est le plus grand marché automobile d'Europe. Les prix y sont souvent 15 à 25% moins élevés que sur le marché local grâce à la forte concurrence. Les véhicules sont généralement très bien entretenus et les normes de contrôle très strictes.",
  },
  {
    q: "Comment rechercher ma voiture ?",
    a: "Vous pouvez consulter vous-même le marché allemand sur les grandes plateformes d'annonces comme mobile.de et autoscout24.de. Vous pouvez aussi nous demander de faire la recherche pour vous gratuitement : il suffit de remplir le formulaire de demande.",
  },
  {
    q: "Combien de temps prend une importation ?",
    a: "Une fois le véhicule trouvé et validé, le transport de l'Allemagne vers la Suisse est organisé sous 72 h et le délai moyen de livraison est de 5 à 7 jours ouvrés. La phase de recherche dépend de vos critères.",
  },
  {
    q: "Qu'est-ce qui est inclus dans vos frais ?",
    a: "Le Pack Clé en Main en Suisse (2 990 CHF TTC) comprend : la recherche personnalisée, la vérification complète par nos experts allemands avec essai routier, le rapport Carvertical, la négociation, le transport Allemagne → Suisse, les démarches douanières, la préparation au MFK, l'immatriculation suisse et la livraison à Bâle.",
  },
  {
    q: "TVA et douane : qui s'occupe des démarches ?",
    a: "Nous nous occupons de toutes les démarches douanières (documents d'import, certificat EUR.1). Le certificat EUR.1 est vérifié systématiquement pour éviter 4 % de droits de douane. Nos prestations sont facturées en CHF TTC, TVA suisse de 8,1 % incluse. Vous n'avez aucune démarche administrative à réaliser.",
  },
  {
    q: "Y a-t-il une taxe CO₂ à payer ?",
    a: "Aucune taxe CO₂ n'est à prévoir pour les véhicules de plus de 12 mois et de plus de 5 000 km. Pour un véhicule plus récent, un conseiller peut faire une simulation avec vous par téléphone.",
  },
  {
    q: "Est-ce que l'immatriculation est gérée par vos soins ?",
    a: "Oui. Nous préparons le véhicule pour le contrôle MFK et nous nous occupons de l'immatriculation suisse complète : plaques, assurance et documents. Vous n'avez rien à faire.",
  },
  {
    q: "Comment je règle mon véhicule et la prestation ?",
    a: "Nous opérons en tant que courtier automobile, avec transparence et sécurité. Vous effectuez le paiement du véhicule directement à nos experts allemands par virement bancaire. Nous agissons en tant qu'intermédiaire dans le contrat d'achat, qui est établi directement à votre nom. Le véhicule n'est ni récupéré ni livré tant que le paiement intégral n'a pas été effectué auprès du vendeur allemand. Vous n'avez rien à payer avant d'avoir validé l'importation.",
  },
  {
    q: "Puis-je choisir n'importe quel véhicule ?",
    a: "Oui. Nous importons toutes marques et toutes gammes, neuf ou occasion : sportives, SUV, berlines, citadines, utilitaires, électriques et hybrides. Si vous avez un modèle en tête, nous le cherchons pour vous.",
  },
  {
    q: "Quelles garanties me proposent les garages allemands ?",
    a: "Si vous achetez votre véhicule dans une concession officielle, il est vendu avec une garantie européenne. Pour la faire fonctionner, vous pouvez vous rendre dans la concession de la marque la plus proche de chez vous. Dans tous les cas, nous sélectionnons uniquement des véhicules dont l'état a été validé par notre cabinet d'expertise indépendant, avec un rapport Carvertical sur l'historique.",
  },
  {
    q: "Proposez-vous un financement ?",
    a: "Oui. Nous proposons des solutions de leasing ou de crédit adaptées aux résidents suisses. Vous pouvez vous préinscrire pour être recontacté dès la validation de votre profil.",
  },
  {
    q: "Comment fonctionne votre programme de parrainage ?",
    a: "Si vous êtes entièrement satisfait de nos services, recommandez-nous à votre entourage. Pour chaque client parrainé qui concrétise une importation, vous recevez 100€ de récompense.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FAQ() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <p className="section-eyebrow">Vos questions</p>
          <h1 className="section-title">FAQ : questions <span>fréquentes</span></h1>
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
            <Link href="/faire-une-demande" className="btn btn-outline btn-lg">
              Formulaire de contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
