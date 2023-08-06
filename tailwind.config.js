/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "custom-gray": "#1B1B1B",
        "custom-dark": "#14151F",
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
};
