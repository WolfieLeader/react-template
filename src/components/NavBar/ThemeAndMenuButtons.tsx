import React, { useContext } from "react";
import { themeContext } from "../../context/themeContext";

interface ThemeAndMenuButtonsProps {
  setIsMenuOpen: (menuOpen: boolean) => void;
}

const ThemeAndMenuButtons = ({ setIsMenuOpen }: ThemeAndMenuButtonsProps) => {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <div className="flex items-center order-3">
      <button onClick={toggleTheme} className="mx-8">
        {theme === "dark" ? <DarkModeIcon className="h-8 w-8" /> : <LightModeIcon className="h-8 w-8" />}
        <span className="sr-only">Toggle Theme</span>
      </button>
      <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
        <BarsIcon className="h-8 w-8" />
        <span className="sr-only">Open main menu</span>
      </button>
    </div>
  );
};

const BarsIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
};

const DarkModeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      fill="none"
      viewBox="0 0 42 42"
      className={className}>
      <path
        stroke="currentColor"
        strokeWidth="4.167"
        d="M39.663 27.927c.425-1.012-.79-1.875-1.809-1.425a16.01 16.01 0 01-6.46 1.35c-8.719 0-15.786-6.925-15.786-15.469a15.167 15.167 0 012.363-8.146c.591-.933-.119-2.224-1.202-1.95C8.417 4.42 2.25 11.86 2.25 20.713c0 10.515 8.698 19.038 19.43 19.038 8.124 0 15.083-4.885 17.983-11.823z"></path>
      <path
        stroke="currentColor"
        strokeWidth="4.167"
        d="M28.523 2.465c-1.104-.738-2.42.579-1.685 1.683l1.312 1.969a4.858 4.858 0 010 5.391l-1.312 1.97c-.736 1.103.583 2.42 1.687 1.682l1.967-1.312a4.859 4.859 0 015.391 0l1.97 1.312c1.103.738 2.42-.579 1.683-1.683l-1.313-1.969a4.858 4.858 0 010-5.391l1.313-1.97c.737-1.103-.58-2.42-1.686-1.682l-1.967 1.312a4.859 4.859 0 01-5.391 0l-1.969-1.312z"></path>
    </svg>
  );
};

const LightModeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="37"
      fill="none"
      viewBox="0 0 42 37"
      className={className}>
      <path
        fill="currentColor"
        d="M32.625 11.125a2.083 2.083 0 001.458-.604l1.48-1.48a2.084 2.084 0 10-2.938-2.937l-1.375 1.48a2.083 2.083 0 000 2.937c.367.365.858.58 1.375.604zM20.833 6.25a2.083 2.083 0 002.084-2.083V2.083a2.083 2.083 0 00-4.167 0v2.084a2.083 2.083 0 002.083 2.083zM4.167 18.75H2.083a2.083 2.083 0 000 4.167h2.084a2.083 2.083 0 000-4.167zm3.416-8.23a2.083 2.083 0 002.938 0 2.083 2.083 0 000-2.937L9.04 6.104a2.083 2.083 0 00-2.937 2.938l1.48 1.479zm32 8.23H37.5a2.083 2.083 0 000 4.167h2.083a2.083 2.083 0 100-4.167zM18.75 33.333H12.5a2.083 2.083 0 000 4.167h6.25a2.083 2.083 0 000-4.167zM33.333 25H31.5a11.23 11.23 0 00.792-4.167 11.458 11.458 0 10-22.917 0c-.003 1.427.265 2.841.792 4.167H8.333a2.083 2.083 0 000 4.167h25a2.083 2.083 0 100-4.167zm-6.562 0H14.896a7.167 7.167 0 01-1.354-4.167 7.292 7.292 0 0114.583 0A7.167 7.167 0 0126.771 25zm2.396 8.333h-2.084a2.083 2.083 0 000 4.167h2.084a2.083 2.083 0 000-4.167z"></path>
    </svg>
  );
};

export default ThemeAndMenuButtons;
