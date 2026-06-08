// ─────────────────────────────────────────────────────────────────────────────
// content.ts — single source of truth for the whole site.
// To add/change a venture or any text: edit here, commit, push.
//
// Every user-facing string is an { en, nl } object. The language toggle just
// swaps the active key. Keep it a plain typed dictionary — no i18n library.
// ─────────────────────────────────────────────────────────────────────────────

export type Lang = "en" | "nl";
export type Localized = Record<Lang, string>;

export type LinkType =
  | "website"
  | "instagram"
  | "linkedin"
  | "x"
  | "facebook"
  | "whatsapp"
  | "mail";

export interface VentureLink {
  type: LinkType;
  url: string;
}

export interface Venture {
  name: string; // brand name (not translated)
  legal: string; // legal entity (not translated)
  initial: string; // monogram letter shown in the tile badge
  tags: string[]; // short labels, not translated (e.g. "Security", "AI")
  description: Localized;
  links: VentureLink[]; // a venture is a mini hub — many links, not one url
}

// ── Identity ────────────────────────────────────────────────────────────────
export const identity = {
  name: "Stef Junior Mylle", // not translated
  monogram: "SJM",
  tagline: {
    en: "Security & AI Software",
    nl: "Security & AI Software",
  } as Localized,
  // chip in the hero — co-founder (his dad co-founds the ventures too)
  role: {
    en: "co-founder · 2 ventures",
    nl: "mede-oprichter · 2 ondernemingen",
  } as Localized,
};

// ── Ventures (the businesses) ────────────────────────────────────────────────
// The bento grid auto-flows: add another object here and a new tile renders.
// Keep tile = 2x2 in the grid (see README). With the terminal tile in the
// socials slot, the grid stays gap-free for an even number of ventures.
export const ventures: Venture[] = [
  {
    name: "Buzz Alarmas",
    legal: "Buzz Alarmas SL",
    initial: "B",
    tags: ["Security", "IoT"],
    description: {
      en: "Alarm & camera security systems — installed and monitored across the Canary Islands and Alicante.",
      nl: "Alarm- en camerabeveiliging — geïnstalleerd en gemonitord op de Canarische Eilanden en in Alicante.",
    },
    links: [
      { type: "website", url: "https://buzzalarmas.com" },
      { type: "instagram", url: "https://www.instagram.com/buzzalarmas_es/" },
      { type: "linkedin", url: "https://www.linkedin.com/company/buzzalarmas/" },
      { type: "facebook", url: "https://www.facebook.com/BUZZalarmas" },
      { type: "whatsapp", url: "https://wa.me/34950091011" },
      { type: "mail", url: "mailto:hola@buzzalarmas.com" },
    ],
  },
  {
    name: "Xyra Chat",
    legal: "Mll Nexus Group SL",
    initial: "X",
    tags: ["AI", "SaaS"],
    description: {
      en: "AI customer-messaging platform — automated, on-brand replies across every channel.",
      nl: "AI-klantencommunicatieplatform — geautomatiseerde, merkgerichte antwoorden op elk kanaal.",
    },
    links: [
      { type: "website", url: "https://xyrachat.com" },
      { type: "instagram", url: "https://www.instagram.com/xyrachat" },
      { type: "x", url: "https://x.com/XyraChat" },
      { type: "linkedin", url: "https://www.linkedin.com/company/xyrachat/" },
      { type: "facebook", url: "https://www.facebook.com/profile.php?id=61570693864370" },
      { type: "mail", url: "mailto:hello@xyrachat.com" },
    ],
  },
  // ➕ Add the next venture here — the grid handles it automatically.
];

// ── Contact ──────────────────────────────────────────────────────────────────
export const contact = {
  email: "junior.mylle@icloud.com",
  // wa.me link only — the raw number is never rendered on the page.
  whatsapp: "https://wa.me/34672057647",
  note: {
    en: "for anything formal — or message me on whatsapp",
    nl: "voor iets formeels — of stuur me een whatsapp",
  } as Localized,
};

// ── About ─────────────────────────────────────────────────────────────────────
export const about: Localized = {
  en: "I'm Stef Junior Mylle — I build and run businesses at the intersection of security and AI. Through Buzz Alarmas I deliver alarm and camera security across the Canary Islands and Alicante; through Xyra Chat I build AI-driven customer messaging. This page is the single place for everything I'm part of — my ventures, their links, and the fastest ways to reach me.",
  nl: "Ik ben Stef Junior Mylle — ik bouw en run bedrijven op het snijvlak van security en AI. Met Buzz Alarmas lever ik alarm- en camerabeveiliging op de Canarische Eilanden en in Alicante; met Xyra Chat bouw ik AI-gedreven klantcommunicatie. Deze pagina bundelt alles waar ik bij betrokken ben — mijn ondernemingen, hun links en de snelste manieren om me te bereiken.",
};

// ── Footer (single plain string, not translated) ─────────────────────────────
export const footer = "Buzz Alarmas SL · Mll Nexus Group SL";

// ── Languages exposed to the toggle ──────────────────────────────────────────
export const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "nl", label: "NL" },
];
export const defaultLang: Lang = "en";
