export type NavLeaf = { label: string; href: string };
export type NavCluster = {
  label: string;
  href: string;
  children: NavLeaf[];
};

export const specialtyClusters: NavCluster[] = [
  {
    label: "Weight Loss Surgery",
    href: "/weight-loss-surgery",
    children: [
      { label: "Obesity — A Chronic Disease", href: "/obesity-a-chronic-disease" },
      { label: "Measuring Obesity", href: "/measuring-obesity" },
      { label: "Surgeries for Obesity", href: "/surgeries-for-obesity" },
      { label: "Roux-En-Y Gastric Bypass", href: "/roux-en-y-gastric-bypass" },
      { label: "Sleeve Gastrectomy", href: "/sleeve-gastrectomy" },
      { label: "Mini Gastric Bypass", href: "/mini-gastric-bypass" },
      { label: "Laparoscopic Adjustable Gastric Banding", href: "/laparoscopic-adjustable-gastric-banding" },
      { label: "Endoscopic Treatment", href: "/endoscopic-treatment" },
      { label: "Surgery for Diabetes Mellitus", href: "/surgery-for-diabetes-mellitus" },
    ],
  },
  {
    label: "Hernia",
    href: "/hernia",
    children: [
      { label: "Abdominal Wall Hernia", href: "/abdominal-wall-hernia" },
      { label: "Hiatus Hernia & Diaphragmatic Hernia", href: "/hiatus-hernia-diaphragmatic-hernia" },
    ],
  },
  {
    label: "Colorectal Surgery",
    href: "/colorectal",
    children: [
      { label: "Colon Cancer", href: "/colon-cancer" },
      { label: "Cancer Rectum", href: "/cancer-rectum" },
      { label: "Crohn's Disease", href: "/crohns-disease" },
      { label: "Ulcerative Colitis", href: "/ulcerative-colitis" },
      { label: "Rectal Prolapse", href: "/rectal-prolapse" },
      { label: "Laparoscopic Surgery for Colorectal Disease", href: "/laparoscopic-surgery-for-colorectal-disease" },
      { label: "Screening for Colon Disease", href: "/screening-for-colon-disease" },
    ],
  },
  {
    label: "Proctology",
    href: "/proctology",
    children: [
      { label: "Anal Fissure", href: "/anal-fissure" },
      { label: "Anal Fistula", href: "/anal-fistula" },
      { label: "Hemorrhoids", href: "/hemorrhoids" },
      { label: "Pilonidal Disease", href: "/pilonidal-disease" },
    ],
  },
  {
    label: "MIS & Laparoscopic Surgery",
    href: "/mis-laparoscopic-surgery",
    children: [
      { label: "GallStone Disease", href: "/gall-stone-disease" },
      { label: "CBD Stone", href: "/cbd-stone" },
      { label: "Appendicitis", href: "/appendicitis" },
      { label: "GERD", href: "/gerd" },
      { label: "Achalasia Cardia", href: "/achalasia-cardia" },
      { label: "Choledochal Cyst", href: "/choledochal-cyst" },
      { label: "Hydatid Cyst", href: "/hydatid-cyst" },
    ],
  },
];

export const primaryNavLinks: NavLeaf[] = [
  { label: "About", href: "/about-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
  { label: "Videos", href: "/video" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
];

export const footerQuickLinks: NavLeaf[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Specialities", href: "/hernia" },
  { label: "FAQs", href: "/faqs" },
  { label: "Blog", href: "/blog" },
  { label: "Media", href: "/media" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Where to Find Us", href: "/contact-us" },
];
