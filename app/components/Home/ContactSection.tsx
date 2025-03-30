import { SectionName } from "../reusable";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-10 text-center">
      <SectionName num={0.3} title="Contact Me" />
      <p className="mt-4 text-gray-300">Let's work together! Reach me at:</p>
      <a href="mailto:rewardstephen30@gmail.com" className="text-blue-400">
        rewardstephen30@gmail.com
      </a>
    </section>
  );
}
