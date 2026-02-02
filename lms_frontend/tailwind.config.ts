import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        accent: "#06b6d4",
        surface: "#ffffff",
        background: "#f9fafb",
        ink: "#111827",
        muted: "#64748b",
        danger: "#EF4444"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(17,24,39,0.06)"
      }
    }
  },
  plugins: []
};

export default config;
