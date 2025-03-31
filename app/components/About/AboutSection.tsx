import * as m from "motion/react-client";
import Image from "next/image";
import profile from "@/app/image/profile.jpg";
import { SectionName, skills1, skills2, what_drives_me } from "../reusable";
import Link from "next/link";

export default function AboutSection() {
  return (
    <m.section
      className="w-full flex flex-col gap-10 p-6 bg-gray-800 text-white rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <SectionName title="About Me" />
      <div className="w-full flex flex-wrap justify-between items-center">
        {/* About Me Content */}
        <article className="w-full max-w-2xl flex flex-col">
          <m.p
            className="mt-4 text-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            I'm a Front-End Developer with over a year of experience in building
            well-optimized and responsive web applications. I have worked on
            projects like a web app that provides detailed information about
            different countries, including their flags, population, and economic
            data. I am excited to bring my skills to your team.
          </m.p>

          {/* What Drives Me Section */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-bold mt-10">What Drives Me</h2>
            <ul className="mt-4 text-lg space-y-2">
              {what_drives_me.map((drive, index) => (
                <m.li key={index} className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400 text-xl">*</span>{" "}
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
            <h2 className="text-xl font-bold mt-10">
              Technologies I'm Proficient In
            </h2>
            <div className="flex flex-wrap justify-start gap-10 mt-4">
              {[skills1, skills2].map((skills, idx) => (
                <ul key={idx} className="text-lg space-y-2">
                  {skills.map((skill, index) => (
                    <m.li
                      key={index}
                      whileHover={{
                        scale: 1.1,
                        cursor: "pointer",
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 500 }}
                      className={"flex items-center gap-2"}
                    >
                      <span className="font-bold text-cyan-400 text-xl">*</span>{" "}
                      <Link
                        className={`${skill.color}`}
                        href={`https://www.google.com/search?q=${skill.skill}`}
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
        {/* Profile Image with Hover Effect */}
        <m.div
          className="w-100 h-100 flex justify-center items-center rounded-xl overflow-hidden"
          whileHover={{ scale: 1.05, rotate: 3, cursor: "pointer" }}
        >
          <Image
            src={profile}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </m.div>
      </div>

      {/* Fun Fact Section */}
      <m.footer
        className="flex flex-col sm:flex-row justify-between items-center mt-10 w-full bg-gray-900 text-white p-6 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-xl font-bold">Fun Fact About Me:</h2>
        <p className="text-lg text-center sm:text-left">
          My typing speed is{" "}
          <span className="text-cyan-400 font-semibold">
            75 words per minute
          </span>
          , helping boost my productivity and efficiency.
        </p>
      </m.footer>
    </m.section>
  );
}
