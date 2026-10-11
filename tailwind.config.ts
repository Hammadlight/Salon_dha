import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        ink: "var(--color-text)",
        muted: "var(--color-text-muted)",
        line: "var(--color-border)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1360px",
      },
      borderRadius: {
        salon: "1.75rem",
        pill: "999px",
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
        fadeIn: "fadeIn 1.1s ease forwards",
      },
      boxShadow: {
        soft: "0 20px 60px -25px rgba(36, 28, 26, 0.35)",
        card: "0 12px 40px -20px rgba(36, 28, 26, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
