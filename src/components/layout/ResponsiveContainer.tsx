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
  className="
  relative z-10 px-6
  md:pl-[var(--side-space)]
  md:pr-[var(--side-space)]
  max-w-[1600px] mx-auto
"
>
      {children}
    </div>
  );
}
