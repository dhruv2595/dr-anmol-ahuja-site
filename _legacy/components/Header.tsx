import Link from "next/link";
import { primaryNavLinks } from "@/lib/nav";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { Button } from "./Button";

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-[10px]" aria-label="Dr. Anmol Ahuja — home">
      <span
        aria-hidden="true"
        className="flex h-[38px] w-[38px] items-center justify-center rounded-[7px] bg-forest-ink font-serif text-[16px] font-light text-linen-white"
      >
        AA
      </span>
      <span className="whitespace-nowrap font-serif text-[21px] font-light leading-none text-forest-ink">
        Dr. Anmol Ahuja
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-hairline-gray bg-linen-white shadow-[0_4px_16px_rgba(15,62,23,0.06)]">
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-[21px]">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-[4px] lg:flex">
          <MegaMenu />
          {primaryNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-[7px] px-[12px] py-[8px] text-[15px] text-charcoal transition-colors hover:text-forest-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/book-an-appointment">Book an Appointment</Button>
        </div>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
