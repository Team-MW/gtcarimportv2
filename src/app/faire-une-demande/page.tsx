import type { Metadata } from "next";
import DemandePage from "@/views/DemandePage";
import { metaFor } from "@/lib/pages";

export const metadata: Metadata = metaFor("demande");

export default function Page() {
  return <DemandePage region="fr" />;
}
