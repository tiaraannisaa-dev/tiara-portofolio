"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-rose-soft blur-3xl opacity-60"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-rose-mist blur-3xl opacity-50"
      />

      <div className="container-page relative grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:col-span-7"
        >
          <span className="eyebrow">
            Strategy · CEO Office · Digital Transformation
          </span>
          <h1 className="heading-display mt-6">
            Leading Cross-Functional{" "}
            <span className="italic text-maroon">Change</span>
            <br />
            from <span className="italic text-maroon">Design</span> to{" "}
            <span className="italic text-maroon">Execution</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-ink/70 leading-relaxed">
            Hi, I&apos;m{" "}
            <span className="font-medium text-ink">{profile.name}</span> — a
            management & transformation professional helping leaders turn
            complex strategy into measurable execution.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Let&apos;s connect
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#experience" className="btn-ghost">
              View experience
            </a>
          </div>

          <div className="mt-14 flex items-center gap-8 text-sm text-ink/60">
            <div>
              <p className="font-serif text-3xl text-ink">
                {new Date().getFullYear() - profile.yearStarted}+
              </p>
              <p className="mt-1">years experience</p>
            </div>
            <div className="h-10 w-px bg-ink/10" />
            <div>
              <p className="font-serif text-3xl text-ink">9</p>
              <p className="mt-1">projects & engagements</p>
            </div>
            <div className="h-10 w-px bg-ink/10" />
            <div>
              <p className="font-serif text-3xl text-ink">5+</p>
              <p className="mt-1">industries</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-maroon to-rose-mist opacity-90" />
            <div className="absolute inset-0 rounded-[1.75rem] overflow-hidden bg-cream translate-x-3 translate-y-3 shadow-2xl">
              {!imgError ? (
                <Image
                  src="/tiara.jpg"
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover grayscale hover:grayscale-0 transition duration-700"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose-soft via-rose-mist to-maroon/30">
                  <div className="text-center px-6">
                    <p className="font-serif text-7xl md:text-8xl text-maroon">
                      TA
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-widest text-ink/60">
                      Add /public/tiara.jpg
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="absolute -bottom-4 -left-4 bg-paper rounded-2xl shadow-xl p-4 max-w-[200px] border border-ink/5">
              <p className="text-xs uppercase tracking-widest text-maroon">
                Based in
              </p>
              <p className="text-sm mt-1 font-medium">South Tangerang, ID</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
