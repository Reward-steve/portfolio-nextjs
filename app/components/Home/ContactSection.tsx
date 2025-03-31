import { SectionName } from "../reusable";

export default function ContactSection() {
  return (
    <>
      <SectionName title="Contact Me" />
      <p className="mt-4 text-gray-300">Let's work together! Reach me at:</p>
      <a href="mailto:rewardstephen30@gmail.com" className="text-blue-400">
        rewardstephen30@gmail.com
      </a>
    </>
  );
}
