"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);


  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play the video programmatically
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay might be blocked on iOS until user interaction
          console.log("iOS blocked autoplay; waiting for user interaction.");
        });
      }
    }
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Video */}
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        disablePictureInPicture
        controls={false}
      >
        <source src="/videos/studio.mp4" type="video/mp4" />
      </video>

      {/* Overlay for content */}
      <div className={styles.overlay}>
        {/* Logo Card */}
        <div className={styles.logoCard}>
          <Image
            src="/images/notlogo.png"
            alt="Momentos Studios"
            width={180}
            height={180}
            className={styles.logo}
          />
        </div>

        {/* Heading & Tagline */}
        <div className={styles.textContent}>
          <h1>Momentos Studios</h1>
          <p>Major-Label Sound. Beach-House Feels.</p>
        </div>

        <Link href="/booking">
          <button className={styles.button}>Book Now</button>
        </Link>
      </div>
    </section>
  );
}
