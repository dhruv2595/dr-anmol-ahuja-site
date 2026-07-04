export type FAQ = { q: string; a: string };
export type FAQCategory = { category: string; faqs: FAQ[] };

export const faqCategories: FAQCategory[] = [
  {
    category: "Weight Loss Surgery",
    faqs: [
      {
        q: "Do I qualify for weight-loss surgery?",
        a: "Common criteria include a body mass index (BMI) of 40 or higher, or a lower BMI combined with obesity-related conditions such as diabetes or hypertension.",
      },
      {
        q: "Can bariatric surgery be done twice?",
        a: "In some cases, a second surgery to repair or redo a gastric bypass may be appropriate.",
      },
      {
        q: "How quickly do you lose weight after gastric sleeve surgery?",
        a: "Weight loss is fastest in the first year and tends to slow down after about 18 months.",
      },
      {
        q: "Can you drink alcohol after gastric sleeve surgery?",
        a: "Alcohol is not recommended after bariatric surgery — it contains calories but minimal nutrition.",
      },
      {
        q: "Can you have a baby after weight loss surgery?",
        a: "It's safe to get pregnant after bariatric surgery once your weight stabilizes — most experts recommend waiting about 18 months.",
      },
      {
        q: "How many calories a day do you eat after gastric bypass?",
        a: "For the first two months following surgery, calorie intake should be between 300 and 600 calories a day.",
      },
      {
        q: "What is the safest bariatric surgery?",
        a: "Gastric banding is considered the least invasive weight-loss surgery and also the safest.",
      },
      {
        q: "How long does it take for your stomach to heal after gastric sleeve surgery?",
        a: "Four to six weeks — patients usually return to work and their normal routine within this period.",
      },
      {
        q: "How much can your stomach hold after gastric bypass?",
        a: "Immediately after surgery, the stomach can hold 2 to 4 tablespoons of food or drink. After about a year, it expands to hold up to 16 tablespoons.",
      },
      {
        q: "Can gastric bypass cause kidney problems?",
        a: "Bariatric surgery usually has a beneficial impact on renal function (proteinuria, glomerular filtration) in obese patients.",
      },
    ],
  },
  {
    category: "Surgery for Diabetes",
    faqs: [
      {
        q: "Can diabetes be cured by surgery?",
        a: "There is no outright cure for diabetes, but it can go into remission, and surgery is one of the most powerful tools to achieve that.",
      },
      {
        q: "Is there a surgery for diabetes?",
        a: "In addition to behavioural and medical treatments, bariatric and metabolic surgeries constitute a powerful option to ameliorate diabetes in patients affected by severe obesity.",
      },
      {
        q: "Is surgery dangerous for diabetics?",
        a: "Patients with diabetes have a higher risk of cardiovascular disease and a higher perioperative risk, which is carefully managed before and during surgery.",
      },
      {
        q: "How does bariatric surgery affect diabetes?",
        a: "Bariatric surgery results in significant weight loss and remission of diabetes in most patients.",
      },
      {
        q: "How does Roux-en-Y cure diabetes?",
        a: "Roux-en-Y gastric bypass frequently achieves glycemic control and even cures type 2 diabetes in obese patients.",
      },
    ],
  },
  {
    category: "Colorectal Surgery",
    faqs: [
      {
        q: "What is the recovery time for colorectal surgery?",
        a: "Most people who have colon cancer surgery recover without problems, going home within 2 to 4 days.",
      },
      {
        q: "What does colorectal surgery involve?",
        a: "A bowel resection is a surgery to remove any part of the bowel — small intestine, large intestine, or rectum.",
      },
      {
        q: "How long is hospital stay for colon resection?",
        a: "Bowel resection requires general anaesthesia, with a hospital stay of 4 to 7 days, or as long as 2 weeks after surgery.",
      },
      {
        q: "What can I expect after colostomy surgery?",
        a: "You may have very loose stools in your colostomy bag for a while — over time your stools may become firmer, though generally less solid than before surgery.",
      },
      {
        q: "Can you live a normal life without a colon?",
        a: "Yes — people can live without a colon, though some may need to wear a bag outside their body to collect stool.",
      },
    ],
  },
  {
    category: "Proctology Surgery",
    faqs: [
      {
        q: "How many hours does colon resection surgery take?",
        a: "Colectomy usually takes between 1 and 4 hours.",
      },
      {
        q: "Is diverticulitis surgery painful?",
        a: "When you have diverticulitis, the inflamed pouches most often cause pain in the lower left side of the abdomen, which surgery aims to resolve.",
      },
      {
        q: "What can I expect after colon resection surgery?",
        a: "Right after surgery, you'll be able to drink fluids. Recovery from laparoscopic surgery is faster than with an open resection.",
      },
      {
        q: "How long is recovery from small intestine surgery?",
        a: "Usual hospital stay is 5 to 7 days — your doctor may keep you longer if complications arise.",
      },
    ],
  },
  {
    category: "MIS & Laparoscopic Surgery",
    faqs: [
      {
        q: "What is MIS in surgery?",
        a: "MIS stands for Minimally Invasive Surgery, aiming for faster recovery through smaller incisions.",
      },
      {
        q: "What surgeries can be done laparoscopically?",
        a: "Most intestinal surgeries — including Crohn's disease, ulcerative colitis, diverticulitis, cancer, rectal prolapse and severe constipation — can be performed using the laparoscopic technique.",
      },
      {
        q: "How long does it take to recover from laparoscopic surgery?",
        a: "You should feel better after 1 to 2 weeks in most cases.",
      },
      {
        q: "Can I lay on my side after laparoscopy?",
        a: "Laparoscopy is usually done under general anaesthesia through a small incision near the belly button — your surgeon will advise on positioning during recovery.",
      },
      {
        q: "How do you treat laparoscopic incisions?",
        a: "Laparoscopy incisions are typically very small and rarely have complications — you may wash them with soapy water as advised by your surgeon.",
      },
      {
        q: "What should you avoid after surgery?",
        a: "Fresh fruit and vegetables contain nutrients and fiber essential to healing during recovery from surgery.",
      },
    ],
  },
  {
    category: "Hernia",
    faqs: [
      {
        q: "How can you check yourself for a hernia?",
        a: "Your doctor will check for a bulge in the groin area — since standing and coughing can make a hernia more prominent, you'll likely be asked to stand and cough or strain during examination.",
      },
      {
        q: "What are the symptoms of a strangulated hernia?",
        a: "Nausea, vomiting or both; fever; sudden pain that quickly intensifies; a hernia bulge that turns red, purple or dark; and inability to move your bowels or pass gas.",
      },
      {
        q: "How do you check for a hernia on a woman?",
        a: "Sometimes hernia swelling is visible when standing upright; usually the hernia can be felt if you place your hand directly over it.",
      },
      {
        q: "Can a hernia cause back and leg pain?",
        a: "Yes — the pain may not just be in the area of the hernia; it can radiate to the hip, back, leg, or even the genitals.",
      },
    ],
  },
];
