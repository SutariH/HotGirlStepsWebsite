import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { poppins, baloo2 } from "@/lib/fonts";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Hot Girl Steps – Confidence Starts With a Walk",
  description: "A step-tracking app made for the girls – track goals, earn sparkles, and glow with every walk.",
  metadataBase: new URL("https://hot-girl-steps-website.vercel.app"),
  keywords: "Hot Girl Walk, Step Tracker, Fitness App for Women, Daily Affirmations, Self-Love App, Walk Tracker, Motivational Walks",
  openGraph: {
    title: "Hot Girl Steps – Confidence Starts With a Walk",
    description: "A step-tracking app made for the girls – track goals, earn sparkles, and glow with every walk.",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Hot Girl Steps App",
      },
    ],
  },
  alternates: {
    canonical: "https://hot-girl-steps.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${baloo2.variable}`}>
      <body className={poppins.className}>
        <Header />
        <main className="pt-20 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-8">
            {children}
          </div>
        </main>
        <footer className="p-4 md:p-6 text-center">
          <p className="text-sm opacity-80">© {new Date().getFullYear()} Hot Girl Steps. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
