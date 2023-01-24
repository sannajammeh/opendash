/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@opendash/ui/tailwind.config")],
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@opendash/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
