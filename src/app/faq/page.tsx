import type { Metadata } from "next";
import FaqPage from "@/views/FaqPage";
import { metaFor } from "@/lib/pages";

export const metadata: Metadata = metaFor("faq");

export default function Page() {
  return <FaqPage region="fr" />;
}
