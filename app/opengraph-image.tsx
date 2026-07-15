import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0B1220",
          color: "#F3F6FA",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#FF6B35",
            }}
          />
          <div style={{ fontSize: 28, letterSpacing: 4, color: "#8FA1BE", textTransform: "uppercase" }}>
            Basecrew
          </div>
        </div>
        <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
          The fastest way to run your ski rental shop.
        </div>
        <div style={{ fontSize: 30, color: "#8FA1BE", marginTop: 24 }}>
          Rental software built for ski, snowboard &amp; bike shops.
        </div>
      </div>
    ),
    { ...size }
  );
}
