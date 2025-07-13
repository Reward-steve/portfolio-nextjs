import { FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";
import img1 from "../../../public/image/country.png";
import img2 from "../../../public/image/food.png";
import img3 from "../../../public/image/ticket.png";
import img4 from "../../../public/image/personal.png";
import img5 from "../../../public/image/ut.png";
import img6 from "../../../public/image/ui-fix.png";
import service1 from "../../../public/image/business.jpg";
import service2 from "../../../public/image/landing.jpg";
import service3 from "../../../public/image/dev.jpg";
import service4 from "../../../public/image/portfolio.jpg";

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

export const servicesIntro = `
I offer frontend development services focused on building clean, fast,
and responsive websites. Whether you're a small business, startup, or
personal brand, I help turn your ideas into user-focused digital
experiences that load fast, look great, and work seamlessly across all
devices.
`;

export const services = [
  {
    id: "business",
    title: "Business Websites",
    image: service1,
    description:
      "I design and build multi-page websites that reflect your brand and convert visitors into clients. Ideal for personal brands and small businesses.",
    features: [
      "Home, About, Services, Contact pages",
      "Contact forms or WhatsApp integrations",
      "Mobile-first and SEO-ready",
      "Fast, clean, professional design",
    ],
    delay: 0.3,
  },
  {
    id: "landing",
    title: "Landing Pages",
    image: service2,
    description:
      "One-page websites built to capture attention and drive action — ideal for launches, signups, and promotions.",
    features: [
      "Scroll-based storytelling or CTA-focused layouts",
      "Custom animations and visuals",
      "Lightning-fast and mobile-friendly",
    ],
    delay: 0.4,
  },
  {
    id: "frontend",
    title: "Frontend Development",
    image: service3,
    description:
      "Already have a design or backend team? I can code a modern UI from scratch — fast and pixel-perfect — using React, TypeScript, and Tailwind CSS.",
    features: [
      "Reusable components",
      "API-ready and scalable structure",
      "Great for SaaS, dashboards, or MVPs",
    ],
    delay: 0.5,
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Sites",
    image: service4,
    description:
      "Custom portfolio or personal brand sites that tell your story and showcase your work — designed to impress.",
    features: [
      "Projects, bio, contact, and testimonials",
      "Fully responsive and performance-optimized",
    ],
    delay: 0.6,
  },
];

export const projects = [
  {
    title: "Urban Tailor",
    image: img5,
    cardInfo:
      "A modern fashion brand landing page built in 3 days. Features dynamic image galleries, smooth animations, and responsive layouts tailored for tailoring businesses.",

    features: [
      "Dark/light mode toggle with clean visual hierarchy",
      "Style sections: Female, Male, Native, Urban Casual",
      "Gallery previews and interactive FAQ section",
      "Fully responsive UI with Headless UI navigation",
    ],
    demo: "https://urban-tailor.vercel.app/",
    repo: "https://github.com/Reward-steve/urban-tailor",
  },
  {
    title: "TastyHub-UI",
    image: img2,
    cardInfo:
      "A recipe discovery interface designed with clarity, speed, and a user-first approach. Smooth visuals and responsive layout make exploring food content seamless.",

    features: [
      "Grid-based layout with card animations",
      "Mobile-first responsive structure",
      "Clear visual structure and theme consistency",
      "Reusable components for scaling future content",
    ],
    demo: "https://tasty-hub-phi.vercel.app/",
    repo: "https://github.com/Reward-steve/Tasty-hub",
  },
  {
    title: "Country Explorer",
    image: img1,
    cardInfo:
      "A Chakra UI + JavaScript-powered app that fetches real-time country data via REST APIs. Built with accessibility, responsiveness, and performance in mind.",

    features: [
      "Live search with auto-filter functionality",
      "Clean card layout with country details and flags",
      "Dark mode toggle using Chakra UI",
      "Error handling for incomplete or missing data",
    ],
    demo: "https://my-country-app-three.vercel.app/",
    repo: "https://github.com/Reward-steve/My-Country-App",
  },
  {
    title: "Personal Portfolio",
    image: img4,
    cardInfo:
      "A personal frontend portfolio built with Next.js App Router and Tailwind CSS. Features animated transitions, responsive UI, and GitHub integration.",

    features: [
      "Project cards with live demos and repo links",
      "SEO-ready metadata and Open Graph setup",
      "Smooth scroll animations and section-based routing",
      "Mobile-optimized, accessible navigation",
    ],
    demo: "https://my-portfolio-website-chi-kohl.vercel.app/",
    repo: "https://github.com/Reward-steve/my-portfolio",
  },
  {
    title: "Conference Ticket Generator",
    image: img3,
    cardInfo:
      "A digital ticketing system that generates unique QR-validated conference tickets based on user input. Includes real-time form validation and preview functionality.",

    features: [
      "Live QR code and ticket rendering",
      "Image upload with validation and inline previews",
      "Dynamic ticket design with export-ready layout",
      "Form error handling for a smooth user experience",
    ],
    demo: "https://conference-ticket-generator-gamma.vercel.app/",
    repo: "https://github.com/Reward-steve/conference-ticket-generator-main",
  },
  {
    title: "UI Fix – Before & After",
    image: img6,
    cardInfo:
      "A side-by-side transformation of a broken UI layout into a clean, responsive, and modern component-based interface. Demonstrates real-world debugging and design thinking.",

    features: [
      "Broken layout with inline styles and bad spacing",
      "Fixed version uses Tailwind CSS and responsive grid",
      "Interactive demo: toggle between before and after",
      "Perfect showcase for Upwork clients needing UI fixes",
    ],
    demo: "https://ui-fix-before-after-reward-stephens-projects.vercel.app/",
    repo: "https://github.com/Reward-steve/ui-fix-before-after",
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
