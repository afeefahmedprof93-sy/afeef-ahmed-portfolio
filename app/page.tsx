import { About } from "@/components/About";
import { AIWorkflow } from "@/components/AIWorkflow";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { WorkSamples } from "@/components/WorkSamples";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <AIWorkflow />
        <Projects />
        <WorkSamples />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
