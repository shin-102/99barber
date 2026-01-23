import { Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const whatsappNumber = "+212600000000";
  const whatsappMessage = encodeURIComponent("Bonjour, je souhaite réserver une coupe chez 99 Barber");

  const hours = [
    { day: "Lundi - Vendredi", time: "09:00 - 21:00" },
    { day: "Samedi", time: "09:00 - 22:00" },
    { day: "Dimanche", time: "10:00 - 20:00" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4 text-foreground">
            Nous <span className="text-primary">Trouver</span>
          </h2>
          <p className="text-xl text-primary/70 font-display mb-4" dir="rtl">
            تواصل معنا
          </p>
          <p className="text-muted-foreground">
            Venez nous rendre visite ou contactez-nous pour prendre rendez-vous.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Réservez par WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6">
                La façon la plus rapide de réserver votre créneau. Envoyez-nous un message !
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  +212 6 00 00 00 00
                </Button>
              </a>
            </div>

            {/* Address */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Adresse</h4>
                  <p className="text-muted-foreground">
                    4 Rue Ibn Tammam<br />
                    Kenitra 14000, Maroc
                  </p>
                  <p className="text-muted-foreground text-sm mt-2" dir="rtl">
                    ١٢٣ شارع محمد الخامس، الدار البيضاء
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-4">Horaires d'ouverture</h4>
                  <div className="space-y-3">
                    {hours.map((item) => (
                      <div key={item.day} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="text-foreground font-medium">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card border border-border rounded-xl overflow-hidden h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.2531837321552!2d-6.583401356453291!3d34.254759576155365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7590066ff0e43%3A0x4ef4903363673fb0!2sCoiffeur%20Homme!5e0!3m2!1sen!2sma!4v1769130242959!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="99 Barber Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
