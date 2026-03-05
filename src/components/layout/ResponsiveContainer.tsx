// components/ResponsiveContainer.tsx
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ResponsiveContainer({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`relative z-10 px-6 md:pl-[180px] md:pr-[180px] lg:pl-[230px] lg:pr-[230px] xl:pl-[280px] xl:pr-[280px] 2xl:pl-[330px] 2xl:pr-[330px] max-w-[1600px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
