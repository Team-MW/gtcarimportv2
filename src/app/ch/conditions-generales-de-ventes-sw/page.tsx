import type { Metadata } from "next";
import { metaFor } from "@/lib/pages";

// Version suisse : même contenu que /conditions-generales-de-ventes/, liens internes en -sw.
export { default } from "../../conditions-generales-de-ventes/page";

export const metadata: Metadata = metaFor("cgv", "ch");
