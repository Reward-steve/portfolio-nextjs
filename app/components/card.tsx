import Image from "next/image";
import Button from "./buttons";

export default function Card({
  title,
  cardInfo,
  image,
  features,
  demo,
  repo,
}: {
  title?: string;
  cardInfo: string;
  image: string;
  features?: string[];
  demo?: string;
  repo?: string;
}) {
  return (
    <section className=" w-[90%] mx-auto flex flex-col lg:flex-row items-center bg-gray-900/50 border border-gray-700 rounded-xl p-6 shadow-lg hover:border-gray-600 transition-transform duration-300 easeInOut cursor-pointer">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src={image}
          alt="Project image"
          quality={100}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* Text Section */}
      <article className="flex flex-col gap-4 w-full lg:w-1/2 px-4">
        <header className="flex justify-start items-center">
          {title && (
            <h2 className="text-3xl font-bold text-cyan-600">{title}</h2>
          )}
        </header>
        <p className="text-gray-300 text-lg">{cardInfo}</p>

        {/* Features */}
        {features && features.length > 0 && (
          <ul className="list-disc list-inside text-sm">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}

        {/* Live Demo & Repo Links */}
        {(demo || repo) && (
          <div className="flex gap-4 mt-3">
            {demo && <Button path={demo} text="🔗 Live Demo" />}
            {repo && <Button path={repo} text="💻 View Code" />}
          </div>
        )}
      </article>
    </section>
  );
}
