import type { Metadata } from "next";
import teamData from "@/data/team.json";
import type { TeamMember } from "@/types";
import SectionTitle from "@/components/ui/SectionTitle";
import TeamCard from "@/components/ui/TeamCard";
import CTA from "@/components/sections/CTA";

const team = teamData as TeamMember[];

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet our stylists, makeup artists, hair experts, and skin specialists.",
};

export default function TeamPage() {
  return (
    <div className="bg-background">
      <div className="pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-content px-6">
          <SectionTitle
            eyebrow="Our Team"
            title="Stylists, artists, and specialists"
            description="Every specialist on our floor trains across at least one adjacent craft, so your hair, skin, and makeup teams are always in sync."
            align="center"
            className="mx-auto"
          />
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {team.map((member, i) => (
              <TeamCard key={member.id} member={member} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
}
