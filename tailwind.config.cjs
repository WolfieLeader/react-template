/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        tiny: "375px",
        xs: "480px",
        cube: { raw: "(min-width: 640px) and (min-height: 560px)" },
      },
    },
  },
  plugins: [],
};
