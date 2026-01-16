'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./AboutSection.module.css";
import { Poiret_One } from "next/font/google";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

// Poiret One only has 400
const poiret = Poiret_One({
  subsets: ["latin"],
  weight: "400",
});

export default function AboutSection() {
  const sessions = [
    { title: "1-Hour Studio Time", desc: "$60 - Quick vocals, edits, ideas", img: "/images/card1.png" },
    { title: "2-Hour Studio Time", desc: "$120 - Focused vocal or beat sessions", img: "/images/card2.png" },
    { title: "4-Hour Studio Session", desc: "$200 - Deep tracking / comping / production", img: "/images/card3.png" },
    { title: "8-Hour Studio Session", desc: "$350 - Full recording day", img: "/images/card4.png" },
    { title: "24-Hour Lockout", desc: "$400 - Total creative takeover", img: "/images/card5.png" },
  ];

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <section id="about" className={`${styles.section}`}>
      <div className={styles.wrapper}>

        <motion.div
          className={styles.logoWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Link href="/">
            <Image
              src="/images/notlogo.png"
              alt="Momentos Studios"
              width={120}
              height={120}
              sizes="120px"
              className={styles.logoImage}
            />
          </Link>
        </motion.div>

        <motion.h2 className={styles.tagline} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          Our Studio
        </motion.h2>

        <motion.h1 className={styles.heading} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          About Our Studio
        </motion.h1>

        <motion.p className={`${styles.text} ${poiret.className}`} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          Just a few blocks from the Pacific Beach boardwalk, Momentos is the high-end recording studio San Diego artists want to live in.
        </motion.p>

        <motion.p className={`${styles.text} ${poiret.className}`} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          We built this place to give you world-class sound without attitude, deadlines without pressure, and an environment that feels more like a beach house than a factory.
        </motion.p>

        <motion.div className={styles.imageRow} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Image
            src="/images/studio2.png"
            alt="Equipment"
            width={400}
            height={260}
            sizes="(max-width: 900px) 100vw, 400px"
            className={styles.photo}
          />
          <Image
            src="/images/studio3.png"
            alt="Creative Space"
            width={400}
            height={260}
            sizes="(max-width: 900px) 100vw, 400px"
            className={styles.photo}
          />
          <Image
            src="/images/studio1.png"
            alt="Studio Room"
            width={400}
            height={260}
            sizes="(max-width: 900px) 100vw, 400px"
            className={styles.photo}
          />
        </motion.div>

        <motion.p className={`${styles.text} ${poiret.className}`} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          The control room is anchored by PMC6 active monitors calibrated dead-flat with SoundID, powered by UA Apollo x8, glued together with API 2500+ - vocals through Vintech X73i, Sphere DLX, and a curated mic locker.
        </motion.p>

        <motion.p className={`${styles.text} ${poiret.className}`} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          Whether you need fast tracking, mixing, production, DJ recording, or full lockouts - we built this studio for flow and creative freedom.
        </motion.p>

        <Link
          href="/booking"
          onClick={() => trackEvent("booking_cta_click", { source: "about_sessions" })}
        >
          <motion.div className={styles.sessionGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            {sessions.map((session, index) => (
              <motion.div
                key={index}
                className={styles.session}
                style={{ backgroundImage: `url(${session.img})` }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className={styles.overlay}></div>
                <h3>{session.title}</h3>
                <p >{session.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Link>


        <div className={styles.ctaWrapper}>
          <Link href="/booking">
              <button
                className={styles.button}
                onClick={() => trackEvent("booking_cta_click", { source: "about_cta" })}
              >
                Book Now
              </button>
          </Link>
        </div>
      </div>
    </section>
  );
}


