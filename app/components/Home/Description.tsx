"use client";
import * as m from "motion/react-client";
import Button from "../buttons";
import { useEffect, useState } from "react";
import { how_to_reach_me } from "../../api/data/data";
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
    <section className="w-full sm:h-150 min-[10rem]:h-120 flex flex-col sm:gap-10 relative sm:items-start sm:justify-center min-[10rem]:items-center sm:text-left min-[10rem]:text-center min-[10rem]:justify-evenly min-[10rem]:gap-0">
      {/* Greeting */}
      <m.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-white text-2xl"
      >
        Hello 👋, I'm
      </m.p>

      {/* Name */}
      <m.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="sm:text-6xl min-[10rem]:text-3xl font-bold text-cyan-400"
      >
        Reward Stephen.
      </m.h1>

      {/* Typing Effect */}
      <m.p
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-2 w-3/4 min-[10rem]:w-full"
      >
        {displayedText}
        {index < text.length && <span className="animate-bounce">|</span>}
      </m.p>

      {/* Button */}
      <Button path="/Project" text="Check out my projects" />

      {/* Social Links */}
      <m.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="rounded-full flex-wrap sm:my-10 flex justify-between items-center gap-5 min-[10rem]:my-0 min-[10rem]:gap-3"
      >
        {how_to_reach_me.map(({ Icon, href, link_name }, i) => (
          <Link
            href={href}
            key={i}
            title={link_name}
            className="border w-12 h-12 text-cyan-700 rounded-full flex cursor-pointer items-center justify-center hover:text-cyan-400 hover:shadow-cyan-400 transition duration-300"
          >
            <Icon size={20} />
          </Link>
        ))}
      </m.div>
    </section>
  );
}
