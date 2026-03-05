import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
