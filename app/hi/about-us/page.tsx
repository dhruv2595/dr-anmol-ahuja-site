import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { PillBadge } from "@/components/PillBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "डॉ. अनमोल आहूजा का परिचय | लैप्रोस्कोपिक सर्जन, सर गंगा राम अस्पताल" },
  description:
    "डॉ. अनमोल आहूजा की शिक्षा, फ़ेलोशिप, शोध और अनुभव — DNB, FNB मिनिमल एक्सेस सर्जरी, कोलोरेक्टल फ़ेलोशिप (ताइवान), Obesity Surgery जर्नल में प्रकाशित।",
  alternates: {
    canonical: "/hi/about-us",
    languages: { "en-IN": "/about-us", "hi-IN": "/hi/about-us" },
  },
};

const education = [
  { degree: "MBBS", place: "तंजावुर मेडिकल कॉलेज, तमिलनाडु" },
  { degree: "DNB, जनरल सर्जरी", place: "दीन दयाल उपाध्याय अस्पताल, नई दिल्ली" },
  { degree: "FNB, मिनिमल एक्सेस सर्जरी", place: "ILS हॉस्पिटल्स, कोलकाता" },
  {
    degree: "फ़ेलोशिप, MIS कोलोरेक्टल सर्जरी",
    place: "चाइना मेडिकल यूनिवर्सिटी हॉस्पिटल, ताइचुंग, ताइवान",
  },
];

const experience = [
  {
    role: "कंसल्टेंट — जनरल व लैप्रोस्कोपिक सर्जरी",
    place: "सर गंगा राम अस्पताल, नई दिल्ली",
    current: true,
  },
  { role: "जूनियर कंसल्टेंट", place: "ILS हॉस्पिटल्स, कोलकाता", current: false },
  {
    role: "सीनियर रेज़िडेंट — जनरल व मिनिमल एक्सेस सर्जरी",
    place: "BL कपूर सुपरस्पेशियलिटी अस्पताल, नई दिल्ली",
    current: false,
  },
  {
    role: "सीनियर रेज़िडेंट — जनरल सर्जरी",
    place: "गुरु गोबिंद सिंह सरकारी अस्पताल, नई दिल्ली",
    current: false,
  },
];

const focusAreas = [
  "मिनिमल एक्सेस सर्जरी",
  "बैरिएट्रिक सर्जरी",
  "कोलोप्रोक्टोलॉजी",
  "हर्निया सर्जरी",
  "एंडोस्कोपिक सर्जरी",
];

const publications = [
  {
    title: "स्लीव गैस्ट्रेक्टॉमी बनाम गैस्ट्रिक बाईपास — ट्रायल के नतीजे",
    venue: "Obesity Surgery, 2017 व 2018",
  },
  {
    title: "सर्जरी के बाद डायबिटीज़ ठीक होने का पूर्वानुमान",
    venue: "Obesity Surgery, 2018",
  },
  {
    title: "बाईपास लिम्ब की लंबाई — पोषण व वज़न पर असर",
    venue: "Obesity Surgery, 2018",
  },
  {
    title: "सर्जरी से पहले मोटापे के मरीज़ का मूल्यांकन",
    venue: "पुस्तक-अध्याय, ASOCON 2017",
  },
];

const awards = [
  "प्रथम पुरस्कार, वीडियो प्रस्तुति — OSSI 2018, चेन्नई",
  "रजत पदक, सर्जिकल क्विज़ — GI Surgicon 2017, नई दिल्ली",
  "पोस्टर प्रस्तुति पुरस्कार — ACRSICON 2017, कोयंबटूर",
];

export default function HindiAboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="container-site pt-5 md:pt-8">
        <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col items-start justify-center rounded-card bg-linen px-6 py-12 md:px-12 md:py-16">
            <PillBadge tone="white">परिचय</PillBadge>
            <h1 className="mt-5 font-display text-heading-lg text-forest">
              डॉ. अनमोल आहूजा
            </h1>
            <p className="mt-2 text-subheading text-charcoal">
              लैप्रोस्कोपिक, बैरिएट्रिक, हर्निया व कोलोरेक्टल सर्जन
            </p>
            <p className="mt-6 max-w-xl text-body text-charcoal">
              सर गंगा राम अस्पताल, नई दिल्ली के कंसल्टेंट सर्जन — हर्निया,
              पित्ताशय, बवासीर, आँत-मलाशय और वज़न से जुड़ी समस्याओं का इलाज।
              भारत और ताइवान में प्रशिक्षित।
            </p>
            <div className="mt-8">
              <Button href="/hi/contact-us#enquiry">परामर्श बुक करें</Button>
            </div>
          </div>

          <div className="relative min-h-80 overflow-hidden rounded-card lg:min-h-0">
            <Image
              src={images.patientCheck.src}
              alt="परामर्श के दौरान मरीज़ का ब्लड प्रेशर जाँचते डॉक्टर"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Quick facts strip */}
        <dl className="mt-4 grid gap-px overflow-hidden rounded-card border border-hairline bg-hairline sm:grid-cols-3">
          <div className="bg-canvas p-6">
            <dt className="text-body-sm text-graphite">वर्तमान पद</dt>
            <dd className="mt-1 text-body-sm text-ink">
              जनरल व लैप्रोस्कोपिक सर्जरी विभाग, सर गंगा राम अस्पताल, नई दिल्ली
            </dd>
          </div>
          <div className="bg-canvas p-6">
            <dt className="text-body-sm text-graphite">योग्यताएँ</dt>
            <dd className="mt-1 text-body-sm text-ink">
              {site.qualifications.join(" · ")}
            </dd>
          </div>
          <div className="bg-canvas p-6">
            <dt className="text-body-sm text-graphite">परामर्श</dt>
            <dd className="mt-1 text-body-sm text-ink">दिल्ली · नोएडा · रुड़की</dd>
          </div>
        </dl>
      </section>

      {/* Education & experience */}
      <section className="container-site py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-10">
          <div>
            <SectionHeading eyebrow="प्रशिक्षण" title="शिक्षा" />
            <ol className="mt-10 border-l border-hairline">
              {education.map((e) => (
                <li key={e.degree} className="relative pb-8 pl-8 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute -left-[5px] top-1.5 size-2.5 rounded-pill bg-forest"
                  />
                  <p className="text-body text-ink">{e.degree}</p>
                  <p className="mt-1 text-body-sm text-graphite">{e.place}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow="प्रैक्टिस" title="अनुभव" />
            <ol className="mt-10 border-l border-hairline">
              {experience.map((e) => (
                <li key={e.role} className="relative pb-8 pl-8 last:pb-0">
                  <span
                    aria-hidden
                    className={`absolute -left-[5px] top-1.5 size-2.5 rounded-pill ${
                      e.current ? "bg-forest" : "bg-mist"
                    }`}
                  />
                  <p className="text-body text-ink">
                    {e.role}
                    {e.current ? (
                      <span className="ml-2 inline-block rounded-pill bg-sage px-2.5 py-0.5 align-middle text-caption text-forest">
                        वर्तमान
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-1 text-body-sm text-graphite">{e.place}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="container-site pb-20 md:pb-28">
        <div className="rounded-card bg-sage px-6 py-12 md:px-12 md:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading eyebrow="विशेष रुचि" tone="white" title="विशेष रुचि के क्षेत्र" />
            <ul className="flex flex-wrap gap-3">
              {focusAreas.map((f) => (
                <li
                  key={f}
                  className="rounded-pill bg-canvas px-5 py-2.5 text-body-sm text-forest"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Research & recognition */}
      <section className="container-site pb-20 md:pb-28">
        <SectionHeading
          eyebrow="रिकॉर्ड पर"
          title="शोध व सम्मान"
          lede="चुनिंदा झलकियाँ — पूरी सूची अनुरोध पर।"
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-card border border-hairline p-6 md:p-8">
            <h3 className="text-caption uppercase tracking-wide text-graphite">
              प्रकाशन
            </h3>
            <ul className="mt-5 divide-y divide-hairline">
              {publications.map((p) => (
                <li key={p.title} className="py-4 first:pt-0 last:pb-0">
                  <p className="text-body-sm text-ink">{p.title}</p>
                  <p className="mt-1 text-caption text-graphite">{p.venue}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-card bg-mint p-6 md:p-8">
              <h3 className="text-caption uppercase tracking-wide text-forest/70">
                पुरस्कार
              </h3>
              <ul className="mt-5 space-y-3">
                {awards.map((a) => (
                  <li key={a} className="text-body-sm text-charcoal">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card bg-linen p-6 md:p-8">
              <h3 className="text-caption uppercase tracking-wide text-forest/70">
                शिक्षण
              </h3>
              <p className="mt-4 text-body-sm text-charcoal">
                हर्निया, बैरिएट्रिक व गुदा-रोग की राष्ट्रीय कार्यशालाओं में
                फ़ैकल्टी। नि:शुल्क सर्जरी शिविरों में सेवाएँ।
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        lang="hi"
        title="निदान हो चुका है और सर्जिकल राय चाहिए?"
        sub="अपनी रिपोर्ट्स लेकर परामर्श पर आइए — लौटते समय आपके पास अपने विकल्पों की साफ़ तस्वीर होगी।"
      />
    </>
  );
}
