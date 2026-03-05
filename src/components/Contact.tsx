"use client";
import React, { useEffect, useRef } from "react";
import SectionLayout from "./layout/SectionLayout";
import { FiGithub, FiLinkedin, FiMail, FiCalendar } from "react-icons/fi";
import { SiLeetcode, SiX } from "react-icons/si";
import { gsap } from "gsap";
import { getCalApi } from "@calcom/embed-react";
import { useTheme } from "next-themes";

export default function Contact() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }
  }, []);

  const openCal = async () => {
    const cal = await getCalApi();
    cal("modal", {
      calLink: "rohan-verma-kkq96x/30min",
      config: {
        theme: theme === "dark" ? "dark" : "light",
        layout: "month_view"
      }
    });
  };

  const socials = [
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/rohan-verma-047436267/",
      icon: <FiLinkedin size={20} />,
      label: "",
    },
    {
      name: "github",
      href: "https://github.com/pseudo22",
      icon: <FiGithub size={20} />,
      label: "",
    },
    {
      name: "leetcode",
      href: "https://leetcode.com/u/pseudo462/",
      icon: <SiLeetcode size={20} />,
      label: "",
    },
    {
      name: "x (twitter)",
      href: "https://x.com/pseudo2211",
      icon: <SiX size={18} />,
      label: "",
    },
  ];

  return (
    <SectionLayout title="get in touch" id="contact">
      <div 
        ref={sectionRef}
        className="relative group max-w-4xl"
      >
        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-14 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-white/5 shadow-2xl shadow-gray-200/50 dark:shadow-none transition-all duration-500 hover:-translate-y-1 hover:shadow-3xl">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900 dark:text-gray-50">
              let's <span className="bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">connect</span>
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed font-medium mb-10 text-gray-600 dark:text-gray-300 max-w-2xl">
              i'm always open to discussing{" "}
              <span className="text-gray-900 dark:text-white italic underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4">new projects</span>,{" "}
              <span className="text-gray-900 dark:text-white font-bold">creative ideas</span>, or opportunities to be part of your vision. 
              {" "}whether you want to build something{" "}
              <span className="text-gray-900 dark:text-white font-bold">together</span> or just say <span className="text-gray-900 dark:text-white font-bold">hi</span>, feel free to reach out.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
              <button
                onClick={openCal}
                className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-400/20 dark:shadow-none cursor-pointer"
              >
                <FiCalendar className="text-xl" />
                <span className="capitalize">schedule a meet</span>
              </button>

              <a
                href="mailto:rohan.rv79@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-white/5 text-gray-900 dark:text-white font-bold rounded-2xl border border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300"
              >
                <FiMail className="text-xl" />
                <span className="capitalize">send email</span>
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item flex flex-col items-center md:items-start p-4 bg-gray-50/50 dark:bg-white/[0.03] hover:bg-white dark:hover:bg-white/10 border border-transparent hover:border-gray-200 dark:hover:border-white/10 rounded-2xl transition-all duration-300"
                >
                  <div className="p-3 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white rounded-xl shadow-sm mb-3 transition-colors">
                    {social.icon}
                  </div>
                  <span className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                    {social.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-bold">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
