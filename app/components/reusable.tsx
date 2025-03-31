export function SectionName({ title }: { title: string }) {
  return <h1 className="text-4xl font-bold">{title}</h1>;
}

export const skills1 = [
  { skill: "HTML5 ", color: "text-red-600" },
  { skill: "CSS3 ", color: "text-blue-500" },
  { skill: "JavaScript ", color: "text-yellow-400" },
  { skill: "Git ", color: "text-gray-500" },
  { skill: "GitHub ", color: "text-gray-500" },
  { skill: "VS Code ", color: "text-blue-500" },
];
export const skills2 = [
  { skill: "React.js ", color: "text-blue-400" },
  { skill: "Next.js ", color: "text-white" },
  { skill: "TypeScript ", color: "text-blue-400" },
  { skill: "Tailwind CSS ", color: "text-cyan-400" },
  { skill: "Scss ", color: "text-pink-400" },
  { skill: "Chakra UI ", color: "text-cyan-400" },
];

export const expertise = [
  "Front-End Development",
  "Responsive Web Design",
  "Performance Optimization",
  "Version Control (Git)",
  "RESTful APIs",
  "Problem Solving",
  "Team Collaboration",
  "Continuous Learning",
];

export const sociaIcons = [
  { icon: "IN", iconName: "LinkedIn", color: "text-blue-400" },
  { icon: "IT", iconName: "Instagram", color: "text-blue-500" },
  { icon: "GM", iconName: "Gmail", color: "text-green-400" },
  { icon: "FB", iconName: "facebook", color: "text-blue-600" },
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
    title: "Restaurant Web App",
    description:
      "A web application for a local restaurant business, where I was responsible for front-end development.",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my projects and skills, built with Next.js and Tailwind CSS.",
  },
  {
    title: "Time Management App",
    description:
      "A productivity tool to help users track and manage their daily activities efficiently.",
  },
];
