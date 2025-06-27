import { SectionName, projects } from "../../app/api/data/data";
import Card from "../card";

export default function ProjectSection() {
  return (
    <section className="w-full py-16">
      <SectionName title="Projects I've Built" />

      <div className="flex flex-col gap-12 mt-10">
        {projects.map(
          ({ title, image, cardInfo, features, demo, repo }, index) => (
            <Card
              key={index}
              title={title}
              image={image as unknown as string}
              cardInfo={cardInfo}
              features={features}
              demo={demo}
              repo={repo}
            />
          )
        )}
      </div>
    </section>
  );
}
