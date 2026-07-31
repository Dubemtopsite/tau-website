import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/common/page-hero";
import { Section, Container } from "@/components/common/container";
import { CTASection } from "@/components/common/cta-section";
import { FindDoctorClient } from "@/components/sections/find-doctor-client";

export const metadata: Metadata = generatePageMetadata({
  title: "Find a Doctor",
  description:
    "Search our consultants and specialists at the Transatlantic Teaching Hospital by name or speciality.",
  path: "/teaching-hospital/find-a-doctor",
});

export default function FindDoctorPage() {
  return (
    <>
      <PageHero
        eyebrow="Teaching Hospital"
        title="Find a Doctor"
        description="Search our consultant physicians and surgeons by name, title, or speciality."
        crumbs={[{ label: "Teaching Hospital", href: "/teaching-hospital" }, { label: "Find a Doctor" }]}
      />

      <Section>
        <Container>
          <FindDoctorClient />
        </Container>
      </Section>

      <CTASection
        title="Need Help Choosing?"
        description="Not sure which specialist you need? Call our switchboard for guidance."
        primary={{ label: "Patient Care Information", href: "/teaching-hospital/patient-care" }}
        secondary={{ label: "Make a Referral", href: "/teaching-hospital/referrals" }}
      />
    </>
  );
}
