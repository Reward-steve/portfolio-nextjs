import Image from "next/image";

export default function Card({
  title,
  cardInfo,
  image,
  num,
  features,
  demo,
  repo,
}: {
  title?: string;
  cardInfo: string;
  image: string;
  num?: number | string;
  features?: string[];
  demo?: string;
  repo?: string;
}) {
  return (
    <section className=" w-[90%] mx-auto flex flex-col lg:flex-row items-center bg-gray-900/50 border border-gray-700 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:border-cyan-400">
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
      <article className="flex flex-col gap-4 w-full lg:w-1/2 text-white px-4">
        <header className="flex justify-center items-center">
          {num && (
            <h1 className="text-4xl font-extrabold text-cyan-400">{num}</h1>
          )}
          {title && (
            <h2 className="text-3xl font-bold text-cyan-300">{title}</h2>
          )}
        </header>
        <p className="text-gray-300 text-lg">{cardInfo}</p>

        {/* Features */}
        {features && features.length > 0 && (
          <ul className="list-disc list-inside text-gray-400 text-sm">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}

        {/* Live Demo & Repo Links */}
        {(demo || repo) && (
          <div className="flex gap-4 mt-3">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-semibold text-white text-cyan-400 border-1 rounded-lg shadow-md transition-all"
              >
                🔗 Live Demo
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-semibold text-cyan-400 border-1 rounded-lg shadow-md transition-all"
              >
                💻 View Code
              </a>
            )}
          </div>
        )}
      </article>
    </section>
  );
}
