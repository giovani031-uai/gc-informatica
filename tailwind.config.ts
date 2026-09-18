import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14181C",
        paper: "#FAFAF8",
        surface: "#F1EFE7",
        border: "#E1DDD0",
        pine: {
          DEFAULT: "#0B5D52",
          dark: "#08433B",
          light: "#0F7A6C",
        },
        amber: {
          DEFAULT: "#C7752F",
          light: "#E3A465",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
