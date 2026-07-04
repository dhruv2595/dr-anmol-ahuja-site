"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { specialtyClusters, primaryNavLinks } from "@/lib/nav";
import { site } from "@/lib/site";
import { Button } from "./Button";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-[7px] text-forest-ink"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {open ? (
            <path
              d="M5 5l14 14M19 5L5 19"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {mounted && open &&
        createPortal(
          <div className="fixed top-[72px] right-0 bottom-0 left-0 z-40 overflow-y-auto bg-linen-white pb-[100px]">
            <nav aria-label="Mobile" className="flex flex-col gap-[7px] p-[21px]">
              {specialtyClusters.map((cluster) => (
                <details key={cluster.href} className="group border-b border-hairline-gray py-[9px]">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-[7px] text-[16px] font-normal text-forest-ink marker:content-none">
                    <Link href={cluster.href} onClick={() => setOpen(false)} className="hover:underline">
                      {cluster.label}
                    </Link>
                    <span
                      aria-hidden="true"
                      className="flex h-6 w-6 items-center justify-center rounded-[7px] border border-hairline-gray transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <ul className="flex flex-col gap-[4px] py-[9px] pl-[14px]">
                    {cluster.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-[7px] text-[14px] text-charcoal"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}

              <div className="mt-[14px] flex flex-col gap-[4px]">
                {primaryNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="py-[9px] text-[14px] text-charcoal"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-[21px] flex flex-col gap-[14px]">
                <a href={site.primaryPhoneHref} className="text-[14px] font-normal text-forest-ink">
                  {site.phones[0]}
                </a>
                <Button href="/book-an-appointment" withArrow className="justify-center">
                  Book an Appointment
                </Button>
              </div>
            </nav>
          </div>,
          document.body
        )}
    </div>
  );
}
