import Card from "../card";
import { SectionName } from "../reusable";

export default function ProjectSection() {
  return (
    <>
      <section
        id="projects"
        className="w-full flex flex-col gap-10 p-6 bg-gray-800 text-white rounded-xl shadow-lg"
      >
        <SectionName title="Projects I've built" />
        <ul className="flex justify-center items-center">
          <li>PERSONAL PROJECT</li>
        </ul>
        <Card />
      </section>
    </>
  );
}
