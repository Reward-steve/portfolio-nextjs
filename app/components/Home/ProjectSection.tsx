import { SectionName, projects } from "../reusable";
import Card from "../card";

export default function ProjectSection() {
  return (
    <section className="w-full">
      {/* Section Title */}
      <SectionName title="Projects I've Built" />
      <h2 className="text-center text-3xl font-bold text-cyan-400 mt-4">
        Personal Projects
      </h2>

      {/* Project Cards */}
      <div className="flex flex-col gap-10 mt-8">
        {projects.map(
          ({ title, image, cardInfo, features, demo, repo }, index) => (
            <Card
              key={index}
              title={title}
              image={image as unknown as string}
              num={String(index + 1).padStart(2, "0")} // 01, 02, 03...
              cardInfo={cardInfo}
              features={features || []}
              demo={demo || ""}
              repo={repo || ""}
            />
          )
        )}
      </div>
    </section>
  );
}
