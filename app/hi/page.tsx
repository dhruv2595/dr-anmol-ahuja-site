import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { PillBadge } from "@/components/PillBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckItem } from "@/components/CheckItem";
import { CtaBand } from "@/components/CtaBand";
import { AssessmentTool } from "@/components/AssessmentTool";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Reveal } from "@/components/Reveal";
import { ConvergingLines } from "@/components/graphics/LineArt";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "दिल्ली NCR में लैप्रोस्कोपिक व बैरिएट्रिक सर्जन | डॉ. अनमोल आहूजा" },
  description:
    "दिल्ली, नोएडा और रुड़की में आधुनिक लैप्रोस्कोपिक, बैरिएट्रिक, हर्निया व कोलोरेक्टल सर्जरी। डॉ. अनमोल आहूजा, सर गंगा राम अस्पताल — परामर्श बुक करें।",
  alternates: {
    canonical: "/hi",
    languages: { "en-IN": "/", "hi-IN": "/hi" },
  },
};

const stats = [
  { value: "1–2 दिन", label: "में ज़्यादातर मरीज़ सर्जरी के बाद घर लौट जाते हैं" },
  { value: "80–90%", label: "अतिरिक्त वज़न आम तौर पर वज़न घटाने की सर्जरी के बाद घटता है" },
  { value: "3", label: "क्लिनिक — दिल्ली, नोएडा और रुड़की" },
  { value: "4", label: "शोध-पत्र Obesity Surgery जर्नल में" },
];

const steps = [
  {
    n: "01",
    title: "परामर्श",
    body: "अपनी रिपोर्ट्स लेकर आइए। आपको साफ़ निदान मिलेगा और हर विकल्प आसान भाषा में समझाया जाएगा — सर्जरी उनमें से सिर्फ़ एक है।",
  },
  {
    n: "02",
    title: "योजना",
    body: "अगर सर्जरी आपके लिए सही है, तो आपको पहले से पता होगा कि क्या होगा, अस्पताल में कितने दिन लगेंगे, और रिकवरी कैसी दिखेगी।",
  },
  {
    n: "03",
    title: "रिकवरी",
    body: "ज़्यादातर मरीज़ एक-दो दिन में घर लौट जाते हैं। फ़ॉलो-अप में हम तब तक साथ रहते हैं जब तक आप पूरी तरह अपनी दिनचर्या में न लौट आएँ।",
  },
];

export default function HindiHomePage() {
  return (
    <>
      {/* Hero */}
      <section className="container-site pt-5 md:pt-6">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="flex flex-col gap-4">
            <div className="flex grow flex-col items-start rounded-card bg-sage px-6 py-10 md:px-12 md:py-12">
              <PillBadge tone="white">सर गंगा राम अस्पताल · नई दिल्ली</PillBadge>
              <h1 className="mt-5 max-w-xl font-display text-heading-lg text-forest">
                दिल्ली NCR में आधुनिक लैप्रोस्कोपिक व बैरिएट्रिक सर्जरी
              </h1>
              <p className="mt-auto max-w-lg pt-8 text-body text-charcoal">
                पित्त की पथरी, हर्निया, बवासीर या न घटने वाला वज़न — जानिए
                असल में क्या हुआ है, और पाइए ऐसा आधुनिक इलाज जो आपको कुछ ही
                दिनों में अपनी ज़िंदगी में वापस ले आए। पहले कुछ पूछना है?{" "}
                <a
                  href={site.phones[0].href}
                  className="whitespace-nowrap text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
                >
                  कॉल करें {site.phones[0].label}
                </a>
              </p>
            </div>
            <Link
              href="/hi/contact-us#enquiry"
              className="group flex items-center justify-between rounded-card bg-forest px-7 py-6 text-body text-canvas transition-colors hover:bg-forest-bright"
            >
              <span>अपॉइंटमेंट बुक करें</span>
              <svg
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-1"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M4 14h20M16 6l8 8-8 8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </Reveal>

          <Reveal delay={150} className="relative min-h-80 overflow-hidden rounded-card lg:min-h-0">
            <Image
              src={images.heroPatients.src}
              alt="परिवार के दो सदस्य बाहर मुस्कुराते हुए"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
            <p className="absolute bottom-4 left-4 rounded-pill bg-canvas/90 px-4 py-1.5 text-body-sm text-forest">
              दिल्ली · नोएडा · रुड़की में परामर्श
            </p>
          </Reveal>
        </div>
      </section>

      {/* Symptom checker */}
      <section id="symptom-checker" className="container-site scroll-mt-24 py-20 md:py-28">
        <SectionHeading
          eyebrow="लक्षण जाँच"
          eyebrowStyle="pill"
          title="समझ नहीं आ रहा क्या हुआ है?"
          lede="दो छोटे सवालों के जवाब दीजिए। हम आपको सही जानकारी तक पहुँचा देंगे — और चाहें तो डॉक्टर तक भी।"
        />
        <Reveal delay={120} className="mt-10">
          <AssessmentTool lang="hi" />
        </Reveal>
        <p className="mt-8 text-body-sm text-graphite">
          या विशेषज्ञता के हिसाब से देखें:{" "}
          {[
            { label: "वज़न घटाना", href: "/weight-loss-surgery" },
            { label: "हर्निया", href: "/hernia" },
            { label: "आँत व मलाशय", href: "/colorectal" },
            { label: "बवासीर व गुदा रोग", href: "/proctology" },
            { label: "पित्ताशय व पाचन", href: "/mis-laparoscopic-surgery" },
          ].map((l, i, arr) => (
            <span key={l.href}>
              <Link
                href={l.href}
                className="text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
              >
                {l.label}
              </Link>
              {i < arr.length - 1 ? " · " : ""}
            </span>
          ))}
          <span className="text-graphite/70"> (विस्तृत जानकारी अंग्रेज़ी में)</span>
        </p>
      </section>

      {/* Statement */}
      <section aria-label="हमारा वादा" className="bg-mist text-forest">
        <div className="container-site pt-16 md:pt-24">
          <Reveal>
            <p className="max-w-4xl font-display text-heading-lg">
              सर्जरी की वजह से ज़िंदगी रुकनी नहीं चाहिए। हमारे ज़्यादातर मरीज़
              उसी शाम चलने-फिरने लगते हैं — और एक-दो दिन में घर लौट जाते हैं।
            </p>
          </Reveal>
        </div>
        <Reveal effect="draw" className="mt-10 md:mt-14">
          <ConvergingLines className="h-28 w-full md:h-40" />
        </Reveal>
        <div aria-hidden className="h-10 md:h-16" />
      </section>

      {/* Meet the doctor */}
      <section className="container-site py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal className="relative min-h-[26rem] overflow-hidden rounded-card lg:min-h-[32rem]">
            <Image
              src={images.drAnmolAhuja.src}
              alt="डॉ. अनमोल आहूजा, लैप्रोस्कोपिक और बैरिएट्रिक सर्जन"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-[center_30%]"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="आपके सर्जन"
              eyebrowStyle="pill"
              title="मिलिए डॉ. अनमोल आहूजा से"
              lede="सर गंगा राम अस्पताल, नई दिल्ली के कंसल्टेंट सर्जन — भारत और ताइवान में प्रशिक्षित, और पूरी तरह आधुनिक लैप्रोस्कोपिक इलाज पर केंद्रित।"
            />
            <p className="mt-5 max-w-xl text-body-sm text-charcoal">
              मरीज़ कहते हैं कि वे हर बात साफ़-साफ़ समझाते हैं और कभी
              जल्दबाज़ी में फ़ैसला नहीं करवाते। सर्जरी की सलाह तभी दी जाती
              है जब वही आपके लिए वाक़ई सबसे सही विकल्प हो।
            </p>
            <ul className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              <CheckItem icon="hospital">कंसल्टेंट, सर गंगा राम अस्पताल, नई दिल्ली</CheckItem>
              <CheckItem icon="award">एडवांस्ड व कोलोरेक्टल सर्जरी में फ़ेलोशिप</CheckItem>
              <CheckItem icon="book">
                <em>Obesity Surgery</em> जर्नल में शोध प्रकाशित
              </CheckItem>
              <CheckItem icon="pin">दिल्ली, नोएडा और रुड़की में परामर्श</CheckItem>
            </ul>
            <div className="mt-8">
              <Button href="/hi/about-us">डॉ. आहूजा के बारे में और जानें</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Patient journey */}
      <section className="container-site pb-20 md:pb-28">
        <SectionHeading eyebrow="क्या उम्मीद करें" title="तीन क़दम, कोई सरप्राइज़ नहीं" />
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.n}>
              <Reveal
                delay={i * 130}
                className="h-full rounded-card border border-hairline p-6 md:p-8"
              >
                <p aria-hidden className="text-body-sm text-forest/50">{s.n}</p>
                <h3 className="mt-2 text-subheading text-forest">{s.title}</h3>
                <p className="mt-3 text-body-sm text-charcoal">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Stats */}
      <section className="container-site pb-20 md:pb-28" aria-label="प्रैक्टिस एक नज़र में">
        <Reveal>
        <ul className="grid gap-px overflow-hidden rounded-card bg-forest sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <li key={s.label} className="p-7 md:p-9">
              <p className="text-heading-lg font-light text-canvas">{s.value}</p>
              <p className="mt-3 text-body-sm text-canvas/70">{s.label}</p>
            </li>
          ))}
        </ul>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="container-site pb-20 md:pb-28">
        <SectionHeading eyebrow="मरीज़ों की ज़ुबानी" title="उन्हीं के शब्दों में" />
        <Reveal delay={100} className="mt-12">
          <TestimonialCarousel lang="hi" />
        </Reveal>
      </section>

      <CtaBand
        lang="hi"
        title="अपने विकल्पों पर डॉ. आहूजा से बात कीजिए"
        sub="दिल्ली, नोएडा या रुड़की में परामर्श बुक करें — या सिर्फ़ सवाल पूछने हों तो पहले कॉल कर लें।"
      />
    </>
  );
}
