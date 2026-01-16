"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GA_ID } from "@/lib/analytics";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_ID || typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("config", GA_ID, { page_path: pathname });
  }, [pathname]);

  return null;
}
