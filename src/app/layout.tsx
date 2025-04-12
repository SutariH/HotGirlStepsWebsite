import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Hot Girl Steps - Your Confidence Begins With Every Step",
  description: "Track your movement. Boost your glow. Repeat.",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
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
