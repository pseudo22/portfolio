"use client";
import React from "react";
import Image from "next/image";
import techData from "@/utils/tech.json";

interface TechTooltipProps {
  tech: string;
}

export default function TechTooltip({ tech }: TechTooltipProps) {
  const techInfo = techData.find(
    (t) => t.name.toLowerCase() === tech.toLowerCase(),
  );

  if (!techInfo) return <span>{tech}</span>;

  return (
    <span className="relative inline-block cursor-pointer font-semibold group z-50">
      {tech}

      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 flex flex-col items-center gap-2 px-3 py-2 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-1 whitespace-nowrap z-[100] shadow-xl">
        {techInfo.icon && (
          <div className="bg-white/90 p-1 rounded-sm">
            <Image
              src={techInfo.icon}
              alt={techInfo.name}
              width={80}
              height={80}
              className="w-16 h-12 object-contain"
              unoptimized
            />
          </div>
        )}
        <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
          {techInfo.name}
        </span>
        {/* Tooltip triangle */}
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-white dark:border-t-gray-800"></span>
      </span>
    </span>
  );
}
