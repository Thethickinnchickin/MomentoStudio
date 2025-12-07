"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/images/logo-white.png"
            alt="Momentos Studios"
            width={60}
            height={60}
            priority
          />
        </Link>
      </div>

      {/* Hamburger button for mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isOpen ? styles.bar1 : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.bar2 : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.bar3 : ""}`}></div>
      </div>

      {/* Links */}
      <div className={`${styles.links} ${isOpen ? styles.active : ""}`}>
        <a href="/about">About Us</a>
        <a href="/faq">FAQs</a>
        <a href="/contact">Contact</a>

        <div className={styles.iconGroup}>
          <a
            href="https://www.instagram.com/momentos__studios/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/instagram-nav.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a href="mailto:info@momentos.studio">
            <Image
              src="/icons/email.svg"
              alt="Email"
              width={34}
              height={24}
              className={styles.emailIcon}
            />
          </a>
        </div>

        <Link href="/booking">
          <button className={styles.button}>Book Now</button>
        </Link>
      </div>
    </nav>
  );
}
