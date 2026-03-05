import React from "react";
import SectionLayout from "./layout/SectionLayout";
import projectsData from "@/utils/projects.json";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { parseDescription } from "@/utils/parseDescription";

export default function Projects() {
  return (
    <SectionLayout id="projects" title="projects">
      <div className="flex flex-col gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="border border-gray-400 dark:border-gray-800 rounded-md p-4 md:p-6 flex flex-col md:flex-row gap-6 transition-all duration-300 hover:border-gray-600 dark:hover:border-gray-500 hover:-translate-y-1 hover:shadow-md"
          >
            {/* Project Image */}
            <div className="w-full md:w-1/3 aspect-video relative flex-shrink-0 rounded-md overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
              <Image
                src={project.sample}
                alt={`${project.projectName} preview`}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="flex flex-col flex-grow justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-bold capitalize text-gray-900 dark:text-gray-100 transition-colors duration-300">
                    {project.projectName}
                  </h3>
                  <div className="flex gap-4">
                    {project.githubRepolink && (
                      <Link
                        href={project.githubRepolink}
                        target="_blank"
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
                      >
                        <FiGithub size={20} />
                      </Link>
                    )}
                    {project.live_link && (
                      <Link
                        href={project.live_link}
                        target="_blank"
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
                      >
                        <FiExternalLink size={20} />
                      </Link>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-4 transition-colors duration-300">
                  {parseDescription(project.about)}
                </p>

                <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
                  {project.algoUsed && (
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">Algorithms: </span>
                      <span>{project.algoUsed}</span>
                    </div>
                  )}
                  {project.systemDesign && (
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">System Design: </span>
                      <span>{parseDescription(project.systemDesign)}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
                {project.tech.map((techItem, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 relative bg-gray-100 dark:bg-white/90 rounded-full flex items-center justify-center p-1.5 shadow-sm transition-colors duration-300"
                  >
                    <Image
                      src={techItem}
                      alt="tech stack icon"
                      fill
                      className="object-contain p-1.5"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
