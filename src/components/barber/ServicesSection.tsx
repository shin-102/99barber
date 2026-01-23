import { Scissors, Sparkles } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      name: "Coupe de Cheveux",
      nameAr: "قصة شعر",
      price: "30",
      description: "Coupe classique ou moderne selon vos envies",
      popular: true,
    },
    {
      name: "Dégradé",
      nameAr: "ديغراديه",
      price: "35",
      description: "Fade parfait avec précision au millimètre",
      popular: false,
    },
    {
      name: "Taille de Barbe",
      nameAr: "تهذيب اللحية",
      price: "20",
      description: "Contours nets et barbe sculptée",
      popular: false,
    },
    {
      name: "Coupe + Barbe",
      nameAr: "قصة شعر + لحية",
      price: "45",
      description: "Le combo complet pour un look soigné",
      popular: true,
    },
    {
      name: "Mask Noir",
      nameAr: "ماسك أسود",
      price: "25",
      description: "Nettoyage en profondeur des pores",
      popular: false,
    },
    {
      name: "Gommage Visage",
      nameAr: "تقشير الوجه",
      price: "30",
      description: "Exfoliation douce pour une peau éclatante",
      popular: false,
    },
    {
      name: "Broching",
      nameAr: "بروشينغ",
      price: "20",
      description: "Coiffage et mise en forme professionnelle",
      popular: false,
    },
    {
      name: "Kératine",
      nameAr: "كيراتين",
      price: "150",
      description: "Traitement lissant pour cheveux soyeux",
      popular: false,
    },
    {
      name: "Coloration",
      nameAr: "صبغة",
      price: "50",
      description: "Changez de couleur avec style",
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Nos Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4 text-foreground">
            Tarifs & <span className="text-primary">Prestations</span>
          </h2>
          <p className="text-xl text-primary/70 font-display mb-4" dir="rtl">
            خدماتنا وأسعارنا
          </p>
          <p className="text-muted-foreground">
            Des services de qualité à des prix accessibles. Chaque prestation est réalisée avec 
            professionnalisme et souci du détail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative bg-card border rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 group ${
                service.popular ? "border-primary/30" : "border-border"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Populaire
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-primary/60" dir="rtl">{service.nameAr}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">MAD</span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm">{service.description}</p>

              {/* Decorative Icon */}
              <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Scissors className="w-16 h-16 text-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-10">
          * Les prix sont indicatifs et peuvent varier selon la prestation. Contactez-nous pour plus d'informations.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
