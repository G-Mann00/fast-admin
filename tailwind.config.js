/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },

      colors: {
        "FAST-Orange": "#FF7622",
        "FAST-Grey": "#98A8B8",
        "FAST-DarkGrey": "#6B6E82",
        "FAST-DarkBlue": "#121223",
        "FAST-WhiteCream": "#F0F5FA",
        "FAST-Text": "#181C2E",
      },
    },
  },
  plugins: [],
});
