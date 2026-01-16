"use client";

import Link from "next/link";
import styles from "./MobileBookCTA.module.css";
import { trackEvent } from "@/lib/analytics";

export default function MobileBookCTA() {
  return (
    <div className={styles.wrapper}>
      <Link
        href="/booking"
        className={styles.button}
        onClick={() => trackEvent("booking_cta_click", { source: "mobile_cta" })}
      >
        Book Now
      </Link>
    </div>
  );
}
