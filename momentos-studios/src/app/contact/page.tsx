"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import ContactSection from "@/components/ContactSection";

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
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("Failed to send. Please try again.");
        }
      );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>

      <p className={styles.paragraph}>
        Ready to book, ask about rates, or just swing by for a tour and coffee?
        Hit us up — we usually reply within an hour (often sooner).
      </p>

      <div className={styles.contactInfo}>
        <p><strong>Email →</strong> info@momentos.studio</p>
        <p><strong>Phone / Text →</strong> (619) 357-5414</p>
        <p><strong>DMs →</strong> @momentosstudios on Instagram</p>
      </div>

      <h2 className={styles.subHeading}>Or fill out the form</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label className={styles.label}>Name (required)</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div>
          <label className={styles.label}>Email (required)</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div>
          <label className={styles.label}>Message</label>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={styles.textarea}
          />
        </div>

        <button type="submit" className={styles.button}>Send Message</button>
        {status && <p className={styles.status}>{status}</p>}
      </form>

      <ContactSection />
    </div>
  );
}
