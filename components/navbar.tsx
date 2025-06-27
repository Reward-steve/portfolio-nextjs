"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Button from "./buttons";
import { renderRotatingBorders } from "./renderRotate";
import * as m from "motion/react-client";

const mapNavigation = [
  { path: "/about_temp", linkName: "About" },
  { path: "/services_temp", linkName: "Services" },
  { path: "/project_temp", linkName: "Projects" },
  { path: "/contact_temp", linkName: "Get in touch" },
];

export default function Navigation() {
  const [isActive, setIsActive] = useState<number | null>(null);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleFixedNav = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleFixedNav);
    return () => window.removeEventListener("scroll", handleFixedNav);
  }, []);

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
            onClick={() => handleLinkClick(index)}
            className="flex flex-col items-start text-black dark:text-cyan-300 font-medium"
          >
            {linkName}
            <m.span
              className="h-[2px] dark:bg-cyan-400 bg-cyan-800 transition-all duration-300"
              animate={{ width: active ? "100%" : "0%" }}
              initial={{ width: "0%" }}
            />
          </Link>
        </m.li>
      );
    });

  return (
    <nav
      role="navigation"
      className={`fixed top-0 z-50 w-full h-16 flex justify-between items-center px-4 sm:px-10 py-10 font-bold backdrop-blur-md ${
        scrollY > 100
          ? "shadow-md bg-white/80 dark:bg-[#0f172b]/80"
          : "bg-white dark:bg-[#0f172b]"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        onClick={() => handleLinkClick(null)}
        className="rounded-full border-2 p-2 border-cyan-400 text-cyan-800 dark:text-cyan-400 text-2xl relative transition duration-300"
        style={{
          textShadow: isActive === null ? "0 0 12px cyan" : "none",
        }}
      >
        RS
        {isActive === null && renderRotatingBorders()}
      </Link>

      {/* Navigation Links */}
      <ul
        className={`nav-ul-375 flex-wrap items-center gap-5 sm:gap-8 sm:flex-row flex-col sm:flex sm:opacity-100 sm:relative sm:w-auto ${
          dropdown
            ? "flex absolute top-16 left-0 w-full bg-white dark:bg-[#0f172b] p-4 z-40"
            : "hidden"
        }`}
      >
        {renderNavLinks()}
        <Button path="/cv.pdf" text="Resume" />
      </ul>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        <ThemeToggle />

        {/* Hamburger */}
        <div
          className="sm:hidden flex flex-col justify-between w-6 h-5 cursor-pointer z-50"
          onClick={() => setDropdown((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-full bg-cyan-800 dark:bg-cyan-400 transition-transform duration-300 ${
              dropdown ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-cyan-800 dark:bg-cyan-400 transition-all duration-300 ${
              dropdown ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-cyan-800 dark:bg-cyan-400 transition-transform duration-300 ${
              dropdown ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
