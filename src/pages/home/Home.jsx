import HeroSection from "../../sections/heroSection/HeroSection";
import NumbersSection from "../../sections/numbersSection/NumbersSection";
import AboutSection from "../../sections/aboutSection/AboutSection";
import PhraseSection from "../../sections/phraseSection/PhraseSection";
import ServicesSection from "../../sections/servicesSection/ServicesSection";
import BenefitsSection from "../../sections/benefitsSection/BenefitsSection";
import TestimonialsSection from "../../sections/testimonialsSection/TestimonialsSection";
import FaqsSection from "../../sections/faqsSection/FaqsSection";
import ContactSection from "../../sections/contactSection/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NumbersSection />
      <AboutSection />
      <PhraseSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FaqsSection />
      <ContactSection />
    </main>
  );
}
