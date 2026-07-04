// Stock photography sourced from Unsplash (royalty-free) — not photos of Dr. Anmol
// Ahuja or his actual clinics. Used as representative medical/clinical imagery per
// the site owner's direction, since the original site's photo assets are unavailable.
function unsplash(id: string, params = "auto=format&fit=crop&q=80") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const images = {
  drAnmolAhuja: {
    src: "/anmol-ahuja.jpg",
    alt: "Dr. Anmol Ahuja, laparoscopic and bariatric surgeon",
  },
  heroPatients: {
    src: "/hero.jpg",
    alt: "A couple relaxing together at home, smiling",
  },
  heroSurgicalTeam: {
    src: unsplash("1504813184591-01572f98c85f", "auto=format&fit=crop&q=80&w=1400"),
    alt: "Surgical team performing a minimally invasive procedure in an operating theatre",
  },
  heroTeamCircle: {
    src: unsplash("1579684385127-1ef15d508118", "auto=format&fit=crop&q=80&w=1400"),
    alt: "Surgical team gathered around the operating table, viewed from overhead",
  },
  operatingTheatre: {
    src: unsplash("1551076805-e1869033e561", "auto=format&fit=crop&q=80&w=1200"),
    alt: "A clean, modern operating theatre",
  },
  operatingTable: {
    src: unsplash("1516549655169-df83a0774514", "auto=format&fit=crop&q=80&w=1200"),
    alt: "Operating table and surgical lighting in a hospital theatre",
  },
  surgeryInProgress: {
    src: unsplash("1551601651-2a8555f1a136", "auto=format&fit=crop&q=80&w=1200"),
    alt: "Surgeons performing an operation under surgical lighting",
  },
  consultingSurgeon: {
    src: unsplash("1622253692010-333f2da6031d", "auto=format&fit=crop&q=80&w=900"),
    alt: "Consulting surgeon in medical scrubs",
  },
  doctorConsultation: {
    src: unsplash("1631217868264-e5b90bb7e133", "auto=format&fit=crop&q=80&w=1000"),
    alt: "Doctor discussing a diagnosis with a patient",
  },
  patientCheck: {
    src: unsplash("1631815588090-d4bfec5b1ccb", "auto=format&fit=crop&q=80&w=1000"),
    alt: "Doctor checking a patient's blood pressure during a consultation",
  },
  clinicReception: {
    src: unsplash("1519494026892-80bbd2d6fd0d", "auto=format&fit=crop&q=80&w=1000"),
    alt: "Clinic reception desk",
  },
  hospitalExterior: {
    src: unsplash("1587351021759-3e566b6af7cc", "auto=format&fit=crop&q=80&w=1200"),
    alt: "Modern hospital building exterior",
  },
  hospitalWard: {
    src: unsplash("1538108149393-fbbd81895907", "auto=format&fit=crop&q=80&w=1000"),
    alt: "Hospital ward with patient beds",
  },
  diagnosticTeam: {
    src: unsplash("1666214280391-8ff5bd3c0bf0", "auto=format&fit=crop&q=80&w=1000"),
    alt: "Medical team reviewing diagnostic imaging on screens",
  },
  stethoscope: {
    src: unsplash("1584982751601-97dcc096659c", "auto=format&fit=crop&q=80&w=800"),
    alt: "Stethoscope on a white surface",
  },
} as const;

export const specialtyImages: Record<string, keyof typeof images> = {
  "weight-loss-surgery": "patientCheck",
  hernia: "operatingTable",
  colorectal: "diagnosticTeam",
  proctology: "doctorConsultation",
  "mis-laparoscopic-surgery": "surgeryInProgress",
};
