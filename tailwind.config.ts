import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        muted: "#475569",
        line: "#E2E8F0",
        brand: "#2563EB",
        accent: "#2563EB",
        plum: "#1D4ED8",
        surface: "#EFF6FF",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.06)",
        lift: "0 24px 70px rgba(37, 99, 235, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
