import type { Metadata } from "next";
import Image from "next/image";
import { Award, Target, Eye, Sparkles } from "lucide-react";
import { theme } from "@/config/theme";
import teamData from "@/data/team.json";
import type { TeamMember } from "@/types";
import SectionTitle from "@/components/ui/SectionTitle";
import TeamCard from "@/components/ui/TeamCard";
import Reveal from "@/components/ui/Reveal";
import IndexTag from "@/components/ui/IndexTag";
import Button from "@/components/ui/Button";

const team = teamData as TeamMember[];

export const metadata: Metadata = {
  title: "About Us",
  description: `The story, mission, and team behind ${theme.salonName}.`,
};

const TIMELINE = [
  { year: "2011", title: "One chair, one client at a time", description: "Opened inside a shared studio with a single styling chair and a waitlist built entirely by word of mouth." },
  { year: "2015", title: "First dedicated studio", description: "Moved into our own space on Bellevue Avenue, adding skin and makeup services alongside hair." },
  { year: "2019", title: "Bridal program launched", description: "Built a dedicated bridal team after demand for full wedding-day packages outgrew informal referrals." },
  { year: "2024", title: "Capitol Hill studio opens", description: "Opened a second location to bring the same studio experience closer to more of the city." },
];

const ACHIEVEMENTS = [
  { icon: Award, label: "Best Bridal Studio", detail: "Seattle Beauty Awards, 2023 & 2024" },
  { icon: Sparkles, label: "600+ Customers satisfied", detail: "Across Karachi" },
  { icon: Target, label: "12 Resident Specialists", detail: "Across hair, skin, makeup, and spa" },
];

export default function AboutPage() {
  return (
    <div className="bg-background pb-24 pt-36 md:pb-32 md:pt-44">
      {/* Our Story */}
      <section className="mx-auto grid max-w-content grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <IndexTag code="AB" label="About Us" />
          <h1 className="mt-6 font-heading text-4xl italic leading-tight text-ink md:text-5xl">
            A studio built on one idea: slow down, get it right.
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-muted">
            {theme.salonName} began as a single chair and a conviction that
            most beauty appointments move too fast to actually listen. Today
            we're a full team across hair, skin, and makeup — but every
            appointment still opens with a real conversation before a single
            tool touches your hair or skin.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-6">
          <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-salon shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1522336284037-91f7da073525?q=80&w=1200&auto=format&fit=crop"
              alt="Founder consulting with a client"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Mission / Vision / Philosophy */}
      <section className="mx-auto mt-28 max-w-content px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { icon: Target, title: "Mission", body: "To make every client feel genuinely seen — not processed — in the chair, every single visit." },
            { icon: Eye, title: "Vision", body: "To be the studio Seattle trusts first for anything from a weekly blowout to a full wedding week." },
            { icon: Sparkles, title: "Philosophy", body: "Craft first, trends second. We'll always tell you what actually suits you over what's simply popular." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 120} className="rounded-salon bg-surface p-8 shadow-card">
              <item.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-5 font-heading text-xl text-ink">{item.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto mt-28 grid max-w-content grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        <Reveal className="order-2 lg:order-1 lg:col-span-7">
          <p className="eyebrow">Founder</p>
          <h2 className="mt-4 font-heading text-3xl italic text-ink md:text-4xl">
            {team[0]?.name ?? "Our Founder"}
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-muted">
            After more than a decade behind the chair, our founder built{" "}
            {theme.salonName} around a simple standard: every client leaves
            with a clear answer to "why did we do it this way." That
            standard now runs through every specialist on our floor.
          </p>
          <Button href="/team" variant="outline" className="mt-8">
            Meet the Full Team
          </Button>
        </Reveal>
        <Reveal className="order-1 lg:order-2 lg:col-span-5">
          <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-salon shadow-soft">
            <Image src={team[0]?.image ?? ""} alt={team[0]?.name ?? "Founder"} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
          </div>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="mx-auto mt-28 max-w-content px-6">
        <SectionTitle eyebrow="Our Journey" title="Fifteen years, four milestones" align="center" className="mx-auto" />
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-4">
          {TIMELINE.map((event, i) => (
            <Reveal key={event.year} delay={i * 120} className="relative border-t-2 border-accent pt-6">
              <p className="font-heading text-2xl italic text-primary">{event.year}</p>
              <h3 className="mt-3 font-heading text-lg text-ink">{event.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">{event.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Achievements / Awards */}
      <section className="mx-auto mt-28 max-w-content px-6">
        <div className="grid grid-cols-1 gap-8 rounded-salon bg-ink p-12 md:grid-cols-3">
          {ACHIEVEMENTS.map((item, i) => (
            <Reveal key={item.label} delay={i * 120} className="text-center">
              <item.icon className="mx-auto h-7 w-7 text-accent" />
              <p className="mt-4 font-heading text-xl text-background">{item.label}</p>
              <p className="mt-1 font-body text-xs text-secondary/70">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Clients Love Us */}
      <section className="mx-auto mt-28 max-w-content px-6">
        <SectionTitle
          eyebrow="Why Clients Love Us"
          title="It's rarely just about the result"
          description="Clients tell us it's the pace, the honesty about what will and won't work, and never feeling like one of ten appointments booked in the same hour."
          align="center"
          className="mx-auto"
        />
      </section>

      {/* Our Team */}
      <section className="mx-auto mt-28 max-w-content px-6">
        <SectionTitle eyebrow="Our Team" title="The specialists behind the work" align="center" className="mx-auto" />
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} delay={i * 100} />
          ))}
        </div>
      </section>
    </div>
  );
}
