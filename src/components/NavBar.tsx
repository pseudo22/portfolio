"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";



export default function NavBar() {
  const pathname = usePathname();
  const currentPath = pathname;


  const handleMouseEnter = (hoverClass: string) => {
    gsap.to(hoverClass, { opacity: 1, scale: 1, duration: 0.3 });
  };

  const handleMouseLeave = (hoverClass: string) => {
    gsap.to(hoverClass, { opacity: 0, scale: 0.9, duration: 0.3 });
  };

  return (
    <nav
      className="nav-blur flex flex-wrap md:flex-nowrap text-lg md:text-2xl justify-between items-center w-full md:w-[80%] md:left-[10%] fixed top-6 px-4 py-4 m-3 rounded shadow-lg transition-all duration-300 z-[9999]"
    >
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link href="/" className="mx-4 ">
          RV
        </Link>
        <button
          aria-label="Toggle menu"
          className="block md:hidden"
          onClick={() => {
            const navLinks = document.querySelector(".nav-links");
            navLinks?.classList.toggle("hidden");
          }}
        >
          ☰
        </button>
      </div>

      <div className="nav-links relative pt-4 hidden md:flex flex-col md:flex-row justify-evenly items-center w-full md:w-auto mt-4 md:mt-0">

        <div
          onMouseEnter={() => handleMouseEnter(".hover-projects")}
          onMouseLeave={() => handleMouseLeave(".hover-projects")}
        >
          <Link href="/projects" className="mx-4">
            projects
          </Link>
          {currentPath === "/projects" ? (
            <div className="hidden lg:hover-div hover-projects absolute top-14 left-0 p-2 rounded opacity-0 scale-90 shadow-lg pointer-events-none">
              already there!!
            </div>
          ) : (
            <div className="hidden lg:hover-div hover-projects absolute top-14 left-0 p-2 rounded opacity-0 scale-90 shadow-lg pointer-events-none">
              skip to the good part?
            </div>
          )}
        </div>
        <Link href="/experience" className="mx-4">
          experience
        </Link>
        <Link href="/contact" className="mx-4">
          contact
        </Link>
        <a href='/files/RohanResume.pdf' download>resume</a>
      </div>
    </nav>
  );
}
