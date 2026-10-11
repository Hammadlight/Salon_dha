import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blog.json";
import type { BlogPost } from "@/types";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const posts = blogData as BlogPost[];

export default function LatestTrends() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="From the Journal"
            title="Latest Beauty Trends"
            description="Notes from our stylists and artists on what's working right now."
          />
          <Button href="/blog" variant="ghost">
            Visit the Journal
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post.id} delay={i * 120}>
              <Link href={`/blog#${post.id}`} className="group block">
                <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-salon shadow-card">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <p className="eyebrow mt-5">{post.category}</p>
                <h3 className="mt-2 font-heading text-xl text-ink transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
