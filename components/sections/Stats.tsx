import Reveal from "@/components/ui/Reveal";

const STATS = [
  { value: "15+", label: "Years in Seattle" },
  { value: "8,400+", label: "Appointments Completed" },
  { value: "12", label: "Resident Specialists" },
  { value: "4.9", label: "Average Client Rating" },
];

export default function Stats() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-10 px-6 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100} className="text-center">
            <p className="font-heading text-4xl italic text-background md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 font-body text-xs uppercase tracking-eyebrow text-secondary">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
