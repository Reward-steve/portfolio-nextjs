"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Button from "./buttons";
import { renderRotatingBorders } from "./renderRotate";
import * as m from "motion/react-client";

const mapNavigation = [
  { path: "/about_temp", linkName: "About" },
  { path: "/project_temp", linkName: "Projects" },
  { path: "/contact_temp", linkName: "Get in touch" },
];

export default function Navigation() {
  const [isActive, setIsActive] = useState<number | null>(null);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  const handleFixedNav = () => {
    setScrollY(window.scrollY);
    if (scrollY > 100) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleFixedNav);
    return () => {
      window.removeEventListener("scroll", handleFixedNav);
    };
  }, [scrollY]);

  const handleLinkClick = (index: number | null) => {
    setIsActive(index);
    setDropdown(false);
  };

  const renderNavLinks = () =>
    mapNavigation.map(({ path, linkName }, index) => {
      const active = index === isActive;
      return (
        <m.li
          whileHover={{ scale: 1.05 }}
          className="nav-ul-li-375"
          key={index}
        >
          <Link
            href={path}
            className="flex flex-col dark_tx text-black"
            onClick={() => handleLinkClick(index)}
          >
            {linkName}
            <m.span
              className={`h-[2px] dark:bg-cyan-400 bg-cyan-800 transition duration-300 `}
              animate={{ width: active ? "100%" : "0%" }}
              initial={{ width: "0%" }}
            ></m.span>
          </Link>
        </m.li>
      );
    });

  return (
    <nav
      className={`flex justify-between font-bold items-center w-full h-16 bg-white text-[#0f172b] dark:text-[#c6e5ff] dark_bg py-10 sm:px-10 px-2 top-0 z-50 ${
        scrollY > 300 ? "fixed backdrop-blur-md bg-transparent shadow-md" : ""
      } `}
    >
      <Link
        href="/"
        className="rounded-full border-1 p-3 flex justify-center relative items-center flex-col border-cyan-400 text-cyan-800 dark:text-cyan-400 top-0 left-0 font-bold text-2xl drop-shadow-2x transition-all duration-300"
        onClick={() => handleLinkClick(null)}
        style={{
          textShadow: isActive === null ? "0 0 20px cyan" : "",
          transition: "text-shadow 0.3s ease-in-out",
        }}
      >
        RS
        {isActive === null && renderRotatingBorders()}
      </Link>

      {/* Navigation Links */}
      <ul
        className={`nav-ul-375 flex h-full justify-evenly items-center sm:opacity-100 sm:w-[85%] lg:w-1/2 md:w-[60%] inset-x-0 transition: duration-300 ease-in-out dark:bg-[#0f172b] bg-white ${
          dropdown ? "flex" : "drop"
        }`}
      >
        {renderNavLinks()}
        <Button path="/cv.pdf" text="Resume" />
      </ul>
      <div className="flex justify-center items-center">
        <ThemeToggle />
        {/* Dropdown Toggle */}

        <div
          className="hidden dropdown-375"
          onClick={() => setDropdown(!dropdown)}
        >
          {[
            "rotate-[-45deg] translate-y-2 translate-x-0.2",
            "translate-x-1/2 opacity-0",
            "rotate-45 translate-y-[-7px] translate-x-0",
          ].map((transform, index) => (
            <div
              key={index}
              className={`line bg-cyan-800 dark:bg-cyan-400 transition: duration-300 ease-linear ${
                dropdown ? transform : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </nav>
  );
}
