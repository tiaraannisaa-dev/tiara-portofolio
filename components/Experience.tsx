import Image from "next/image";
import Link from "next/link";
import {
  projects as fallbackProjects,
  speakings as fallbackSpeakings,
} from "@/lib/data";
import type { Project, Speaking } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  cmsProjects: Project[];
  cmsSpeakings: Speaking[];
};

export function Experience({ cmsProjects, cmsSpeakings }: Props) {
  const projects =
    cmsProjects.length > 0
      ? cmsProjects.map((p) => ({
          key: p._id,
          client: p.client,
          description: p.description,
          industry: p.industry,
          year: p.year,
          confidential: p.confidential,
          logo: p.logo,
        }))
      : fallbackProjects.map((p, i) => ({
          key: `static-${i}`,
          client: p.client,
          description: p.description,
          industry: p.industry,
          year: undefined,
          confidential: p.confidential,
          logo: undefined,
        }));

  const speakings =
    cmsSpeakings.length > 0
      ? cmsSpeakings.map((s) => ({
          key: s._id,
          org: s.org,
          topic: s.topic,
          year: s.year,
          link: s.link,
          logo: s.logo,
        }))
      : fallbackSpeakings.map((s, i) => ({
          key: `static-${i}`,
          org: s.org,
          topic: s.topic,
          year: undefined,
          link: undefined,
          logo: undefined,
        }));

  return (
    <section id="experience" className="section bg-cream">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Experience</span>
          <h2 className="heading-section mt-4">
            Selected <span className="italic text-maroon">work</span> &
            engagements.
          </h2>
        </div>

        {/* Strategy & Transformation Projects */}
        <div className="mt-16">
          <div className="flex items-baseline justify-between mb-8 border-b border-ink/10 pb-4">
            <h3 className="font-serif text-2xl">
              Strategy & Transformation Projects
            </h3>
            <span className="text-sm text-ink/50">
              {projects.length} engagements
            </span>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
            {projects.map((p) => {
              const logoUrl = p.logo
                ? urlForImage(p.logo).width(120).height(120).url()
                : null;
              return (
                <li
                  key={p.key}
                  className="bg-cream p-8 group hover:bg-paper transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-paper border border-ink/10 flex items-center justify-center overflow-hidden group-hover:border-maroon transition">
                      {p.confidential ? (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-ink/40 group-hover:text-maroon transition"
                        >
                          <path
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4h8z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      ) : logoUrl ? (
                        <Image
                          src={logoUrl}
                          alt={`${p.client} logo`}
                          width={56}
                          height={56}
                          className="object-contain p-2"
                        />
                      ) : (
                        <span className="font-serif text-lg text-ink/70 group-hover:text-maroon transition">
                          {p.client.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-medium text-lg">{p.client}</h4>
                        {p.confidential && (
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-soft text-maroon">
                            Confidential
                          </span>
                        )}
                      </div>
                      {(p.industry || p.year) && (
                        <p className="text-xs text-ink/50 mt-0.5">
                          {[p.industry, p.year].filter(Boolean).join(" · ")}
                        </p>
                      )}
                      <p className="mt-3 text-ink/70 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Speaking Engagements */}
        <div className="mt-20">
          <div className="flex items-baseline justify-between mb-8 border-b border-ink/10 pb-4">
            <h3 className="font-serif text-2xl">Speaking Engagements</h3>
            <span className="text-sm text-ink/50">
              {speakings.length} sessions
            </span>
          </div>

          <ul className="space-y-4">
            {speakings.map((s, i) => {
              const logoUrl = s.logo
                ? urlForImage(s.logo).width(80).height(80).url()
                : null;
              const Wrapper = s.link ? Link : "div";
              const wrapperProps = s.link
                ? { href: s.link, target: "_blank" as const }
                : {};
              return (
                <li key={s.key}>
                  <Wrapper
                    {...(wrapperProps as any)}
                    className="group flex items-start gap-6 p-6 rounded-2xl bg-paper border border-ink/5 hover:border-maroon transition"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {logoUrl ? (
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full overflow-hidden bg-cream border border-ink/5">
                          <Image
                            src={logoUrl}
                            alt={`${s.org} logo`}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </span>
                      ) : (
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-soft text-maroon font-serif text-sm">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">
                        {s.org}
                        {s.year && (
                          <span className="text-ink/40 font-normal text-sm ml-2">
                            · {s.year}
                          </span>
                        )}
                      </p>
                      <p className="mt-1 text-ink/70">{s.topic}</p>
                    </div>
                    {s.link && (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="flex-shrink-0 text-ink/30 group-hover:text-maroon transition mt-1"
                      >
                        <path
                          d="M7 17L17 7M7 7h10v10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </Wrapper>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
