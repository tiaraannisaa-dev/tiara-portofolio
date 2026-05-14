"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Book } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";

export function Books({ books }: { books: Book[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-book-card]");
    const delta = (card?.offsetWidth || 320) + 24;
    el.scrollBy({
      left: dir === "left" ? -delta : delta,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-book-card]");
    const w = (card?.offsetWidth || 320) + 24;
    setActiveIndex(Math.round(el.scrollLeft / w));
  };

  return (
    <section id="books" className="section">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="eyebrow">Reading List</span>
            <h2 className="heading-section mt-4">
              Books that shaped how I{" "}
              <span className="italic text-maroon">think</span>.
            </h2>
            <p className="mt-6 text-ink/70 leading-relaxed">
              A curated shelf of ideas — and the insights I&apos;m carrying with
              me from each.
            </p>
          </div>

          {books.length > 0 && (
            <div className="flex gap-2">
              <button
                aria-label="Previous book"
                onClick={() => scrollBy("left")}
                className="h-11 w-11 rounded-full border border-ink/15 hover:border-maroon hover:text-maroon transition flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                aria-label="Next book"
                onClick={() => scrollBy("right")}
                className="h-11 w-11 rounded-full border border-ink/15 hover:border-maroon hover:text-maroon transition flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {books.length === 0 ? (
          <EmptyBooks />
        ) : (
          <>
            <div
              ref={scrollerRef}
              onScroll={handleScroll}
              className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:-mx-10 md:px-10"
            >
              {books.map((book, i) => (
                <BookCard key={book._id} book={book} index={i} />
              ))}
            </div>

            <div className="mt-6 flex justify-center gap-1.5">
              {books.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all ${
                    i === activeIndex ? "w-8 bg-maroon" : "w-1.5 bg-ink/20"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function BookCard({ book, index }: { book: Book; index: number }) {
  const coverUrl = book.cover
    ? urlForImage(book.cover).width(600).height(900).url()
    : null;

  return (
    <motion.article
      data-book-card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="snap-start flex-shrink-0 w-[280px] md:w-[340px] group"
    >
      <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden bg-gradient-to-br from-rose-mist to-maroon/30 border border-ink/5 shadow-sm group-hover:shadow-xl transition">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={book.title}
            fill
            sizes="(max-width: 768px) 280px, 340px"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <p className="font-serif text-2xl text-maroon">{book.title}</p>
          </div>
        )}
        {book.category && (
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-paper/95 backdrop-blur text-maroon">
            {book.category}
          </span>
        )}
      </div>

      <div className="mt-5">
        <h3 className="font-serif text-xl leading-tight">{book.title}</h3>
        <p className="text-sm text-ink/60 mt-1">by {book.author}</p>

        <ul className="mt-5 space-y-3">
          {book.insights.map((insight, i) => (
            <li key={i} className="flex gap-3 text-sm text-ink/75 leading-relaxed">
              <span className="flex-shrink-0 mt-2 h-1 w-1 rounded-full bg-maroon" />
              <span>{insight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function EmptyBooks() {
  return (
    <div className="rounded-3xl border border-dashed border-ink/15 bg-cream p-12 text-center">
      <div className="mx-auto h-12 w-12 rounded-full bg-rose-soft flex items-center justify-center mb-4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-maroon">
          <path
            d="M3 5a2 2 0 012-2h6v18H5a2 2 0 01-2-2V5zM21 5a2 2 0 00-2-2h-6v18h6a2 2 0 002-2V5z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <p className="font-serif text-xl">Bookshelf coming soon</p>
      <p className="mt-2 text-sm text-ink/60 max-w-md mx-auto">
        Books and insights will appear here once added via the Sanity CMS.
      </p>
    </div>
  );
}
