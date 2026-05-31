import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#F8FAFC",
        muted: "#A7B0C0",
        line: "#243044",
        brand: "#A855F7",
        accent: "#22D3EE",
        plum: "#7C3AED",
        surface: "#08111F",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(2, 6, 23, 0.35)",
        lift: "0 24px 70px rgba(168, 85, 247, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
