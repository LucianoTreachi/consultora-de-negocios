import WhatsAppButton from "../../components/buttons/whatsAppButton/WhatsAppButton";

import HeroSection from "../heroSection/HeroSection";
import NumbersSection from "../numbersSection/NumbersSection";
import AboutSection from "../aboutSection/AboutSection";
import PhraseSection from "../phraseSection/PhraseSection";
import ServicesSection from "../servicesSection/ServicesSection";
import BenefitsSection from "../benefitsSection/BenefitsSection";
import TestimonialsSection from "../testimonialsSection/TestimonialsSection";
import FaqsSection from "../faqsSection/FaqsSection";
import ContactSection from "../contactSection/ContactSection";

export default function Main() {
  return (
    <main>
      <WhatsAppButton />
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
