/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      textColor: "rgb(var(--color-textColor) / <alpha-value>)",
      backgroundColor: "rgb(var(--color-backgroundColor) / <alpha-value>)",
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      accent: "rgb(var(--color-accent) / <alpha-value>)",
    },
  },
  plugins: [],
};
