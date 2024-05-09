import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
    const localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme === "dark" || localStorageTheme === "light") {
      setTheme(localStorageTheme);
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
    setTheme((preValue) => (preValue === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.getElementById("root")?.classList.add("dark");
    } else {
      document.getElementById("root")?.classList.remove("dark");
    }
  }, [theme]);

  return [theme, toggleTheme] as const;
};

export default useTheme;
