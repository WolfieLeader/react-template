import React from "react";
import Logo from "./Logo";
// import Tabs from "./Tabs";
import ThemeController from "./ThemeController";

const NavBar = () => {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex items-center md:order-2 ">
          <ThemeController />
          {/* <button
            type="button"
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
        </div>
        {/* <Tabs isMenuOpen={isMenuOpen} /> */}
      </div>
    </nav>
  );
};

export default NavBar;
