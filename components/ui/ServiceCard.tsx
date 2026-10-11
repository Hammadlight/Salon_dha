import Image from "next/image";
import { Clock } from "lucide-react";
import type { Service } from "@/types";
import Button from "./Button";
import IndexTag from "./IndexTag";
import Reveal from "./Reveal";

export default function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal delay={delay} className="group flex h-full flex-col overflow-hidden rounded-salon bg-surface shadow-card">
      <div className="img-zoom relative h-56 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute left-4 top-4">
          <IndexTag code={service.code} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-heading text-xl text-ink">{service.name}</h3>
        <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-muted">
          {service.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-line pt-5">
          <div>
            <p className="font-heading text-2xl text-primary">${service.price}</p>
            <p className="mt-1 flex items-center gap-1 text-xs text-muted">
              <Clock className="h-3.5 w-3.5" /> {service.duration}
            </p>
          </div>
          <Button href={`/booking?service=${service.id}`} size="sm">
            Book
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
