import type { Metadata } from "next";
import DemandePage from "@/views/DemandePage";
import { metaFor } from "@/lib/pages";

export const metadata: Metadata = metaFor("demande", "ch");

export default function Page() {
  return <DemandePage region="ch" />;
}
