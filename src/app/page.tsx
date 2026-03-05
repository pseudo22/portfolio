import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <About />
      <Experience />
      <Projects />
      <Education />
    </div>
  );
}
