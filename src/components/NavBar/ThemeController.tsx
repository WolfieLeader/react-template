import React, { useState, useContext } from "react";
import { themeContext } from "../../contexts/themeContext";

const ThemeController = () => {
  const { toggleDarkMode } = useContext(themeContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const colorList = [
    { color: "River", current: true },
    { color: "Volcano", current: false },
    { color: "Mountains", current: false },
    { color: "Electric", current: false },
  ];

  return (
    <div className="flex items-center">
      <button className="p-2 mx-2 rounded-xl border-2 border-textColor" onClick={toggleDarkMode}>
        Dark
      </button>
      <span>
        <button
          onClick={() => setIsDropdownOpen((prevState) => !prevState)}
          className="inline-flex items-center font-medium justify-center px-8 py-2 text-sm text-textColor rounded-lg cursor-pointer hover:bg-secondary dark:hover:bg-gray-700 dark:hover:text-white">
          {colorList.find((item) => item.current)?.color}
        </button>

        <div
          className={`absolute top-10 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 ${
            isDropdownOpen ? "block" : "hidden"
          }`}>
          <ul className="py-2 font-medium" role="none">
            {colorList.map((item) => (
              <li key={item.color}>
                <button
                  className="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem">
                  <div className="inline-flex items-center">{item.color}</div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </span>
    </div>
  );
};

export default ThemeController;
