import * as m from "motion/react-client";
import Image from "next/image";
import profile from "../../public/image/profile.jpg";
import {
  SectionName,
  skills1,
  skills2,
  what_drives_me,
} from "../../app/api/data/data";
import Link from "next/link";

export default function AboutSection() {
  return (
    <>
      <SectionName title="About Me" />

      <div className="w-full flex flex-wrap justify-between items-center sm:justify-around gap-10">
        {/* About Content */}
        <article className="w-full max-w-2xl flex flex-col">
          <m.p
            className="mt-4 text-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            I'm a Frontend Developer with over a year of hands-on experience
            building responsive, high-performance web interfaces. My work
            focuses on clean UI design, intuitive user flows, and modern
            development practices using React, TypeScript, and Tailwind CSS.
            <br />
            <br />
            I've built data-driven apps such as a country insights platform,
            recipe discovery websites, and modern landing pages for fashion
            brands. My goal is to solve real problems with scalable code and
            clear user experience.
          </m.p>

          {/* What Drives Me */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-bold mt-10">What Drives Me</h2>
            <ul className="mt-4 text-lg space-y-2">
              {what_drives_me.map((drive, index) => (
                <m.li key={index} className="flex items-center gap-2">
                  <span className="font-bold dark_tx_glow text-xl">*</span>{" "}
                  {drive}
                </m.li>
              ))}
            </ul>
          </m.div>

          {/* Skills Section */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl font-bold mt-10">Technologies I Use</h2>
            <div className="flex flex-wrap justify-start gap-10 mt-4">
              {[skills1, skills2].map((skills, idx) => (
                <ul key={idx} className="text-lg space-y-2">
                  {skills.map((skill, index) => (
                    <m.li
                      key={index}
                      whileHover={{ scale: 1.1, cursor: "pointer" }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 500 }}
                      className="flex items-center gap-2"
                    >
                      <span className="font-bold dark_tx_glow text-xl">*</span>{" "}
                      <Link
                        className={`${skill.color}`}
                        href={`https://www.google.com/search?q=${skill.skill}`}
                        target="_blank"
                      >
                        {skill.skill}
                      </Link>
                    </m.li>
                  ))}
                </ul>
              ))}
            </div>
          </m.div>
        </article>

        {/* Profile Image */}
        <m.div className="w-[500px] h-[500px] flex justify-center items-center rounded-xl overflow-hidden sm:mt-0.5">
          <Image
            src={profile}
            alt="Reward Stephen profile image"
            className="w-full h-full object-cover brightness-[0.8]"
          />
        </m.div>
      </div>

      {/* Fun Fact */}
      <m.footer
        className="flex flex-col sm:flex-row justify-between items-center mt-10 w-full bg-[#0000006b] p-6 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-xl font-bold">Fun Fact About Me:</h2>
        <p className="text-lg text-center sm:text-left">
          I type at{" "}
          <span className="text-cyan-400 font-semibold">
            75 words per minute
          </span>
          , which helps me work quickly and efficiently.
        </p>
      </m.footer>
    </>
  );
}
