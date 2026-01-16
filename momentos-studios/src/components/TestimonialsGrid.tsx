import styles from "./TestimonialsGrid.module.css";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsGrid() {
  return (
    <div className={styles.grid}>
      {testimonials.map((item) => (
        <div key={item.name} className={styles.card}>
          <p className={styles.quote}>"{item.quote}"</p>
          <div className={styles.meta}>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.role}>{item.role}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
