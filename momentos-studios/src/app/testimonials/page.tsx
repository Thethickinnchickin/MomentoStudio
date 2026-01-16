import styles from "./TestimonialsPage.module.css";
import TestimonialsGrid from "@/components/TestimonialsGrid";

export default function TestimonialsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <p className={styles.kicker}>Testimonials</p>
        <h1 className={styles.title}>Artists and producers love the vibe</h1>
        <p className={styles.subtitle}>
          A few quick notes from sessions in the control room and booth.
        </p>
      </div>

      <TestimonialsGrid />
    </section>
  );
}
