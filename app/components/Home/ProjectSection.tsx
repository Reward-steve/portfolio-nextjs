import Card from "../card";
import { SectionName } from "../reusable";

export default function ProjectSection() {
  return (
    <>
      <section id="projects" className="mt-10">
        <SectionName num={0.2} title="Projects I've built" />
        <ul className="flex justify-center items-center">
          <li>PERSONAL PROJECT</li>
        </ul>
        <Card />
      </section>
    </>
  );
}
