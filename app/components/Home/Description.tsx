"use client";
import * as m from "motion/react-client";
import Button from "../buttons";
import { useEffect, useState } from "react";

export default function Discription() {
  const text =
    "A Front-End Developer passionate about building responsive modern web applications.";

  // State to manage the displayed text and index of the current character
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((pre) => pre + text[index]);
        setIndex((prev) => prev + 1);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="w-full min-h-screen flex items-start justify-center flex-col gap-5 relative">
      <m.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-cyan-400 text-2xl"
      >
        Hello 👋, I'm
      </m.p>
      <m.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-6xl font-bold"
      >
        Reward Stephen.
      </m.h1>
      <m.p transition={{ duration: 0.5, delay: 0.3 }} className="mt-2 w-3/4">
        {displayedText}
        <span className="animate-bounce">{index < text.length ? "|" : ""}</span>
      </m.p>

      <Button text="Check out my projects" />
    </section>
  );
}
