import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { EducationSection } from "@/components/education-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ClientTrackingSection } from "@/components/client-tracking-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <EducationSection />
        <TestimonialsSection />
        <ClientTrackingSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}