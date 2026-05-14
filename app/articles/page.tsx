import { ArticleCard } from "@/components/ArticlesPreview";
import { getArticles } from "@/sanity/lib/fetch";

export const metadata = {
  title: "Articles — Tiara Annisaa",
  description:
    "Reflections on strategy, transformation, leadership, and leading change.",
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <section className="pt-32 pb-24">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Writing</span>
          <h1 className="heading-display mt-6">
            Articles & <span className="italic text-maroon">reflections</span>.
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed">
            Notes from the field — strategy, transformation, leadership, and
            the messy reality of leading change.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="mt-20 rounded-3xl border border-dashed border-ink/15 bg-cream p-12 text-center">
            <p className="font-serif text-xl">No articles yet</p>
            <p className="mt-2 text-sm text-ink/60">
              New writing will appear here once published from the CMS.
            </p>
          </div>
        ) : (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
