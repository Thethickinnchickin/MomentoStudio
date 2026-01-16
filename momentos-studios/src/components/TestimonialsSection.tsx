import Link from "next/link";
import styles from "./TestimonialsSection.module.css";
import TestimonialsGrid from "./TestimonialsGrid";

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.kicker}>Testimonials</p>
        <h2 className={styles.title}>Artists and producers love the vibe</h2>
        <p className={styles.subtitle}>
          Quick notes from sessions in the control room and booth.
        </p>
      </div>

      <TestimonialsGrid />

      <div className={styles.ctaRow}>
        <Link href="/testimonials" className={styles.ctaLink}>
          Read more testimonials
        </Link>
        <Link href="/booking" className={styles.ctaButton}>
          Book a session
        </Link>
      </div>
    </section>
  );
}
