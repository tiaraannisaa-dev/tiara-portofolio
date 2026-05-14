import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section bg-cream">
      <div className="container-page grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <span className="eyebrow">About</span>
          <h2 className="heading-section mt-4">
            From <span className="italic text-maroon">strategy</span> to
            <br /> execution.
          </h2>
        </div>
        <div className="md:col-span-8 max-w-prose">
          {profile.bio.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="text-lg leading-relaxed text-ink/80 mb-5 last:mb-0"
            >
              {para}
            </p>
          ))}
          <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
            <div className="border-l-2 border-maroon pl-4">
              <p className="text-xs uppercase tracking-widest text-ink/50">Role</p>
              <p className="font-medium mt-1">Strategy & Transformation</p>
            </div>
            <div className="border-l-2 border-maroon pl-4">
              <p className="text-xs uppercase tracking-widest text-ink/50">Since</p>
              <p className="font-medium mt-1">{profile.yearStarted}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
