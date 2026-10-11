import Image from "next/image";
import { Instagram } from "lucide-react";
import galleryData from "@/data/gallery.json";
import type { GalleryItem } from "@/types";
import { theme } from "@/config/theme";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

const gallery = galleryData as GalleryItem[];

export default function InstagramFeed() {
  const posts = gallery.slice(0, 6);

  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionTitle
          eyebrow="Follow Along"
          title={`@${theme.salonName.toLowerCase().replace(/[^a-z0-9]/g, "")} on Instagram`}
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-3 gap-3 md:grid-cols-6">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 80}>
              <a
                href={theme.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="img-zoom group relative block aspect-square overflow-hidden rounded-2xl"
              >
                <Image src={post.image} alt={post.caption} fill sizes="200px" className="object-cover" />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/40">
                  <Instagram className="h-5 w-5 text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
