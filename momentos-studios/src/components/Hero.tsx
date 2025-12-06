import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Video */}
      <video
        className={styles.video}
        src="/videos/studio.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for content */}
      <div className={styles.overlay}>
        {/* Logo Card */}
        <div className={styles.logoCard}>
          <Image
            src="/images/logo.png"
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
