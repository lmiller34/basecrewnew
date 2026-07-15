import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#0B1220",
          soft: "#0F1830",
        },
        surface: {
          DEFAULT: "#121B2E",
          raised: "#182642",
        },
        border: {
          DEFAULT: "#223252",
        },
        snow: "#F3F6FA",
        mist: "#8FA1BE",
        flare: {
          DEFAULT: "#FF6B35",
          hover: "#FF8555",
          muted: "#3A2416",
        },
        piste: {
          green: "#2FAE66",
          blue: "#3E7CFF",
          black: "#E8E8ED",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "ridge-fade": "linear-gradient(180deg, rgba(11,18,32,0) 0%, #0B1220 100%)",
      },
      keyframes: {
        "trail-draw": {
          "0%": { strokeDashoffset: "1200" },
          "100%": { strokeDashoffset: "0" },
        },
        "drift": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "trail-draw": "trail-draw 2.4s ease-out forwards",
        "drift": "drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
