import GalleryGrid from "@/components/GalleryGrid";
import styles from "./GalleryPage.module.css";

export default function GalleryPage() {
  return (
    <section className={styles.galleryPage}>
      <div className={styles.header}>
        <p className={styles.kicker}>Studio Gallery</p>
        <h1 className={styles.title}>Every corner is built for flow</h1>
        <p className={styles.subtitle}>
          Explore the control room, booth, and creative spaces that give sessions their energy.
        </p>
      </div>
      <GalleryGrid />
    </section>
  );
}
