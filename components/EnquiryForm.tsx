"use client";

import { useState } from "react";
import { site, whatsappHref } from "@/lib/site";
import type { Lang } from "@/lib/i18n";

const t = {
  en: {
    topics: [
      "Weight-loss (bariatric) surgery",
      "Hernia",
      "Gallbladder / gallstones",
      "Colorectal",
      "Piles, fissure or fistula",
      "Something else",
    ],
    greeting: (name: string) =>
      `Hello, I'd like to book a consultation with ${name}.`,
    nameLabel: "Your name",
    namePlaceholder: "Full name",
    phoneLabel: "Phone (optional)",
    phonePlaceholder: "So we can call you back",
    topicLabel: "What is this about?",
    messageLabel: "Anything you'd like the doctor to know? (optional)",
    messagePlaceholder: "Symptoms, diagnosis, reports you already have…",
    subject: (topic: string) => `Appointment enquiry — ${topic}`,
    sendWhatsapp: "Send via WhatsApp",
    sendEmail: "Send by email instead",
    note: "Your enquiry opens in WhatsApp or your email app — nothing is stored on this website.",
    fields: { name: "Name", phone: "Phone", regarding: "Regarding", details: "Details" },
  },
  hi: {
    topics: [
      "वज़न घटाने (बैरिएट्रिक) की सर्जरी",
      "हर्निया",
      "पित्ताशय / पित्त की पथरी",
      "कोलोरेक्टल (आँत व मलाशय)",
      "बवासीर, फ़िशर या फ़िस्टुला",
      "कुछ और",
    ],
    greeting: (name: string) =>
      `नमस्ते, मैं ${name} से परामर्श बुक करना चाहता/चाहती हूँ।`,
    nameLabel: "आपका नाम",
    namePlaceholder: "पूरा नाम",
    phoneLabel: "फ़ोन (वैकल्पिक)",
    phonePlaceholder: "ताकि हम आपको कॉल कर सकें",
    topicLabel: "किस बारे में है?",
    messageLabel: "कुछ और जो डॉक्टर को बताना चाहें? (वैकल्पिक)",
    messagePlaceholder: "लक्षण, जाँच-रिपोर्ट, अब तक का इलाज…",
    subject: (topic: string) => `अपॉइंटमेंट पूछताछ — ${topic}`,
    sendWhatsapp: "WhatsApp से भेजें",
    sendEmail: "ईमेल से भेजें",
    note: "आपकी जानकारी WhatsApp या ईमेल ऐप में खुलती है — इस वेबसाइट पर कुछ भी सेव नहीं होता।",
    fields: { name: "नाम", phone: "फ़ोन", regarding: "विषय", details: "विवरण" },
  },
} as const;

export function EnquiryForm({ lang = "en" }: { lang?: Lang }) {
  const s = t[lang];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState<string>(s.topics[0]);
  const [message, setMessage] = useState("");

  const summary = [
    s.greeting(site.doctorName),
    `${s.fields.name}: ${name}`,
    phone ? `${s.fields.phone}: ${phone}` : null,
    `${s.fields.regarding}: ${topic}`,
    message ? `${s.fields.details}: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const ready = name.trim().length > 1;

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
    s.subject(topic),
  )}&body=${encodeURIComponent(summary)}`;

  const field =
    "w-full rounded-nav border border-hairline bg-canvas px-3.5 py-3 text-body-sm text-ink placeholder:text-graphite/50 focus:border-forest";

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (ready) window.open(whatsappHref(summary), "_blank");
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="enq-name" className="mb-1.5 block text-body-sm text-charcoal">
            {s.nameLabel} <span aria-hidden className="text-forest">*</span>
          </label>
          <input
            id="enq-name"
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            placeholder={s.namePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="enq-phone" className="mb-1.5 block text-body-sm text-charcoal">
            {s.phoneLabel}
          </label>
          <input
            id="enq-phone"
            className={field}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            inputMode="tel"
            placeholder={s.phonePlaceholder}
          />
        </div>
      </div>

      <div>
        <label htmlFor="enq-topic" className="mb-1.5 block text-body-sm text-charcoal">
          {s.topicLabel}
        </label>
        <select
          id="enq-topic"
          className={field}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          {s.topics.map((topicOption) => (
            <option key={topicOption}>{topicOption}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="enq-message" className="mb-1.5 block text-body-sm text-charcoal">
          {s.messageLabel}
        </label>
        <textarea
          id="enq-message"
          className={field}
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={s.messagePlaceholder}
        />
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={!ready}
          className="rounded-card bg-forest px-5 py-3 text-body-sm text-canvas transition-colors hover:bg-forest-bright disabled:cursor-not-allowed disabled:opacity-40"
        >
          {s.sendWhatsapp}
        </button>
        <a
          href={ready ? mailtoHref : undefined}
          aria-disabled={!ready}
          className={`rounded-card border border-forest/25 px-5 py-3 text-body-sm text-forest transition-colors hover:border-forest ${
            ready ? "" : "pointer-events-none opacity-40"
          }`}
        >
          {s.sendEmail}
        </a>
      </div>
      <p className="text-caption text-graphite/70">{s.note}</p>
    </form>
  );
}
