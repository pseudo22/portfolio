"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedLines() {
  const leftStringRef = useRef<HTMLDivElement>(null);
  const rightStringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupString = (
      stringRef: React.RefObject<HTMLDivElement | null>,
      isVertical: boolean
    ) => {
      const string = stringRef.current;
      if (!string) return;

      const paths = string.querySelectorAll("svg path");
      const finalPath = isVertical
        ? "M 100 10 Q 100 400 100 790"
        : "M 10 100 Q 960 100 1910 100";

      const onMouseMove = (e: MouseEvent) => {
        if (isVertical) {
          const rect = string.getBoundingClientRect();
          const localY = e.clientY - rect.top;
          const controlX = Math.max(Math.min(e.clientX - rect.left, 180), 20);
          const newPath = `M 100 10 Q ${controlX} ${localY} 100 790`;
          gsap.to(paths, {
            attr: { d: newPath },
            duration: 0.3,
            ease: "power3.out",
          });
        } else {
          const controlY = Math.max(Math.min(e.clientY, 300), 20);
          const newPath = `M 10 100 Q ${e.clientX} ${controlY} 1910 100`;
          gsap.to(paths, {
            attr: { d: newPath },
            duration: 0.3,
            ease: "power3.out",
          });
        }
      };

      const onMouseLeave = () => {
        gsap.to(paths, {
          attr: { d: finalPath },
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
        });
      };

      string.addEventListener("mousemove", onMouseMove);
      string.addEventListener("mouseleave", onMouseLeave);

      return () => {
        string.removeEventListener("mousemove", onMouseMove);
        string.removeEventListener("mouseleave", onMouseLeave);
      };
    };

    const cleanupLeft = setupString(leftStringRef, true);
    const cleanupRight = setupString(rightStringRef, true);

    return () => {
      cleanupLeft?.();
      cleanupRight?.();
    };
  }, []);

  return (
    <>
      {/* Left line */}
      <div
        ref={leftStringRef}
        className="hidden md:block fixed left-0 top-0 h-screen w-[100px] lg:w-[150px] z-50 pointer-events-auto
                   md:ml-[150px] lg:ml-[200px] xl:ml-[250px] 2xl:ml-[350px]"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M 100 10 Q 100 400 100 790"
            stroke="var(--foreground)"
            opacity="0.2"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>
      </div>

      {/* Right line */}
      <div
        ref={rightStringRef}
        className="hidden md:block fixed right-0 top-0 h-screen w-[100px] lg:w-[150px] z-50 pointer-events-auto
                   md:mr-[150px] lg:mr-[200px] xl:mr-[250px] 2xl:mr-[350px]"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M 100 10 Q 100 400 100 790"
            stroke="var(--foreground)"
            opacity="0.2"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>
      </div>
    </>
  );
}
