import { Facebook, Instagram} from "lucide-react";
import Logo from "/99barber_logo_nobg.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              {/* <span className="font-display text-2xl font-bold text-primary">99 Barber</span> */}
              <img src={Logo} alt="99 Barber Logo" className="max-h-32 h-auto"/>
            </div>
            <p className="text-muted-foreground text-sm">
              L'art de la coupe parfaite
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} 99 Barber. Tous droits réservés a <a href="https://decipher-agency.com" className="font-medium text-sky-500 hover:text-sky-600 transition-colors">Decipher Agency</a>.
            </p>
            <p className="text-muted-foreground/60 text-xs mt-1">
              Kenitra, Maroc 🇲🇦
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
