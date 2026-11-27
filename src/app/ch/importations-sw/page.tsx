import type { Metadata } from "next";
import ImportationsPage from "@/views/ImportationsPage";
import { metaFor } from "@/lib/pages";

export const metadata: Metadata = metaFor("importations", "ch");

export default function Page() {
  return <ImportationsPage region="ch" />;
}
