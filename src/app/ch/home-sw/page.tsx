import type { Metadata } from "next";
import HomePage from "@/views/HomePage";
import { metaFor } from "@/lib/pages";

export const metadata: Metadata = metaFor("home", "ch");

export default function HomeSuisse() {
  return <HomePage region="ch" />;
}
