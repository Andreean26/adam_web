import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adam - IT Developer",
  description: "Professional web developer and designer creating amazing digital experiences with modern technologies.",
  keywords: ["web development", "design", "react", "nextjs", "typescript"],
  authors: [{ name: "Adam" }],
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
