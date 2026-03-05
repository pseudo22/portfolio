import type { Metadata } from "next";
import "./globals.css";
import AnimateLines from "@/components/AnimatedLines";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import FloatingContact from "@/components/layout/FloatingContact";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Rohan Verma",
  description: "Rohan Verma's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen overflow-x-hidden pb-32 lg:pb-36 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimateLines />
          <ResponsiveContainer>{children}</ResponsiveContainer>
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}
