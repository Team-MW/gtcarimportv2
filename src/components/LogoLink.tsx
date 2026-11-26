"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isSwissPath } from "@/lib/region";
import type { CSSProperties, MouseEvent, ReactNode } from "react";

interface LogoLinkProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/** Logo cliquable : ramène à l'accueil, ou en haut de page si on y est déjà. */
export default function LogoLink({ children, className, style }: LogoLinkProps) {
  const pathname = usePathname();
  const homeHref = isSwissPath(pathname) ? "/ch/home-sw/" : "/";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== homeHref && pathname !== homeHref.replace(/\/$/, "")) return;
    e.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <Link
      href={homeHref}
      className={className}
      style={style}
      aria-label="GT Cars Import – retour en haut de l'accueil"
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
