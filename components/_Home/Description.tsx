"use client";

import * as m from "motion/react-client";
import Button from "../buttons";
import { useEffect, useState } from "react";
import { how_to_reach_me } from "../../app/api/data/data";
import Link from "next/link";

export default function Description() {
  const text =
    "I specialize in crafting responsive, high-performance websites using React, TypeScript, and modern UI libraries.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

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
    <section className="w-full max-w-2xl flex flex-col gap-8 text-center xl:text-left">
      {/* Title */}
      <m.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl font-bold text-cyan-800 dark_tx_glow"
      >
        Reward Stephen
      </m.h1>

      {/* Typing Intro */}
      <m.p
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg leading-relaxed sm:w-3/4 mx-auto xl:mx-0"
      >
        {displayedText}
        {index < text.length && <span className="animate-bounce">|</span>}
      </m.p>

      {/* CTA Button */}
      <Button path="/project_temp" text="Check out my projects" />

      {/* Social Icons */}
      <m.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap gap-4 justify-center xl:justify-start"
      >
        {how_to_reach_me.map(({ Icon, href, link_name }, i) => (
          <Link
            href={href}
            key={i}
            title={link_name}
            className="w-10 h-10 flex items-center justify-center text-cyan-700 hover:text-cyan-900 dark:hover:text-cyan-400 border-2 border-dotted border-cyan-500 rounded-full hover:rotate-[360deg] transition-transform duration-500"
          >
            <Icon size={18} />
          </Link>
        ))}
      </m.div>
    </section>
  );
}
