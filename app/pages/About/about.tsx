import profile from "@/app/image/profile.jpg";
import Image from "next/image";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("../../components/buttons"));

export default function HeroSection() {
  return (
    <>
      <main className="w-full pl-20 pr-20 flex justify-evenly border-b-1 pb-10">
        <header className="w-1/2 flex items-center justify-evenly h-130 direction-column flex-col">
          <p className="text-cyan-400 text-xl">👋 Hi, my name is</p>
          <p className="text-3xl">Reward Stephen</p>
          <div className="text-center">
            <h2 className="text-5xl font-bold">Frontend Developer</h2>
            <p>
              I focus on building well optimized and user friendly applications
            </p>
          </div>
          <Button text="Check out my projects" />
        </header>
        <section className="w-1/2 flex justify-center items-center h-130">
          <Image
            src={profile}
            alt="profile"
            priority
            style={{ filter: "brightness(0.5)" }}
            className="rounded-xl w-100 h-full"
          />
        </section>
      </main>
    </>
  );
}
