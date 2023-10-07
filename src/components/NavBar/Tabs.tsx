import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import WebsiteIcon from "./WebsiteIcon";

interface TabsProps {
  webLinks: {
    title: string;
    href: string;
    external: boolean;
  }[];
  isMenuOpen: boolean;
  setIsMenuOpen: (menuOpen: boolean) => void;
}

const Tabs = ({ webLinks, isMenuOpen, setIsMenuOpen }: TabsProps) => {
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setDisplayWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={twMerge(
        "relative w-full md:w-auto md:flex items-center justify-between md:order-2",
        isMenuOpen ? "block" : "hidden"
      )}>
      {displayWidth > 768 ? (
        <ul className="relative flex flex-wrap">
          {webLinks.map((link) => {
            return (
              <li>
                <NavLink to={link.href}>{link.title}</NavLink>
              </li>
            );
          })}
        </ul>
      ) : (
        <>
          <div
            className="absolute w-full h-screen backdrop-blur-sm left-[-20rem] bg-zinc-900/25"
            onClick={() => setIsMenuOpen(false)}></div>
          <ul className="absolute flex flex-col top-0 right-[-3.55rem] w-64 h-screen bg-zinc-800 px-4 py-6 z-40">
            <div className="flex items-center justify-between pb-6 border-b-2 border-zinc-700">
              <NavLink to="/">
                <WebsiteIcon className="h-8 w-8" />
              </NavLink>
              <button onClick={() => setIsMenuOpen(false)}>
                <XIcon className="h-8 w-8" />
              </button>
            </div>
            {webLinks.map((link) => {
              return (
                <li className="flex text-xl pt-4">
                  <NavLink to={link.href} className="w-full">
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </nav>
  );
};

const XIcon = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={className}>
      <path
        fill="currentColor"
        d="M20.746 3.329a1 1 0 00-1.415 0l-7.294 7.294-7.294-7.294a1 1 0 10-1.414 1.414l7.294 7.294-7.294 7.294a1 1 0 001.414 1.415l7.294-7.295 7.294 7.295a1 1 0 001.415-1.415l-7.295-7.294 7.295-7.294a1 1 0 000-1.414z"></path>
    </svg>
  );
};

export default Tabs;
