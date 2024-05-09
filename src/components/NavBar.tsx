import { useTheme, useToggle } from "@/hooks";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { WiDayHaze, WiNightCloudy } from "react-icons/wi";
import WebIcon from "./ui/WebIcon";
import Separator from "./ui/Separator";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export default function NavBar() {
  const webLinks = [
    { title: "home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="relative w-full flex flex-wrap items-center justify-between py-4 px-4 sm:px-8 md:px-12 z-10">
      <NavLink to="/">
        <WebIcon />
      </NavLink>
      <DesktopNav webLinks={webLinks} />
      <div className="flex flex-wrap items-center justify-between">
        <ThemeMode />
        <MobileNav webLinks={webLinks} />
      </div>
    </header>
  );
}

function DesktopNav({ webLinks }: { webLinks: Array<{ title: string; href: string }> }) {
  return (
    <div className="hidden sm:block relative font-semibold text-md">
      <ul className="flex flex-row items-center">
        {webLinks.map(({ title, href }) => {
          return (
            <li key={title} className="mx-3">
              <NavLink
                to={href}
                className={({ isActive }: { isActive: boolean }) =>
                  cn({ "text-blue-700 dark:text-blue-400": isActive, "text-zinc-900 dark:text-zinc-50": !isActive })
                }>
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function MobileNav({ webLinks }: { webLinks: Array<{ title: string; href: string }> }) {
  const [isMenuOpen, toggleMenu] = useToggle();
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);
  return (
    <>
      <button onClick={() => toggleMenu()} className="block sm:hidden ml-4 p-0.5">
        <div className="sr-only">Open Menu</div>
        <FaBarsStaggered className="size-8 text-zinc-900 dark:text-zinc-50" />
      </button>
      {isMenuOpen && (
        <div className="absolute h-svh min-h-screen w-full inset-0 flex flex-warp bg-zinc-950/25 backdrop-blur-sm z-20">
          <div className="h-full w-[30vw]" onClick={() => toggleMenu(false)}></div>
          <div className="h-full w-[70vw] bg-zinc-100 dark:bg-zinc-900 border-l-2 border-zinc-300 dark:border-zinc-700">
            <nav className="mx-auto mt-6">
              <div className="flex items-center justify-between mx-8">
                <WebIcon className="grayscale my-6 justify-start" />
                <button onClick={() => toggleMenu(false)}>
                  <div className="sr-only">Close Menu</div>
                  <FaXmark className="size-7" />
                </button>
              </div>
              <Separator />
              <ul className="flex flex-col items-start justify-center text-xl font-semibold mt-2 px-8">
                {webLinks.map(({ title, href }) => {
                  return (
                    <li key={title} className="my-3">
                      <NavLink
                        to={href}
                        className={({ isActive }: { isActive: boolean }) =>
                          cn("py-0.5 px-1.5", {
                            "text-blue-700 dark:text-blue-400": isActive,
                            "text-zinc-900 dark:text-zinc-400": !isActive,
                          })
                        }>
                        {title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

function ThemeMode() {
  const [theme, toggleTheme] = useTheme();
  return (
    <button onClick={() => toggleTheme()} className="mx-0 sm:mx-4 p-0.5">
      <div className="sr-only">Theme Mode</div>
      {theme === "light" ? (
        <WiDayHaze className="size-12 text-zinc-900 dark:text-zinc-50" />
      ) : (
        <WiNightCloudy className="size-12 text-zinc-900 dark:text-zinc-50" />
      )}
    </button>
  );
}
