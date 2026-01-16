import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Logo centered */}
        <div className={styles.footerLogoWrapper}>
          <Image
            src="/images/notlogo.png"
            alt="Momentos Studios Logo"
            width={60}   // smaller, visible
            height={60}
            sizes="60px"
            className={styles.footerLogo}
          />
        </div>

        {/* Text */}
        <p className={styles.footerText}>
          (c) {new Date().getFullYear()} Momentos Studios. All rights reserved.
        </p>

        {/* Social links */}
        <div className={styles.socialLinks}>
          <a
            href="https://www.instagram.com/momentos__studios/"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a href="mailto:info@momentos.studio" className={styles.socialLink}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}





