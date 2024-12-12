"use client"

import { useState } from "react";
import { gsap } from "gsap";
import experienceData from "../utils/exp.json";
import educationData from "../utils/edu.json";

type ExperienceItem = {
  title: string;
  company: string;
  date: string;
  description: string;
};

type EducationItem = {
  degree: string;
  institution: string;
  year: string;
  cgpa?: string;
  percentage?: string;
};

const experienceList: ExperienceItem[] = experienceData
const educationList: EducationItem[] = educationData

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience"
  );

  const toggleTab = (tab: "experience" | "education") => {
    const timeline = gsap.timeline();
    timeline
      .to(".tab-content", {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.out",
      })
      .call(() => setActiveTab(tab))
      .to(".tab-content", {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.in",
      });
  };

  const renderTabContent = () => {
    if (activeTab === "experience") {
      return experienceList.map((item, index) => (
        <div
          key={index}
          className="timeline-item flex items-start space-x-4 border-l-2 border-blue-500 pl-4 relative mb-6"
        >
          <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full"></div>
          <div>
            <h3 className="text-xl lg:text-3xl font-semibold mb-1">{item.title}</h3>
            <p className="text-lg:text-2xl text-gray-600 mb-1">{item.company}</p>
            <p className="text-md lg:text-2xl text-gray-500 mb-2">{item.date}</p>
            <p className="text-md lg:text-xl">{item.description}</p>
          </div>
        </div>
      ));
    } else {
      return educationList.map((item, index) => (
        <div
          key={index}
          className="timeline-item flex items-start space-x-4 border-l-2 border-blue-500 pl-4 relative mb-6"
        >
          <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full"></div>
          <div>
            <h3 className="text-xl lg:text-3xl font-semibold mb-1">{item.degree}</h3>
            <p className="text-lg:text-2xl text-gray-600 mb-1">{item.institution}</p>
            <p className="text-lg:text-2xl text-gray-500 mb-1">year: {item.year}</p>
            {item.cgpa && <p className="text-lg:text-xl">cgpa: {item.cgpa}</p>}
            {item.percentage && (
              <p className="text-lg:text-xl">percentage: {item.percentage}</p>
            )}
          </div>
        </div>
      ));
    }
  };

  return (
    <div className="min-h-[80vh] w-full top-[20%] absolute md:px-20 p-4">
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 mx-2 rounded-lg text-xl lg:text-3xl duration-300 ${
            activeTab === "experience"
              ? "underline"
              : ""
          }`}
          onClick={() => toggleTab("experience")}
        >
          Experience
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-lg text-xl lg:text-3xl duration-300 ${
            activeTab === "education"
              ? "underline"
              : ""
          }`}
          onClick={() => toggleTab("education")}
        >
          Education
        </button>
      </div>

      <div className="tab-content">
        <div className="timeline">{renderTabContent()}</div>
      </div>
    </div>
  );
}
