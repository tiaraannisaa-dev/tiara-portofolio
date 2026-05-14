import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="container-page py-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div>
          <p className="font-serif text-xl">{profile.name}</p>
          <p className="text-sm text-ink/60 mt-1">{profile.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70">
          <Link href={profile.socials.linkedin} target="_blank" className="hover:text-maroon">
            LinkedIn
          </Link>
          <Link href={profile.socials.instagram} target="_blank" className="hover:text-maroon">
            Instagram
          </Link>
          <Link href={profile.socials.threads} target="_blank" className="hover:text-maroon">
            Threads
          </Link>
          <a href={`mailto:${profile.email}`} className="hover:text-maroon">
            Email
          </a>
        </div>
      </div>
      <div className="border-t border-ink/5">
        <div className="container-page py-4 text-xs text-ink/50 flex justify-between">
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
