/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "rgb(var(--color-textColor) / <alpha-value>)",
        backgroundColor: "rgb(var(--color-backgroundColor) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        river: {
          DEFAULT: "#3c6faf",
          50: "#f3f6fc",
          100: "#e7edf7",
          200: "#c9d8ee",
          300: "#99b8e0",
          400: "#6392cd",
          500: "#3c6faf",
          600: "#2e5b9b",
          700: "#26497e",
          800: "#233f69",
          900: "#223758",
          950: "#17233a",
        },
        volcano: {
          DEFAULT: "#ea0423",
          50: "#fff0f2",
          100: "#ffdde2",
          200: "#ffc1c9",
          300: "#ff96a4",
          400: "#ff5a70",
          500: "#ff2744",
          600: "#ea0423",
          700: "#d4011d",
          800: "#ae061d",
          900: "#900c1e",
          950: "#4f000b",
        },
        mountains: {
          DEFAULT: "#14b975",
          50: "#ecfdf4",
          100: "#d2f9e2",
          200: "#a9f1ca",
          300: "#71e4ad",
          400: "#37d08c",
          500: "#14b975",
          600: "#08935d",
          700: "#06764d",
          800: "#085d3e",
          900: "#084c35",
          950: "#032b1f",
        },
        electric: {
          DEFAULT: "#b619ff",
          50: "#fcf4ff",
          100: "#f7e5ff",
          200: "#f0d0ff",
          300: "#e5acff",
          400: "#d676ff",
          500: "#c642ff",
          600: "#b619ff",
          700: "#a00ee2",
          800: "#8612b7",
          900: "#6e1093",
          950: "#4e006f",
        },
      },
    },
  },
  plugins: [],
};
