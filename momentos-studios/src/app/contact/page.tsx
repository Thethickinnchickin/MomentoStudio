"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<null | string>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // Replace these with your EmailJS IDs
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(
        () => {
          setStatus("Message sent!");
          setForm({ name: "", email: "", message: "" }); // clear form
          trackEvent("contact_form_submit", { status: "success" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("Failed to send. Please try again.");
          trackEvent("contact_form_submit", { status: "error" });
        }
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <Image
            src="/images/notlogo.png"
            alt="Momentos Studios"
            width={120}
            height={120}
            priority
            className={styles.logoImage}
          />
        </Link>
      </div>
      <h1 className={styles.heading}>Contact Us</h1>

      <p className={styles.paragraph}>
        Ready to book, ask about rates, or just swing by for a tour and coffee?
        Hit us up - we usually reply within an hour (often sooner).
      </p>

      <div className={styles.contactInfo}>
        <p><strong>Email - </strong> info@momentos.studio</p>
        <p><strong>Phone / Text - </strong> (619) 357-5414</p>
        <p><strong>DMs - </strong> @momentosstudios on Instagram</p>
      </div>
      <div className={styles.mapSection}>
        <h2 className={styles.subHeading}>Find us</h2>
        <p className={styles.mapNote}>
          1135 Garnet Ave, San Diego, CA 92101 - a few blocks from the Pacific Beach boardwalk.
        </p>
        <div className={styles.mapFrame}>
          <iframe
            title="Momentos Studios map"
            src="https://www.google.com/maps?q=1135%20Garnet%20Ave%20San%20Diego%20CA%2092101&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <h2 className={styles.subHeading}>Or fill out the form</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label className={styles.label} htmlFor="contact-name">Name (required)</label>
          <input
            id="contact-name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div>
          <label className={styles.label} htmlFor="contact-email">Email (required)</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div>
          <label className={styles.label} htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={styles.textarea}
          />
        </div>

        <button type="submit" className={styles.button}>Send Message</button>
        {status && <p className={styles.status} aria-live="polite">{status}</p>}
      </form>

      <ContactSection />
    </div>
  );
}


