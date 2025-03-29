import logo from "@/app/image/developer-logo.png";
import Image from "next/image";
import Title from "../reusable";

export default function HeroSection() {
  return (
    <>
      <main className="w-full px-20 flex justify-evenly ">
        <Title />
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
