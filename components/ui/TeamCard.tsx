import Image from "next/image";
import { Instagram, Facebook, Music2 } from "lucide-react";
import type { TeamMember } from "@/types";
import Reveal from "./Reveal";

export default function TeamCard({ member, delay = 0 }: { member: TeamMember; delay?: number }) {
  return (
    <Reveal delay={delay} className="group text-center">
      <div className="img-zoom relative mx-auto aspect-[3/4] w-full overflow-hidden rounded-salon shadow-card">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-3 bg-gradient-to-t from-ink/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {member.social.instagram && (
            <a href={member.social.instagram} aria-label={`${member.name} on Instagram`} className="rounded-full bg-background/90 p-2 text-ink">
              <Instagram className="h-4 w-4" />
            </a>
          )}
          {member.social.facebook && (
            <a href={member.social.facebook} aria-label={`${member.name} on Facebook`} className="rounded-full bg-background/90 p-2 text-ink">
              <Facebook className="h-4 w-4" />
            </a>
          )}
          {member.social.tiktok && (
            <a href={member.social.tiktok} aria-label={`${member.name} on TikTok`} className="rounded-full bg-background/90 p-2 text-ink">
              <Music2 className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
      <h3 className="mt-5 font-heading text-lg text-ink">{member.name}</h3>
      <p className="font-body text-sm text-primary">{member.role}</p>
      <p className="mt-1 font-body text-xs text-muted">
        {member.specialization} · {member.experience}
      </p>
    </Reveal>
  );
}
