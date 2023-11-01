const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,css}",
    "./app/**/*.{js,ts,jsx,tsx,css}",
    "./pages/**/*.{js,ts,jsx,tsx,css}",
    "./components/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        aktiv: ["aktiv-grotesk-extended", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        purple: {
          200: "#BCACFA",
          300: "#9A83F8",
          500: "rgba(87, 48, 243, 1)",
          900: "#110A31",
        },
      },
      boxShadow: {
        button:
          "0px 8px 16px rgba(87, 48, 243, 0.4), inset 0px 0px 2px rgba(255, 255, 255, 0.2)",
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
        "10xl": "120rem",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
        17: "repeat(17, minmax(0, 1fr))",
        18: "repeat(18, minmax(0, 1fr))",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    plugin(function ({ addVariant }) {
      addVariant("state-open", '&[data-state="open"]');
      addVariant("group-state-open", '[data-state="open"] &');
    }),
  ],
};
