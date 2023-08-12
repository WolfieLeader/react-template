import React, { useState, useEffect } from "react";
import { themeContext } from "../contexts/themeContext";

interface IThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setIsDarkMode(systemTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prevState) => !prevState);

  return <themeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</themeContext.Provider>;
};

export default ThemeProvider;
