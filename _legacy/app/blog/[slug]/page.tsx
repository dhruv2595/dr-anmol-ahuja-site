import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PillBadge } from "@/components/PillBadge";
import { ConditionCTA } from "@/components/ConditionCTA";
import { blogPosts, blogBySlug } from "@/lib/content/blog";
import { images } from "@/lib/images";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogBySlug.get(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogBySlug.get(slug);
  if (!post) notFound();

  const image = images[post.imageKey];

  return (
    <article className="mx-auto max-w-[760px] px-[21px] py-[56px]">
      <Link href="/blog" className="text-[14px] text-forest-ink hover:underline">
        ← All articles
      </Link>

      <div className="mt-[21px] flex items-center gap-[9px]">
        <PillBadge>{post.category}</PillBadge>
        <span className="text-[13px] text-graphite">{post.readingTime}</span>
      </div>

      <h1 className="mt-[14px] font-serif text-[36px] font-light leading-[1.12] tracking-[-0.02em] text-forest-ink md:text-[46px]">
        {post.title}
      </h1>

      <div className="relative mt-[28px] aspect-[16/9] w-full overflow-hidden rounded-[14px] bg-linen">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 760px) 760px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-[35px] flex flex-col gap-[21px]">
        {post.body.map((para, i) => (
          <p key={i} className="text-[18px] leading-[1.65] text-charcoal">
            {para}
          </p>
        ))}
      </div>

      <p className="mt-[35px] rounded-[14px] bg-linen p-[21px] text-[14px] leading-[1.6] text-graphite">
        This article is for general information and is not a substitute for personalised medical
        advice. Please consult a qualified surgeon about your specific condition.
      </p>

      <div className="mt-[42px]">
        <ConditionCTA message="Have a question about your care?" />
      </div>
    </article>
  );
}
