import React from "react";
import SectionLayout from "./layout/SectionLayout";
import educationData from "@/utils/education.json";
import { FiBookOpen } from "react-icons/fi";

export default function Education() {
  return (
    <SectionLayout id="education" title="education">
      <div className="flex flex-col gap-4 md:gap-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="border border-gray-400 dark:border-gray-800 rounded-md p-4 md:p-5 flex flex-col md:flex-row md:justify-between md:items-start transition-all duration-300 hover:border-gray-500 dark:hover:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex flex-col flex-1 pl-2 border-l-2 border-gray-300 dark:border-gray-700 transition-colors duration-300">
              <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100 mb-1.5 md:mb-3 transition-colors duration-300">
                <h3 className="text-lg md:text-xl font-bold capitalize leading-tight">
                  {edu.degree}
                </h3>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <span className="font-medium text-gray-700 dark:text-gray-300 capitalize text-sm sm:text-base transition-colors duration-300">
                  {edu.institution}
                </span>
              </div>
            </div>
            
            <div className="mt-3 md:mt-0 md:text-right flex flex-row md:flex-col justify-between items-center md:items-end w-full md:w-auto">
              {/* Year */}
              <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base order-2 md:order-1 whitespace-nowrap transition-colors duration-300">
                {edu.year}
              </span>
              
              {/* Score */}
              <span className="text-gray-600 dark:text-gray-300 order-1 md:order-2 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-sm mt-0 md:mt-2 text-xs sm:text-sm border border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
                {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Score: ${edu.percentage}`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
