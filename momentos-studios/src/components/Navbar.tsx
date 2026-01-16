"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { trackEvent } from "@/lib/analytics";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/images/notlogo.png"
            alt="Momentos Studios"
            width={60}
            height={60}
            sizes="60px"
            priority
          />
        </Link>
      </div>

      {/* Hamburger button for mobile */}
      <button
        type="button"
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
      >
        <div className={`${styles.bar} ${isOpen ? styles.bar1 : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.bar2 : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.bar3 : ""}`}></div>
      </button>

      {/* Links */}
      <div
        id="primary-navigation"
        className={`${styles.links} ${isOpen ? styles.active : ""}`}
      >
        <a href="/about">About Us</a>
        <a href="/gallery">Gallery</a>
        <a href="/testimonials">Testimonials</a>
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
              sizes="24px"
            />
          </a>
          <a href="mailto:info@momentos.studio">
            <Image
              src="/icons/email.svg"
              alt="Email"
              width={34}
              height={24}
              sizes="34px"
              className={styles.emailIcon}
            />
          </a>
        </div>

        <Link href="/booking">
          <button
            className={styles.button}
            onClick={() => trackEvent("booking_cta_click", { source: "navbar" })}
          >
            Book Now
          </button>
        </Link>
      </div>
    </nav>
  );
}
