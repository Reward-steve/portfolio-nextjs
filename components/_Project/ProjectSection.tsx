import { SectionName, projects } from "../../app/api/data/data";
import Card from "../card";
// import { useState } from "react";

export default function ProjectSection() {
  return (
    <section className="w-full">
      {/* Section Title */}
      <SectionName title="Projects I've Built" />

      {/* Project Cards */}
      <div className="flex flex-col gap-10 mt-8">
        {projects.map(
          ({ title, image, cardInfo, features, demo, repo }, index) => (
            <Card
              key={index}
              title={title}
              image={image as unknown as string}
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
