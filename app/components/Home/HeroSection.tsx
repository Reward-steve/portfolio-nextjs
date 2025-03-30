import logo from "@/app/image/developer-logo.png";
import Image from "next/image";
import Title from "../reusable";
import * as m from "motion/react-client";
import { domAnimation, LazyMotion } from "motion/react";

export default function HeroSection() {
  return (
    <>
      <main className="w-full flex justify-evenly h-160 items-center">
        <Title />
        <section className="w-1/2 flex justify-end items-center h-130">
          <LazyMotion features={domAnimation}>
            <m.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-110 h-130 flex justify-center items-center"
            >
              <Image
                src={logo}
                alt="logo"
                priority
                style={{ filter: "brightness(.8)" }}
                className="rounded-xl w-full h-full"
              />
            </m.div>
          </LazyMotion>
        </section>
      </main>
    </>
  );
}
