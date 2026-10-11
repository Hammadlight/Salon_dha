import type { Metadata } from "next";
import Image from "next/image";
import blogData from "@/data/blog.json";
import type { BlogPost } from "@/types";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

const posts = blogData as BlogPost[];

export const metadata: Metadata = {
  title: "Journal",
  description: "Beauty tips, hair care advice, bridal guidance, and trending makeup looks from our specialists.",
};

export default function BlogPage() {
  return (
    <div className="bg-background pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="mx-auto max-w-content px-6">
        <SectionTitle
          eyebrow="The Journal"
          title="Beauty tips & guidance"
          description="Hair care, bridal advice, skin care, and the trends our artists are actually seeing in the chair."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post.id} id={post.id} delay={i * 100} className="group flex scroll-mt-32 flex-col overflow-hidden rounded-salon bg-surface shadow-card md:flex-row">
              <div className="img-zoom relative h-56 w-full overflow-hidden md:h-auto md:w-2/5">
                <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="eyebrow">{post.category}</p>
                <h3 className="mt-3 font-heading text-xl text-ink">{post.title}</h3>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <p className="mt-4 font-body text-xs text-muted/70">
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
