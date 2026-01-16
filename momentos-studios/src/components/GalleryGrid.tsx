"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./GalleryGrid.module.css";

type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function GalleryGrid() {
  const images = useMemo<GalleryImage[]>(
    () => [
      { src: "/images/studio1.png", alt: "Control room overview", width: 1200, height: 800 },
      { src: "/images/studio2.png", alt: "Studio equipment detail", width: 1200, height: 800 },
      { src: "/images/studio3.png", alt: "Creative lounge corner", width: 1200, height: 800 },
      { src: "/images/card1.png", alt: "Session room lighting", width: 1200, height: 800 },
      { src: "/images/card2.png", alt: "Vocal booth setup", width: 1200, height: 800 },
      { src: "/images/card3.png", alt: "Mix position detail", width: 1200, height: 800 },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className={styles.grid}>
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={styles.card}
            onClick={() => setActiveIndex(index)}
            aria-label={`Open image: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 900px) 100vw, 33vw"
              className={styles.image}
            />
          </button>
        ))}
      </div>

      {activeImage && (
        <div className={styles.lightbox} role="dialog" aria-modal="true">
          <button
            type="button"
            className={styles.lightboxBackdrop}
            aria-label="Close image"
            onClick={() => setActiveIndex(null)}
          />
          <div className={styles.lightboxContent}>
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
              sizes="(max-width: 900px) 100vw, 900px"
              className={styles.lightboxImage}
              priority
            />
            <p className={styles.caption}>{activeImage.alt}</p>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setActiveIndex(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
