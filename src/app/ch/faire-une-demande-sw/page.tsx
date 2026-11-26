import type { Metadata } from "next";
import { metaFor } from "@/lib/pages";

// Version suisse : même contenu que /faire-une-demande/, liens internes en -sw.
export { default } from "../../faire-une-demande/page";

export const metadata: Metadata = metaFor("demande", "ch");
