import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nuvianix Tech - Next-Gen Digital Transformation",
  description: "Empowering businesses through innovative cloud solutions and cutting-edge software development.",
  keywords: "cloud solutions, DevOps, web development, app development, SQA, test automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Empowering businesses through innovative cloud solutions and cutting-edge software development." />
        <meta property="og:title" content="Nuvianix Tech - Next-Gen Digital Transformation" />
        <meta property="og:description" content="Empowering businesses through innovative cloud solutions and cutting-edge software development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nuvianix.com/" />
        <meta property="og:site_name" content="Nuvianix Tech" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Nuvianix Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nuvianix" />
        <meta name="twitter:creator" content="@nuvianix" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
