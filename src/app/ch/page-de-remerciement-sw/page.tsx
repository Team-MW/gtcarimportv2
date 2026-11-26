import type { Metadata } from "next";
import { metaFor } from "@/lib/pages";

// Version suisse : même contenu que /page-de-remerciement/, liens internes en -sw.
export { default } from "../../page-de-remerciement/page";

export const metadata: Metadata = metaFor("remerciement", "ch");
