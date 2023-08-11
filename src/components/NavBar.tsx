import React, { useContext } from "react";
import { themeContext } from "../contexts/themeContext";

const NavBar = () => {
  const { themeMode, toggleTheme } = useContext(themeContext);
  return <button onClick={toggleTheme}>{themeMode}</button>;
};

export default NavBar;
