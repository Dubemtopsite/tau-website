"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FileText, GraduationCap, Newspaper } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { news } from "@/data/news";
import { programs } from "@/data/programs";
import { faculties } from "@/data/faculties";
import { events } from "@/data/events";
import type { SearchResult } from "@/types";

const staticResults: SearchResult[] = [
  { title: "Admissions", href: "/admissions", type: "Page", description: "Apply to TAU — undergraduate and postgraduate." },
  { title: "Tuition & Scholarships", href: "/tuition", type: "Page", description: "Fees, financial aid, and scholarships." },
  { title: "Research & Innovation", href: "/research", type: "Page", description: "Centres, publications, and funding." },
  { title: "About TAU", href: "/about", type: "Page", description: "History, mission, leadership, and governance." },
  { title: "Contact Us", href: "/contact", type: "Page", description: "Find admissions and departmental contacts." },
];

const searchIndex: SearchResult[] = [
  ...staticResults,
  ...faculties.map((f) => ({
    title: f.name,
    href: `/faculties/${f.slug}`,
    type: "Faculty",
    description: f.tagline,
  })),
  ...programs.map((p) => ({
    title: `${p.degree} — ${p.title}`,
    href: `/programs/${p.slug}`,
    type: "Programme",
    description: `${p.type} · ${p.duration}`,
  })),
  ...news.map((n) => ({
    title: n.title,
    href: `/news/${n.slug}`,
    type: "News",
    description: n.excerpt,
  })),
  ...events.map((e) => ({
    title: e.title,
    href: `/events/${e.slug}`,
    type: "Event",
    description: e.description,
  })),
];

function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();
}

function rankResults(query: string): SearchResult[] {
  const q = normalize(query);
  if (!q) return [];
  const terms = q.split(/\s+/);

  return searchIndex
    .map((result) => {
      const haystack = normalize(`${result.title} ${result.description} ${result.type}`);
      let score = 0;
      for (const term of terms) {
        if (haystack.includes(term)) score += term.length;
      }
      if (normalize(result.title).startsWith(q)) score += 20;
      if (normalize(result.title).includes(q)) score += 10;
      return { result, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map(({ result }) => result);
}

const typeIcons: Record<string, React.ElementType> = {
  Faculty: GraduationCap,
  Programme: GraduationCap,
  News: Newspaper,
  Event: FileText,
  Page: FileText,
};

export function SiteSearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const results = useMemo(() => rankResults(query), [query]);

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setQuery("");
      setActiveIndex(0);
    }
    onOpenChange(next);
  };

  const handleSelect = (href: string) => {
    onOpenChange(false);
    setQuery("");
    setActiveIndex(0);
    router.push(href);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (results.length > 0 ? Math.min(index + 1, results.length - 1) : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      handleSelect(results[activeIndex].href);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="top-[12%] max-w-2xl -translate-y-0 p-0 sm:rounded-3xl" hideCloseButton>
        <DialogHeader className="sr-only">
          <DialogTitle>Search Transatlantic University</DialogTitle>
          <DialogDescription>Search pages, programmes, news, and events.</DialogDescription>
        </DialogHeader>

        <div className="border-b p-5">
          <label htmlFor="site-search" className="sr-only">
            Search the university website
          </label>
          <div className="relative">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" strokeLinecap="round" />
            </svg>
            <Input
              id="site-search"
              autoFocus
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={onKeyDown}
              placeholder="Search programmes, news, faculties, events…"
              className="h-13 pl-12 text-base"
            />
          </div>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-2" role="listbox" aria-label="Search results">
          {query && results.length === 0 ? (
            <p className="p-6 text-center text-sm text-muted-foreground">
              No results for <span className="font-semibold text-foreground">“{query}”</span>. Try “medicine”, “nursing”, or “scholarship”.
            </p>
          ) : null}

          {!query ? (
            <div className="p-4">
              <p className="px-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Popular pages
              </p>
              <ul className="mt-2">
                {staticResults.map((result) => (
                  <SearchItem key={result.href} result={result} active={false} onSelect={handleSelect} />
                ))}
              </ul>
            </div>
          ) : null}

          {query && results.length > 0
            ? results.map((result, index) => (
                <SearchItem
                  key={result.href}
                  result={result}
                  active={index === activeIndex}
                  onSelect={handleSelect}
                />
              ))
            : null}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t bg-muted/50 px-5 py-3 text-xs text-muted-foreground">
          <span className="inline-flex flex-wrap items-center gap-3">
            <kbd className="rounded-md border bg-background px-1.5 py-0.5 font-mono">↑↓</kbd> navigate
            <kbd className="rounded-md border bg-background px-1.5 py-0.5 font-mono">↵</kbd> select
            <kbd className="rounded-md border bg-background px-1.5 py-0.5 font-mono">esc</kbd> close
          </span>
          <span>{results.length} results</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function SearchItem({
  result,
  active,
  onSelect,
}: {
  result: SearchResult;
  active: boolean;
  onSelect: (href: string) => void;
}) {
  const Icon = typeIcons[result.type] ?? FileText;

  return (
    <Link
      href={result.href}
      role="option"
      aria-selected={active}
      onMouseEnter={undefined}
      onClick={(event) => {
        event.preventDefault();
        onSelect(result.href);
      }}
      className={`flex items-start gap-3 rounded-2xl px-3 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        active ? "bg-muted" : "hover:bg-muted/60"
      }`}
    >
      <span
        className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
          active ? "bg-medical text-white" : "bg-medical/10 text-medical"
        }`}
      >
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center justify-between gap-3">
          <span className="truncate text-sm font-semibold">{result.title}</span>
          <Badge variant="muted" className="shrink-0">
            {result.type}
          </Badge>
        </span>
        <span className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{result.description}</span>
      </span>
    </Link>
  );
}
