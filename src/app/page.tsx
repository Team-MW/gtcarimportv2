import type { Metadata } from "next";
import HomePage from "@/views/HomePage";
import { metaFor } from "@/lib/pages";

export const metadata: Metadata = metaFor("home");

export default function Home() {
  return <HomePage region="fr" />;
}
