import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BedDouble, HeartPulse, Phone, Stethoscope, UserRound } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/common/page-hero";
import { Section, Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { Reveal } from "@/components/common/motion";
import { CTASection } from "@/components/common/cta-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { clinicalDepartments } from "@/data/hospital";
import { PlaceholderImage } from "@/components/common/placeholder-image";

export const metadata: Metadata = generatePageMetadata({
  title: "Transatlantic Teaching Hospital",
  description:
    "A 400+ bed teaching hospital delivering patient care, clinical training, and referral services in Anambra State.",
  path: "/teaching-hospital",
});

const stats = [
  { Icon: BedDouble, value: "400+", label: "Beds" },
  { Icon: Stethoscope, value: "300+", label: "Clinicians & nurses" },
  { Icon: HeartPulse, value: "60,000+", label: "Patients served yearly" },
  { Icon: UserRound, value: "24/7", label: "Emergency department" },
];

export default function TeachingHospitalPage() {
  const featured = clinicalDepartments.filter((department) => department.featured);

  return (
    <>
      <PageHero
        eyebrow="Teaching Hospital"
        title="Care. Teaching. Innovation."
        description="The Transatlantic Teaching Hospital is where our students learn their craft and our communities receive world-class care."
        crumbs={[{ label: "Teaching Hospital" }]}
      />

      <Section>
        <Container>
          <Reveal>
            <div className="grid gap-8 rounded-3xl bg-gradient-to-br from-navy to-medical p-8 text-white sm:grid-cols-2 sm:p-10 lg:grid-cols-4">
              {stats.map(({ Icon, value, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="size-6 text-gold" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-extrabold">{value}</p>
                    <p className="text-xs font-semibold text-white/70">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <PlaceholderImage src="/images/placeholders/hero-medical-building.jpg" alt="Transatlantic Teaching Hospital" aspect="wide" />
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-medical/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-medical">
                  Excellence in Care
                </span>
                <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                  A Hospital Built on Mission
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                  The 400+ bed hospital integrates patient care with clinical education at every level — from
                  the ward round to the operating theatre. Our consultants are educators first, mentors to a
                  new generation of Nigerian clinicians.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Accredited training across 12 specialities",
                    "24/7 emergency, maternity, and surgical services",
                    "Community care programmes reaching 20,000+ people yearly",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-medical" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/teaching-hospital/departments">
                      Explore Clinical Departments
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/teaching-hospital/find-a-doctor">
                      <Phone aria-hidden="true" />
                      Find a Doctor
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-ice py-16 dark:bg-background sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Featured Departments"
            title="Specialist Care, Under One Roof"
            description="From emergency medicine to neonatology, our consultant teams work together around the clock."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((department) => (
              <div key={department.id} className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10">
                <PlaceholderImage src={department.image} alt={department.name} aspect="video" className="rounded-none" />
                <div className="p-7">
                  <Badge variant="accent" className="mb-3">{department.specialty}</Badge>
                  <h3 className="font-display text-lg font-bold">{department.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{department.description}</p>
                  <Link
                    href="/teaching-hospital/departments"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-medical transition-colors hover:text-navy dark:hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    Learn More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Need Care Today?"
        description="Our 24/7 emergency department is ready. For appointments and referrals, speak to our team."
        primary={{ label: "Patient Care Information", href: "/teaching-hospital/patient-care" }}
        secondary={{ label: "Make a Referral", href: "/teaching-hospital/referrals" }}
      />
    </>
  );
}
