import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { CtaBand } from "./CtaBand";
import type { ConditionPage } from "@/lib/content";
import { getClusterSiblings } from "@/lib/content";
import { images, specialtyImages } from "@/lib/images";
import { site } from "@/lib/site";

const clusterMeta: Record<string, { label: string; hub: string }> = {
  "weight-loss-surgery": { label: "Weight Loss Surgery", hub: "/weight-loss-surgery" },
  hernia: { label: "Hernia", hub: "/hernia" },
  colorectal: { label: "Colorectal Surgery", hub: "/colorectal" },
  proctology: { label: "Proctology", hub: "/proctology" },
  "mis-laparoscopic-surgery": {
    label: "MIS & Laparoscopic Surgery",
    hub: "/mis-laparoscopic-surgery",
  },
};

export function ConditionTemplate({ page }: { page: ConditionPage }) {
  const cluster = clusterMeta[page.cluster];
  const siblings = getClusterSiblings(page.cluster, page.slug);
  const heroImage = page.isHub ? images[specialtyImages[page.slug]] : undefined;

  return (
    <>
      {/* Page header */}
      <section className="container-site pt-5 md:pt-8">
        <div className="grid gap-4 overflow-hidden rounded-card bg-mist lg:grid-cols-[1.5fr_1fr]">
          <div className="px-6 py-10 md:px-12 md:py-14">
            {cluster && !page.isHub ? (
              <Link
                href={cluster.hub}
                className="text-body-sm text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
              >
                {cluster.label}
              </Link>
            ) : (
              <p className="text-body-sm text-forest/80">Specialties</p>
            )}
            <h1 className="mt-3 max-w-2xl font-display text-heading-lg text-forest">
              {page.title}
            </h1>
            {page.intro.slice(0, 2).map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 max-w-2xl text-body text-charcoal">
                {p}
              </p>
            ))}
            <div className="mt-8">
              <Button href="/contact-us#enquiry">Discuss this with Dr. Ahuja</Button>
            </div>
          </div>
          {heroImage ? (
            <div className="relative hidden min-h-72 lg:block">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </section>

      {/* Body */}
      <section className="container-site py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          <article className="max-w-3xl">
            {page.intro.slice(2).map((p) => (
              <p key={p.slice(0, 24)} className="mb-5 text-body text-charcoal">
                {p}
              </p>
            ))}
            {page.sections.map((s) => (
              <div key={s.heading} className="mb-10 last:mb-0">
                <h2 className="font-display text-heading-sm text-forest">
                  {s.heading}
                </h2>
                {s.body?.map((p) => (
                  <p key={p.slice(0, 24)} className="mt-3 text-body-sm text-charcoal">
                    {p}
                  </p>
                ))}
                {s.list ? (
                  s.ordered ? (
                    <ol className="mt-4 space-y-2.5">
                      {s.list.map((item, i) => (
                        <li key={item.slice(0, 32)} className="flex gap-3 text-body-sm text-charcoal">
                          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-pill bg-linen text-caption text-forest">
                            {i + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="mt-4 space-y-2.5">
                      {s.list.map((item) => (
                        <li key={item.slice(0, 32)} className="flex gap-3 text-body-sm text-charcoal">
                          <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-pill bg-forest" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )
                ) : null}
              </div>
            ))}
          </article>

          <aside className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-card bg-forest p-6 text-canvas">
              <p className="font-display text-subheading">
                Worried about this condition?
              </p>
              <p className="mt-2 text-body-sm text-canvas/75">
                A short consultation gives you a clear answer — and surgery is
                only ever one of the options.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/contact-us#enquiry"
                  className="rounded-card bg-canvas px-5 py-3 text-center text-body-sm text-forest transition-colors hover:bg-linen"
                >
                  Book an appointment
                </Link>
                <a
                  href={site.phones[0].href}
                  className="text-center text-body-sm text-canvas/85 underline decoration-canvas/30 underline-offset-4 hover:decoration-canvas"
                >
                  Call {site.phones[0].label}
                </a>
              </div>
            </div>

            {siblings.length > 0 && cluster ? (
              <nav aria-label={`More in ${cluster.label}`} className="rounded-card border border-hairline p-6">
                <p className="text-body-sm text-graphite">
                  More on {cluster.label.toLowerCase()}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {siblings.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/${s.slug}`}
                        className="text-body-sm text-forest underline decoration-forest/20 underline-offset-4 hover:decoration-forest"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
          </aside>
        </div>
      </section>

      <CtaBand
        title="Get a clear answer about your symptoms"
        sub="Bring your reports — leave knowing exactly where you stand."
      />
    </>
  );
}
