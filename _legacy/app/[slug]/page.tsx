import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allConditionPages, getConditionPage, getClusterSiblings } from "@/lib/content";
import { ConditionTemplate } from "@/components/ConditionTemplate";

export function generateStaticParams() {
  return allConditionPages.map((page) => ({ slug: page.slug }));
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
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function ConditionRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getConditionPage(slug);
  if (!page) notFound();

  const siblings = getClusterSiblings(page.cluster, page.slug);

  return <ConditionTemplate page={page} siblings={siblings} />;
}
