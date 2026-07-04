import Link from "next/link";
import { footerQuickLinks, specialtyClusters } from "@/lib/nav";
import { site } from "@/lib/site";
import { WhatsAppLink } from "./WhatsApp";

export function Footer() {
  return (
    <footer className="bg-linen-white px-[21px] pb-[28px]">
      <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[14px] bg-mist-blue">
        <div className="px-[35px] py-[49px] md:px-[56px] md:py-[56px]">
          <div className="flex items-center gap-[10px]">
            <span
              aria-hidden="true"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-[8px] bg-forest-ink font-serif text-[15px] font-light text-linen-white"
            >
              AA
            </span>
            <p className="font-serif text-[22px] font-light text-forest-ink">{site.doctorName}</p>
          </div>

          <div className="mt-[35px] grid grid-cols-1 gap-[35px] sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1.2fr]">
            {/* Brand + contact */}
            <div>
              <p className="max-w-[32ch] text-[14px] leading-[1.6] text-charcoal">
                {site.credentialShort}
              </p>
              <div className="mt-[18px] flex flex-col gap-[10px]">
                <WhatsAppLink tone="forest" />
                <a href={`mailto:${site.email}`} className="text-[14px] text-forest-ink hover:underline">
                  {site.email}
                </a>
              </div>
            </div>

            {/* Specialities */}
            <nav aria-label="Specialities">
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-forest-ink/70">
                Specialities
              </p>
              <ul className="mt-[14px] flex flex-col gap-[10px]">
                {specialtyClusters.map((cluster) => (
                  <li key={cluster.href}>
                    <Link href={cluster.href} className="text-[14px] text-charcoal hover:text-forest-ink">
                      {cluster.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Quick links */}
            <nav aria-label="Quick links">
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-forest-ink/70">
                Explore
              </p>
              <ul className="mt-[14px] flex flex-col gap-[10px]">
                {footerQuickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[14px] text-charcoal hover:text-forest-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Locations */}
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-forest-ink/70">
                Where to Find Us
              </p>
              <ul className="mt-[14px] flex flex-col gap-[16px]">
                {site.locations.map((loc) => (
                  <li key={loc.name} className="text-[14px] leading-[1.5] text-charcoal">
                    <span className="block font-medium text-forest-ink">{loc.name}</span>
                    {loc.address}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-[42px] flex flex-col items-start justify-between gap-[14px] border-t border-forest-ink/15 pt-[21px] sm:flex-row sm:items-center">
            <p className="text-[12px] text-charcoal">
              © {new Date().getFullYear()} {site.doctorName}. All rights reserved.
            </p>
            <div className="flex items-center gap-[21px]">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-forest-ink hover:underline"
              >
                Facebook
              </a>
              <a
                href={site.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-forest-ink hover:underline"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
