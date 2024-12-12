"use client";

import Image from "next/image";
import projects from "../utils/projects.json";
import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<{ image: string | null; name: string | null }>({
    image: null,
    name: null
  });

  const openAccordion = (url: string, projectName: string) => {
    setActiveProject({ image: url, name: projectName });
  };

  const closeAccordion = () => {
    setActiveProject({ image: null, name: null });
  };

  useEffect(() => {
    if (activeProject.image) {
      gsap.fromTo(
        ".accordion-image",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [activeProject.image]);

  return (
    <div className="min-h-[80vh] top-[20%] absolute md:px-20">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card relative p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <div className="relative">
              <Image
                src={project.sample}
                alt={project.projectName}
                onClick={() => openAccordion(project.sample, project.projectName)}
                className="w-full h-56 object-cover rounded-md cursor-pointer"
                width={500}
                height={280}
              />
            </div>

            <h3 className="text-xl font-bold mt-4">{project.projectName}</h3>
            <p className="text-lg text-gray-600 mt-2">{project.about}</p>

            <div className="flex flex-wrap gap-3 mt-4">
              {project.tech.map((tech, idx) => (
                <Image
                  key={idx}
                  src={tech}
                  alt="tech"
                  className="w-10 h-10 object-cover rounded-full"
                  width={40}
                  height={40}
                />
              ))}
            </div>

            <div className="absolute bottom-4 right-4">
              <a
                href={project.githubRepolink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/github.png"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="hover:scale-110 object-contain transition-transform"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      {activeProject.image && activeProject.name && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative p-4 bg-white rounded-lg shadow-lg">
            <button
              onClick={closeAccordion}
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 text-gray-800 hover:bg-gray-300 z-10"
            >
              ✖
            </button>

            <h3 className="text-xl font-bold mb-4 text-center">{activeProject.name} preview</h3>
            <Image
              src={activeProject.image}
              alt="Expanded view"
              width={500}
              height={500}
              className="accordion-image rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
}
