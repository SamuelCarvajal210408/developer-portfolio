import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Samuel Carvajal Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B0F19",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Glow circles */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-50px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Brand Top Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 800,
              fontSize: "20px",
              fontFamily: "monospace",
            }}
          >
            SC
          </div>
          <span
            style={{
              color: "#94A3B8",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            samuels-portfolio.vercel.app
          </span>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              color: "#38BDF8",
              fontSize: "20px",
              fontWeight: 600,
              fontFamily: "monospace",
              letterSpacing: "1px",
            }}
          >
            MEDELLÍN, COLOMBIA • EST REMOTE
          </div>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Samuel Carvajal
          </h1>
          <p
            style={{
              fontSize: "30px",
              color: "#C7D2FE",
              fontWeight: 600,
              margin: 0,
            }}
          >
            Software Engineer • Backend, TypeScript & AI-First Systems
          </p>
        </div>

        {/* Footer Badges */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            alignItems: "center",
          }}
        >
          {["FastAPI", "Async SQLAlchemy", "Next.js 15", "TypeScript", "Redis", "Claude Code", "Antigravity"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  background: "rgba(30, 41, 59, 0.7)",
                  border: "1px solid rgba(51, 65, 85, 0.6)",
                  color: "#E2E8F0",
                  fontSize: "16px",
                  fontFamily: "monospace",
                  fontWeight: 600,
                }}
              >
                {badge}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
