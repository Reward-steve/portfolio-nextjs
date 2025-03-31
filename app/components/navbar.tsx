"use client";

import { useState } from "react";
import Button from "./buttons";
import Link from "next/link";

const mapNavigation = [
  { path: "/About", linkName: "About Me" },
  { path: "/Project", linkName: "Projects I've Done" },
  { path: "/Contact", linkName: "Contact Me" },
];

export default function Navigation() {
  const [isActive, setIsActive] = useState<number | null>(null);

  return (
    <nav className="flex justify-between items-center w-full h-16 bg-slate-900 text-white px-10 top-0 z-50">
      <div className="">
        <Link
          href="/"
          className="rounded-full border-1 p-3 border-cyan-400 text-cyan-400 font-bold text-2xl"
          onClick={() => setIsActive(null)}
          style={{
            textShadow: isActive === null ? "0 0 20px cyan" : "",
            transition: "text-shadow 0.3s ease-in-out",
          }}
        >
          RS
        </Link>
      </div>
      <ul className="flex h-full justify-between items-center w-1/2">
        {mapNavigation.map((nav, index) => {
          const active = index === isActive;
          return (
            <li key={index}>
              <Link
                className="navlink-effect flex flex-col"
                onClick={() => setIsActive(index)}
                href={nav.path}
                style={{ color: active ? "cyan" : "white" }}
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
        <Button text="Resume" />
      </ul>
    </nav>
  );
}
