import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { OptionsSection } from "@/components/OptionsSection";
import { LeadCaptureSection } from "@/components/LeadCaptureSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <HeroSection />
      <BenefitsSection />
      <OptionsSection />
      <LeadCaptureSection />
      <Footer />
    </div>
  );
};

export default Index;