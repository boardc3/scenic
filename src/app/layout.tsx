import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LifeStage AI - Cinematic Real Estate Videos",
  description: "Transform your real estate listings with cinematic videos. We create emotional, lifestyle-driven content that helps buyers picture themselves living in the home.",
  keywords: "real estate videos, luxury listings, cinematic marketing, property videos, real estate staging",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
