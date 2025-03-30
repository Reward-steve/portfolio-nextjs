import Navigation from "@/app/components/navbar";
import HeroSection from "@/app/components/Home/HeroSection";
import AboutSection from "@/app/components/Home/AboutSection";
import ContactSection from "@/app/components/Home/ContactSection";
import ProjectSection from "@/app/components/Home/ProjectSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-10">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
