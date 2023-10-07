import React, { useState, useEffect } from "react";
import { themeContext } from "../context/themeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
    const localTheme = localStorage.getItem("theme");

    if (localTheme && (localTheme === "dark" || localTheme === "light")) {
      setTheme(localTheme);
    } else if (systemTheme) {
      localStorage.setItem("theme", systemTheme);
      setTheme(systemTheme);
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.getElementById("root")?.classList.add("dark");
    } else {
      document.getElementById("root")?.classList.remove("dark");
    }
  }, [theme]);

  return <themeContext.Provider value={{ theme, toggleTheme }}>{children}</themeContext.Provider>;
};

export default ThemeProvider;
