"use client";

import { useState } from "react";
import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";
import type { Lang } from "@/lib/i18n";
import { iconMap, IconCheckCircle, type IconName } from "@/components/icons";

type Result = {
  /** slots into "This sounds like it could be …" */
  name?: string;
  blurb: string;
  href?: string;
  linkLabel?: string;
};

type Option = {
  label: string;
  icon?: IconName;
  /** rendered as a quiet full-width row below the main grid */
  ghost?: boolean;
  next?: StepId;
  result?: Result;
};
type StepId = "start" | "digestion" | "below" | "lump" | "weight";
type Steps = Record<StepId, { question: string; options: Option[] }>;

const ui = {
  en: {
    progress: (n: number) => `Question ${n} of 2`,
    done: "Done — here's what we found",
    back: "Back",
    basedOn: "Based on what you picked",
    itCouldBe: (name: string) => `This sounds like it could be ${name}.`,
    together: "Let's figure it out together.",
    book: "Book a consultation",
    whatsapp: "WhatsApp us instead",
    whatsappMsg: (name?: string) =>
      name
        ? `Hello, I used the symptom checker on your website — it suggested ${name}. I'd like to talk to ${site.doctorName}.`
        : "Hello, I'd like help understanding my symptoms.",
    disclaimer:
      "This is a pointer, not a diagnosis — only a consultation can give you that.",
    restart: "Start over",
    bookHref: "/contact-us#enquiry",
  },
  hi: {
    progress: (n: number) => `सवाल ${n} / 2`,
    done: "हो गया — यह रहा नतीजा",
    back: "पीछे",
    basedOn: "आपके जवाबों के आधार पर",
    itCouldBe: (name: string) => `यह ${name} हो सकता है।`,
    together: "आइए, मिलकर समझते हैं।",
    book: "परामर्श बुक करें",
    whatsapp: "WhatsApp पर पूछें",
    whatsappMsg: (name?: string) =>
      name
        ? `नमस्ते, मैंने वेबसाइट पर लक्षण जाँच की — उसने ${name} की ओर इशारा किया। मैं ${site.doctorName} से बात करना चाहता/चाहती हूँ।`
        : "नमस्ते, मुझे अपने लक्षण समझने में मदद चाहिए।",
    disclaimer:
      "यह सिर्फ़ एक इशारा है, निदान नहीं — वह सिर्फ़ परामर्श से ही मिल सकता है।",
    restart: "फिर से शुरू करें",
    bookHref: "/hi/contact-us#enquiry",
  },
} as const;

const genericEn: Result = {
  blurb:
    "Some symptoms need a proper look before anyone can say what they are. Send us a short note or call — you'll get a clear answer, usually the same day.",
};

const genericHi: Result = {
  blurb:
    "कुछ लक्षणों के बारे में बिना जाँच के कुछ भी कहना ठीक नहीं। हमें एक छोटा-सा संदेश भेजिए या कॉल कीजिए — आम तौर पर उसी दिन साफ़ जवाब मिल जाता है।",
};

const stepsEn: Steps = {
  start: {
    question: "Where's the trouble?",
    options: [
      { label: "My tummy or digestion", icon: "stomach", next: "digestion" },
      { label: "Down below — pain, itching or bleeding", icon: "seat", next: "below" },
      { label: "A lump or bulge somewhere", icon: "bump", next: "lump" },
      { label: "My weight", icon: "scale", next: "weight" },
      { label: "I'm not sure — help me figure it out", icon: "question", ghost: true, result: genericEn },
    ],
  },
  digestion: {
    question: "What does it feel like?",
    options: [
      {
        label: "Pain up top after meals, especially oily food",
        result: {
          name: "gallstones",
          blurb:
            "Very common, very treatable — and the pain usually stops for good after treatment.",
          href: "/gall-stone-disease",
          linkLabel: "Read about gallstones",
        },
      },
      {
        label: "Burning in the chest, acid coming up",
        result: {
          name: "acid reflux (GERD)",
          blurb:
            "When medicines stop helping, there are lasting fixes. Worth understanding your options.",
          href: "/gerd",
          linkLabel: "Read about acid reflux",
        },
      },
      {
        label: "Sharp pain low on the right side",
        result: {
          name: "appendicitis",
          blurb:
            "If the pain is severe right now, don't wait for a website — call us or go to the nearest emergency room.",
          href: "/appendicitis",
          linkLabel: "Read about appendicitis",
        },
      },
      {
        label: "Blood in stool, or bowel habits have changed",
        result: {
          name: "a bowel problem worth checking soon",
          blurb:
            "Usually it's something minor — but this is one symptom you should never sit on.",
          href: "/colorectal",
          linkLabel: "See what it could mean",
        },
      },
      { label: "Something else", result: genericEn },
    ],
  },
  below: {
    question: "Which sounds closest?",
    options: [
      {
        label: "Painful or bleeding lumps",
        result: {
          name: "piles (hemorrhoids)",
          blurb:
            "Extremely common and nothing to be embarrassed about. Modern treatment is quick and mostly painless.",
          href: "/hemorrhoids",
          linkLabel: "Read about piles",
        },
      },
      {
        label: "A sharp, tearing pain when passing stool",
        result: {
          name: "an anal fissure",
          blurb: "Painful, but very fixable — often without surgery at all.",
          href: "/anal-fissure",
          linkLabel: "Read about fissures",
        },
      },
      {
        label: "Pus or discharge from a small opening",
        result: {
          name: "a fistula",
          blurb:
            "It won't heal on its own, but treatment works well — the earlier, the simpler.",
          href: "/anal-fistula",
          linkLabel: "Read about fistulas",
        },
      },
      {
        label: "A painful boil near the tailbone",
        result: {
          name: "pilonidal disease",
          blurb: "Common in young adults. Treated properly, it stops coming back.",
          href: "/pilonidal-disease",
          linkLabel: "Read about pilonidal disease",
        },
      },
      { label: "Something else", result: genericEn },
    ],
  },
  lump: {
    question: "Where is the lump?",
    options: [
      {
        label: "In the groin",
        result: {
          name: "a hernia",
          blurb:
            "Hernias don't heal by themselves, but repair is routine and recovery is quick.",
          href: "/hernia",
          linkLabel: "Read about hernias",
        },
      },
      {
        label: "Around the belly button or an old surgery scar",
        result: {
          name: "an abdominal wall hernia",
          blurb:
            "Common after surgery or pregnancy — and fixable, usually with a short hospital stay.",
          href: "/abdominal-wall-hernia",
          linkLabel: "Read about abdominal hernias",
        },
      },
      {
        label: "It comes with acidity or heartburn",
        result: {
          name: "a hiatus hernia",
          blurb:
            "A hidden hernia at the top of the stomach can cause stubborn reflux. Good news: it's treatable.",
          href: "/hiatus-hernia-diaphragmatic-hernia",
          linkLabel: "Read about hiatus hernia",
        },
      },
      { label: "Somewhere else", result: genericEn },
    ],
  },
  weight: {
    question: "Which is true for you?",
    options: [
      {
        label: "I've tried everything and the weight stays",
        result: {
          name: "a case for weight-loss surgery",
          blurb:
            "When diets keep failing, surgery is the most reliable long-term option — patients typically lose 80–90% of excess weight.",
          href: "/weight-loss-surgery",
          linkLabel: "See how it works",
        },
      },
      {
        label: "I also have diabetes or blood pressure",
        result: {
          name: "a case for metabolic surgery",
          blurb:
            "The same operation often improves diabetes, blood pressure and sleep apnea — not just weight.",
          href: "/surgery-for-diabetes-mellitus",
          linkLabel: "Read about diabetes surgery",
        },
      },
      {
        label: "I just want to understand the options",
        result: {
          name: "a conversation worth having",
          blurb:
            "There are several procedures, and the right one depends on you. Start with the overview.",
          href: "/surgeries-for-obesity",
          linkLabel: "Compare the options",
        },
      },
    ],
  },
};

const stepsHi: Steps = {
  start: {
    question: "परेशानी कहाँ है?",
    options: [
      { label: "पेट या पाचन में", icon: "stomach", next: "digestion" },
      { label: "नीचे की तक़लीफ़ — दर्द, खुजली या ख़ून", icon: "seat", next: "below" },
      { label: "कहीं गाँठ या उभार है", icon: "bump", next: "lump" },
      { label: "मेरा वज़न", icon: "scale", next: "weight" },
      { label: "पक्का नहीं पता — समझने में मदद करें", icon: "question", ghost: true, result: genericHi },
    ],
  },
  digestion: {
    question: "कैसा महसूस होता है?",
    options: [
      {
        label: "खाने के बाद ऊपरी पेट में दर्द, ख़ासकर तला-भुना खाने पर",
        result: {
          name: "पित्त की पथरी (gallstones)",
          blurb:
            "बहुत आम और पूरी तरह इलाज योग्य — इलाज के बाद दर्द आम तौर पर हमेशा के लिए चला जाता है।",
          href: "/gall-stone-disease",
          linkLabel: "पित्त की पथरी के बारे में पढ़ें",
        },
      },
      {
        label: "सीने में जलन, खट्टी डकारें",
        result: {
          name: "एसिड रिफ्लक्स (GERD)",
          blurb:
            "जब दवाइयाँ असर करना बंद कर दें, तो स्थायी इलाज मौजूद हैं। अपने विकल्प ज़रूर समझिए।",
          href: "/gerd",
          linkLabel: "एसिड रिफ्लक्स के बारे में पढ़ें",
        },
      },
      {
        label: "पेट में नीचे दाईं ओर तेज़ दर्द",
        result: {
          name: "अपेंडिसाइटिस",
          blurb:
            "अगर दर्द अभी बहुत तेज़ है, तो वेबसाइट का इंतज़ार मत कीजिए — हमें कॉल करें या नज़दीकी इमरजेंसी में जाएँ।",
          href: "/appendicitis",
          linkLabel: "अपेंडिसाइटिस के बारे में पढ़ें",
        },
      },
      {
        label: "मल में ख़ून, या मल-त्याग की आदतें बदल गई हैं",
        result: {
          name: "आँत की ऐसी समस्या जिसकी जल्द जाँच होनी चाहिए",
          blurb:
            "अक्सर यह कुछ मामूली ही निकलता है — पर यह एक ऐसा लक्षण है जिसे कभी टालना नहीं चाहिए।",
          href: "/colorectal",
          linkLabel: "जानें इसका क्या मतलब हो सकता है",
        },
      },
      { label: "कुछ और", result: genericHi },
    ],
  },
  below: {
    question: "इनमें से क्या सबसे क़रीब लगता है?",
    options: [
      {
        label: "दर्द या ख़ून वाली गाँठें",
        result: {
          name: "बवासीर (पाइल्स)",
          blurb:
            "बेहद आम समस्या — शर्माने की कोई बात नहीं। आधुनिक इलाज तेज़ है और लगभग बिना दर्द के होता है।",
          href: "/hemorrhoids",
          linkLabel: "बवासीर के बारे में पढ़ें",
        },
      },
      {
        label: "मल त्याग करते समय तेज़, चीरने जैसा दर्द",
        result: {
          name: "एनल फ़िशर",
          blurb: "दर्दनाक ज़रूर है, पर पूरी तरह ठीक होने वाला — अक्सर बिना सर्जरी के भी।",
          href: "/anal-fissure",
          linkLabel: "फ़िशर के बारे में पढ़ें",
        },
      },
      {
        label: "किसी छोटे छेद से मवाद या रिसाव",
        result: {
          name: "फ़िस्टुला (भगंदर)",
          blurb: "यह अपने-आप नहीं भरता, पर इलाज कारगर है — जितनी जल्दी, उतना आसान।",
          href: "/anal-fistula",
          linkLabel: "फ़िस्टुला के बारे में पढ़ें",
        },
      },
      {
        label: "टेलबोन (रीढ़ के निचले सिरे) के पास दर्द भरा फोड़ा",
        result: {
          name: "पाइलोनाइडल रोग",
          blurb: "युवाओं में आम। सही इलाज के बाद यह बार-बार नहीं लौटता।",
          href: "/pilonidal-disease",
          linkLabel: "पाइलोनाइडल रोग के बारे में पढ़ें",
        },
      },
      { label: "कुछ और", result: genericHi },
    ],
  },
  lump: {
    question: "गाँठ कहाँ है?",
    options: [
      {
        label: "जाँघ के जोड़ (ग्रोइन) में",
        result: {
          name: "हर्निया",
          blurb:
            "हर्निया अपने-आप ठीक नहीं होता, पर इसकी मरम्मत बहुत सामान्य सर्जरी है और रिकवरी तेज़ होती है।",
          href: "/hernia",
          linkLabel: "हर्निया के बारे में पढ़ें",
        },
      },
      {
        label: "नाभि के आस-पास या पुरानी सर्जरी के निशान पर",
        result: {
          name: "पेट की दीवार का हर्निया",
          blurb:
            "सर्जरी या गर्भावस्था के बाद आम — और इलाज योग्य, आम तौर पर छोटे से अस्पताल-प्रवास के साथ।",
          href: "/abdominal-wall-hernia",
          linkLabel: "पेट के हर्निया के बारे में पढ़ें",
        },
      },
      {
        label: "साथ में एसिडिटी या सीने की जलन भी है",
        result: {
          name: "हायटस हर्निया",
          blurb:
            "पेट के ऊपरी हिस्से का छिपा हर्निया ज़िद्दी एसिडिटी की वजह हो सकता है। अच्छी ख़बर: इसका इलाज है।",
          href: "/hiatus-hernia-diaphragmatic-hernia",
          linkLabel: "हायटस हर्निया के बारे में पढ़ें",
        },
      },
      { label: "कहीं और", result: genericHi },
    ],
  },
  weight: {
    question: "आपके लिए कौन-सी बात सही है?",
    options: [
      {
        label: "सब आज़मा लिया, वज़न फिर भी नहीं घटता",
        result: {
          name: "वज़न घटाने की सर्जरी पर विचार करने लायक़ स्थिति",
          blurb:
            "जब डाइट बार-बार नाकाम हो, तो सर्जरी सबसे भरोसेमंद दीर्घकालिक विकल्प है — मरीज़ आम तौर पर 80–90% अतिरिक्त वज़न घटा लेते हैं।",
          href: "/weight-loss-surgery",
          linkLabel: "जानें यह कैसे काम करती है",
        },
      },
      {
        label: "मुझे डायबिटीज़ या ब्लड प्रेशर भी है",
        result: {
          name: "मेटाबॉलिक सर्जरी पर विचार करने लायक़ स्थिति",
          blurb:
            "यही ऑपरेशन अक्सर डायबिटीज़, ब्लड प्रेशर और नींद की तक़लीफ़ (स्लीप एपनिया) भी बेहतर कर देता है — सिर्फ़ वज़न नहीं।",
          href: "/surgery-for-diabetes-mellitus",
          linkLabel: "डायबिटीज़ सर्जरी के बारे में पढ़ें",
        },
      },
      {
        label: "बस अपने विकल्प समझना चाहता/चाहती हूँ",
        result: {
          name: "एक ज़रूरी बातचीत",
          blurb:
            "कई तरह की प्रक्रियाएँ हैं, और सही चुनाव आप पर निर्भर करता है। शुरुआत ओवरव्यू से कीजिए।",
          href: "/surgeries-for-obesity",
          linkLabel: "विकल्पों की तुलना करें",
        },
      },
    ],
  },
};

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M2.5 8h11M9 3.5 13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AssessmentTool({ lang = "en" }: { lang?: Lang }) {
  const steps = lang === "hi" ? stepsHi : stepsEn;
  const s = ui[lang];
  const [path, setPath] = useState<StepId[]>(["start"]);
  const [result, setResult] = useState<Result | null>(null);

  const current = steps[path[path.length - 1]];
  const questionNumber = path.length;
  const progress = result ? 100 : questionNumber === 1 ? 33 : 66;

  const back = () => {
    if (result) setResult(null);
    else if (path.length > 1) setPath(path.slice(0, -1));
  };
  const restart = () => {
    setResult(null);
    setPath(["start"]);
  };

  const pick = (o: Option) =>
    o.result ? setResult(o.result) : o.next && setPath([...path, o.next]);

  const mainOptions = current.options.filter((o) => !o.ghost);
  const ghostOptions = current.options.filter((o) => o.ghost);
  const isFirstStep = path.length === 1;

  return (
    <div className="rounded-card bg-linen p-5 md:p-10 lg:p-14">
      <div className="mx-auto max-w-4xl">
        {/* Progress */}
        <div className="flex items-center justify-between gap-4">
          <p className="text-body-sm text-charcoal">
            {result ? s.done : s.progress(questionNumber)}
          </p>
          {!result && path.length > 1 ? (
            <button
              type="button"
              onClick={back}
              className="flex items-center gap-1.5 rounded-pill border border-forest/25 px-3.5 py-1.5 text-body-sm text-forest transition-colors hover:border-forest"
            >
              <ArrowRight className="rotate-180" />
              {s.back}
            </button>
          ) : null}
        </div>
        <div
          className="mt-3 h-2 overflow-hidden rounded-pill bg-canvas"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-pill bg-forest transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div aria-live="polite">
          {result ? (
            /* ---- Result ---- */
            <div className="py-8 text-center md:py-10">
              <span className="mx-auto grid size-14 place-items-center rounded-pill bg-forest text-canvas">
                <IconCheckCircle className="size-7" />
              </span>
              <p className="mt-5 text-body-sm text-graphite">{s.basedOn}</p>
              <p className="mt-2 font-display text-heading text-forest">
                {result.name ? s.itCouldBe(result.name) : s.together}
              </p>
              <p className="mx-auto mt-4 max-w-lg text-body text-charcoal">
                {result.blurb}
              </p>
              <div className="mx-auto mt-8 flex max-w-md flex-col gap-3">
                {result.href ? (
                  <Link
                    href={result.href}
                    className="group flex items-center justify-center gap-2.5 rounded-card bg-forest px-6 py-4 text-body text-canvas transition-colors hover:bg-forest-bright"
                  >
                    {result.linkLabel}
                    <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                ) : null}
                <Link
                  href={s.bookHref}
                  className={
                    result.href
                      ? "rounded-card border border-forest/30 bg-canvas px-6 py-4 text-body text-forest transition-colors hover:border-forest"
                      : "rounded-card bg-forest px-6 py-4 text-body text-canvas transition-colors hover:bg-forest-bright"
                  }
                >
                  {s.book}
                </Link>
                <a
                  href={whatsappHref(s.whatsappMsg(result.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 text-body-sm text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
                >
                  {s.whatsapp}
                </a>
              </div>
              <p className="mt-8 text-body-sm text-graphite">{s.disclaimer}</p>
              <button
                type="button"
                onClick={restart}
                className="mt-3 text-body-sm text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
              >
                {s.restart}
              </button>
            </div>
          ) : (
            /* ---- Question ---- */
            <div className="py-6 md:py-8">
              <p className="font-display text-heading text-forest">
                {current.question}
              </p>

              {isFirstStep ? (
                <>
                  {/* Four equal icon cards */}
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {mainOptions.map((o) => {
                      const Icon = o.icon ? iconMap[o.icon] : null;
                      return (
                        <li key={o.label}>
                          <button
                            type="button"
                            onClick={() => pick(o)}
                            className="group flex h-full w-full flex-col items-start gap-4 rounded-card border-2 border-transparent bg-canvas p-5 text-left transition-colors hover:border-forest focus-visible:border-forest md:p-6"
                          >
                            {Icon ? (
                              <span className="grid size-12 shrink-0 place-items-center rounded-pill bg-linen text-forest transition-colors group-hover:bg-forest group-hover:text-canvas">
                                <Icon className="size-6" />
                              </span>
                            ) : null}
                            <span className="text-body text-ink">{o.label}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  {/* Quiet escape hatch */}
                  {ghostOptions.map((o) => {
                    const Icon = o.icon ? iconMap[o.icon] : null;
                    return (
                      <button
                        key={o.label}
                        type="button"
                        onClick={() => pick(o)}
                        className="group mt-3 flex w-full items-center justify-between gap-4 rounded-card border-2 border-dashed border-forest/25 p-4 text-left transition-colors hover:border-solid hover:border-forest md:px-6"
                      >
                        <span className="flex items-center gap-3.5">
                          {Icon ? (
                            <span className="grid size-9 shrink-0 place-items-center rounded-pill bg-canvas text-forest">
                              <Icon className="size-5" />
                            </span>
                          ) : null}
                          <span className="text-body text-charcoal">{o.label}</span>
                        </span>
                        <ArrowRight className="shrink-0 text-forest transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    );
                  })}
                </>
              ) : (
                /* Second step: one clear choice per row */
                <ul className="mt-7 flex flex-col gap-3">
                  {current.options.map((o) => (
                    <li key={o.label}>
                      <button
                        type="button"
                        onClick={() => pick(o)}
                        className="group flex w-full items-center justify-between gap-4 rounded-card border-2 border-transparent bg-canvas p-4 text-left transition-colors hover:border-forest focus-visible:border-forest md:px-6 md:py-5"
                      >
                        <span className="text-body text-ink">{o.label}</span>
                        <ArrowRight className="shrink-0 text-forest transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
