import { FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";
import img1 from "../../../public/image/country.png";
import img2 from "../../../public/image/food.png";
import img3 from "../../../public/image/ticket.png";
import img4 from "../../..//public/image/personal.png";
import img5 from "../../..//public/image/ut.png";

export function SectionName({ title }: { title: string }) {
  return <h1 className="text-4xl font-bold">{title}</h1>;
}

export const skills1 = [
  { skill: "HTML5 ", color: "text-red-600" },
  { skill: "CSS3 ", color: "text-blue-500" },
  { skill: "JavaScript ", color: "text-yellow-400" },
  { skill: "Git ", color: "text-gray-500" },
  { skill: "GitHub ", color: "text-gray-500" },
  { skill: "Code Editor: VS Code", color: "text-blue-500" },
];
export const skills2 = [
  { skill: "React.js ", color: "text-blue-400" },
  { skill: "Next.js ", color: "dark:text-white" },
  { skill: "TypeScript ", color: "text-blue-400" },
  { skill: "Tailwind CSS ", color: "text-cyan-400" },
  { skill: "Scss ", color: "text-pink-400" },
  { skill: "Chakra UI ", color: "text-cyan-400" },
];

export const what_drives_me = [
  "Designing systems that are intuitive, fast, and accessible.",
  "Staying current with tools and practices that improve developer efficiency.",
  "Writing code that balances performance, maintainability, and visual quality.",
  "Building projects that reflect real-world use and solve practical problems.",
  "Delivering UI/UX that helps users get things done without friction.",
];

export const projects = [
  {
    title: "Urban Tailor",
    image: img5,
    cardInfo:
      "A tailored business website for fashion boutiques and tailors, featuring a responsive layout, service showcase, and client engagement tools.",

    features: [
      "Modern landing page layout with mobile-first design",
      "Dedicated services and gallery sections for brand presentation",
      "Integrated contact form and WhatsApp support",
      "Dark mode toggle for accessible UX",
    ],
    demo: "https://urban-tailor.vercel.app/",
    repo: "https://github.com/Reward-steve/urban-tailor",
  },
  {
    title: "TastyHub Website",
    image: img2,
    cardInfo:
      "A responsive recipe discovery platform with structured content, clean UI, and smooth animations for seamless user exploration.",

    features: [
      "Interactive recipe browsing experience",
      "Elegant and intuitive user interface",
      "Responsive layout optimized for mobile and desktop",
      "Subtle animations for modern visual feedback",
    ],
    demo: "https://tasty-hub-phi.vercel.app/",
    repo: "https://github.com/Reward-steve/Tasty-hub",
  },
  {
    title: "My Country App",
    image: img1,
    cardInfo:
      "A data-driven React app offering detailed country profiles using REST APIs. Includes dark mode and optimized data fetching logic.",

    features: [
      "Live search for countries by name",
      "Dynamic country details: flag, capital, population, and GDP",
      "Responsive UI with light/dark theme toggle",
      "Graceful handling of missing or incomplete API data",
    ],
    demo: "https://my-country-app-three.vercel.app/",
    repo: "https://github.com/Reward-steve/My-Country-App",
  },
  {
    title: "Personal Portfolio",
    image: img4,
    cardInfo:
      "My personal portfolio showcasing featured projects, tech stack, and contact methods. Built using Next.js and Tailwind CSS.",

    features: [
      "Clean section-based layout with smooth navigation",
      "Responsive design with interactive project cards",
      "Tailwind CSS and Next.js integration",
      "Dark mode and animated transitions",
    ],
    demo: "https://my-portfolio-website-chi-kohl.vercel.app/",
    repo: "https://github.com/Reward-steve/my-portfolio",
  },
  {
    title: "Conference Ticket Generator",
    image: img3,
    cardInfo:
      "An advanced form-driven React app that generates custom digital tickets with unique user data and QR validation logic.",

    features: [
      "Form validation with real-time feedback (email, required fields)",
      "File upload with instant preview and inline error handling",
      "Live-rendered digital ticket including name, ticket ID, and QR code",
      "Admin panel with data management tools (demo-ready)",
      "Designed with accessibility and user flow in mind",
    ],
    demo: "https://conference-ticket-generator-gamma.vercel.app/",
    repo: "https://github.com/Reward-steve/conference-ticket-generator-main",
  },
];

export const how_to_reach_me = [
  {
    Icon: FaGithub,
    href: "https://github.com/Reward-steve",
    link_name: "GitHub",
  },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/reward-stephen-166021310/",
    link_name: "LinkedIn",
  },
  {
    Icon: FaTwitter,
    href: "https://x.com/RewardStephen",
    link_name: "Twitter",
  },
  {
    Icon: FaFacebook,
    href: "https://facebook.com/rewardstephen",
    link_name: "Facebook",
  },
  {
    Icon: FaEnvelope,
    href: "mailto:rewardstephen30@gmail.com",
    link_name: "rewardstephen30@gmail.com",
  },
];

export const contact_form = [
  {
    form_name: "Name",
    place_holder: "John Doe",
  },
  {
    form_name: "Email",
    place_holder: "example@mail.com",
  },
  {
    form_name: "Message",
    place_holder: "Your message here...",
  },
];
