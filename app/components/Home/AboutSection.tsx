export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-10">
      <article>
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-lg">
          I'm Reward Stephen a hardworking frontend developer
        </p>
        <div className="mt-10">
          <h2 className="text-xl font-bold">What drives me</h2>
          <ul className="mt-4 text-lg">
            <li> ✅ The challenge of solving real-world problems with code</li>
            <li>
              ✅ The satisfaction of creating something from scratch and seeing
              it come to life
            </li>
            <li>
              ✅ Continues learning and self-improvement in the ever-evolving
              tech world
            </li>
            <li>✅ Working on projects that impact people's lives 🌍</li>
          </ul>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-bold">My Skills</h2>
          <ul className="mt-4 text-lg">
            <li> ✅ HTML, CSS, JavaScript</li>
            <li> ✅ React, Next.js</li>
            <li> ✅ Tailwind CSS, Bootstrap</li>
            <li> ✅ Git, GitHub</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
