import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/common/page-hero";
import { Section, Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/common/motion";
import { CTASection } from "@/components/common/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck2, FileText, Phone, Stethoscope } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Referrals",
  description:
    "Refer a patient to the consultant teams at the Transatlantic Teaching Hospital — a fast, secure referral pathway.",
  path: "/teaching-hospital/referrals",
});

const steps = [
  { title: "Referral Decision", description: "You decide the patient needs specialist care. Call our referral line to check capacity and urgency." },
  { title: "Send the Referral", description: "Submit the referral form with relevant history, examination findings, and investigation results." },
  { title: "Triage & Acknowledgment", description: "Our consultants triage every referral and acknowledge within four working hours." },
  { title: "Appointment & Report", description: "We schedule the patient, manage their care, and send you a full consultation report." },
];

const channels = [
  { Icon: Phone, title: "Referral Line", detail: "+234 (0) 900 000 0111, option 3", note: "Lines open 24/7 for emergencies" },
  { Icon: FileText, title: "Email Referrals", detail: "referrals@tau.edu.ng", note: "Accepted for non-urgent referrals" },
  { Icon: FileCheck2, title: "Online Form", detail: "Use the portal below", note: "Track status in real time" },
];

export default function ReferralsPage() {
  return (
    <>
      <PageHero image="/images/placeholders/hero-medical-building.jpg"
        eyebrow="Teaching Hospital"
        title="Referral Services"
        description="A fast, respectful pathway for clinicians referring patients to our consultant teams."
        crumbs={[{ label: "Teaching Hospital", href: "/teaching-hospital" }, { label: "Referrals" }]}
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="For Healthcare Professionals"
            title="How Referrals Work"
            description="Four simple steps from your clinic to our consultants — and back to you."
          />
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {steps.map(({ title, description }, index) => (
              <StaggerItem key={title}>
                <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-medical font-display text-lg font-extrabold text-white">
                        {index + 1}
                      </span>
                      <h3 className="font-display text-lg font-bold">{title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-14">
            <SectionHeader
              eyebrow="Referral Channels"
              title="How to Send a Referral"
              description="Choose whichever channel suits the urgency of your case."
            />
            <StaggerContainer className="grid gap-6 md:grid-cols-3">
              {channels.map(({ Icon, title, detail, note }) => (
                <StaggerItem key={title}>
                  <div className="h-full rounded-2xl border border-border bg-card p-7 text-center">
                    <span className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-medical to-navy text-white">
                      <Icon className="size-7" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-base font-bold">{title}</h3>
                    <p className="mt-2 text-sm font-semibold text-medical">{detail}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{note}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <Reveal className="mt-12">
            <div className="rounded-3xl bg-gradient-to-br from-navy to-medical p-8 text-white sm:p-10">
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold">
                    <Stethoscope className="size-4" aria-hidden="true" />
                    Referring Clinicians
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-extrabold">Need a Second Opinion or Admission?</h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75">
                    Our consultants accept second-opinion requests and emergency admissions directly by phone,
                    day or night.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground transition-all hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Contact the Referral Office
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        title="Our Consultants Await Your Referral"
        description="Trust your patients to a team that will keep you informed at every step."
        primary={{ label: "Find a Doctor", href: "/teaching-hospital/find-a-doctor" }}
        secondary={{ label: "Patient Care", href: "/teaching-hospital/patient-care" }}
      />
    </>
  );
}
