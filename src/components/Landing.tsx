"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Landing() {
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const birthYear = 2003;
    setAge(currentYear - birthYear);

    const down = document.querySelector('.downn') as HTMLElement;
    

    if (down) {
      down.addEventListener('mouseenter', () => {
        gsap.to(down, {
          scale: 1.5,
          duration: 0.3,
          ease: 'sine.out',
        });
      });

      down.addEventListener('mouseleave', () => {
        gsap.to(down, {
          scale: 1,
          duration: 0.3,
          ease: 'sine.in',
        });
      });
    }

    return () => {
      if (down) {
        down.removeEventListener('mouseenter', () => {});
        down.removeEventListener('mouseleave', () => {});
      }
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bottom-[10%] md:flex-row items-center justify-center md:justify-between px-4 md:px-20 lg:relative transition-all duration-300">
      <div className="text-left space-y-4 md:space-y-6">
        <p className="block font-extralight text-lg sm:text-2xl md:text-xl lg:text-3xl">hey,</p>
        <p className="font-extralight text-2xl  sm:text-2xl md:text-2xl lg:text-4xl">it's me</p>
        <p className="mt-2 text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
          Rohan Verma
          <span className="italic text-2xl sm:text-3xl font-light ml-2">M/{age}</span>
        </p>
      </div>


      <div className="text-right right-[2%] bottom-[20%] absolute lg:pt-10 md:p-0">
        <p className="text-3xl lg:text-7xl md:text-6xl font-[400]">Software Developer</p>
      </div>
      <br />
      <p onClick={scrollToNextSection} className="md:text-sm lg:hidden absolute bottom-10">scroll down</p>
      <div
        className="lg:down downn hidden absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer border-2 border-black w-12 h-12 rounded-full p-2 lg:flex justify-center items-center"
        onClick={scrollToNextSection}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-black self-center"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      
    </div>
  );
}