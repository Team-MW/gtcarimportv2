import type { Metadata } from "next";
import { metaFor } from "@/lib/pages";

// Version suisse : même contenu que /politique-de-confidentialite/, liens internes en -sw.
export { default } from "../../politique-de-confidentialite/page";

export const metadata: Metadata = metaFor("confidentialite", "ch");
