/** @type {import('tailwindcss').Config} */
const radixColors = require("@radix-ui/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("./plugin-radix-colors")({
      colors: [
        "slate",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "violet",
        "slateA",
        "purple",
      ],
    }),
  ],
};
