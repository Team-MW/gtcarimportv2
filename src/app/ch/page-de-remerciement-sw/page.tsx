import type { Metadata } from "next";
import MerciPage from "@/views/MerciPage";
import { metaFor } from "@/lib/pages";

export const metadata: Metadata = metaFor("remerciement", "ch");

export default function Page() {
  return <MerciPage region="ch" />;
}
