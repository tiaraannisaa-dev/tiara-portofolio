import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { getArticleBySlug } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: `${article.title} — Tiara Annisaa`,
    description: article.excerpt,
  };
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-serif text-3xl mt-12 mb-4 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif text-2xl mt-10 mb-3 leading-tight">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-maroon pl-6 my-8 italic font-serif text-xl text-ink/80">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-lg leading-relaxed text-ink/80 my-5">{children}</p>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-maroon underline underline-offset-2 hover:text-maroon-dark"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="my-10">
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-cream">
          <Image
            src={urlForImage(value).width(1600).url()}
            alt={value.alt || ""}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>
        {value.alt && (
          <figcaption className="text-center text-sm text-ink/50 mt-3">
            {value.alt}
          </figcaption>
        )}
      </figure>
    ),
  },
};

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const cover = article.coverImage
    ? urlForImage(article.coverImage).width(1600).height(900).url()
    : null;

  return (
    <article className="pt-32 pb-24">
      <div className="container-page max-w-3xl">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-ink/60 hover:text-maroon transition"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 12H5M12 19l-7-7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All articles
        </Link>

        <header className="mt-10">
          <div className="flex items-center gap-2 text-xs text-ink/50">
            {article.category && (
              <span className="uppercase tracking-widest text-maroon">
                {article.category}
              </span>
            )}
            {article.category && <span>·</span>}
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            {article.readingTime && (
              <>
                <span>·</span>
                <span>{article.readingTime} min read</span>
              </>
            )}
          </div>
          <h1 className="heading-display mt-4">{article.title}</h1>
          <p className="mt-6 text-xl text-ink/70 leading-relaxed">
            {article.excerpt}
          </p>
        </header>

        {cover && (
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-cream mt-12">
            <Image
              src={cover}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
          </div>
        )}

        <div className="mt-12">
          {article.body && (
            <PortableText value={article.body} components={components} />
          )}
        </div>
      </div>
    </article>
  );
}
