
import LandingPage from "./home/page";
import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";

export default function Home() {
  return (
    <>
      <section>
        <LandingPage/>
      </section>
      <section id="next-section">
        <AboutPage />
      </section>      
    </>
  );
}
