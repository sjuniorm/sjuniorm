import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT = "Stef Junior Mylle — Security & AI Software";
export const OG_CONTENT_TYPE = "image/png";

const BG = "#0a0b0d";
const ACCENT = "#2ee6c8";
const TEXT = "#e8eaef";
const MUTED = "#7b8290";

/* Dark OG card: SJM monogram mark + name + tagline, matching the site theme. */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          backgroundImage:
            "radial-gradient(900px 520px at 82% -10%, rgba(46,230,200,0.18), transparent 60%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row: monogram badge + status label */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              width: 132,
              height: 132,
              borderRadius: 28,
              border: `2px solid rgba(46,230,200,0.38)`,
              background: "rgba(255,255,255,0.03)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: TEXT,
              fontSize: 52,
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            SJM
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: MUTED,
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 12,
                background: ACCENT,
              }}
            />
            {"stef_mylle // links"}
          </div>
        </div>

        {/* name + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              color: ACCENT,
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            <div style={{ width: 44, height: 3, background: ACCENT }} />
            Security &amp; AI Software
          </div>
          <div
            style={{
              color: TEXT,
              fontSize: 104,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.0,
            }}
          >
            Stef Junior Mylle
          </div>
          <div style={{ color: MUTED, fontSize: 30, marginTop: 28 }}>
            Buzz Alarmas&nbsp;&nbsp;·&nbsp;&nbsp;Xyra Chat&nbsp;&nbsp;·&nbsp;&nbsp;sjuniorm.xyz
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
