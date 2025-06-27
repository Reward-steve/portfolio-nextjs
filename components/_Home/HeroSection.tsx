import logo from "../../public/image/developer-logo.png";
import Image from "next/image";
import * as m from "motion/react-client";
import { domAnimation, LazyMotion } from "motion/react";
import Description from "../_Home/Description";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero section"
      className="w-full flex flex-col md:flex-row items-center justify-between gap-10 py-10"
    >
      <LazyMotion features={domAnimation}>
        {/* Text Section */}
        <m.div
          className="md:w-1/2 w-full flex justify-center items-start flex-col px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Description />
        </m.div>

        {/* Image Section */}
        <m.div
          className="md:w-1/2 w-full flex justify-center relative px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="w-full max-w-md relative">
            <Image
              src={logo}
              alt="Developer Illustration"
              priority
              className="rounded-xl w-full h-auto object-cover brightness-[0.9] shadow-xl"
            />
          </div>
        </m.div>
      </LazyMotion>
    </section>
  );
}
