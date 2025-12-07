import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Logo centered */}
        <div className={styles.footerLogoWrapper}>
          <Image
            src="/images/logo-white.png"
            alt="Momentos Studios Logo"
            width={60}   // smaller, visible
            height={60}
            priority={true} // loads quickly for LCP
            className={styles.footerLogo}
          />
        </div>

        {/* Text */}
        <p className={styles.footerText}>
          © {new Date().getFullYear()} Momentos Studios. All rights reserved.
        </p>

        {/* Social links */}
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>Instagram</a>
          <a href="#" className={styles.socialLink}>TikTok</a>
        </div>
      </div>
    </footer>
  );
}
