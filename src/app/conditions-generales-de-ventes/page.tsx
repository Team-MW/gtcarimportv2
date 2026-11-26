import type { Metadata } from "next";
import { metaFor } from "@/lib/pages";

export const metadata: Metadata = metaFor("cgv");

export default function CGV() {
  return (
    <main>
      {/* ── PAGE HEADER ───────────────────────────── */}
      <section className="page-header">
        <div className="container">
          <p className="section-eyebrow">Informations juridiques</p>
          <h1 className="section-title">Conditions Générales de <span>Vente</span></h1>
          <div className="red-line" />
        </div>
      </section>

      {/* ── CONTENU (BLANC) ───────────────────────── */}
      <section className="section-light section-pad">
        <div className="container" style={{ maxWidth: "800px", color: "#444", lineHeight: "1.8" }}>
          
          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>Préambule</h2>
          <p style={{ marginBottom: "1rem" }}>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre la société GTA Invest, inscrite au Registre du Commerce suisse sous le numéro CHE-218.075.398, dont le siège est situé Marktgasse 8, 4051 Bâle (Suisse), exploitant la marque GT CARS IMPORT, ci-après dénommée « le Vendeur », et toute personne physique ou morale souhaitant procéder à un achat via le site internet du Vendeur ou par tout autre moyen, ci-après dénommée « le Client ».
          </p>
          <div style={{ padding: "1.5rem", backgroundColor: "var(--off-white)", borderLeft: "4px solid var(--red)", borderRadius: "4px", marginBottom: "2rem" }}>
            <p style={{ margin: 0, fontWeight: 500, color: "#111" }}>
              <strong>Important :</strong> GT CARS IMPORT agit en tant qu’intermédiaire de vente pour l’immatriculation et le rapatriement des véhicules et non en tant que vendeur direct.
            </p>
          </div>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>1. Objet</h2>
          <p style={{ marginBottom: "2rem" }}>
            Les présentes CGV définissent les droits et obligations des parties dans le cadre de la vente de véhicules automobiles neufs ou d’occasion importés par le Vendeur.
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>2. Acceptation des conditions</h2>
          <p style={{ marginBottom: "2rem" }}>
            Le Client reconnaît avoir pris connaissance, au moment de la commande, des présentes CGV et déclare expressément les accepter sans réserve. Ces CGV prévaudront sur toutes autres conditions générales ou particulières non expressément agréées par le Vendeur.
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>3. Produits</h2>
          <p style={{ marginBottom: "2rem" }}>
            Les produits proposés sont ceux qui figurent dans le catalogue publié sur le site du Vendeur. Ces produits sont offerts dans la limite des stocks disponibles. Chaque produit est accompagné d’un descriptif établi par le Vendeur.
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>4. Commande</h2>
          <p style={{ marginBottom: "2rem" }}>
            Toute commande vaut acceptation des prix et descriptions des produits disponibles à la vente. Le Vendeur accusera réception de la commande dès sa validation par l’envoi d’un courrier électronique.
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>5. Prix</h2>
          <p style={{ marginBottom: "2rem" }}>
            Les prix des produits sont indiqués en francs suisses (CHF) toutes taxes comprises (TTC), TVA suisse incluse. Le Vendeur se réserve le droit de modifier ses prix à tout moment, étant entendu que le prix figurant au catalogue le jour de la commande sera le seul applicable au Client.
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>6. Modalités de paiement</h2>
          <p style={{ marginBottom: "2rem" }}>
            Aucun paiement n’est demandé au Client avant qu’il ait validé l’importation du véhicule sélectionné.
            Une fois l’importation validée, le Client règle par virement bancaire, d’une part, le prix de la
            prestation du Vendeur et, d’autre part, le prix du véhicule, versé directement au vendeur allemand
            dans le cadre du contrat d’achat établi au nom du Client.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            Le véhicule n’est ni récupéré ni livré tant que le paiement intégral du véhicule et de la prestation
            n’a pas été reçu.
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>7. Livraison</h2>
          <p style={{ marginBottom: "2rem" }}>
            Les livraisons sont faites à l’adresse indiquée dans le bon de commande. Les risques sont à la charge du Client à compter du moment où les produits ont quitté les locaux du Vendeur. En cas de dommage pendant le transport, la protestation motivée doit être formulée auprès du transporteur dans un délai de trois jours à compter de la livraison.
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>8. Annulation de la commande</h2>
          <p style={{ marginBottom: "1rem" }}>
            Le Client peut annuler sa demande sans frais à tout moment tant qu’il n’a pas validé l’importation
            du véhicule sélectionné.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Chaque véhicule est recherché, expertisé et acheté spécialement pour le Client, selon ses critères.
            Une fois l’importation validée et le contrat d’achat du véhicule signé, la commande est ferme et
            définitive : elle ne peut plus être annulée et les sommes versées ne sont pas remboursables, sauf
            accord écrit du Vendeur.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            Si le véhicule livré ne correspond pas au véhicule décrit dans le rapport d’expertise validé par
            le Client, les dispositions de l’article 9 (Garantie) s’appliquent.
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>9. Garantie</h2>
          <p style={{ marginBottom: "2rem" }}>
            Tous les produits fournis par le Vendeur bénéficient de la garantie légale prévue par les articles 197 et suivants du Code des obligations suisse. En cas de non-conformité d’un produit vendu, il pourra être retourné au Vendeur qui le reprendra, l’échangera ou le remboursera.
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>10. Responsabilité</h2>
          <p style={{ marginBottom: "2rem" }}>
            Le Vendeur, dans le processus de vente en ligne, n’est tenu que par une obligation de moyens. Sa responsabilité ne pourra être engagée pour un dommage résultant de l’utilisation du réseau internet tel que perte de données, intrusion, virus, rupture du service, ou autres problèmes involontaires.
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>11. Propriété intellectuelle</h2>
          <p style={{ marginBottom: "2rem" }}>
            Tous les éléments du site du Vendeur sont et restent la propriété intellectuelle et exclusive du Vendeur. Personne n’est autorisé à reproduire, exploiter, rediffuser, ou utiliser à quelque titre que ce soit, même partiellement, des éléments du site qu’ils soient logiciels, visuels ou sonores.
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>12. Données personnelles</h2>
          <p style={{ marginBottom: "2rem" }}>
            Le Vendeur se réserve le droit de collecter les informations nominatives et les données personnelles du Client. Elles sont nécessaires à la gestion de sa commande, ainsi qu’à l’amélioration des services et des informations adressées au Client.
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>13. Règlement des litiges</h2>
          <p style={{ marginBottom: "2rem" }}>
            Les présentes conditions de vente en ligne sont soumises au droit suisse. En cas de litige, compétence est attribuée aux tribunaux compétents de Bâle (Suisse), sous réserve des fors impératifs prévus par la loi, nonobstant pluralité de défendeurs ou appel en garantie.
          </p>

        </div>
      </section>
    </main>
  );
}
