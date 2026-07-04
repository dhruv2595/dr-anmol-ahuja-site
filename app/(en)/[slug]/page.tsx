import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConditionTemplate } from "@/components/ConditionTemplate";
import { allConditionPages, getConditionPage } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return allConditionPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getConditionPage(slug);
  if (!page) return {};
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function ConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getConditionPage(slug);
  if (!page) notFound();
  return <ConditionTemplate page={page} />;
}
