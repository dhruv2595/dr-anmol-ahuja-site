import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function HindiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="hi">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-nav focus:bg-forest focus:px-4 focus:py-2 focus:text-canvas"
      >
        मुख्य सामग्री पर जाएँ
      </a>
      <Header lang="hi" />
      <main id="main">{children}</main>
      <Footer lang="hi" />
    </div>
  );
}
