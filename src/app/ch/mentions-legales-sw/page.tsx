import type { Metadata } from "next";
import { metaFor } from "@/lib/pages";

// Version suisse : même contenu que /mentions-legales/, liens internes en -sw.
export { default } from "../../mentions-legales/page";

export const metadata: Metadata = metaFor("mentions", "ch");
