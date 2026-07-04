import type { Metadata, Viewport } from "next";
import {
  Fraunces,
  Inter,
  Noto_Sans_Devanagari,
  Noto_Serif_Devanagari,
} from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansDev = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-sans-dev",
  display: "swap",
});

const notoSerifDev = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-serif-dev",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Laparoscopic & Bariatric Surgeon in Delhi | Dr. Anmol Ahuja",
    template: "%s | Dr. Anmol Ahuja",
  },
  description:
    "Dr. Anmol Ahuja is a laparoscopic, bariatric, hernia and colorectal surgeon at Sir Ganga Ram Hospital, New Delhi, consulting in Delhi, Noida and Roorkee.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Dr. Anmol Ahuja — Delhi Laparoscopic Surgery",
    url: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#fffefc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // The theme init script may add `.dark` before hydration — expected mismatch
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${notoSansDev.variable} ${notoSerifDev.variable}`}
    >
      <body>
        {/* Apply saved theme before first paint to avoid a flash; defaults to light */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}})()",
          }}
        />
        <div aria-hidden className="h-1.5 bg-forest" />
        {children}
      </body>
    </html>
  );
}
