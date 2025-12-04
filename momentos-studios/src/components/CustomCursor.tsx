"use client";

import { useEffect, useState } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", moveCursor);

    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div
        className={styles.cursorOuter}
        style={{ left: position.x, top: position.y }}
      />
      <div
        className={styles.cursorInner}
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
}
