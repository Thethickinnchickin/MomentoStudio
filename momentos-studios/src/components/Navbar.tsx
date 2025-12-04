import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/logo.png"
          alt="Momentos Studios"
          width={60}
          height={60}
          priority
        />
        <span>Momentos Studios</span>
      </div>

      <div className={styles.links}>
        <a href="#services">About Us</a>
        <a href="#studio">FAQs</a>
        <a href="#booking">Contact</a>

        <div className={styles.iconGroup}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/email.svg"
              alt="Email"
              width={34}
              height={24}
              className={styles.emailIcon}
            />
          </a>
        </div>

        <button className={styles.button}>Book Now</button>


      </div>
    </nav>
  );
}
