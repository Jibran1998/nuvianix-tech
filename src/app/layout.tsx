import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DefaultSeo } from "next-seo";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
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
      <DefaultSeo
        titleTemplate="%s | Nuvianix Tech"
        defaultTitle="Nuvianix Tech - Next-Gen Digital Transformation"
        description="Empowering businesses through innovative cloud solutions and cutting-edge software development."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://nuvianix.com/',
          siteName: 'Nuvianix Tech',
          images: [
            {
              url: '/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Nuvianix Tech',
            },
          ],
        }}
        twitter={{
          handle: '@nuvianix',
          site: '@nuvianix',
          cardType: 'summary_large_image',
        }}
      />
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
