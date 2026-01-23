import { Award, Clock, Heart, Scissors } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Scissors,
      title: "Expertise",
      description: "Des années d'expérience dans l'art de la coiffure masculine",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Chaque coupe est réalisée avec soin et attention aux détails",
    },
    {
      icon: Clock,
      title: "Ponctualité",
      description: "Respectueux de votre temps, service rapide et efficace",
    },
    {
      icon: Award,
      title: "Qualité",
      description: "Produits premium et techniques modernes garantis",
    },
  ];

  return (
    <section id="apropos" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Barber at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-2xl gold-glow">
              <div className="text-4xl font-bold font-display">9+</div>
              <div className="text-sm opacity-90">Années d'expérience</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">À Propos de Nous</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              Plus qu'un Barbier,
              <br />
              <span className="text-primary">Une Expérience</span>
            </h2>

            {/* Arabic */}
            <p className="text-xl text-primary/70 mb-6 font-display" dir="rtl">
              أكثر من حلاق، تجربة فريدة
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Chez <strong className="text-foreground">99 Barber</strong>, nous croyons que chaque homme mérite 
              une coupe qui reflète sa personnalité. Notre salon offre une atmosphère chaleureuse 
              où tradition et modernité se rencontrent. Spécialisés dans les dégradés impeccables, 
              la précision des contours de barbe et les soins capillaires, nous transformons 
              chaque visite en moment de détente.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Avec des coupes à partir de <span className="text-primary font-bold">30 MAD</span>, 
              nous rendons le style accessible à tous sans compromettre la qualité.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
