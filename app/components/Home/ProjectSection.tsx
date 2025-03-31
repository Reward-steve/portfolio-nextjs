import { SectionName, projects } from "../reusable";
import Card from "../card";

export default function ProjectSection() {
  return (
    <>
      <SectionName title="Projects I've built" />
      <h1 className="flex justify-center items-center">PERSONAL PROJECTS</h1>
      {projects.map((project, index) => {
        return (
          <Card
            num={`0${index + 1}`}
            key={index}
            cardInfo={project.description}
          />
        );
      })}
    </>
  );
}
