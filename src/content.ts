// ─────────────────────────────────────────────────────────────────────────────
// content.ts — single source of truth for the whole site.
// To add/change a venture, social, or any text: edit here, commit, push.
//
// Every user-facing string is a { en, es, nl } object. The language toggle just
// swaps the active key. Keep it a plain typed dictionary — no i18n library.
//
// 🔴 TODO markers = replace with Stef's real values before going live.
// ─────────────────────────────────────────────────────────────────────────────

export type Lang = "en" | "es" | "nl";
export type Localized = Record<Lang, string>;

export type LinkType = "website" | "instagram" | "linkedin" | "x" | "whatsapp" | "mail";

export interface VentureLink {
  type: LinkType;
  url: string;
}

export interface Venture {
  name: string;            // brand name (not translated)
  legal: string;          // legal entity (not translated)
  initial: string;        // monogram letter shown in the tile badge
  tags: string[];         // short labels, not translated (e.g. "Security", "AI")
  description: Localized;
  links: VentureLink[];   // a venture is a mini hub — many links, not one url
}

export interface Social {
  platform: string;       // display name
  type: LinkType;         // chooses the icon
  handle: string;         // shown under the name (e.g. "@stefmylle")
  url: string;
}

// ── Identity ────────────────────────────────────────────────────────────────
export const identity = {
  name: "Stef Junior Mylle",          // not translated
  monogram: "SJM",
  tagline: {
    en: "Security & AI Software",
    es: "Software de Seguridad e IA",
    nl: "Security & AI Software",
  } as Localized,
  // small chips in the hero
  location: {
    en: "canary islands + alicante",
    es: "islas canarias + alicante",
    nl: "canarische eilanden + alicante",
  } as Localized,
  role: {
    en: "founder · 2 ventures",
    es: "fundador · 2 negocios",
    nl: "oprichter · 2 ondernemingen",
  } as Localized,
};

// ── Ventures (the businesses) ────────────────────────────────────────────────
// The bento grid auto-flows: add another object here and a new tile renders with
// no layout changes. Keep tile = 2x2 in the grid (see README spec).
export const ventures: Venture[] = [
  {
    name: "Buzz Alarmas",
    legal: "Buzz Alarmas SL",
    initial: "B",
    tags: ["Security", "IoT"],
    description: {
      en: "Alarm & camera security systems — installed and monitored across the Canary Islands and Alicante.",
      es: "Sistemas de alarma y cámaras de seguridad — instalados y monitorizados en Canarias y Alicante.",
      nl: "Alarm- en camerabeveiliging — geïnstalleerd en gemonitord op de Canarische Eilanden en in Alicante.",
    },
    links: [
      { type: "website", url: "https://buzzalarmas.com" },     // 🔴 TODO confirm
      { type: "instagram", url: "https://instagram.com/" },     // 🔴 TODO
      { type: "whatsapp", url: "https://wa.me/34000000000" },   // 🔴 TODO number
    ],
  },
  {
    name: "Xyra Chat",
    legal: "Mll Nexus Group SL",
    initial: "X",
    tags: ["AI", "SaaS"],
    description: {
      en: "AI customer-messaging platform — automated, on-brand replies across every channel.",
      es: "Plataforma de mensajería con IA — respuestas automáticas y con tu identidad en todos los canales.",
      nl: "AI-klantencommunicatieplatform — geautomatiseerde, merkgerichte antwoorden op elk kanaal.",
    },
    links: [
      { type: "website", url: "https://xyrachat.com" },         // 🔴 TODO confirm
      { type: "linkedin", url: "https://linkedin.com/company/" },// 🔴 TODO
      { type: "instagram", url: "https://instagram.com/" },      // 🔴 TODO
    ],
  },
  // ➕ Add the next venture here — the grid handles it automatically.
];

// ── Personal socials (note: no GitHub by request) ────────────────────────────
export const socials: Social[] = [
  { platform: "LinkedIn", type: "linkedin", handle: "/in/stefmylle", url: "https://linkedin.com/in/" }, // 🔴 TODO
  { platform: "Instagram", type: "instagram", handle: "@stefmylle", url: "https://instagram.com/" },     // 🔴 TODO
  { platform: "X", type: "x", handle: "@stefmylle", url: "https://x.com/" },                              // 🔴 TODO
  // WhatsApp lives in the socials row so the grid stays gap-free (4 link tiles).
  // wa.me link only — the raw number is never rendered on the page.
  { platform: "WhatsApp", type: "whatsapp", handle: "message me", url: "https://wa.me/34000000000" },     // 🔴 TODO number
];

// ── Contact ──────────────────────────────────────────────────────────────────
export const contact = {
  email: "hello@stefmylle.com",   // 🔴 TODO confirm
  note: {
    en: "for anything formal — or message me on whatsapp",
    es: "para temas formales — o escríbeme por whatsapp",
    nl: "voor iets formeels — of stuur me een whatsapp",
  } as Localized,
};

// ── About ─────────────────────────────────────────────────────────────────────
export const about: Localized = {
  en: "I'm Stef Junior Mylle — I build and run businesses at the intersection of security and AI. Through Buzz Alarmas I deliver alarm and camera security across the Canary Islands and Alicante; through Xyra Chat I build AI-driven customer messaging. This page is the single place for everything I'm part of — my ventures, their links, and the fastest ways to reach me.",
  es: "Soy Stef Junior Mylle — creo y dirijo negocios en la intersección de la seguridad y la IA. Con Buzz Alarmas ofrezco seguridad de alarmas y cámaras en Canarias y Alicante; con Xyra Chat desarrollo mensajería de clientes impulsada por IA. Esta página reúne todo lo que hago — mis negocios, sus enlaces y la forma más rápida de contactarme.",
  nl: "Ik ben Stef Junior Mylle — ik bouw en run bedrijven op het snijvlak van security en AI. Met Buzz Alarmas lever ik alarm- en camerabeveiliging op de Canarische Eilanden en in Alicante; met Xyra Chat bouw ik AI-gedreven klantcommunicatie. Deze pagina bundelt alles waar ik bij betrokken ben — mijn ondernemingen, hun links en de snelste manieren om me te bereiken.",
};

// ── Footer (single plain string, not translated) ─────────────────────────────
export const footer = "Buzz Alarmas SL · Mll Nexus Group SL";

// ── Languages exposed to the toggle ──────────────────────────────────────────
export const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "nl", label: "NL" },
];
export const defaultLang: Lang = "en";
