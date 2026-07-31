"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { PlaceholderImage } from "@/components/common/placeholder-image";
import { clinicians } from "@/data/hospital";
import type { Clinician } from "@/data/hospital";

function ClinicianCard({ clinician }: { clinician: Clinician }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10">
      <PlaceholderImage src={clinician.image} alt={clinician.name} aspect="square" className="rounded-none" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold transition-colors group-hover:text-primary">{clinician.name}</h3>
        <p className="mt-0.5 text-sm font-semibold text-medical">{clinician.title}</p>
        <Badge variant="muted" className="mt-3 w-fit">{clinician.speciality}</Badge>
        <dl className="mt-4 space-y-2 border-t pt-4 text-xs text-muted-foreground">
          <div className="flex justify-between gap-3">
            <dt>Department</dt>
            <dd className="text-right font-medium text-foreground">{clinician.department}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt>Experience</dt>
            <dd className="text-right font-medium text-foreground">{clinician.experience}+ years</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt>Clinic Hours</dt>
            <dd className="text-right font-medium text-foreground">{clinician.availability}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function FindDoctorClient() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All");

  const departments = useMemo(
    () => ["All", ...Array.from(new Set(clinicians.map((clinician) => clinician.department)))],
    [],
  );

  const filtered = clinicians.filter((clinician) => {
    const matchesDepartment = department === "All" || clinician.department === department;
    const haystack = `${clinician.name} ${clinician.title} ${clinician.speciality} ${clinician.department}`.toLowerCase();
    const matchesQuery = haystack.includes(query.toLowerCase());
    return matchesDepartment && matchesQuery;
  });

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input
            type="search"
            placeholder="Search by name, title, or speciality…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="pl-11"
            aria-label="Search clinicians"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by department">
          {departments.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setDepartment(item)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                department === item
                  ? "bg-medical text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              }`}
              aria-pressed={department === item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm font-semibold text-muted-foreground" role="status">
        {filtered.length} clinician{filtered.length === 1 ? "" : "s"} found
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((clinician) => (
            <ClinicianCard key={clinician.id} clinician={clinician} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-3xl border border-dashed border-border bg-muted/40 p-12 text-center">
          <h2 className="font-display text-xl font-bold">No clinicians found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a different search term or department filter.
          </p>
        </div>
      )}
    </div>
  );
}
