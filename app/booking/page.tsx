import type { Metadata } from "next";
import { Suspense } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import BookingForm from "@/components/sections/BookingForm";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Book your hair, skin, makeup, or bridal appointment online in a couple of minutes.",
};

export default function BookingPage() {
  return (
    <div className="bg-background pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle
          eyebrow="Book Appointment"
          title="Reserve your visit"
          description="Tell us what you're after and when works — we'll confirm the details before your appointment."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14">
          <Suspense fallback={null}>
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
