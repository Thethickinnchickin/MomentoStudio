"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./MobileBookCTA.module.css";
import { trackEvent } from "@/lib/analytics";

export default function MobileBookCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (pathname === "/booking") {
      setShow(false);
      return;
    }

    if (pathname !== "/") {
      setShow(true);
      return;
    }

    const target = document.getElementById("hero-book-cta");
    if (!target) {
      setShow(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(!entry.isIntersecting);
      },
      { root: null, threshold: 0.15 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [pathname]);

  if (pathname === "/booking" || !show) {
    return null;
  }

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
