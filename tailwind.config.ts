import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        fade: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" }, // ✅ Add quotes around transform
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" }, // ✅ Convert values to strings
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
