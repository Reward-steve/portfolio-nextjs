"use client";
import { useState } from "react";
import Button from "./buttons";
import Link from "next/link";
import * as m from "motion/react-client";
import ThemeToggle from "./ThemeToggle";

const mapNavigation = [
  { path: "/about", linkName: "About Me" },
  { path: "/project", linkName: "Projects" },
  { path: "/contact", linkName: "Contact Me" },
];

export default function Navigation() {
  const [isActive, setIsActive] = useState<number | null>(null);
  const [dropdown, setDropdown] = useState<boolean>(false);

  const handleLinkClick = (index: number | null) => {
    setIsActive(index);
    setDropdown(false);
  };

  const renderRotatingBorders = () => (
    <>
      <m.div
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="rounded-full border-1 px-5 w-17.5 h-14 absolute bottom-0 border-cyan-500 text-cyan-40"
      ></m.div>
      <m.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="rounded-full border-1 px-5 w-17.5 h-14 absolute bottom-0 border-cyan-500 text-cyan-40"
      ></m.div>
    </>
  );

  const renderNavLinks = () =>
    mapNavigation.map((nav, index) => {
      const active = index === isActive;
      return (
        <li className="nav-ul-li-375" key={index}>
          <Link
            className="navlink-effect flex flex-col "
            onClick={() => handleLinkClick(index)}
            href={nav.path}
          >
            {nav.linkName}
            <span
              className="w-0 h-[1px] bg-cyan-400"
              style={{ width: active ? "100%" : 0 }}
            ></span>
          </Link>
        </li>
      );
    });

  return (
    <nav className="flex justify-between items-center w-full h-16 bg-slate-900 text-white py-10 px-10 top-0 z-50">
      <Link
        href="/"
        className="rounded-full border-1 p-3 flex justify-center relative items-center flex-col border-cyan-400 text-cyan-400 top-0 left-0 font-bold text-2xl drop-shadow-2x transition-all duration-300"
        onClick={() => handleLinkClick(null)}
        style={{
          textShadow: isActive === null ? "0 0 20px cyan" : "",
          transition: "text-shadow 0.3s ease-in-out",
        }}
      >
        RS
        {isActive === null && renderRotatingBorders()}
      </Link>

      {/* Dropdown Toggle */}
      <div
        className="hidden dropdown-375"
        onClick={() => setDropdown(!dropdown)}
      >
        {[
          "rotate-[-45deg] translate-y-2",
          "translate-x-1/2 opacity-0",
          "rotate-45 translate-y-[-9px]",
        ].map((transform, index) => (
          <div
            key={index}
            className={`line bg-cyan-400 transition: duration-300 ease-linear ${
              dropdown ? transform : ""
            }`}
          ></div>
        ))}
      </div>

      {/* Navigation Links */}
      <ul
        className={`nav-ul-375 flex h-full justify-between items-center min-[40rem]:flex sm:opacity-100 sm:w-[85%] lg:w-1/2 md:w-[60%] inset-x-0 transition: duration-300 ease-in-out ${
          dropdown ? "min-[10rem]:flex" : "min-[10rem]:hidden"
        }`}
      >
        {renderNavLinks()}
        <ThemeToggle />
        <Button path="/Resume.pdf" text="Resume" />
        <div className="bg-white text-black dark:bg-[#0f172b] dark:text-white">
          This div changes based on the selected theme.
        </div>
      </ul>
    </nav>
  );
}
