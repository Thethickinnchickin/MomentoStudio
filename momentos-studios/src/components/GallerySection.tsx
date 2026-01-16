import Link from "next/link";
import styles from "./GallerySection.module.css";
import GalleryGrid from "./GalleryGrid";

export default function GallerySection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.kicker}>Studio Gallery</p>
        <h2 className={styles.title}>See the rooms, lighting, and vibe</h2>
        <p className={styles.subtitle}>
          A few highlights from the control room, vocal booth, and creative spaces.
        </p>
      </div>

      <GalleryGrid />

      <div className={styles.ctaRow}>
        <Link href="/gallery" className={styles.ctaLink}>
          View full gallery
        </Link>
        <Link href="/booking" className={styles.ctaButton}>
          Book a session
        </Link>
      </div>
    </section>
  );
}
