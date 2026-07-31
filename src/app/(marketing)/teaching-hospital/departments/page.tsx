import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/common/page-hero";
import { Section, Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/common/motion";
import { CTASection } from "@/components/common/cta-section";
import { Badge } from "@/components/ui/badge";
import { clinicalDepartments } from "@/data/hospital";

export const metadata: Metadata = generatePageMetadata({
  title: "Clinical Departments",
  description:
    "Clinical departments and specialist services at the Transatlantic Teaching Hospital.",
  path: "/teaching-hospital/departments",
});

export default function HospitalDepartmentsPage() {
  return (
    <>
      <PageHero image="/images/placeholders/medical-clinic.svg"
        eyebrow="Teaching Hospital"
        title="Clinical Departments"
        description="Specialist teams across 12 departments delivering comprehensive care and clinical training."
        crumbs={[{ label: "Teaching Hospital", href: "/teaching-hospital" }, { label: "Clinical Departments" }]}
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Specialist Services"
            title="Departments at a Glance"
            description="Each department combines consultant-led care with a commitment to teaching the next generation."
          />
          <StaggerContainer className="grid gap-6 lg:grid-cols-2">
            {clinicalDepartments.map((department) => (
              <StaggerItem key={department.id}>
                <div className="group h-full rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-bold">{department.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-medical">{department.specialty}</p>
                    </div>
                    <Badge variant="muted">{department.consultants} consultants</Badge>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{department.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2 border-t pt-5">
                    {department.services.map((service) => (
                      <Badge key={service} variant="accent">{service}</Badge>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal className="mt-12">
            <div className="rounded-3xl bg-gradient-to-br from-navy to-medical p-8 text-white sm:p-10">
              <h2 className="font-display text-2xl font-extrabold">Unsure Which Department You Need?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
                Call our switchboard or walk into the Accident & Emergency department — our triage team will
                direct you to the right specialist.
              </p>
              <p className="mt-5 font-display text-xl font-extrabold text-gold">+234 (0) 900 000 0111</p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        title="Meet Our Consultants"
        description="Search our clinicians by name or speciality and book an appointment."
        primary={{ label: "Find a Doctor", href: "/teaching-hospital/find-a-doctor" }}
        secondary={{ label: "Patient Care", href: "/teaching-hospital/patient-care" }}
      />
    </>
  );
}
