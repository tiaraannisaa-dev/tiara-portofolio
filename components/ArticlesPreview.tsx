import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";

export function ArticlesPreview({ articles }: { articles: Article[] }) {
  const top = articles.slice(0, 3);

  return (
    <section id="articles-preview" className="section bg-cream">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">Writing</span>
            <h2 className="heading-section mt-4">
              Latest <span className="italic text-maroon">articles</span>.
            </h2>
            <p className="mt-6 text-ink/70 leading-relaxed">
              Reflections on strategy, transformation, leadership, and the
              messy reality of leading change.
            </p>
          </div>
          <Link href="/articles" className="btn-ghost">
            View all
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {top.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-ink/15 bg-paper p-12 text-center">
            <p className="font-serif text-xl">First article coming soon</p>
            <p className="mt-2 text-sm text-ink/60">
              New writing will appear here once published from the CMS.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {top.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  const cover = article.coverImage
    ? urlForImage(article.coverImage).width(800).height(500).url()
    : null;

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col rounded-2xl bg-paper border border-ink/5 overflow-hidden hover:border-maroon transition"
    >
      <div className="relative aspect-[16/10] bg-gradient-to-br from-rose-soft to-rose-mist">
        {cover && (
          <Image
            src={cover}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
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
              month: "short",
              year: "numeric",
            })}
          </time>
          {article.readingTime && (
            <>
              <span>·</span>
              <span>{article.readingTime} min</span>
            </>
          )}
        </div>
        <h3 className="font-serif text-xl mt-3 leading-snug group-hover:text-maroon transition">
          {article.title}
        </h3>
        <p className="mt-3 text-sm text-ink/70 leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm text-maroon">
          Read more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
