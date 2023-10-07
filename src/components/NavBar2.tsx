import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const NavBar = () => {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Form", href: "/form" },
    { title: "Github", href: "https://github.com/WolfieLeader" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="left-0 top-0 z-20 w-screen">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <Icon className="h-14 w-14 pr-2 text-primary" />
          <span className="font-title self-center whitespace-nowrap text-2xl text-white">Simplex</span>
        </NavLink>
        <div className="flex md:order-2">
          <button className="mr-3 flex rounded-lg bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-1 focus:ring-primary-800 md:mr-0">
            Mode
          </button>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center rounded-lg p-2 text-sm text-zinc-400 hover:bg-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-600 md:hidden">
            <span className="sr-only">Open main menu</span>
            <BarsIcon />
          </button>
        </div>
        <nav
          className={`${isMenuOpen ? "block" : "hidden"}
          w-full items-center justify-between md:order-1 md:flex md:w-auto`}>
          <Tabs navLinks={navLinks} />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

interface TabsProps {
  navLinks: {
    title: string;
    href: string;
  }[];
}
const Tabs = ({ navLinks }: TabsProps) => {
  return (
    <ul className="absolute left-[50%] mt-4 flex w-[95%] -translate-x-[50%] flex-col rounded-lg border border-zinc-700 bg-zinc-800 p-4 md:relative md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-zinc-900 md:text-sm md:font-medium">
      {navLinks.map(({ title, href }) => {
        return (
          <li>
            <NavLink
              to={href}
              className={({ isActive }) =>
                twMerge(
                  "block rounded py-2 pl-3 pr-4 text-base text-zinc-400 hover:bg-zinc-700 hover:text-white md:p-0 md:hover:bg-transparent",
                  isActive &&
                    "bg-primary text-white hover:bg-primary md:bg-transparent md:text-primary md:hover:text-primary"
                )
              }>
              {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

const BarsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
};

const Icon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="41"
      fill="none"
      viewBox="0 0 41 41"
      className={className}>
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        d="M32.792 24.597c-.449 0-.887.046-1.317.116L26.92 14.359a8.169 8.169 0 002.799-6.15c0-4.519-3.677-8.195-8.195-8.195-4.518 0-8.194 3.676-8.194 8.194a8.14 8.14 0 001.651 4.912l-3.988 5.828a8.16 8.16 0 00-2.785-.497c-4.518 0-8.194 3.677-8.194 8.195 0 4.518 3.676 8.194 8.194 8.194 4.519 0 8.195-3.676 8.195-8.194 0-1.981-.722-3.894-2.03-5.382l3.816-5.578c1.59.715 3.367.9 5.07.528l4.466 10.15a8.177 8.177 0 00-3.128 6.428c0 4.518 3.676 8.194 8.195 8.194 4.518 0 8.194-3.676 8.194-8.194 0-4.519-3.676-8.195-8.194-8.195zM8.208 30.743a4.101 4.101 0 01-4.097-4.097 4.101 4.101 0 014.097-4.097 4.101 4.101 0 014.098 4.097 4.101 4.101 0 01-4.098 4.097zm9.22-22.535a4.101 4.101 0 014.096-4.097 4.101 4.101 0 014.098 4.097 4.101 4.101 0 01-4.098 4.098 4.101 4.101 0 01-4.097-4.098zm15.364 28.68a4.101 4.101 0 01-4.098-4.096 4.101 4.101 0 014.098-4.098 4.101 4.101 0 014.097 4.098 4.101 4.101 0 01-4.097 4.097z"></path>
    </svg>
  );
};
