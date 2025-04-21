"use client";
import * as m from "motion/react-client";
import Button from "../buttons";
import { useEffect, useState } from "react";
import { how_to_reach_me } from "../../app/api/data/data";
import Link from "next/link";

export default function Description() {
  const text =
    "A Front-End Developer passionate about building responsive modern web applications.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing effect logic
  useEffect(() => {
    if (index < text.length) {
      const interval = setInterval(() => {
        setDisplayedText((prev) => text.slice(0, prev.length + 1));
        setIndex((prev) => prev + 1);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [index, text]);

  return (
    <section className="xl:justify-start xl:items-start xl:text-start outline-text justify-center text-center items-center w-full description h-150 flex flex-col gap-10 relative">
      {/* Greeting */}
      <m.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-2xl"
      >
        Hello 👋, I'm
      </m.p>

      {/* Name */}
      <m.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="sm:text-6xl text-5xl font-bold text-cyan-800 dark_tx_glow w-full"
      >
        Reward Stephen.
      </m.h1>

      {/* Typing Effect */}
      <m.p
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-2 sm:w-3/4 w-full"
      >
        {displayedText}
        {index < text.length && <span className="animate-bounce">|</span>}
      </m.p>

      {/* Button */}
      <Button path="/project_temp" text="Check out my projects" />

      {/* Social Links */}
      <m.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="rounded-full flex-wrap sm:my-10 flex justify-between items-center sm:gap-5  my-0 gap-3"
      >
        {how_to_reach_me.map(({ Icon, href, link_name }, i) => (
          <Link
            href={href}
            key={i}
            title={link_name}
            className="border-2 hover:rotate-[360deg] border-dotted border-cyan-500 dark:hover:text-cyan-400 hover_dark_border hover:text-cyan-900 w-12 h-12 text-cyan-700 rounded-full flex cursor-pointer items-center justify-center hover:shadow-cyan-400 transition duration-300"
          >
            <Icon size={20} />
          </Link>
        ))}
      </m.div>
    </section>
  );
}
