"use client";
import * as m from "motion/react-client";
import Button from "../buttons";
import { useEffect, useState } from "react";
import { sociaIcons } from "../reusable";

export default function Discription() {
  const text =
    "A Front-End Developer passionate about building responsive modern web applications.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [index, text]);

  return (
    <section className="w-full h-150 flex flex-col gap-10 relative items-start justify-center">
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
        {index < text.length && <span className="animate-bounce">|</span>}
      </m.p>
      <Button text="Check out my projects" />
      <m.div
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="rounded-full m-10 flex justify-between items-center gap-3"
      >
        {sociaIcons.map(({ Icon, color, iconName }, i) => (
          <m.div
            key={i}
            whileHover={{ y: -5, boxShadow: "0 0 10px 0px" }}
            transition={{ duration: 0.3 }}
            title={iconName}
            className={`border border-1 w-15 h-15 text-gray-400 hover:text-${color} rounded-full flex cursor-pointer items-center justify-center`}
          >
            {<Icon size={30} className={`hover:text-${color}`} />}
          </m.div>
        ))}
      </m.div>
    </section>
  );
}
