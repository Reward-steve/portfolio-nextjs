"use client";
import { useState, useEffect } from "react";

import Button from "./buttons";
import Link from "next/link";
import * as m from "motion/react-client";

// import { setTimeout } from "timers/promises";

const mapNavigation = [
  { path: "/About", linkName: "About Me" },
  { path: "/Project", linkName: "Projects I've Built" },
  { path: "/Contact", linkName: "Contact Me" },
];

export default function Navigation() {
  const [isActive, setIsActive] = useState<number | null>(null);
  const [dropdown, setDropdown] = useState<boolean>(false);

  return (
    <nav className="flex justify-between items-center w-full h-16 bg-slate-900 text-white py-10 px-10 top-0 z-50">
      <Link
        href="/"
        className="rounded-full border-1 p-3 flex justify-center relative items-center flex-col border-cyan-400 text-cyan-400 top-0 left-0 font-bold text-2xl drop-shadow-2x transition-all duration-300"
        onClick={() => setIsActive(null)}
        style={{
          textShadow: isActive === null ? "0 0 20px cyan" : "",
          transition: "text-shadow 0.3s ease-in-out",
        }}
      >
        RS
        {isActive === null && (
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
        )}
      </Link>
      <div
        className="hidden dropdown-375"
        onClick={() => setDropdown(!dropdown)}
      >
        <div
          className="line  bg-cyan-400 transition: duration-300 ease-linear"
          style={{
            transform: `${
              dropdown === true ? "translateX(10px)" : "translateX(2px)"
            }`,
          }}
        ></div>
        <div
          className="line  bg-cyan-400 transition: duration-300 ease-in-out"
          style={{
            transform: `${
              dropdown === true ? "translateX(0)" : "translateX(2px)"
            }`,
          }}
        ></div>
        <div
          className="line  bg-cyan-400 transition: duration-300 ease-linear"
          style={{
            transform: `${
              dropdown === true ? "translateX(10px)" : "translateX(2px)"
            }`,
          }}
        ></div>
      </div>
      {/* {dropdown && ( */}
      <ul
        className={`nav-ul-375 flex h-full justify-between items-center lg:w-1/2 sm:w-[85%] md:w-[60%] inset-x-0 transition: duration-300 ease-in-out ${
          dropdown === true ? "max-[640px]:flex" : "max-[640px]:opacity-0"
        }`}
      >
        {mapNavigation.map((nav, index) => {
          const active = index === isActive;
          return (
            <li className="nav-ul-li-375" key={index}>
              <Link
                className="navlink-effect flex flex-col"
                onClick={() => {
                  setIsActive(index);
                  setDropdown(false);
                }}
                href={nav.path}
              >
                {nav.linkName}
                <span
                  className={`w-0 h-[1px] bg-cyan-400`}
                  style={{ width: active ? "100%" : 0 }}
                ></span>
              </Link>
            </li>
          );
        })}
        <Button path="/Resume.pdf" text="Resume" />
      </ul>
      {/* )} */}
    </nav>
  );
}
