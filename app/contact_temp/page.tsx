import ContactSection from "../../components/_Contact/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Reward Stephen – Let’s Build Your Website",
  description:
    "Have a project in mind? Reach out to Reward Stephen to discuss building a fast, clean, and modern website tailored to your goals.",
};

export default function Contact() {
  return <ContactSection />;
}
