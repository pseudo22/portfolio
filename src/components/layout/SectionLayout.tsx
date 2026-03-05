import React from "react";

interface SectionLayoutProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionLayout({
  id,
  title,
  children,
  className = "",
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={`w-full flex flex-col px-6 py-8 ${className}`}
    >
      {title && (
        <h2 className="text-3xl font-semibold mb-10 border-b border-gray-200 dark:border-gray-800 pb-2 transition-colors duration-300">
          {title}
        </h2>
      )}
      <div className="w-full max-w-5xl">{children}</div>
    </section>
  );
}
