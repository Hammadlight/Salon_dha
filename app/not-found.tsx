import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-6 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-heading text-4xl italic text-ink md:text-5xl">
        This page stepped out.
      </h1>
      <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-muted">
        The page you're looking for may have moved. Let's get you back to
        somewhere useful.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Back to Home</Button>
        <Link href="/booking" className="font-body text-sm text-primary underline underline-offset-4">
          Book an appointment
        </Link>
      </div>
    </div>
  );
}
