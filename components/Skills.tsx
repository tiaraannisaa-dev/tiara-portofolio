import { skills, certifications } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Expertise</span>
          <h2 className="heading-section mt-4">
            Skills that move the <span className="italic text-maroon">needle</span>.
          </h2>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed">
            A toolkit honed across SOEs, telcos, consulting, private companies,
            and NGOs — built to translate strategy into measurable change.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li key={skill}>
              <span className="chip">{skill}</span>
            </li>
          ))}
        </ul>

        {certifications.length > 0 && (
          <div className="mt-16 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 border-t border-ink/10 pt-8">
            <p className="text-xs uppercase tracking-widest text-ink/50">
              Certifications
            </p>
            <ul className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="inline-flex items-center gap-2 text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-maroon" />
                  <span className="font-medium">{cert.name}</span>
                  {cert.issuer && (
                    <span className="text-ink/50">— {cert.issuer}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
