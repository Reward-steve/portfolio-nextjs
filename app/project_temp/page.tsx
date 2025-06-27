import type { Metadata } from "next";
import ProjectSection from "../../components/_Project/ProjectSection";

// ✅ Basic SEO metadata for this page
export const metadata: Metadata = {
  title: "Projects | Reward Stephen",
  description:
    "A collection of modern, responsive web projects built by Reward Stephen using React, TypeScript, and Tailwind CSS.",
};

export default function Project() {
  return <ProjectSection />;
}
