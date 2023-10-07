import { createContext } from "react";

interface ThemeContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const themeContext = createContext({} as ThemeContextProps);
