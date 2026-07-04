export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  readingTime: string;
  category: string;
  imageKey:
    | "doctorConsultation"
    | "patientCheck"
    | "consultingSurgeon"
    | "operatingTheatre"
    | "diagnosticTeam";
  body: string[];
};

// Note: the original site's WordPress blog has been non-functional since 2022
// (database error), so no legacy post content is recoverable. These are
// placeholder educational posts, kept generic and non-prescriptive.
export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-minimally-invasive-surgery",
    title: "Understanding minimally invasive surgery",
    excerpt:
      "What 'keyhole' surgery actually means, how it differs from open surgery, and why recovery tends to be faster.",
    readingTime: "4 min read",
    category: "MIS & Laparoscopic Surgery",
    imageKey: "operatingTheatre",
    body: [
      "Minimally invasive surgery — often called laparoscopic or 'keyhole' surgery — allows a surgeon to operate through several small incisions of roughly 0.5 to 1 cm, rather than a single large opening. A thin telescope with a camera projects a magnified view of the abdomen onto a monitor, guiding the procedure.",
      "Because the incisions are small, most patients experience less pain, a shorter hospital stay, and a quicker return to everyday activities. Scarring is minimal, and the reduced tissue disruption often means fewer complications.",
      "Not every condition is suited to a laparoscopic approach, and the right technique always depends on your individual case. During your consultation, Dr. Ahuja will explain which option is most appropriate for you and why.",
    ],
  },
  {
    slug: "preparing-for-bariatric-surgery",
    title: "Preparing for bariatric surgery: what to expect",
    excerpt:
      "A calm overview of the evaluation, the procedure, and the lifestyle changes that support lasting results.",
    readingTime: "5 min read",
    category: "Weight Loss Surgery",
    imageKey: "patientCheck",
    body: [
      "Bariatric (weight-loss) surgery is one of the most effective long-term treatments for obesity and its related conditions, including type 2 diabetes, hypertension and sleep apnea. But surgery is one step within a longer journey.",
      "Before surgery, you'll undergo a thorough evaluation — including your BMI, medical history and any obesity-related conditions — to confirm you're a suitable candidate and to choose the right procedure.",
      "Afterwards, a staged diet (liquids, then soft foods), gentle activity, and regular follow-up help protect your results and your health. Your care team will guide each stage.",
    ],
  },
  {
    slug: "when-to-see-a-colorectal-surgeon",
    title: "When to see a colorectal surgeon",
    excerpt:
      "Symptoms that are worth a professional opinion — and why early assessment matters for bowel health.",
    readingTime: "3 min read",
    category: "Colorectal Surgery",
    imageKey: "diagnosticTeam",
    body: [
      "Persistent changes in bowel habits, blood in the stool, unexplained weight loss or ongoing abdominal discomfort are all reasons to seek a professional opinion. Most of the time these symptoms have benign causes — but early assessment is always worthwhile.",
      "Screening can identify precancerous growths years before they become a problem, which is why regular check-ups matter, particularly after age 50 or with a family history of colorectal disease.",
      "If you're experiencing symptoms that concern you, an early consultation can bring clarity and, where needed, a clear treatment plan.",
    ],
  },
];

export const blogBySlug = new Map(blogPosts.map((p) => [p.slug, p]));
