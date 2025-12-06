import AboutSection from '@/components/AboutSection';
import styles from './AboutPage.module.css'; // optional CSS module

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <AboutSection />
    </div>
  );
}
