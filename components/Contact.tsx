import Link from "next/link";
import { profile } from "@/lib/data";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    handle: profile.email,
  },
  {
    label: "LinkedIn",
    value: "Tiara Annisaa",
    href: profile.socials.linkedin,
    handle: "/in/tiaraannisaa",
  },
  {
    label: "Instagram",
    value: "@tiarannsaa",
    href: profile.socials.instagram,
    handle: "@tiarannsaa",
  },
  {
    label: "Threads",
    value: "@tiarannsaa",
    href: profile.socials.threads,
    handle: "@tiarannsaa",
  },
];

export function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-maroon via-maroon-dark to-ink"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-rose-soft/10 blur-3xl"
      />

      <div className="container-page relative">
        <div className="max-w-3xl">
          <span className="eyebrow text-rose-soft">Contact</span>
          <h2 className="heading-section mt-4 text-paper">
            Let&apos;s build something{" "}
            <span className="italic text-rose-soft">meaningful</span> together.
          </h2>
          <p className="mt-6 text-lg text-paper/75 leading-relaxed">
            Open to strategic advisory, transformation engagements, and speaking
            invitations. Reach out via the channels below — I&apos;d love to
            hear from you.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/10">
          {channels.map((c) => (
            <li key={c.label}>
              <Link
                href={c.href}
                target={c.label === "Email" ? undefined : "_blank"}
                className="group flex items-center justify-between bg-maroon-dark p-8 hover:bg-ink transition"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-rose-soft">
                    {c.label}
                  </p>
                  <p className="font-serif text-2xl text-paper mt-2">
                    {c.value}
                  </p>
                  <p className="text-sm text-paper/50 mt-1">{c.handle}</p>
                </div>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-paper/40 group-hover:text-rose-soft group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                >
                  <path
                    d="M7 17L17 7M7 7h10v10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
