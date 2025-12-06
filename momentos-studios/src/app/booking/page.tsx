"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Booking.module.css";
import { Playfair_Display, Poiret_One } from "next/font/google";
import { useState } from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","700"] });
const poiret = Poiret_One({ subsets: ["latin"], weight: "400" });

export default function BookingPage() {
  const [loading, setLoading] = useState(true); // Track iframe loading

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

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
            Choose the block that fits your project — the room, gear, and engineer (if you want one) are 100% yours for the entire time.
          </p>
          <p className={`${styles.text} ${poiret.className}`}>
            All rates include the full setup: PMC6 monitoring, API 2500, DJ rig, rooftop access, cold brew, and snacks.
          </p>
          <p className={`${styles.text} ${poiret.className}`}>
            Questions? Hit <a href="mailto:info@momentos.studio">info@momentos.studio</a> or book directly below.
          </p>
          <p className={`${styles.text} ${poiret.className}`}>Pacific Beach is ready when you are. 🌊🎙️</p>

          <motion.div className={styles.imageWrapper} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Image
              src="/images/studio1.png"
              alt="Studio Room"
              width={600}
              height={400}
              className={styles.image}
            />
          </motion.div>
        </motion.div>

        {/* Right Column: Scheduler */}
        <motion.div className={styles.schedulerWrapper}>
          {loading && (
            <div className={styles.loadingOverlay}>
              <div className={styles.spinner}></div>
              <p>Loading scheduler...</p>
            </div>
          )}
          <iframe
            src="https://app.acuityscheduling.com/schedule.php?owner=37744896"
            title="Book Studio Time"
            className={styles.schedulerIframe}
            onLoad={() => setLoading(false)}
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
}
