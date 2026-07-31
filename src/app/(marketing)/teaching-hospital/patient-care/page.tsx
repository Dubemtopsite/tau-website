import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/common/page-hero";
import { Section, Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/common/motion";
import { CTASection } from "@/components/common/cta-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BedDouble, FileText, ShieldCheck, Truck, Wallet } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Patient Care Information",
  description:
    "Everything you need to know about planning your care at the Transatlantic Teaching Hospital — admissions, insurance, visiting, and more.",
  path: "/teaching-hospital/patient-care",
});

const steps = [
  { title: "Book an Appointment", description: "Call, visit, or book online. New patients will be guided through registration and expected documents." },
  { title: "Registration & Records", description: "Present identification and any referral letters at the reception desk to open your electronic medical record." },
  { title: "Consultation & Tests", description: "Meet your consultant, undergo any investigations, and receive a clear care plan before you leave." },
  { title: "Admission or Follow-up", description: "If you need admission, our nurses will prepare your ward. Otherwise, book your follow-up at the desk." },
];

const services = [
  { Icon: Truck, title: "Ambulance & Transport", description: "24/7 ambulance services for emergencies and medically supervised transfers." },
  { Icon: ShieldCheck, title: "Insurance & HMO", description: "We accept major Nigerian HMOs and insurance schemes — confirm your coverage before treatment." },
  { Icon: Wallet, title: "Self-Pay & Plans", description: "Transparent billing with flexible payment plans for patients paying directly." },
  { Icon: BedDouble, title: "Inpatient & Visitors", description: "Ward visiting from 12:00 PM to 8:00 PM daily; ICU visits by arrangement with staff." },
  { Icon: FileText, title: "Medical Reports", description: "Request medical reports and records through Health Records within five working days." },
];

export default function PatientCarePage() {
  return (
    <>
      <PageHero image="/images/placeholders/medical-clinic.svg"
        eyebrow="Patient Care"
        title="Planning Your Care"
        description="Clear, honest information so you know exactly what to expect — from your first call to your last follow-up."
        crumbs={[{ label: "Teaching Hospital", href: "/teaching-hospital" }, { label: "Patient Care" }]}
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Your Visit"
            title="From First Call to Follow-Up"
            description="A simple, guided journey through our hospital."
          />
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {steps.map(({ title, description }, index) => (
              <StaggerItem key={title}>
                <div className="relative h-full rounded-3xl border border-border bg-card p-8">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-medical font-display text-lg font-extrabold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section className="bg-ice py-16 dark:bg-background sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Patient Services"
            title="Everything Else You Need to Know"
            description="Practical information for patients, families, and caregivers."
          />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10">
                  <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-medical/10 text-medical">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </StaggerItem>
            ))}
            <StaggerItem>
              <div className="flex h-full flex-col justify-center rounded-2xl bg-gradient-to-br from-navy to-medical p-7 text-white">
                <Badge variant="accent" className="mb-4 w-fit">Emergency</Badge>
                <h3 className="font-display text-lg font-bold">In an Emergency?</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Call our emergency line or come straight to the Accident & Emergency department — open 24/7.
                </p>
                <p className="mt-4 font-display text-xl font-extrabold text-gold">+234 (0) 900 000 0999</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <Reveal className="mt-12">
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:p-10">
              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight">Make an Appointment</h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Appointments can be booked by phone, email, or in person at the outpatient registration desk.
                </p>
              </div>
              <Button asChild>
                <Link href="/contact">
                  Book an Appointment
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        title="Find the Right Specialist"
        description="Our consultants are ready to help you and your family."
        primary={{ label: "Find a Doctor", href: "/teaching-hospital/find-a-doctor" }}
        secondary={{ label: "Make a Referral", href: "/teaching-hospital/referrals" }}
      />
    </>
  );
}
