import Section from "@/components/Section";
import Image from "next/image";
import About from "./sections/About";
import Parallax from "./sections/Parallax";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Home: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <About />
      <Parallax />
      <section
        className="min-h-[100vh] h-full flex items-baseline xl:items-end"
        id="skills"
      >
        <Skills />
      </section>
      <section className="min-h-[100vh] h-full" id="work">
        <Work />
      </section>
      <section className="min-h-[100vh] h-full" id="experience">
        <Experience />
      </section>
      <section
        className="min-h-[100vh] h-full flex items-center justify-center"
        id="contact"
      >
        <Contact />
      </section>
    </main>
  );
};
export default Home;
