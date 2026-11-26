"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { isSwissPath, localize } from "@/lib/region";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

/** Lien interne qui reste dans la version suisse (/ch/…-sw/) si on y est déjà. */
export default function LocalLink({ href, ...props }: Props) {
  const pathname = usePathname();
  return <Link href={localize(href, isSwissPath(pathname) ? "ch" : "fr")} {...props} />;
}
