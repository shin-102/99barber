import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductsSection = () => {
  const products = [
    {
      name: "Flacon pulvérisateur",
      nameAr: "زجاجة رذاذ",
      description: "Pratique pour une application facile et uniforme",
      image: "https://plus.unsplash.com/premium_photo-1760620294147-61a25bb2d6a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "80 MAD",
    },
    {
      name: "Huile à Barbe",
      nameAr: "زيت اللحية",
      description: "Nourrit et adoucit votre barbe au quotidien",
      image: "https://images.unsplash.com/photo-1590509294910-32752e061399?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "120 MAD",
    },
    {
      name: "Shampooing Premium",
      nameAr: "شامبو فاخر",
      description: "Formule douce pour cheveux et cuir chevelu",
      image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: "95 MAD",
    },
    {
      name: "Gel Fixant",
      nameAr: "جل الشعر",
      description: "Fixation longue durée avec brillance",
      image: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: "60 MAD",
    },
    {
      name: "Baume à Barbe",
      nameAr: "بلسم اللحية",
      description: "Hydrate et discipline les barbes rebelles",
      image: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: "100 MAD",
    },
    {
      name: "Spray Texturisant",
      nameAr: "سبراي الشعر",
      description: "Volume et texture pour un style décontracté",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: "75 MAD",
    },
  ];

  return (
    <section id="produits" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Boutique</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4 text-foreground">
            Nos <span className="text-primary">Produits</span>
          </h2>
          <p className="text-xl text-primary/70 font-display mb-4" dir="rtl">
            منتجاتنا المميزة
          </p>
          <p className="text-muted-foreground">
            Une sélection de produits professionnels pour maintenir votre style entre les visites.
          </p>
        </div>

        {/* Products Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="bg-background border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300">
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xs text-primary/60" dir="rtl">{product.nameAr}</p>
                      </div>
                      <span className="text-primary font-bold">{product.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-12 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
        </Carousel>

        {/* Mobile Scroll Hint */}
        <p className="text-center text-muted-foreground text-sm mt-6 md:hidden">
          ← Glissez pour voir plus →
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;
