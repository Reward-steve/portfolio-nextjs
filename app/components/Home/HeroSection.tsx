import logo from "@/app/image/developer-logo.png";
import Image from "next/image";
import Button from "../buttons";

export default function HeroSection() {
  return (
    <>
      <main className="w-full pl-20 pr-20 flex justify-evenly ">
        <header className="w-1/2 flex items-center justify-evenly h-130 direction-column flex-col">
          <section className="h-screen flex flex-col justify-center items-center text-center gap-5">
            <p className="text-cyan-400 text-2xl">Hi 👋, my name is</p>
            <h1 className="text-6xl font-bold">Reward Stephen.</h1>
            <span className="text-4xl text-gray-400 font-bold">
              Front-End Developer
            </span>
            <p className="mt-2 text-gray-400">
              passionate about modern web applications.
            </p>
            <Button text="Check out my projects" />
          </section>
        </header>
        <section className="w-1/2 flex justify-center items-center h-130">
          <Image
            src={logo}
            alt="logo"
            priority
            style={{ filter: "brightness(.7)" }}
            className="rounded-xl w-110 h-full"
          />
        </section>
      </main>
    </>
  );
}
