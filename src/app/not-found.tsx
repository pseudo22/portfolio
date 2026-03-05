"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiHome, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div 
        ref={containerRef}
        className="max-w-2xl w-full text-center"
      >
        <div className="relative bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm p-10 md:p-16 rounded-3xl border border-gray-100 dark:border-white/5 shadow-2xl transition-all duration-500 hover:shadow-3xl">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-b from-gray-900 to-gray-400 dark:from-white dark:to-gray-800 bg-clip-text text-transparent opacity-20">
            404
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-50 tracking-tight">
            calm down <span className="bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent italic underline decoration-gray-300 dark:decoration-gray-700 underline-offset-8">astronaut</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 font-medium leading-relaxed">
            you've drifted a bit too far into <span className="text-gray-900 dark:text-white font-bold">unknown territory</span>. 
            the coordinates you're looking for don't exist in this system.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-400/20 dark:shadow-none"
            >
              <FiHome className="text-xl" />
              <span className="capitalize">return to base</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-white/5 text-gray-900 dark:text-white font-bold rounded-2xl border border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300"
            >
              <FiArrowLeft className="text-xl" />
              <span className="capitalize">go back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
