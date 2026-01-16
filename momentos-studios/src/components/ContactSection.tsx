import Image from "next/image";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.heading}>Follow us on social</h2>
      <div className={styles.iconGroup}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/X.svg" alt="X" width={40} height={40} sizes="40px" />
        </a>
        <a href="https://www.instagram.com/momentos__studios/" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/instagram.svg" alt="Instagram" width={40} height={40} sizes="40px" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/facebook.svg" alt="Facebook" width={40} height={40} sizes="40px" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/youtube.svg" alt="YouTube" width={40} height={40} sizes="40px" />
        </a>
      </div>
    </section>
  );
}
