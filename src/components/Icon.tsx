import type { ReactNode } from "react";

export type IconName =
  | "search"
  | "clock"
  | "truck"
  | "key"
  | "shield"
  | "wheel"
  | "award"
  | "check"
  | "lock"
  | "phone"
  | "gauge"
  | "gem"
  | "suv"
  | "car"
  | "van"
  | "plug"
  | "chevron"
  | "arrow"
  | "document";

const paths: Record<IconName, ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.6-3.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h11v10H2z" />
      <path d="M13 9h4l4 4v3h-8z" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="m11 12 9-9" />
      <path d="m16 7 3 3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.4 3 8.2 7.5 9.5 4.5-1.3 7.5-5.1 7.5-9.5V6z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  wheel: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M3.3 10.5c5.5-1.8 11.9-1.8 17.4 0" />
      <path d="M10.5 14 8 20" />
      <path d="M13.5 14 16 20" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m8.5 14-1.5 7 5-2.5 5 2.5-1.5-7" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="1.5" />
      <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
    </>
  ),
  phone: (
    <path d="M21 16.4v2.8a1.9 1.9 0 0 1-2.1 1.9 18.6 18.6 0 0 1-8.1-2.9 18.3 18.3 0 0 1-5.6-5.6A18.6 18.6 0 0 1 2.3 4.4 1.9 1.9 0 0 1 4.2 2.3H7a1.9 1.9 0 0 1 1.9 1.6c.1.9.3 1.8.7 2.6a1.9 1.9 0 0 1-.4 2L8 9.7a15 15 0 0 0 6.2 6.2l1.2-1.2a1.9 1.9 0 0 1 2-.4c.8.3 1.7.6 2.6.7A1.9 1.9 0 0 1 21 16.4z" />
  ),
  gauge: (
    <>
      <path d="M4 17a9 9 0 1 1 16 0" />
      <path d="m12 14 4-5" />
      <circle cx="12" cy="14" r="1.2" />
    </>
  ),
  gem: (
    <>
      <path d="M6 4h12l3.5 5L12 20.5 2.5 9z" />
      <path d="M2.5 9h19" />
      <path d="m9 4-1.5 5 4.5 11.5L16.5 9 15 4" />
    </>
  ),
  suv: (
    <>
      <path d="M2 16V11l2.5-5h10l4 4.5 3.5 1V16h-2.2" />
      <path d="M8.8 16h6.4" />
      <path d="M4.2 16H2" />
      <path d="M4 10.5h14" />
      <circle cx="6.5" cy="16.5" r="2.2" />
      <circle cx="17.5" cy="16.5" r="2.2" />
    </>
  ),
  car: (
    <>
      <path d="M3 15.5v-3l2.5-1L8 7.5h7l3 4 3 1v3h-1.8" />
      <path d="M9.2 15.5h5.6" />
      <path d="M4.8 15.5H3" />
      <circle cx="7" cy="16" r="2" />
      <circle cx="17" cy="16" r="2" />
    </>
  ),
  van: (
    <>
      <path d="M2 16V6h12.5L20 11l2 1v4h-2" />
      <path d="M8.8 16h6.4" />
      <path d="M14 6v5h6" />
      <circle cx="6.5" cy="16.5" r="2.2" />
      <circle cx="17.5" cy="16.5" r="2.2" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3v5" />
      <path d="M15 3v5" />
      <path d="M6 8h12v3a6 6 0 0 1-12 0z" />
      <path d="M12 17v4" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  document: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 22, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
