"use client";

import { useState, useEffect } from "react";
import styles from "./faq.module.css";

export default function FAQPage() {
  const faqs = [
    { question: "Where exactly are you located?", answer: "Just a few blocks..." },
    { question: "Do you have parking?", answer: "There is paid street parking..." },
    { question: "What's included in the rate?", answer: "Full access..." },
    { question: "Can I bring my own hard drives / plug-ins?", answer: "100%..." },
    { question: "What are your hours?", answer: "Basically 24/7..." },
    { question: "How many people can comfortably be in the studio?", answer: "4–5 people..." },
    { question: "Food / drinks?", answer: "Snacks + food nearby..." },
    { question: "Can I smoke / 420 friendly?", answer: "Back patio available..." },
    { question: "Do you do video or podcast recording?", answer: "Yes..." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  return (
    <section className={`${styles.faqSection} ${loaded ? styles.loaded : ""}`}>
      <h1 className={styles.heading}>Frequently Asked Questions</h1>

      <div className={styles.faqList}>
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              openIndex === index ? styles.active : ""
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className={styles.question}>{item.question}</div>
            {openIndex === index && (
              <div className={styles.answer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>

      <p className={styles.contactNote}>
        Still got questions? Just shoot us a text or email —
        <a href="mailto:info@momentosstudios.com">
          {" "}
          info@momentosstudios.com
        </a>
        — we answer fast.
      </p>
    </section>
  );
}
