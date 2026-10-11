import teamData from "@/data/team.json";
import type { TeamMember } from "@/types";
import SectionTitle from "@/components/ui/SectionTitle";
import TeamCard from "@/components/ui/TeamCard";
import Button from "@/components/ui/Button";

const team = teamData as TeamMember[];

export default function MeetExperts() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionTitle
          eyebrow="Our Team"
          title="Meet the Specialists"
          description="Every artist on our floor trains across at least one adjacent craft, so your hair, skin, and makeup teams are always talking to each other."
          align="center"
          className="mx-auto"
        />
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} delay={i * 100} />
          ))}
        </div>
        <div className="mt-14 text-center">
          <Button href="/team" variant="outline">
            Meet the Full Team
          </Button>
        </div>
      </div>
    </section>
  );
}
