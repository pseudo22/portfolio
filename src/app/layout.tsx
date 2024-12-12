
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";

const font = localFont({
  src: [
      {
      path : '../../public/fonts/Gilroy.woff',

      }
    ],  
  variable: "--font-machina",
});

export const metadata: Metadata = {
  title: "Rohan Verma",
  description: "Rohan Verma Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.variable} font-machina antialiased`}
      >
        <NavBar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
