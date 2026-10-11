import { Sparkles, HeartHandshake, Leaf, Award } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

const POINTS = [
  {
    icon: Sparkles,
    title: "Considered Craft",
    description: "Every look is planned in consultation first — never a rushed, off-the-shelf service.",
  },
  {
    icon: HeartHandshake,
    title: "One Artist, Start to Finish",
    description: "You keep the same specialist across trial and appointment, so nothing gets lost in translation.",
  },
  {
    icon: Leaf,
    title: "Clean, Considered Products",
    description: "We work with fragrance-free and hypoallergenic lines for sensitive skin on request.",
  },
  {
    icon: Award,
    title: "Fifteen Years in Seattle",
    description: "A studio built on returning clients — most of our calendar comes from referrals.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionTitle
          eyebrow="Why Clients Choose Us"
          title="Detail is the whole difference."
          align="center"
          className="mx-auto"
        />
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 100} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-card">
                <point.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 font-heading text-lg text-ink">{point.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                {point.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
