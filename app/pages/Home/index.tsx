import Navigation from "@/app/components/navbar";
import About from "../About/page";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-10">
      <Navigation />
      <About />
    </main>
  );
}
