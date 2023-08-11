import React, { useState, useEffect, useLayoutEffect } from "react";
import { themeContext } from "../contexts/themeContext";

interface IThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [themeColor, setThemeColor] = useState<"dark" | "light">();
  const [themeMode, setThemeMode] = useState<"system" | "light" | "dark">();

  // * Set Theme on First Render
  useLayoutEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const localTheme = localStorage.getItem("theme");

    // If Local Theme Has Manually Been Set
    if (localTheme === "dark" || localTheme === "light") {
      setThemeMode(localTheme);
      setThemeColor(localTheme);
    } else {
      setThemeMode("system");
      setThemeColor(systemTheme);
    }
  }, []);

  // * Set Theme on Change
  useEffect(() => {
    if (themeMode === "dark" || (themeMode === "system" && themeColor === "dark")) {
      document.documentElement.dataset.theme = "dark";
    } else {
      document.documentElement.dataset.theme = "light";
    }
  }, [themeColor, themeMode]);

  const toggleTheme = () => {
    if (themeMode === "system") {
      setThemeMode("dark");
      setThemeColor("dark");
      localStorage.setItem("theme", "dark");
    } else if (themeMode === "dark") {
      setThemeMode("light");
      setThemeColor("light");
      localStorage.setItem("theme", "light");
    } else if (themeMode === "light") {
      setThemeMode("system");
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setThemeColor(systemTheme);
      localStorage.setItem("theme", "system");
    }
  };
  return <themeContext.Provider value={{ themeMode, toggleTheme }}>{children}</themeContext.Provider>;
};

export default ThemeProvider;
