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
    <header className="left-0 top-0 z-20 w-full px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <DeerIcon className="h-14 w-14 pr-2 text-primary-950" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">React</span>
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

interface DeerIconProps {
  className: string;
}
const DeerIcon = ({ className }: DeerIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      transform="scale(-1 1)"
      version="1.1"
      viewBox="-25.6 -25.6 563.2 563.2"
      xmlSpace="preserve">
      <g className="stroke-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="23">
        <path
          d="M408.656 245.78s-17.264 20.567-39.233 33.783c-.977-.752-1.948-1.511-2.987-2.256-34.83-25.237-97.33 1.901-137.499-1.983-14.372-1.395-24.82-29.004-19.753-64.004 4.554-31.452 11.925-49.53-1.45-63.642 8.335-11.459 9.948-29.134 9.948-29.134-26.713-6.31-37.428 15.118-37.428 15.118s-1.928.314-4.704.807c1.196-5.402 3.938-10.653 9.251-17.039 18.755-22.468 56.812-26.727 59.211-68.155 2.632-45.496-39.492-53.83-31.41-47.328 16.758 13.456 22.57 35.274 17.504 48.682 0 0-13.114-14.563-25.237-16.567-3.008-.499-3.746 3.214.356 5.176 45.878 21.982 3.248 52.709-11.118 46.207-15.096-6.838-13.538-28.738-22.987-26.871-9.442 1.873 18.728 37.058 4.793 54.022-6.16 7.5-11.562 17.401-11.562 17.401-1.169 2.338-1.798 4.786-2.085 7.241-2.229.567-4.205 1.142-5.539 1.702-13.442 5.593-23.808 17.483-27.69 33.516-3.891 16.027-14.578 23.808-17.976 26.228-1.942.492-3.891 0-7.774 3.406-3.884 3.398-1.388 15.958 10.687 12.143 19.404 5.819 54.897-12.929 55.382-2.427 0 0-12.8 38.452-7.439 93.815 4.951 51.171 33.038 101.972 33.038 101.972s-18.905 75.505-27.904 80.9c-8.99 5.402-12.594 19.794-12.594 19.794 7.2 5.401 33.284 2.7 33.284 2.7l31.322-98.205-.924-48.702s48.443 5.402 77.228 1.805c28.792-3.604 43.287-3.118 43.287-3.118s26.802 57.16 21.449 67.874c-2.413 4.827-19.651 58.042-19.651 58.042s-10.714 9.819-12.498 20.539c0 0 20.184 6.25 33.578 0l.888-14.29s29.92-68.825 24.471-82.15c-16.074-39.294.786-59.075 1.771-62.514 7.282-25.442 5.825-41.68-3.583-55.102 34.886-15.363 23.577-49.386 23.577-49.386z"
          fill="currentColor"></path>
        <path
          d="M152.091 420.809l-8.93-49.112 21.347-7.488c-3.439-9.962-6.694-20.901-9.204-32.313-9.592 4.451-20.888 10.037-32.682 16.587-8.369 4.65-6.892 12.766-5.36 17.852 5.053 16.848 17.852 62.508 17.852 62.508s3.576 21.435 16.075 26.788l11.617-25.892-10.715-8.93zM342.245 402.068c-.834-2.592-1.395-5.231-1.75-7.884a468.302 468.302 0 00-8.683-20.642c-4.554.143-11.466.506-20.649 1.381 1.662 10.228 3.665 20.047 5.169 25.36 6.229 21.9-14.14 77.296-18.481 79.949-14.448 8.841-16.074 22.509-16.074 22.509s20.908 4.814 31.356.8c4.499-1.73 5.614-15.267 5.614-15.267s31.627-61.038 23.498-86.206z"
          fill="currentColor"></path>
      </g>
      <g>
        <path
          d="M408.656 245.78s-17.264 20.567-39.233 33.783c-.977-.752-1.948-1.511-2.987-2.256-34.83-25.237-97.33 1.901-137.499-1.983-14.372-1.395-24.82-29.004-19.753-64.004 4.554-31.452 11.925-49.53-1.45-63.642 8.335-11.459 9.948-29.134 9.948-29.134-26.713-6.31-37.428 15.118-37.428 15.118s-1.928.314-4.704.807c1.196-5.402 3.938-10.653 9.251-17.039 18.755-22.468 56.812-26.727 59.211-68.155 2.632-45.496-39.492-53.83-31.41-47.328 16.758 13.456 22.57 35.274 17.504 48.682 0 0-13.114-14.563-25.237-16.567-3.008-.499-3.746 3.214.356 5.176 45.878 21.982 3.248 52.709-11.118 46.207-15.096-6.838-13.538-28.738-22.987-26.871-9.442 1.873 18.728 37.058 4.793 54.022-6.16 7.5-11.562 17.401-11.562 17.401-1.169 2.338-1.798 4.786-2.085 7.241-2.229.567-4.205 1.142-5.539 1.702-13.442 5.593-23.808 17.483-27.69 33.516-3.891 16.027-14.578 23.808-17.976 26.228-1.942.492-3.891 0-7.774 3.406-3.884 3.398-1.388 15.958 10.687 12.143 19.404 5.819 54.897-12.929 55.382-2.427 0 0-12.8 38.452-7.439 93.815 4.951 51.171 33.038 101.972 33.038 101.972s-18.905 75.505-27.904 80.9c-8.99 5.402-12.594 19.794-12.594 19.794 7.2 5.401 33.284 2.7 33.284 2.7l31.322-98.205-.924-48.702s48.443 5.402 77.228 1.805c28.792-3.604 43.287-3.118 43.287-3.118s26.802 57.16 21.449 67.874c-2.413 4.827-19.651 58.042-19.651 58.042s-10.714 9.819-12.498 20.539c0 0 20.184 6.25 33.578 0l.888-14.29s29.92-68.825 24.471-82.15c-16.074-39.294.786-59.075 1.771-62.514 7.282-25.442 5.825-41.68-3.583-55.102 34.886-15.363 23.577-49.386 23.577-49.386z"
          fill="currentColor"></path>
        <path
          d="M152.091 420.809l-8.93-49.112 21.347-7.488c-3.439-9.962-6.694-20.901-9.204-32.313-9.592 4.451-20.888 10.037-32.682 16.587-8.369 4.65-6.892 12.766-5.36 17.852 5.053 16.848 17.852 62.508 17.852 62.508s3.576 21.435 16.075 26.788l11.617-25.892-10.715-8.93zM342.245 402.068c-.834-2.592-1.395-5.231-1.75-7.884a468.302 468.302 0 00-8.683-20.642c-4.554.143-11.466.506-20.649 1.381 1.662 10.228 3.665 20.047 5.169 25.36 6.229 21.9-14.14 77.296-18.481 79.949-14.448 8.841-16.074 22.509-16.074 22.509s20.908 4.814 31.356.8c4.499-1.73 5.614-15.267 5.614-15.267s31.627-61.038 23.498-86.206z"
          fill="currentColor"></path>
      </g>
    </svg>
  );
};
