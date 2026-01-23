import Header from "@/components/barber/Header";
import HeroSection from "@/components/barber/HeroSection";
import AboutSection from "@/components/barber/AboutSection";
import ServicesSection from "@/components/barber/ServicesSection";
import ProductsSection from "@/components/barber/ProductsSection";
import ContactSection from "@/components/barber/ContactSection";
import Footer from "@/components/barber/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
