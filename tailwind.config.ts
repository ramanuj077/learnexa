import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#135bec",
        "primary-admin": "#1e3a8a", // Navy Blue for Admin
        "primary-teacher": "#4F46E5", // Indigo for Teacher
        "background-light": "#f8fafc",
        "background-dark": "#0f172a",
        "accent-gold": "#d4af37",
      },
      fontFamily: {
        display: ["Outfit", "Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
} satisfies Config;

