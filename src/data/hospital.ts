export interface ClinicalDepartment {
  id: string;
  slug: string;
  name: string;
  specialty: string;
  description: string;
  services: string[];
  consultants: number;
  beds: number;
  image: string;
  featured?: boolean;
}

export interface Clinician {
  id: string;
  slug: string;
  name: string;
  title: string;
  department: string;
  speciality: string;
  education: string;
  experience: number;
  availability: string;
  image: string;
}

export const clinicalDepartments: ClinicalDepartment[] = [
  {
    id: "medicine",
    slug: "internal-medicine",
    name: "Internal Medicine",
    specialty: "Adult medicine",
    description:
      "Comprehensive care for adult patients across cardiology, endocrinology, neurology, gastroenterology, and respiratory medicine.",
    services: ["Cardiology clinics", "Diabetes & endocrinology", "Stroke unit", "Gastroenterology", "Respiratory medicine"],
    consultants: 18,
    beds: 96,
    image: "/images/placeholders/medical-clinic.svg",
    featured: true,
  },
  {
    id: "surgery",
    slug: "surgery",
    name: "Surgery",
    specialty: "Surgical specialties",
    description:
      "General, orthopaedic, and specialised surgical services with modern theatres, minimally invasive options, and dedicated post-operative care.",
    services: ["General surgery", "Orthopaedics", "Urology", "Minimally invasive surgery", "Emergency surgery"],
    consultants: 14,
    beds: 80,
    image: "/images/placeholders/simulation-lab.jpg",
    featured: true,
  },
  {
    id: "paediatrics",
    slug: "paediatrics",
    name: "Paediatrics",
    specialty: "Children's health",
    description:
      "Family-centred care for newborns, children, and adolescents, including neonatal intensive care and childhood immunisation.",
    services: ["Neonatal ICU", "General paediatrics", "Paediatric emergency", "Growth & nutrition clinics"],
    consultants: 12,
    beds: 64,
    image: "/images/placeholders/medical-clinic.svg",
  },
  {
    id: "obs-gyn",
    slug: "obstetrics-gynaecology",
    name: "Obstetrics & Gynaecology",
    specialty: "Women's health",
    description:
      "Maternity, antenatal, and gynaecological care delivered by specialist teams committed to safe motherhood.",
    services: ["Antenatal & maternity", "Labour ward", "Gynaecological surgery", "Family planning", "High-risk pregnancy"],
    consultants: 10,
    beds: 72,
    image: "/images/placeholders/medical-clinic.svg",
  },
  {
    id: "radiology",
    slug: "radiology",
    name: "Radiology & Imaging",
    specialty: "Diagnostic imaging",
    description:
      "Digital X-ray, ultrasound, CT, and MRI services with teleradiology reporting and same-day outpatient appointments.",
    services: ["CT & MRI", "Ultrasound", "Digital X-ray", "Mammography", "Teleradiology"],
    consultants: 6,
    beds: 0,
    image: "/images/placeholders/simulation-lab.jpg",
  },
  {
    id: "emergency",
    slug: "accident-emergency",
    name: "Accident & Emergency",
    specialty: "24/7 emergency care",
    description:
      "A 24-hour emergency department with resuscitation bays, short-stay observation, and rapid access to specialist teams.",
    services: ["24/7 emergency care", "Resuscitation", "Trauma care", "Observation unit"],
    consultants: 8,
    beds: 32,
    image: "/images/placeholders/medical-clinic.svg",
    featured: true,
  },
];

export const clinicians: Clinician[] = [
  {
    id: "doc-1",
    slug: "prof-nnenna-okoro",
    name: "Prof. Nnenna Okoro",
    title: "Consultant Cardiologist",
    department: "Internal Medicine",
    speciality: "Cardiology, Hypertension",
    education: "MBBS, MD (Cardiology), FWACP",
    experience: 19,
    availability: "Mon, Wed, Fri — 9:00 AM to 1:00 PM",
    image: "/images/placeholders/doctor-1.svg",
  },
  {
    id: "doc-2",
    slug: "dr-emeka-adeyemi",
    name: "Dr. Emeka Adeyemi",
    title: "Consultant Surgeon",
    department: "Surgery",
    speciality: "General & Minimally Invasive Surgery",
    education: "MBBS, FMCS, FRCS (Edin)",
    experience: 15,
    availability: "Tue, Thu — 8:00 AM to 2:00 PM",
    image: "/images/placeholders/doctor-2.svg",
  },
  {
    id: "doc-3",
    slug: "dr-chiamaka-okafor",
    name: "Dr. Chiamaka Okafor",
    title: "Consultant Paediatrician",
    department: "Paediatrics",
    speciality: "Neonatology, General Paediatrics",
    education: "MBBS, FWACP (Paediatrics)",
    experience: 12,
    availability: "Mon–Fri — 9:00 AM to 12:00 PM",
    image: "/images/placeholders/doctor-3.svg",
  },
  {
    id: "doc-4",
    slug: "prof-amara-nwosu",
    name: "Prof. Amara Nwosu",
    title: "Consultant Obstetrician & Gynaecologist",
    department: "Obstetrics & Gynaecology",
    speciality: "High-Risk Pregnancy, Gynaecological Surgery",
    education: "MBBS, FWACS, FMCOG",
    experience: 22,
    availability: "Mon, Thu — 10:00 AM to 2:00 PM",
    image: "/images/placeholders/doctor-1.svg",
  },
  {
    id: "doc-5",
    slug: "dr-tunde-bello",
    name: "Dr. Tunde Bello",
    title: "Consultant Radiologist",
    department: "Radiology & Imaging",
    speciality: "CT & MRI, Interventional Radiology",
    education: "MBBS, FWACS (Radiology)",
    experience: 11,
    availability: "Tue–Sat — 8:00 AM to 4:00 PM",
    image: "/images/placeholders/doctor-2.svg",
  },
  {
    id: "doc-6",
    slug: "dr-yetunde-adio",
    name: "Dr. Yetunde Adio",
    title: "Emergency Medicine Physician",
    department: "Accident & Emergency",
    speciality: "Emergency Medicine, Critical Care",
    education: "MBBS, FWACP (Emergency Medicine)",
    experience: 9,
    availability: "Rotating 24/7 shifts",
    image: "/images/placeholders/doctor-3.svg",
  },
  {
    id: "doc-7",
    slug: "dr-obiora-eke",
    name: "Dr. Obiora Eke",
    title: "Consultant Nephrologist",
    department: "Internal Medicine",
    speciality: "Nephrology, Dialysis",
    education: "MBBS, FWACP (Nephrology)",
    experience: 14,
    availability: "Wed, Fri — 10:00 AM to 1:00 PM",
    image: "/images/placeholders/doctor-1.svg",
  },
  {
    id: "doc-8",
    slug: "dr-fatima-garba",
    name: "Dr. Fatima Garba",
    title: "Consultant Anaesthetist",
    department: "Anaesthesia & Pain",
    speciality: "Anaesthesia, Pain Management",
    education: "MBBS, DA, FWACS (Anaesthesia)",
    experience: 13,
    availability: "On-call schedule",
    image: "/images/placeholders/doctor-2.svg",
  },
];

export function getClinician(slug: string) {
  return clinicians.find((clinician) => clinician.slug === slug);
}
