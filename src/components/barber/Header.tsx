import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "/99barber_logo_nobg.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "+212608465739";
  const whatsappMessage = encodeURIComponent("Bonjour, je souhaite réserver une coupe chez 99 Barber");

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#apropos", label: "À Propos" },
    { href: "#services", label: "Services" },
    { href: "#produits", label: "Produits" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-24">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2">
          {/* <span className="font-display text-2xl font-bold text-primary">99 Barber</span> */}
          <img src={Logo} alt="99 Barber Logo" className="max-h-32 h-auto"/>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gold-glow">
              <Phone className="w-4 h-4 mr-2" />
              Réserver
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Réserver Maintenant
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
