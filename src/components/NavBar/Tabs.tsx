import React from "react";
import { Link } from "react-router-dom";

interface ITabsProps {
  isMenuOpen: boolean;
}

const Tabs = ({ isMenuOpen }: ITabsProps) => {
  const links = [
    { name: "Home", href: "#", current: true },
    { name: "Form", href: "#", current: false },
    { name: "Github", href: "https://github.com/WolfieLeader", current: false },
  ];

  return (
    <div
      className={`${isMenuOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}>
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {links.map((item) => (
          <li key={item.name}>
            <Link
              to={item.href}
              className={
                item.current
                  ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              }
              aria-current="page">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
