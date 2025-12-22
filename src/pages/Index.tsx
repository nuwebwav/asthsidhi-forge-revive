import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutSection } from "@/components/AboutSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProductsSection } from "@/components/ProductsSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <ProcessSteps />
      <ProductsSection />
      <StatsSection />
      <TestimonialsSection />
      <IndustriesSection />
      <ClientsSection />
      <Footer />
    </main>
  );
};

export default Index;
