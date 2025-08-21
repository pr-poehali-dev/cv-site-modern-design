import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-open-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
      <EducationSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}