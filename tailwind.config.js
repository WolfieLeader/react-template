/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        title: ["Sniglet", "sans-serif"],
      },
      colors: {
        text: {
          lightMode: "#070A12",
          darkMode: "#EDF0F8",
        },
        background: {
          lightMode: "#DEE4F2",
          darkMode: "#0D1321",
        },
        primary: "#375eb9",
        secondary: {
          lightMode: "#90A5D5",
          darkMode: "#1C2A4A",
        },
        accent: {
          lightMode: "#385494",
          darkMode: "#6B87C7",
        },
      },
    },
  },
  plugins: [],
};
