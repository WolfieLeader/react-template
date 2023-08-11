import { createContext } from "react";

interface IThemeContext {
  themeMode?: "system" | "light" | "dark";
  toggleTheme?: () => void;
}

export const themeContext = createContext<IThemeContext>({});
