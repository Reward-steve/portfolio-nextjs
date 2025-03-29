import Button from "./buttons";

export default function Title() {
  return (
    <header className="w-1/2 flex items-center justify-evenly h-150 direction-column flex-col">
      <section className="h-screen flex flex-col justify-center items-center text-center gap-5">
        <p className="text-cyan-400 text-2xl">Hello, I'm</p>
        <h1 className="text-6xl font-bold">Reward Stephen.</h1>
        <span className="text-4xl text-gray-400 font-bold">
          Front-End Developer
        </span>
        <p className="mt-2 text-gray-400">
          passionate about building responsive modern web applications.
        </p>
        <Button text="Check out my projects" />
      </section>
    </header>
  );
}

export function SectionName({ num, title }: { num: number; title: string }) {
  return (
    <h1 className="text-4xl font-bold">
      <span className="text-3xl font-bold text-cyan-400">{num} </span>
      {title}
    </h1>
  );
}
