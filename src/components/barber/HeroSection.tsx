import { Phone, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const whatsappNumber = "+212600000000";
  const whatsappMessage = encodeURIComponent("Bonjour, je souhaite réserver une coupe chez 99 Barber");

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8">
            <Scissors className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Depuis 2015 à votre service</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">L'Art de la</span>
            <br />
            <span className="text-gradient">Coupe Parfaite</span>
          </h1>

          {/* Arabic Subheadline */}
          <p className="text-2xl md:text-3xl font-display text-primary/80 mb-6" dir="rtl">
            فن الحلاقة المثالية
          </p>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Des coupes précises, des dégradés impeccables et une ambiance conviviale. 
            Votre nouveau look commence ici.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gold-glow text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Réserver Votre Coupe
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6">
                Voir Nos Services
              </Button>
            </a>
          </div>

          {/* Price Highlight */}
          <div className="mt-12 inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-6 py-4">
            <span className="text-muted-foreground">Coupe à partir de</span>
            <span className="text-3xl font-bold text-primary">30 MAD</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
