import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Books } from "@/components/Books";
import { ArticlesPreview } from "@/components/ArticlesPreview";
import { Contact } from "@/components/Contact";
import {
  getArticles,
  getBooks,
  getProjects,
  getSpeakings,
} from "@/sanity/lib/fetch";

export default async function HomePage() {
  const [projects, speakings, books, articles] = await Promise.all([
    getProjects(),
    getSpeakings(),
    getBooks(),
    getArticles(),
  ]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience cmsProjects={projects} cmsSpeakings={speakings} />
      <Books books={books} />
      <ArticlesPreview articles={articles} />
      <Contact />
    </>
  );
}
