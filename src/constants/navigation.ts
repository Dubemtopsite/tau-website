export type NavIcon =
  | "home"
  | "landmark"
  | "users"
  | "scale"
  | "badge-check"
  | "map"
  | "palette"
  | "leaf"
  | "phone"
  | "graduation-cap"
  | "book-open"
  | "building"
  | "folder-tree"
  | "file-text"
  | "coins"
  | "globe"
  | "heart-handshake"
  | "flask"
  | "newspaper"
  | "radar"
  | "microscope"
  | "hand-coins"
  | "lightbulb"
  | "shield-check"
  | "hospital"
  | "stethoscope"
  | "bed-double"
  | "user-round"
  | "send"
  | "calendar"
  | "users-round"
  | "briefcase"
  | "library"
  | "gift";

export interface NavLinkItem {
  label: string;
  href: string;
  description?: string;
  icon?: NavIcon;
}

export interface NavGroup {
  label: string;
  href?: string;
  description?: string;
  icon?: NavIcon;
  children: NavLinkItem[];
}

export const utilityNav = [
  { label: "Search", href: "/search" },
  { label: "AI Assistant", href: "/ai-assistant" },
  { label: "Apply Now", href: "/admissions/apply" },
  { label: "Student Portal", href: "/student-portal" },
  { label: "Staff Portal", href: "/staff-portal" },
  { label: "Downloads", href: "/downloads" },
] as const;

export const mainNav: NavGroup[] = [
  {
    label: "About TAU",
    href: "/about",
    description: "Who we are, our history, and how we are governed.",
    icon: "landmark",
    children: [
      { label: "Overview & History", href: "/about/history", description: "Our founding story and evolution." },
      { label: "Mission & Vision", href: "/about/mission-vision", description: "What drives every decision we make." },
      { label: "Leadership", href: "/leadership", description: "Meet the University's leaders." },
      { label: "Governance & Policies", href: "/about/governance", description: "Our governance framework and policies." },
      { label: "Accreditations & Rankings", href: "/about/accreditations", description: "Recognition by national and global bodies." },
      { label: "Campus Map & Facilities", href: "/about/campus-map", description: "Explore our Umuchukwu campus." },
      { label: "Diversity & Inclusion", href: "/about/diversity", description: "A community that belongs to everyone." },
      { label: "Sustainability", href: "/about/sustainability", description: "Our commitment to a greener campus." },
      { label: "Contact", href: "/contact", description: "Get in touch with the University." },
    ],
  },
  {
    label: "Study",
    href: "/undergraduate-programs",
    description: "Explore academic programmes and student life.",
    icon: "graduation-cap",
    children: [
      { label: "Undergraduate Programs", href: "/undergraduate-programs", description: "Degrees across all faculties." },
      { label: "Postgraduate School", href: "/postgraduate", description: "MSc, MD, PhD and fellowships." },
      { label: "Faculties", href: "/faculties", description: "Six faculties of the health sciences." },
      { label: "Departments", href: "/departments", description: "Academic departments and research groups." },
      { label: "Admissions", href: "/admissions", description: "How to join TAU." },
      { label: "Tuition & Scholarships", href: "/tuition", description: "Fees, aid, and scholarships." },
      { label: "International Students", href: "/international", description: "Support for students from abroad." },
      { label: "Student Life", href: "/student-life", description: "Campus community and activities." },
    ],
  },
  {
    label: "Research & Innovation",
    href: "/research",
    description: "Discovery, innovation, and impact in the health sciences.",
    icon: "flask",
    children: [
      { label: "Research Centres & Institutes", href: "/research/centres", description: "Hubs of discovery and collaboration." },
      { label: "Publications", href: "/research/publications", description: "Peer-reviewed scholarship from TAU." },
      { label: "Core Facilities & Labs", href: "/research/facilities", description: "State-of-the-art research infrastructure." },
      { label: "Funding Opportunities", href: "/research/funding", description: "Grants, fellowships, and awards." },
      { label: "Innovation Partnerships", href: "/research/innovation", description: "Translate ideas into impact." },
      { label: "Research Ethics Board", href: "/research/ethics", description: "Ethical oversight for all research." },
    ],
  },
  {
    label: "Teaching Hospital",
    href: "/teaching-hospital",
    description: "Patient care, clinical training, and referral services.",
    icon: "hospital",
    children: [
      { label: "Hospital Overview", href: "/teaching-hospital", description: "A centre of clinical excellence." },
      { label: "Clinical Departments", href: "/teaching-hospital/departments", description: "Specialist units and services." },
      { label: "Patient Care Information", href: "/teaching-hospital/patient-care", description: "Planning your care with us." },
      { label: "Find a Doctor", href: "/teaching-hospital/find-a-doctor", description: "Search our clinicians." },
      { label: "Referrals", href: "/teaching-hospital/referrals", description: "Refer a patient to our consultants." },
      { label: "Medical Education", href: "/teaching-hospital/medical-education", description: "Where students become clinicians." },
    ],
  },
  {
    label: "Community",
    href: "/news",
    description: "News, events, and ways to connect with TAU.",
    icon: "users",
    children: [
      { label: "News", href: "/news", description: "Stories and updates from TAU." },
      { label: "Events", href: "/events", description: "Conferences, talks, and gatherings." },
      { label: "Alumni", href: "/alumni", description: "A lifelong network of TAU graduates." },
      { label: "Careers", href: "/careers", description: "Join the TAU team." },
      { label: "Medical Library", href: "/library", description: "E-journals, e-books, and research help." },
      { label: "Giving & Donations", href: "/giving", description: "Support the next generation of healers." },
    ],
  },
];

export function navIconName(icon: NavIcon) {
  return icon;
}
