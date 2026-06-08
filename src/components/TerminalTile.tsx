"use client";

import { useEffect, useState } from "react";

type Line = { kind: "cmd" | "out"; text: string; accent?: boolean };

/* The little story the terminal types out, on loop. */
const SCRIPT: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "stef junior mylle", accent: true },
  { kind: "cmd", text: "ventures --list" },
  { kind: "out", text: "buzz alarmas · xyra chat" },
  { kind: "cmd", text: "focus" },
  { kind: "out", text: "security × ai", accent: true },
];

const TYPE_MS = 42; // per character
const AFTER_CMD_MS = 360; // pause after a command line
const AFTER_OUT_MS = 520; // pause after an output line
const LOOP_PAUSE_MS = 2600; // hold the full screen before restarting

export default function TerminalTile() {
  // {li: line index being typed, ci: chars revealed on that line}
  // Initial {0,0} matches the server render (empty prompt) → no hydration drift.
  const [pos, setPos] = useState({ li: 0, ci: 0 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      // Show everything at once, no animation.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPos({ li: SCRIPT.length, ci: 0 });
      return;
    }

    let li = 0;
    let ci = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (li >= SCRIPT.length) {
        timer = setTimeout(() => {
          li = 0;
          ci = 0;
          setPos({ li, ci });
          timer = setTimeout(tick, 400);
        }, LOOP_PAUSE_MS);
        return;
      }
      const line = SCRIPT[li];
      if (ci <= line.text.length) {
        setPos({ li, ci });
        ci += 1;
        timer = setTimeout(tick, TYPE_MS);
      } else {
        li += 1;
        ci = 0;
        setPos({ li, ci });
        timer = setTimeout(tick, line.kind === "cmd" ? AFTER_CMD_MS : AFTER_OUT_MS);
      }
    };

    timer = setTimeout(tick, 320);
    return () => clearTimeout(timer);
  }, []);

  const cursorAt = Math.min(pos.li, SCRIPT.length - 1);
  const visible = SCRIPT.slice(0, Math.min(pos.li + 1, SCRIPT.length));

  return (
    <section className="tile fun" aria-label="Terminal">
      <div className="thead">
        <span className="tidx">04</span>
        <span className="tlabel">/ Terminal</span>
        <span className="term-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className="term-body" aria-hidden="true">
        {visible.map((line, idx) => {
          const text = idx < pos.li ? line.text : line.text.slice(0, pos.ci);
          return (
            <div className="term-line" key={idx}>
              <span className="term-p">{line.kind === "cmd" ? "$" : "›"}</span>
              <span
                className={
                  line.kind === "cmd"
                    ? "term-cmd"
                    : line.accent
                      ? "term-out acc"
                      : "term-out"
                }
              >
                {text}
              </span>
              {idx === cursorAt && <span className="term-cursor" />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
