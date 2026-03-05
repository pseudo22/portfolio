import React from "react";
import Image from "next/image";
import skillsData from "@/utils/skills.json";

export default function Skills() {
  return (
    <div className="mt-16 md:mt-24 w-full">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 pb-2 transition-colors duration-300">
        skills & arsenal
      </h2>
      <div className="flex flex-col gap-6 md:gap-8">
        {skillsData.map((category, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-start gap-3 md:gap-8"
          >
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 md:w-40 shrink-0 md:pt-3 transition-colors duration-300">
              {category.category.replace(/-/g, " ")}
            </h3>
            <div className="flex flex-wrap gap-3 flex-1">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-2.5 px-3 py-2 bg-gray-50 dark:bg-[#151515] border border-gray-200 dark:border-[#2a2a2a] rounded-lg hover:bg-white dark:hover:bg-[#1a1a1a] hover:border-gray-400 dark:hover:border-gray-500 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-default"
                >
                  <div className="relative w-5 h-5 opacity-100 grayscale-0 md:opacity-60 md:grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 dark:bg-white/90 dark:p-0.5 dark:rounded-sm">
                    <Image
                      src={skill.image}
                      alt={skill.skill}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-800 md:text-gray-500 dark:text-gray-200 dark:md:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white capitalize transition-colors duration-300">
                    {skill.skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
