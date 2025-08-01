"use client";
import * as m from "motion/react-client";
import Link from "next/link";

type ButtonProps = {
  text: string;
  path: string;
  baseClass?: string;
};

export default function Button({
  text,
  path,
  baseClass = "rounded-lg border text-cyan-700 dark:text-cyan-500 p-2 hover:text-cyan-700 hover_dark_border border-cyan-600 shadow-lg dark:hover:text-cyan-400 hover:border hover:border-cyan-400 cursor-pointer transition duration-300 ease-in-out",
}: ButtonProps) {
  return (
    <m.div
      whileHover={{ cursor: "pointer" }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        href={`${path}`}
        rel="noopener noreferrer"
        className={`${baseClass}`}
      >
        {text}
      </Link>
    </m.div>
  );
}
