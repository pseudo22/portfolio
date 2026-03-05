"use client";
import React from "react";
import SectionLayout from "./layout/SectionLayout";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import Skills from "./Skills";

export default function About() {
  return (
    <SectionLayout title="" id="introduction">
      <div className="max-w-4xl transition-all duration-500 group">
        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-14 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm p-6 md:p-10 rounded-3xl border border-gray-100 dark:border-white/5 shadow-2xl shadow-gray-200/50 dark:shadow-none transition-all duration-500">
          
          {/* Profile Image */}
          <div className="relative flex-shrink-0">
            <div className="w-40 md:w-48 h-40 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/images/rohan-pfp.jpg"
                alt="Rohan Verma's Profile Picture"
                width={200}
                height={200}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col text-center md:text-left pt-2">
            <div className="inline-block self-center md:self-start bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 transition-colors">
              open to collaborate
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900 dark:text-gray-50 transition-colors duration-300">
              hey, i am <span className="bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">rohan verma</span>
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed font-medium mb-8 text-gray-600 dark:text-gray-300 transition-colors duration-300 max-w-2xl">
              passionate about discovering{" "}
              <span className="text-gray-900 dark:text-white italic underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4">innovative</span>{" "}
              ways to change perspectives, with a{" "}
              <span className="text-gray-900 dark:text-white font-bold">sophisticated</span> and{" "}
              <span className="text-gray-900 dark:text-white font-bold">creative</span> mindset.
              <br className="hidden md:block" />
              {" "}excels at{" "}
              <span className="text-gray-900 dark:text-white italic underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4">analyzing</span>{" "}
              problems deeply to provide <span className="text-gray-900 dark:text-white font-bold">effective</span> solutions, 
              and embraces{" "}
              <span className="text-gray-900 dark:text-white italic underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4">change</span>{" "}
              while continually seeking <span className="text-gray-900 dark:text-white font-bold">growth</span>.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <span 
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Ghaziabad,+Uttar+Pradesh/@28.6992537,77.065375,10z/data=!3m1!4b1!4m6!3m5!1s0x390cf1bb41c50fdf:0xe6f06fd26a7798ba!8m2!3d28.6691565!4d77.4537578!16zL20vMDZkbG0x?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="group/loc inline-flex cursor-pointer items-center text-sm font-semibold px-4 py-2 bg-gray-100 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-white/10 transition-all duration-300 shadow-sm"
              >
                <CiLocationOn className="mr-2 text-xl group-hover/loc:scale-110 transition-transform" />
                <span className="text-gray-600 dark:text-gray-300 group-hover/loc:text-gray-900 dark:group-hover/loc:text-white transition-colors">
                  Ghaziabad, India
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newly added Skills section, inside the About scope layout  */}
      <Skills />
    </SectionLayout>
  );
}
