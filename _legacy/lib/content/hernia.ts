import type { ConditionPage } from "./types";

export const herniaPages: ConditionPage[] = [
  {
    slug: "hernia",
    cluster: "hernia",
    isHub: true,
    title: "Hernia Surgery",
    metaTitle: "Inguinal | Ventral | Umbilical | Incisional | Recurrent | Robotic Hernia Surgery",
    metaDescription:
      "Hernia surgery in Delhi & Noida with Dr. Anmol Ahuja — types, symptoms and laparoscopic treatment options.",
    intro: [
      "Hernia is a very common problem that is quite prevalent in children and the elderly. It is marked by the formation of a localised bulge in the abdominal or groin area.",
      "Hernias result from weakness or perforations in the peritoneum, creating gaps through which organs may protrude. Initially patients experience slight swelling that disappears when lying down, gradually becoming more prominent.",
    ],
    sections: [
      {
        heading: "Various Types",
        body: ["Hernias divide into Internal and External categories."],
        list: [
          "Internal hernia — very rare and usually hard to detect; occurs when an organ protrudes through the wall of another organ, causing pain and discomfort",
          "Inguinal hernias (75% of cases)",
          "Femoral hernias (more common in females)",
          "Incisional hernias (post-surgery)",
          "Umbilical hernia",
          "Epigastric hernia",
          "Divarication of Recti",
        ],
      },
      {
        heading: "Common Symptoms",
        list: [
          "Localised swelling or bulge",
          "Pinching pain and dull ache",
          "Persistent pulling sensation",
          "Change in bowel habits",
          "Back pain",
        ],
      },
      {
        heading: "Treatment",
        body: [
          "Hernia cannot be cured with oral medication and needs to be treated surgically.",
        ],
      },
      {
        heading: "Common Surgeries for Inguinal Hernia",
        ordered: true,
        list: [
          "Laparoscopic TAPP",
          "Laparoscopic TEP",
          "Enhanced TEP",
          "Open Lichenstein mesh repair",
          "Tissue repair",
          "Emergency surgeries",
        ],
      },
      {
        heading: "For Ventral Hernia",
        ordered: true,
        list: [
          "Laparoscopic IPOM Plus",
          "Laparoscopic TAPP Plus",
          "Component Repair Anterior/Posterior",
          "E-TEP RS",
          "E-TEP TAR",
          "Scola",
        ],
      },
    ],
  },
  {
    slug: "abdominal-wall-hernia",
    cluster: "hernia",
    title: "Abdominal Wall Hernia",
    metaTitle: "Abdominal Wall Hernia Treatment | Specialist Doctor in Noida Delhi",
    metaDescription:
      "Abdominal wall hernia — symptoms, causes, and open vs. minimally invasive treatment options.",
    intro: [
      "An abdominal wall hernia is an opening or area of weakness in the abdominal wall through which abdominal contents can protrude.",
    ],
    sections: [
      {
        heading: "Symptoms",
        body: [
          "Abdominal wall hernias are generally visible: they look like a lump or bulge beneath the skin. These hernias don't usually cause other symptoms except mild pain or discomfort, usually when straining (for instance, lifting something heavy).",
          "If strangulated, symptoms include severe pain, nausea, vomiting, and redness in the area of the hernia.",
        ],
      },
      {
        heading: "Causes",
        list: [
          "Aging",
          "Chronic coughing",
          "Collagen vascular disease",
          "Frequent heavy lifting",
          "Genetic defects",
          "History of previous hernias",
          "Infection (especially following surgery)",
          "Injuries to the abdominal area",
          "Obesity",
          "Pregnancy",
          "Straining during bowel movements or urination",
          "Surgical openings",
        ],
      },
      {
        heading: "Treatment",
        body: [
          "Two surgical approaches: Open Surgery and Minimally Invasive Surgery. Open surgery involves a small incision, tissue repositioning, and possible mesh reinforcement. Minimally invasive surgery uses small incisions, gas inflation, and laparoscopic guidance.",
        ],
      },
    ],
  },
  {
    slug: "hiatus-hernia-diaphragmatic-hernia",
    cluster: "hernia",
    title: "Hiatus Hernia & Diaphragmatic Hernia",
    metaTitle: "Laparoscopic Hiatus Diaphragmatic Hernia Surgery in Delhi Noida",
    metaDescription:
      "Hiatal hernia — causes, symptoms, types (sliding and fixed), and its relationship to GERD.",
    intro: [
      "In a hiatal hernia (also called hiatus or diaphragmatic hernia), a portion of the stomach penetrates through a weakness or tear in the hiatus of the diaphragm — the small opening that allows the oesophagus to pass from the chest to its connection with the stomach.",
    ],
    sections: [
      {
        heading: "Causes",
        body: [
          "The exact cause of many hiatal hernias isn't known. In some people, injury or other damage may weaken muscle tissue, making it possible for the stomach to push through the diaphragm. Another cause is repeatedly putting too much pressure on the muscles around the stomach — through coughing, vomiting, straining during bowel movements, or lifting heavy objects. Some people are also born with an abnormally large hiatus.",
        ],
        list: ["Obesity", "Aging", "Smoking"],
      },
      {
        heading: "Symptoms",
        body: [
          "It's rare for even fixed hiatal hernias to cause symptoms. If you do experience symptoms, they're usually caused by stomach acid, bile, or air entering the oesophagus.",
        ],
        list: [
          "Heartburn that gets worse when leaning over or lying down",
          "Chest pain or epigastric pain",
          "Trouble swallowing",
          "Belching",
        ],
      },
      {
        heading: "Types of Hiatal Hernia",
        body: [
          "Sliding hiatal hernia is the more common type — it occurs when the stomach and oesophagus slide into and out of the chest through the hiatus. These tend to be small and usually don't cause symptoms or require treatment.",
          "Fixed (paraesophageal) hernia is less common. Part of the stomach pushes through the diaphragm and stays there. Most cases are not serious, but there is a risk that blood flow to the stomach could become blocked, which would be a medical emergency.",
        ],
      },
      {
        heading: "Relationship to GERD",
        body: [
          "Gastroesophageal reflux disease (GERD) occurs when food, liquids, and acid in the stomach end up in the oesophagus, which can lead to heartburn or nausea after meals. It's common for people with a hiatal hernia to have GERD — though you can have a hiatal hernia without GERD, or GERD without a hernia.",
        ],
      },
    ],
  },
];
