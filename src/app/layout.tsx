import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Adam Fawazzaky - Full Stack Developer Portfolio",
  description: "Full Stack Developer specializing in web and mobile application development. Expert in React, Next.js, Laravel, React Native, and Flutter. Based in Surabaya, Indonesia.",
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "Mobile Development",
    "React",
    "Next.js",
    "TypeScript",
    "Laravel",
    "React Native",
    "Flutter",
    "Node.js",
    "Portfolio",
    "Surabaya Developer",
    "Indonesia Developer"
  ],
  authors: [{ name: "Adam Fawazzaky Fardy Andreean" }],
  creator: "Adam Fawazzaky",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Adam Fawazzaky - Full Stack Developer",
    description: "Full Stack Developer specializing in web and mobile applications with modern technologies.",
    siteName: "Adam Fawazzaky Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Fawazzaky - Full Stack Developer",
    description: "Full Stack Developer specializing in web and mobile applications",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
  <div className="relative z-10 min-h-screen flex flex-col">
          <AnimatedBackground />
          <ScrollProgress />
          {children}
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
