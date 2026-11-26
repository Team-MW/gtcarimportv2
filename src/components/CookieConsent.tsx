"use client";

import Link from "@/components/LocalLink";
import { useSyncExternalStore } from "react";
import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "gtci-cookie-consent";
const CHANGE_EVENT = "gtci-cookie-consent-change";

export type CookieChoice = "accepted" | "refused";
type Snapshot = CookieChoice | "unset" | "pending";

function readChoice(): Snapshot {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "refused" ? value : "unset";
  } catch {
    return "unset";
  }
}

function writeChoice(choice: CookieChoice | null) {
  try {
    if (choice) window.localStorage.setItem(STORAGE_KEY, choice);
    else window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Stockage indisponible (navigation privée) : le bandeau réapparaîtra.
  }
  // Les scripts de mesure d'audience ajoutés plus tard peuvent écouter cet évènement.
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: choice }));
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/** Bandeau de consentement aux cookies. */
export default function CookieConsent() {
  const choice = useSyncExternalStore<Snapshot>(subscribe, readChoice, () => "pending");

  if (choice !== "unset") return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Gestion des cookies" aria-live="polite">
      <p className={styles.title}>Cookies</p>
      <p className={styles.text}>
        Nous utilisons les cookies nécessaires au fonctionnement du site et du formulaire de demande.
        Avec votre accord, des cookies de mesure d&apos;audience peuvent aussi être déposés.{" "}
        <Link href="/politique-de-confidentialite" className={styles.link}>
          En savoir plus
        </Link>
      </p>
      <div className={styles.actions}>
        <button type="button" className={`btn ${styles.refuse}`} onClick={() => writeChoice("refused")}>
          Refuser
        </button>
        <button type="button" className="btn btn-primary" onClick={() => writeChoice("accepted")}>
          Accepter
        </button>
      </div>
    </div>
  );
}

/** Lien « Gérer les cookies » : rouvre le bandeau. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => writeChoice(null)}>
      Gérer les cookies
    </button>
  );
}
