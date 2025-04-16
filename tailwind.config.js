module.exports = {
  // darkMode: "class", // Enables dark mode using the "class" strategy
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include all files in the `app` directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include all files in the `components` directory
    "./pages/**/*.{js,ts,jsx,tsx}", // Include all files in the `pages` directory
    "./public/**/*.html", // Include all HTML files in the `public` directory
  ],
  theme: {
    extend: {
      boxShadow: {
        "inset-glow": "inset 0 0 20px -6px", // Custom box shadow
      },
      backgroundImage: {
        "gradient-black-transparent":
          "linear-gradient(45deg, black, transparent)", // Custom background gradient
      },
    },
  },
  plugins: [],
};
