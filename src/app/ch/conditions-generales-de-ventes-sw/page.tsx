import type { Metadata } from "next";
import CgvPage from "@/views/CgvPage";
import { metaFor } from "@/lib/pages";

export const metadata: Metadata = metaFor("cgv", "ch");

export default function Page() {
  return <CgvPage region="ch" />;
}
