/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // If using the app directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom blue
        secondary: "#F43F5E", // Custom red
        dark: "#121212", // Dark mode background
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "375px", // Custom breakpoint
        "3xl": "1800px", // Extra large breakpoint
      },
    },
  },
};
