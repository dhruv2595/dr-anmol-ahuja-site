import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-nav focus:bg-forest focus:px-4 focus:py-2 focus:text-canvas"
      >
        Skip to content
      </a>
      <Header lang="en" />
      <main id="main">{children}</main>
      <Footer lang="en" />
    </>
  );
}
