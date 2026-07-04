import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://delhilaparoscopicsurgery.com"),
  title: {
    default: "Dr. Anmol Ahuja | Laparoscopic, Bariatric & Colorectal Surgeon in Delhi Noida",
    template: "%s | Dr. Anmol Ahuja",
  },
  description:
    "Dr. Anmol Ahuja — Advanced Laparoscopic, Bariatric, Hernia and Colorectal Surgeon at Sir Ganga Ram Hospital, New Delhi. Serving Delhi, Noida and Roorkee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-linen-white text-true-black antialiased pb-[52px] md:pb-0">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
