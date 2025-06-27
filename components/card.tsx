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
    <section className="w-full mx-auto flex flex-col lg:flex-row items-start bg-white dark:bg-[#1c1c1c] border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Image */}
      <div className="w-full lg:w-[45%]">
        <Image
          src={image}
          alt={`${title} project screenshot`}
          quality={100}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-5 w-full lg:w-[55%] p-6">
        {/* Title */}
        {title && (
          <h3 className="text-2xl font-bold text-[#104455] dark:text-cyan-300">
            {title}
          </h3>
        )}

        {/* Summary */}
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          {cardInfo}
        </p>

        {/* Features */}
        {features && features.length > 0 && (
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}

        {/* Links */}
        {(demo || repo) && (
          <div className="flex gap-4 mt-3">
            {demo && <Button path={demo} text="🌐 View Live" />}
            {repo && <Button path={repo} text="💻 Source Code" />}
          </div>
        )}
      </div>
    </section>
  );
}
