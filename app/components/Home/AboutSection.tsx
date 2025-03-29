import Image from "next/image";
import profile from "@/app/image/profile.jpg";
import { SectionName } from "../reusable";

const skills1 = ["HTML5", "CSS3", "JavaScript", "Git, GitHub"];
const skills2 = ["React.JS", "Next.js", "Tailwind CSS", "Scss, Chakra UI"];
const expertise = [
  { skill: "React.js,", color: "text-blue-400" },
  { skill: "Next.js,", color: "text-white" },
  { skill: "TypeScript,", color: "text-blue-400" },
  { skill: "JavaScript,", color: "text-yellow-400" },
  { skill: "HTML5,", color: "text-red-600" },
  { skill: "CSS3,", color: "text-blue-500" },
  { skill: "Git, GitHub,", color: "text-gray-500" },
  { skill: "Tailwind CSS,", color: "text-cyan-400" },
  { skill: "Scss,", color: "text-pink-400" },
  { skill: "Chakra UI", color: "text-cyan-400" },
];

export default function AboutSection() {
  return (
    <section id="about">
      <div className="px-10 py-10 w-full flex gap-10">
        <article className="w-1/2 mx-auto flex flex-col">
          {<SectionName num={0.1} title="About Me" />}
          <p className="mt-4 text-lg">
            I'm a Front-End Developer with over a year of experience in building
            well-optimized and responsive web applications while following best
            practices. My expertise includes
            {expertise.map((exp) => (
              <span className={exp.color}> {exp.skill} </span>
            ))}
            . At FlorinTech Computer College, I worked on various projects,
            including a web application for a local restaurant business, where I
            was responsible for front-end development. I am passionate about
            creating responsive, user-friendly interfaces and excited to bring
            my skills to your team.
            <br />
          </p>

          <h2 className="text-xl font-bold mt-10">What drives me</h2>
          <ul className="mt-4 text-lg">
            <li>
              <span className="font-bold text-cyan-400 text-xl p-2">*</span>
              The challenge of solving real-world problems with code
            </li>
            <li>
              <span className="font-bold text-cyan-400 text-xl p-2">*</span>
              The satisfaction of creating something and seeing it come to life
            </li>
            <li>
              <span className="font-bold text-cyan-400 text-xl p-2">*</span>
              Continues learning and self-improvement in the ever-evolving tech
              world
            </li>
            <li>
              <span className="font-bold text-cyan-400 text-xl p-2">*</span>
              Working on projects that impact people's lives 🌍
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-10">
            Technologies I'm profecient in includes:
          </h2>
          <div className="flex justify-between items-center">
            <ul className="mt-4 text-lg">
              {skills1.map((skill) => {
                return (
                  <li>
                    <span className="font-bold text-cyan-400 text-xl p-2">
                      *
                    </span>
                    {skill}
                  </li>
                );
              })}
            </ul>
            <ul>
              {skills2.map((skill) => {
                return (
                  <li>
                    <span className="font-bold text-cyan-400 text-xl p-2">
                      *
                    </span>
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
        <section className="w-1/2 flex justify-center items-center h-150">
          <Image src={profile} alt="profile" className="w-100 rounded-xl" />
        </section>
      </div>
      <p className="text-lg text-center">
        Fun facts about me: My typing speed is
        <span className="text-cyan-400 font-100"> 75 words per minute</span>,
        which helps in boosting my productivity and efficiency.
      </p>
    </section>
  );
}
