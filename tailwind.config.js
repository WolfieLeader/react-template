/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
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
      },
    },
  },
  plugins: [],
};
