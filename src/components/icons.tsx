import type { SVGProps } from "react";
import type { LinkType } from "@/content";

/* SJM monogram — accent strokes inherit the theme tokens.
   Ported from assets/monogram-sjm.svg / mockup Monogram component. */
export function Monogram({ size = 84 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 84 84"
      fill="none"
      role="img"
      aria-label="SJM monogram"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="mg-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(255,255,255,.06)" />
          <stop offset="1" stopColor="rgba(255,255,255,.015)" />
        </linearGradient>
      </defs>
      <rect
        x="1.5"
        y="1.5"
        width="81"
        height="81"
        rx="20"
        fill="url(#mg-fill)"
        stroke="var(--accent-line)"
        strokeWidth="1.5"
      />
      <path
        d="M14 9 H9 V14 M70 9 H75 V14 M14 75 H9 V70 M70 75 H75 V70"
        stroke="var(--accent)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity=".8"
      />
      <text
        x="42"
        y="51"
        textAnchor="middle"
        fontFamily="var(--sans), 'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="30"
        letterSpacing="0.5"
        fill="var(--text)"
      >
        SJM
      </text>
      <rect x="26" y="58" width="32" height="2.4" rx="1.2" fill="var(--accent)" />
    </svg>
  );
}

/* Platform glyphs — paths lifted from mockup/portfolio-app.jsx for exact fidelity. */
export const Icon: Record<LinkType, (p: SVGProps<SVGSVGElement>) => React.ReactElement> = {
  linkedin: (p) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  instagram: (p) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" {...p}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  x: (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64z" />
    </svg>
  ),
  website: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
    </svg>
  ),
  whatsapp: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.82c2.16 0 4.18.84 5.71 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.1 8.09a8.1 8.1 0 0 1-4.12-1.13l-.3-.18-3.12.82.83-3.04-.19-.31a8.04 8.04 0 0 1-1.26-4.34c0-4.46 3.63-8.09 8.09-8.09zm-3.27 4.4c-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.3.94 2.55 1.07 2.73.13.18 1.84 2.81 4.52 3.94.63.27 1.12.43 1.5.55.63.2 1.2.17 1.66.1.5-.07 1.56-.64 1.78-1.25.22-.61.22-1.14.16-1.25-.07-.11-.24-.18-.5-.31-.26-.13-1.56-.77-1.8-.86-.24-.09-.42-.13-.6.13-.18.26-.68.86-.84 1.04-.15.18-.31.2-.57.07-.26-.13-1.11-.41-2.11-1.3-.78-.7-1.31-1.56-1.46-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.31.4-.46.13-.15.18-.26.26-.44.09-.18.04-.33-.02-.46-.07-.13-.59-1.43-.81-1.96-.21-.51-.43-.44-.59-.45h-.5z" />
    </svg>
  ),
  mail: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  ),
};

/* Human-readable labels for venture link chips. */
export const linkLabel: Record<LinkType, string> = {
  website: "Website",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  x: "X",
  whatsapp: "WhatsApp",
  mail: "Email",
};
