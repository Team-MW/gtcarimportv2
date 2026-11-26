import type { Metadata } from "next";
import { metaFor } from "@/lib/pages";

// Version suisse : même contenu que /faq/, liens internes en -sw.
export { default } from "../../faq/page";

export const metadata: Metadata = metaFor("faq", "ch");
