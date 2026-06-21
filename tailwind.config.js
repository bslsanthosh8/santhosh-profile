const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        // Using light, celestial-inspired colors
        primary: "#88c0d0", // An icy blue for primary text
        secondary: "#a3be8c", // A soft green for secondary elements
        accent: "#ebcb8b", // A warm gold for highlights
      },
      textColor: {
        transparent: "transparent",
        current: "currentColor",
        DEFAULT: "#e5e9f0", // Default light text color
        primary: "#88c0d0",
        secondary: "#a3be8c",
        accent: "#ebcb8b",
      },
    },
  },
  plugins: [],
};