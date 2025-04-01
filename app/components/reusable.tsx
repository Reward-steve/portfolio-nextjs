import { FaSquareFacebook, FaSquareInstagram, FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import img1 from "../image/country.png";
import img2 from "../image/food.png";
import img3 from "../image/ticket.png";
import img4 from "../image/personal.png";

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
  {
    Icon: FaGithub,
    color: "black",
    iconName: "GitHub",
  },
  {
    Icon: IoLogoLinkedin,
    color: "blue-400",
    iconName: "LinkedIn",
  },
  {
    Icon: FaSquareInstagram,
    color: "red-500",
    iconName: "Instagram",
  },
  {
    Icon: CgMail,
    color: "green-400",
    iconName: "Gmail",
  },
  {
    Icon: FaSquareFacebook,
    color: "blue-600",
    iconName: "facebook",
  },
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
    title: "TastyHub Website 🍔",
    image: img2,
    cardInfo:
      "An interactive and visually appealing website for food lovers to discover and explore delicious recipes.",

    features: [
      "Browse a collection of mouth-watering recipes",
      "User-friendly interface with an elegant design",
      "Fully responsive for both mobile and desktop users",
      "Smooth animations for a modern experience",
    ],
    demo: "https://tasty-hub-phi.vercel.app/",
    repo: "https://github.com/Reward-steve/Tasty-hub",
  },
  {
    title: "My Country App 🌍",
    image: img1,
    cardInfo:
      "A web app that provides detailed information about different countries, including their flags, population, and economic data.",
    features: [
      "Search for any country by name",
      "View country details, including flag, capital, population, and GDP",
      "Dark mode support",
      "Fully responsive design for all devices",
    ],
    demo: "https://my-country-app-three.vercel.app/",
    repo: "https://github.com/Reward-steve/My-Country-App",
  },
  {
    title: "Personal Portfolio 🌟",
    image: img4,
    cardInfo:
      "A personal portfolio showcasing my projects and skills, built with Next.js and Tailwind CSS.",
    features: [
      "Next.js & Tailwind CSS",
      "Smooth animations",
      "Fully responsive",
    ],
    demo: "https://my-portfolio-sage-zeta-84.vercel.app/",
    repo: "https://github.com/Reward-steve/my-portfolio",
  },
  {
    title: "Conference Ticket Generator 🎟️",
    image: img3,
    cardInfo:
      "A dynamic web application that generates unique conference tickets for attendees.",
    features: [
      "Generates unique, scannable QR-coded tickets",
      "Users can enter their details and receive an instant digital ticket",
      "Admin panel for managing ticket registrations",
      "Secure and tamper-proof ticket validation",
      "Modern UI with a seamless user experience",
    ],
    demo: "https://conference-ticket-generator-gamma.vercel.app/",
    repo: "https://github.com/Reward-steve/conference-ticket-generator-main",
  },
];

/*## 📫 How to Reach Me  
💼 **LinkedIn:** [**LinkedIn**](https://www.linkedin.com/in/reward-stephen-166021310/)  
🐦 **Twitter:** [**Twitter**](https://x.com/RewardStephen)  
📘 **Facebook:** [**Facebook**](https://facebook.com/rewardstephen)  
📧 **Email:** rewardstephen30@gmail.com  */
