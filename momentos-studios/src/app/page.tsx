import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection"
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection/>
      <GallerySection />
      <TestimonialsSection />
      <ContactSection/>
    </>
  );
}
