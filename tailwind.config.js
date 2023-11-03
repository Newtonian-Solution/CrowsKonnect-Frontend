/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primaryGreen: "#6EE7B7",
        secondaryGreen: "#A7F3D0",
        darkGreen: "#71CCA8"
      },
      fontFamily: {
        "groteska-bold": ["Groteska-Bold", "sans-serif"],
        "groteska-bold-italic": ["Groteska-BoldItalic", "sans-serif"],
        "groteska-book": ["Groteska-Book", "sans-serif"],
        "groteska-book-italic": ["Groteska-BookItalic", "sans-serif"],
        "groteska-heavy": ["Groteska-Heavy", "sans-serif"],
        "groteska-heavy-italic": ["Groteska-HeavyItalic", "sans-serif"],
        "groteska-italic": ["Groteska-Italic", "sans-serif"],
        "groteska-light": ["Groteska-Light", "sans-serif"],
        "groteska-light-italic": ["Groteska-LightItalic", "sans-serif"],
        "groteska-medium": ["Groteska-Medium", "sans-serif"],
        "groteska-medium-italic": ["Groteska-MediumItalic", "sans-serif"],
        "groteska-regular": ["Groteska-Regular", "sans-serif"],
        "groteska-thin": ["Groteska-Thin", "sans-serif"],
        "groteska-thin-italic": ["Groteska-ThinItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
}
