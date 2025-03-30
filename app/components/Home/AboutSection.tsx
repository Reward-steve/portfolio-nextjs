import Image from "next/image";
import profile from "@/app/image/profile.jpg";
import {
  SectionName,
  skills1,
  skills2,
  expertise,
  what_drives_me,
} from "../reusable";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="w-full flex gap-10">
        <article className="w-200 mx-auto flex flex-col">
          {<SectionName num={0.1} title="About Me" />}
          <p className="mt-4 text-lg">
            I'm a Front-End Developer with over a year of experience in building
            well-optimized and responsive web applications while following best
            practices. My expertise includes
            {expertise.map((exp, index) => (
              <span key={index} className={exp.color}>
                {exp.skill}
              </span>
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
            {what_drives_me.map((drive, index) => {
              return (
                <li key={index}>
                  <span className="font-bold text-cyan-400 text-xl p-2">*</span>
                  {drive}
                </li>
              );
            })}
          </ul>

          <h2 className="text-xl font-bold mt-10">
            Technologies I'm profecient in includes:
          </h2>
          <div className="flex justify-between w-1/2 items-center">
            <ul className="mt-4 text-lg">
              {skills1.map((skill, index) => {
                return (
                  <li key={index}>
                    <span className="font-bold text-cyan-400 text-xl p-2">
                      *
                    </span>
                    {skill}
                  </li>
                );
              })}
            </ul>
            <ul className="mt-4 text-lg">
              {skills2.map((skill, index) => {
                return (
                  <li key={index}>
                    <span className="font-bold text-cyan-400 text-xl p-2">
                      *
                    </span>
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
          <h2 className="text-xl font-bold mt-10"> Fun facts about me:</h2>
          <p className="mt-4 text-lg">
            My typing speed is
            <span className="text-cyan-400 font-100"> 75 words per minute</span>
            , which helps in boosting my productivity and efficiency.
          </p>
        </article>
        <section className="w-100 flex justify-center items-center h-150">
          <Image src={profile} alt="profile" className="w-full rounded-xl" />
        </section>
      </div>
    </section>
  );
}
