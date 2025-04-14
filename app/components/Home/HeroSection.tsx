import logo from "@/app/image/developer-logo.png";
import Image from "next/image";
import * as m from "motion/react-client";
import { domAnimation, LazyMotion } from "motion/react";
import Description from "../Home/Description";

export default function HeroSection() {
  return (
    <>
      <main className="sm:justify-center w-full flex-wrap flex md:justify-between h-auto items-center overflow-hidden relative home">
        <LazyMotion features={domAnimation}>
          {/* Animated Text Description */}
          <m.div
            className="xl:w-1/2 w-full flex items-center justify-center h-auto flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Description />
          </m.div>

          {/* Animated Logo Section with Effects */}
          <section className="md:w-1/2.5 sm:h-full flex justify-center items-center relative m-auto">
            <m.div className="w-full h-full flex justify-center items-center relative">
              <Image
                src={logo}
                alt="logo"
                priority
                style={{ filter: "brightness(.8)" }}
                className="rounded-xl w-full h-full shadow-md dark:shadow-xl transition-transform duration-300"
              />
              {/* Floating Glow Effect */}
              <m.div
                animate={{ y: [0, -90, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute bg-cyan-400 sm:blur-2xl right-0 sm:w-40 sm:h-40 opacity-20 blur-xl w-20 h-20"
              />
            </m.div>
          </section>
        </LazyMotion>
      </main>
    </>
  );
}
