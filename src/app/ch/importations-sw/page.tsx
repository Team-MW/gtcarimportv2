import type { Metadata } from "next";
import { metaFor } from "@/lib/pages";

// Version suisse : même contenu que /importations/, liens internes en -sw.
export { default } from "../../importations/page";

export const metadata: Metadata = metaFor("importations", "ch");
