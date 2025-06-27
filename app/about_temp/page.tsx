import AboutSection from "../../components/_About/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Reward Stephen – Frontend Developer",
  description:
    "Learn more about Reward Stephen — a frontend developer passionate about modern UI/UX, performance-driven code, and problem-solving through technology.",
};

export default function About() {
  return <AboutSection />;
}
