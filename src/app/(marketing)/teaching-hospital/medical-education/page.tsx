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
import { ArrowRight, ClipboardCheck, GraduationCap, HeartPulse, Stethoscope } from "lucide-react";
import { PlaceholderImage } from "@/components/common/placeholder-image";

export const metadata: Metadata = generatePageMetadata({
  title: "Medical Education",
  description:
    "Clinical training at the Transatlantic Teaching Hospital — where TAU students and residents become clinicians.",
  path: "/teaching-hospital/medical-education",
});

const programmes = [
  { Icon: ClipboardCheck, title: "Clerkships & Rotations", detail: "Every MBBS, BDS, and nursing student completes structured clinical rotations across all major specialities." },
  { Icon: HeartPulse, title: "Residency Training", detail: "Accredited residency programmes in 12 specialities, from family medicine to obstetrics & gynaecology." },
  { Icon: Stethoscope, title: "Electives & Externships", detail: "Senior students and visiting students from partner institutions undertake supervised clinical electives." },
  { Icon: GraduationCap, title: "Continuing Education", detail: "CPD courses, simulation workshops, and grand rounds keep our clinicians at the leading edge." },
];

export default function MedicalEducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Teaching Hospital"
        title="Where Students Become Clinicians"
        description="Every consultation, theatre case, and ward round is a lesson at the Transatlantic Teaching Hospital."
        crumbs={[{ label: "Teaching Hospital", href: "/teaching-hospital" }, { label: "Medical Education" }]}
      />

      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-medical/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-medical">
                  <GraduationCap className="size-4" aria-hidden="true" />
                  Clinical Training
                </span>
                <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Learning at the Bedside
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                  Our teaching hospital is a working hospital first — which makes it the perfect classroom.
                  Students learn on real cases under consultant supervision, supported by simulation before
                  every high-stakes procedure.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Consultant-led bedside teaching on every ward",
                    "Simulation-to-bedside progression for every skill",
                    "Interprofessional training with nursing and pharmacy students",
                    "Clinical electives and international rotations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-medical" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/admissions/apply">
                      Join a Clinical Programme
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/undergraduate-programs">Explore Programmes</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <PlaceholderImage src="/images/placeholders/simulation-lab.jpg" alt="Clinical training at the TAU teaching hospital" aspect="wide" />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-ice py-16 dark:bg-background sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Training Programmes"
            title="A Continuum of Clinical Education"
            description="From first-year observation to consultant fellowship — one seamless pathway."
          />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {programmes.map(({ Icon, title, detail }) => (
              <StaggerItem key={title}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10">
                  <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-medical/10 text-medical">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal className="mt-12">
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent">Residents</Badge>
                <Badge variant="muted">Visiting Students</Badge>
                <Badge variant="muted">CPD</Badge>
              </div>
              <h2 className="mt-5 font-display text-2xl font-extrabold tracking-tight">Rotations & Electives</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Visiting students from partner institutions worldwide can apply for clinical electives in
                internal medicine, surgery, paediatrics, and obstetrics & gynaecology. Applications are
                reviewed by the Medical Education Office.
              </p>
              <Button asChild className="mt-6">
                <Link href="/contact">Enquire About Electives</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        title="Start Your Clinical Journey"
        description="The wards are waiting. Your future patients are waiting too."
        primary={{ label: "Apply Now", href: "/admissions/apply" }}
        secondary={{ label: "Hospital Overview", href: "/teaching-hospital" }}
      />
    </>
  );
}
