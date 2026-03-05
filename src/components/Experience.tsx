"use client";
import React, { useState, useRef, useEffect } from "react";
import SectionLayout from "./layout/SectionLayout";
import experienceData from "@/utils/experience.json";
import { HiMiniArrowDown, HiMiniArrowUp } from "react-icons/hi2";
import { gsap } from "gsap";
import { parseDescription } from "@/utils/parseDescription";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: {
    task1: string;
    task2: string;
    task3?: string;
  };
}

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLUListElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    experienceData.forEach((_, index) => {
      const el = contentRefs.current[index];
      if (!el) return;

      gsap.killTweensOf(el);

      if (activeIndex === index) {
        el.style.display = "block";
        const targetHeight = el.scrollHeight;

        gsap.fromTo(
          el,
          { height: 0, opacity: 0 },
          {
            height: targetHeight,
            opacity: 1,
            duration: 0.4,
            ease: "power3.out",
            onComplete: () => {
              el.style.height = "auto";
              // Allow the tooltip to show outside the container once open
              el.style.overflow = "visible";
            },
          },
        );
      } else {
        // Collapse animation
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
          onStart: () => {
            // Hide overflow again so the text doesn't spill out while closing
            el.style.overflow = "hidden";
          },
          onComplete: () => {
            el.style.display = "none";
          },
        });
      }
    });
  }, [activeIndex]);

  return (
    <SectionLayout id="experience" title="experience">
      <div className="flex flex-col gap-4 md:gap-6">
        {experienceData.map((exp: ExperienceItem, index: number) => (
          <div
            key={index}
            className="relative bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm border border-gray-100 dark:border-white/5 rounded-2xl p-4 md:p-6 transition-all duration-300 hover:border-gray-400 dark:hover:border-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none"
          >
            <div
              className="flex flex-row justify-between mb-2 md:mb-4 cursor-pointer gap-8"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">{exp.company}</h3>
              {activeIndex === index ?
                <HiMiniArrowUp className="text-gray-500 dark:text-gray-400 md:ml-4 transition-colors duration-300" />
              : <HiMiniArrowDown className="text-gray-500 dark:text-gray-400 md:ml-4 transition-colors duration-300" />}
            </div>

            <div
              className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 md:mb-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">{exp.title}</span>
              <span className="text-gray-500 dark:text-gray-500 text-sm md:text-base mt-1 md:mt-0 transition-colors duration-300">
                {exp.date}
              </span>
            </div>

            <ul
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 overflow-hidden transition-colors duration-300"
              style={{ height: 0, opacity: 0, display: "none" }}
            >
              {Object.values(exp.description).map((task, i) => (
                <li key={i} className="text-sm md:text-base">
                  {parseDescription(task)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
