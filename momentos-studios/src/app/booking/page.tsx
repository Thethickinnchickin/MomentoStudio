"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Booking.module.css";
import { Playfair_Display, Poiret_One } from "next/font/google";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const poiret = Poiret_One({ subsets: ["latin"], weight: "400" });

export default function BookingPage() {
  const [loading, setLoading] = useState(true); // Track iframe loading

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const steps = [
    {
      title: "Pick your block",
      detail: "Choose the session length that matches your project.",
    },
    {
      title: "Confirm your time",
      detail: "Lock in a start time and let us know if you want an engineer.",
    },
    {
      title: "Show up ready",
      detail: "We prep the room so you can walk in and record fast.",
    },
  ];

  const includes = [
    "Full access to control room and booth",
    "PMC6 monitors calibrated with SoundID",
    "UA Apollo x8 + API 2500 chain",
    "Fast Wi-Fi, parking tips, and stocked fridge",
    "Lighting setups for video and socials",
  ];

  const sessions = [
    { title: "1-Hour Studio Time", desc: "$60 - Quick vocals, edits, ideas" },
    { title: "2-Hour Studio Time", desc: "$120 - Focused vocal or beat sessions" },
    { title: "4-Hour Studio Session", desc: "$200 - Deep tracking and production" },
    { title: "8-Hour Studio Session", desc: "$350 - Full recording day" },
    { title: "24-Hour Lockout", desc: "$400 - Total creative takeover" },
  ];

  useEffect(() => {
    trackEvent("booking_page_view");
  }, []);

  return (
    <section className={styles.bookingSection}>
      <motion.div
        className={styles.bookingContent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Left Column: Text + Image */}
        <motion.div className={styles.contentWrapper}>
          <h1 className={`${styles.heading} ${playfair.className}`}>Schedule your Studio Time</h1>
          <p className={`${styles.text} ${poiret.className}`}>
            Choose the block that fits your project - the room, gear, and engineer (if you want one)
            are 100% yours for the entire time.
          </p>
          <p className={`${styles.text} ${poiret.className}`}>
            All rates include the full setup: PMC6 monitoring, API 2500, DJ rig, rooftop access,
            cold brew, and snacks.
          </p>
          <p className={`${styles.text} ${poiret.className}`}>
            Questions? Hit <a href="mailto:info@momentos.studio">info@momentos.studio</a> or book
            directly below.
          </p>
          <p className={`${styles.text} ${poiret.className}`}>Pacific Beach is ready when you are.</p>

          <div className={styles.infoGrid}>
            <div>
              <h2 className={`${styles.subHeading} ${playfair.className}`}>How booking works</h2>
              <ol className={styles.steps}>
                {steps.map((step) => (
                  <li key={step.title} className={styles.step}>
                    <div className={styles.stepTitle}>{step.title}</div>
                    <p className={styles.stepDetail}>{step.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className={`${styles.subHeading} ${playfair.className}`}>What's included</h2>
              <ul className={styles.includes}>
                {includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className={`${styles.subHeading} ${playfair.className}`}>Popular sessions</h2>
            <div className={styles.sessionRow}>
              {sessions.map((session) => (
                <div key={session.title} className={styles.sessionCard}>
                  <h3>{session.title}</h3>
                  <p>{session.desc}</p>
                </div>
              ))}
            </div>
            <p className={styles.note}>
              Need a custom lockout or late-night start? Email us and we will make it work.
            </p>
          </div>

          <motion.div
            className={styles.imageWrapper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              src="/images/studio1.png"
              alt="Studio Room"
              width={600}
              height={400}
              sizes="(max-width: 1000px) 100vw, 600px"
              className={styles.image}
            />
          </motion.div>
        </motion.div>

        {/* Right Column: Trafft Scheduler */}
        <motion.div className={styles.schedulerWrapper}>
          {loading && (
            <div className={styles.loadingOverlay}>
              <div className={styles.spinner}></div>
              <p>Loading scheduler...</p>
            </div>
          )}
          <iframe
            src="https://momentosstudios.trafft.com/"
            title="Book Studio Time"
            className={styles.schedulerIframe}
            onLoad={() => setLoading(false)}
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
}
