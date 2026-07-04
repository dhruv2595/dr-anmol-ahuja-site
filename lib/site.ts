export const site = {
  url: "https://delhilaparoscopicsurgery.com",
  doctorName: "Dr. Anmol Ahuja",
  role: "Laparoscopic, Bariatric, Hernia & Colorectal Surgeon",
  hospital: "Sir Ganga Ram Hospital, New Delhi",
  department: "Department of General & Laparoscopic Surgery",
  qualifications: [
    "DNB (General Surgery)",
    "FNB (Minimal Access Surgery)",
    "FMAS",
    "Fellowship in Colorectal Surgery (Taiwan)",
  ],
  phones: [
    { label: "+91 98186 75150", href: "tel:+919818675150" },
    { label: "+91 85860 89385", href: "tel:+918586089385" },
  ],
  whatsappNumber: "919818675150",
  email: "dr.anmol14@gmail.com",
  cities: "Delhi · Noida · Roorkee",
  locations: [
    {
      name: "Sir Ganga Ram Hospital",
      address: "Old Rajinder Nagar, New Delhi",
      city: "New Delhi",
      mapsQuery: "Sir Ganga Ram Hospital, Old Rajinder Nagar, New Delhi",
    },
    {
      name: "Delhi Laparoscopic Surgery Clinic",
      address: "VBS Medics, D-148, Block D, Sector 51, Noida, UP 201307",
      city: "Noida",
      mapsQuery: "VBS Medics, D-148, Block D, Sector 51, Noida",
    },
    {
      name: "Ahuja Clinic",
      address: "Pahari Bazar, Roorkee, Uttarakhand",
      city: "Roorkee",
      mapsQuery: "Ahuja Clinic, Pahari Bazar, Roorkee",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/doorbeensurgeon/",
    twitter: "https://twitter.com/thesurgeon14",
  },
} as const;

export const whatsappHref = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
