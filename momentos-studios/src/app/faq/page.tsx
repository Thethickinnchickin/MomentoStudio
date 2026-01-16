"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import styles from "./faq.module.css";

export default function FAQPage() {
  const faqs = [
    {
      question: "Where exactly are you located?",
      answer:
        "Just a few blocks from the Pacific Beach boardwalk in San Diego:\n1135 Garnet Ave, San Diego, CA 92101",
    },
    {
      question: "Do you have parking?",
      answer:
        "There is paid street parking on Garnet Avenue directly in front of the store or side parking that is free on Hornblend.",
    },
    {
      question: "What's included in the rate?",
      answer:
        "Full access to the control room, vocal booth, all listed gear (PMC6s, Apollo x8, API 2500+, DJ rig, synths, etc.), fast Wi-Fi, drinks, and some snacks. Engineer is extra if you want one.",
    },
    {
      question: "Can I bring my own hard drives / plug-ins?",
      answer: "100%. We have USB-C/Thunderbolt hubs everywhere.",
    },
    {
      question: "What are your hours?",
      answer:
        "Basically 24/7. You pick the start time. Lockouts can run as long as you need.",
    },
    {
      question: "How many people can comfortably be in the control room / live room?",
      answer: "4-5 people comfortably.",
    },
    {
      question: "Food / drinks?",
      answer:
        "Some drinks, water, snacks = free. Tons of food spots on Garnet Avenue.",
    },
    {
      question: "Can I smoke / 420 friendly?",
      answer:
        "No smoking in the studio, but we have a back patio that you can smoke in. Vapes are okay.",
    },
    {
      question: "Do you do video or podcast recording?",
      answer:
        "Yes - we have multiple phone mounts around the studio, lighting, and multi-mic setups available.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/\n/g, " "),
      },
    })),
  };

  return (
    <section className={`${styles.faqSection} ${loaded ? styles.loaded : ""}`}>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className={styles.heading}>Frequently Asked Questions</h1>

      <div className={styles.faqList}>
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${openIndex === index ? styles.active : ""}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            role="button"
            tabIndex={0}
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setOpenIndex(openIndex === index ? null : index);
              }
            }}
          >
            <div className={styles.question}>{item.question}</div>
            {openIndex === index && (
              <div className={styles.answer} id={`faq-answer-${index}`}>
                {item.answer.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <p className={styles.contactNote}>
        Still got questions? Just shoot us a text or email -{" "}
        <a href="mailto:info@momentosstudios.com">
          info@momentosstudios.com
        </a>{" "}
        - we answer fast.
      </p>
    </section>
  );
}



