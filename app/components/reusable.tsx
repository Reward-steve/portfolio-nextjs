import Button from "./buttons";

export default function Title() {
  return (
    <header className="w-1/2 flex items-center justify-evenly h-150 direction-column flex-col">
      <section className="h-screen flex flex-col justify-center items-center text-center gap-5">
        <p className="text-cyan-400 text-2xl">Hello, I'm</p>
        <h1 className="text-6xl font-bold">Reward Stephen.</h1>
        <span className="text-4xl font-bold">Front-End Developer</span>
        <p className="mt-2">
          passionate about building responsive modern web applications.
        </p>
        <Button text="Check out my projects" />
      </section>
    </header>
  );
}

export function SectionName({ num, title }: { num: number; title: string }) {
  return (
    <h1 className="text-4xl font-bold">
      <span className="text-2xl font-bold text-cyan-400">{num} </span>
      {title}
    </h1>
  );
}

export const skills1 = ["HTML5", "CSS3", "JavaScript", "Git, GitHub"];
export const skills2 = [
  "React.JS",
  "Next.js",
  "Tailwind CSS",
  "Scss, Chakra UI",
];
export const expertise = [
  { skill: " React.js, ", color: "text-blue-400" },
  { skill: " Next.js, ", color: "text-white" },
  { skill: " TypeScript, ", color: "text-blue-400" },
  { skill: " JavaScript, ", color: "text-yellow-400" },
  { skill: " HTML5, ", color: "text-red-600" },
  { skill: " CSS3, ", color: "text-blue-500" },
  { skill: " Git, GitHub, ", color: "text-gray-500" },
  { skill: " Tailwind CSS, ", color: "text-cyan-400" },
  { skill: " Scss, ", color: "text-pink-400" },
  { skill: " Chakra UI ", color: "text-cyan-400" },
];

export const what_drives_me = [
  "The satisfaction of bringing ideas to life through code.",
  "A passion for learning new technologies and staying ahead of industry trends.",
  "Collaborating and sharing knowledge to create better products.",
  "Harnessing technology to solve real-world problems and make a positive impact.",
  "The thrill of tackling complex challenges and finding innovative solutions.",
];

export const projects = [
  {
    title: "FlorinTech Computer College",
    description:
      "A web application for a local restaurant business, where I was responsible for front-end development.",
  },
  {
    title: "FlorinTech Computer College",
    description:
      "A web application for a local restaurant business, where I was responsible for front-end development.",
  },
  {
    title: "FlorinTech Computer College",
    description:
      "A web application for a local restaurant business, where I was responsible for front-end development.",
  },
];
