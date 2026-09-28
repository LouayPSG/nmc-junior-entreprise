import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: "#A22323", dark: "#8A1D1D", light: "#B54A4A" },
        black: "#000000",
        white: "#FFFFFF",
        "gray-900": "#1A1A1A",
        "gray-100": "#F5F5F5",
        "gray-300": "#E0E0E0",
      },
      fontFamily: {
        display: ["var(--font-league-gothic)", "Impact", "sans-serif"],
        body: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.08)",
        "card-hover": "0 6px 20px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
