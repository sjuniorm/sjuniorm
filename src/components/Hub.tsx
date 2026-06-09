"use client";

import { Fragment, useEffect, useState } from "react";
import {
  about,
  contact,
  defaultLang,
  footer,
  identity,
  languages,
  ventures,
  type Lang,
} from "@/content";
import { Icon, linkLabel, Monogram } from "./icons";
import TerminalTile from "./TerminalTile";

const STORAGE_KEY = "sjm-lang";
const pad = (n: number) => String(n).padStart(2, "0");
const isLang = (v: string | null): v is Lang =>
  v === "en" || v === "es" || v === "nl";

/* Terms emphasised in the About copy, per language (README spec). */
const ABOUT_TERMS: Record<Lang, string[]> = {
  en: ["Stef Junior Mylle", "Buzz Alarmas", "Xyra Chat", "security", "AI"],
  nl: ["Stef Junior Mylle", "Buzz Alarmas", "Xyra Chat", "security", "AI"],
};

function emphasize(text: string, terms: string[]) {
  if (!terms.length) return text;
  const escaped = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escaped.join("|")})`, "g");
  return text.split(re).map((part, i) =>
    terms.includes(part) ? <b key={i}>{part}</b> : <Fragment key={i}>{part}</Fragment>,
  );
}

export default function Hub({ showAbout = true }: { showAbout?: boolean }) {
  const [lang, setLang] = useState<Lang>(defaultLang);

  // Restore persisted language after mount. Server always renders `defaultLang`
  // to avoid a hydration mismatch, then we sync to localStorage — so calling
  // setState in this effect is intentional.
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isLang(stored)) setLang(stored);
  }, []);

  // Persist + reflect on <html lang> whenever it changes.
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  return (
    <div className="wrap">
      <div className="statusbar">
        <span className="dot" aria-hidden="true" />
        <span>
          stef_junior_mylle<span className="hide-sm">{" // links"}</span>
        </span>
        <span className="sep" aria-hidden="true" />
        <span className="hide-sm">v1.0</span>
        <b>SECURITY &amp; AI</b>
      </div>

      <main className="bento">
        {/* ---- HERO ---- */}
        <section className="tile hero" aria-label="Profile">
          <div className="hero-top">
            <span className="mono-avatar">
              <Monogram />
            </span>
            <div className="langtoggle" role="group" aria-label="Language">
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  aria-pressed={lang === l.code}
                  onClick={() => setLang(l.code)}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h1 className="hero-name">
              Stef Junior
              <br />
              Mylle
            </h1>
            <div className="hero-tag">
              <span className="bar" aria-hidden="true" />
              {identity.tagline[lang]}
              <span className="cursor" aria-hidden="true" />
            </div>
          </div>
          <div className="hero-meta">
            <span className="chip">
              <span className="k">●</span> {identity.role[lang]}
            </span>
          </div>
        </section>

        {/* ---- VENTURES ---- */}
        {ventures.map((v, i) => (
          <section className="tile biz" key={v.name} aria-label={v.name}>
            <div className="btop">
              <div className="thead">
                <span className="tidx">{pad(i + 1)}</span>
                <span className="tlabel">/ Venture</span>
              </div>
              <span className="bmark" aria-hidden="true">
                {v.initial}
              </span>
            </div>
            <div className="btitle">{v.name}</div>
            <div className="blegal">{v.legal}</div>
            <p className="bdesc">{v.description[lang]}</p>
            <div className="bspace" />
            <div className="btags">
              {v.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="blinks">
              {v.links.map((l) => {
                const Glyph = Icon[l.type];
                const label = linkLabel[l.type];
                return (
                  <a
                    className="blink"
                    key={l.type + l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${v.name} — ${label}`}
                  >
                    <Glyph aria-hidden="true" /> {label}
                  </a>
                );
              })}
            </div>
          </section>
        ))}

        {/* ---- TERMINAL (fills the slot the socials used to occupy) ---- */}
        <TerminalTile />

        {/* ---- CONTACT ---- */}
        <section className="tile contact" aria-label="Contact">
          <div>
            <div className="thead">
              <span className="tidx">→</span>
              <span className="tlabel">/ Contact</span>
            </div>
            <a
              className="cmail"
              href={`mailto:${contact.email}`}
              style={{ display: "inline-block", marginTop: 12 }}
            >
              {contact.email}
            </a>
            <div className="csub">{contact.note[lang]}</div>
          </div>
          <div className="cactions">
            <a className="cbtn wa" href={`mailto:${contact.email}`}>
              <Icon.mail aria-hidden="true" /> Send mail
            </a>
            <a
              className="cbtn ghost-btn"
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Message me on WhatsApp"
            >
              <Icon.whatsapp aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </section>
      </main>

      {showAbout && (
        <section className="about" aria-label="About">
          <h2>
            <span className="n">·</span> / About
          </h2>
          <div>
            <p>{emphasize(about[lang], ABOUT_TERMS[lang])}</p>
          </div>
        </section>
      )}

      <footer className="foot">
        <div className="credits">
          {footer.split("·").map((name, i, arr) => (
            <Fragment key={name}>
              <span>{name.trim()}</span>
              {i < arr.length - 1 && <span className="d" aria-hidden="true" />}
            </Fragment>
          ))}
        </div>
        <button
          type="button"
          className="top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          back to top
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M8 13V3M4 7l4-4 4 4" />
          </svg>
        </button>
      </footer>
    </div>
  );
}
