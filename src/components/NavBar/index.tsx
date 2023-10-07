import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeAndMenuButtons from "./ThemeAndMenuButtons";
import Tabs from "./Tabs";
import WebsiteIcon from "./WebsiteIcon";

const NavBar = () => {
  const webLinks = [
    { title: "Home", href: "/", external: false },
    { title: "About", href: "/about", external: false },
    { title: "Github", href: "https://github.com/WolfieLeader", external: true },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="left-0 top-0 z-20 w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <NavLink to="/" className="flex items-center order-1">
          <WebsiteIcon className="h-14 w-14 pr-2 text-primary" />
          <span className="font-title self-center whitespace-nowrap text-2xl">Simplex</span>
        </NavLink>
        <Tabs webLinks={webLinks} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <ThemeAndMenuButtons setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};

export default NavBar;
