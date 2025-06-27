import ServicesSection from "@/components/_Services/ServicesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Reward Stephen – Web Development Solutions",
  description:
    "Explore web development services by Reward Stephen: business websites, landing pages, portfolio builds, and frontend UI development using React and Tailwind CSS.",
};

export default function Services() {
  return <ServicesSection />;
}
