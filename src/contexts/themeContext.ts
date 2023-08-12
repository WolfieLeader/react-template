import { createContext } from "react";

interface IThemeContext {
  isDarkMode?: boolean;
  toggleDarkMode?: () => void;
}

export const themeContext = createContext<IThemeContext>({});
