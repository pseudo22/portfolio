"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiCalendar, FiFileText, FiSun, FiMoon } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { gsap } from "gsap";
import { useTheme } from "next-themes";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function FloatingContact() {
  const dockRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: theme === "dark" ? "dark" : "light",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, [theme]);

  const contacts = [
    {
      name: "GitHub",
      url: "https://github.com/pseudo22",
      icon: <FiGithub size={22} className="sm:w-6 sm:h-6" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rohan-verma-047436267/",
      icon: <FiLinkedin size={22} className="sm:w-6 sm:h-6" />,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/pseudo462/",
      icon: <SiLeetcode size={22} className="sm:w-6 sm:h-6" />,
    },
    {
      name: "Email",
      url: "mailto:rohan.rv79@gmail.com",
      icon: <FiMail size={22} className="sm:w-6 sm:h-6" />,
    },
    {
      name: "Schedule Meeting",
      url: "rohan-verma-kkq96x/30min", // Update with your actual Cal.com link slug
      icon: <FiCalendar size={22} className="sm:w-6 sm:h-6" />,
      isCal: true
    },
    {
      name: "Resume (Drive)",
      url: "https://drive.google.com/file/d/1CO57rKkISibzoupkJY2LIE5-E5t7tshe/view?usp=sharing",
      icon: <FiFileText size={22} className="sm:w-6 sm:h-6" />,
    },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!dockRef.current) return;

      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Calculate if we're near the bottom (e.g., within 100px of the footer/contact section)
      const isAtBottom = windowHeight + currentScrollY >= fullHeight - 150;

      if (isAtBottom) {
        // Hide completely at bottom
        gsap.to(dockRef.current, {
          opacity: 0,
          y: 50,
          scale: 0.8,
          pointerEvents: "none",
          duration: 0.4,
          ease: "power2.inOut"
        });
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Subtle shrink effect on scroll down
        gsap.to(dockRef.current, {
          opacity: 0.7,
          scale: 0.95,
          y: 0,
          pointerEvents: "auto",
          duration: 0.4,
          ease: "power2.out"
        });
      } else {
        // Scrolling up or at the top restores it
        gsap.to(dockRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          pointerEvents: "auto",
          duration: 0.4,
          ease: "power2.out"
        });
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial entry animation
    gsap.fromTo(dockRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "back.out(1.5)", delay: 0.5 }
    );

    // Also bring back to full opacity/scale on hover in case they want to click while scrolling down
    const handleMouseEnter = () => {
      gsap.to(dockRef.current, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
    };

    const dockEl = dockRef.current;
    if (dockEl) {
      dockEl.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (dockEl) {
        dockEl.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, []);

  return (
    <div
      className="fixed bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-50 w-max"
    >
      <div
        ref={dockRef}
        className="flex flex-row items-center gap-4 sm:gap-8 px-6 py-4 bg-white/70 dark:bg-[#111111]/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-xl rounded-full"
      >
        {contacts.map((contact, idx) => {
          if (contact.isCal) {
            return (
              <button
                key={idx}
                type="button"
                onClick={async () => {
                  const cal = await getCalApi();
                  cal("modal", {
                    calLink: contact.url,
                    config: {
                      theme: theme === "dark" ? "dark" : "light",
                      layout: "month_view"
                    }
                  });
                }}
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all hover:scale-125 hover:-translate-y-2 relative group flex items-center justify-center duration-300 focus:outline-none cursor-pointer"
                aria-label={contact.name}
              >
                {contact.icon}
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white font-medium text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none drop-shadow-md">
                  {contact.name}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-gray-900"></span>
                </span>
              </button>
            );
          }
          return (
            <Link
              key={idx}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all hover:scale-125 hover:-translate-y-2 relative group flex items-center justify-center duration-300"
              aria-label={contact.name}
            >
              {contact.icon}

              {/* Tooltip */}
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white font-medium text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none drop-shadow-md">
                {contact.name}
                {/* Tooltip triangle */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-gray-900"></span>
              </span>
            </Link>
          );
        })}

        <div className="w-[1px] h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>

        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all hover:scale-125 relative group flex items-center justify-center duration-300 focus:outline-none cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <FiSun size={22} className="sm:w-6 sm:h-6" />
            ) : (
              <FiMoon size={22} className="sm:w-6 sm:h-6" />
            )}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white font-medium text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none drop-shadow-md">
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-gray-900"></span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
