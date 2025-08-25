import React from 'react';
import rooftopImage from "@/assets/rooftop-amenities.jpg";
import lobbyImage from "@/assets/lobby-entrance.jpg";
import fitnessImage from "@/assets/fitness-center.jpg";
import GeometricPattern from './GeometricPattern';

interface GalleryItem {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    image: rooftopImage,
    title: "Rooftop Panorâmico",
    subtitle: "Viva momentos únicos",
    description: "Piscina, lounge e churrasqueira com vista 360° da cidade"
  },
  {
    image: lobbyImage,
    title: "Hall de Entrada",
    subtitle: "Elegância e sofisticação",
    description: "Recepção moderna com design contemporâneo e segurança 24h"
  },
  {
    image: fitnessImage,
    title: "Academia Completa",
    subtitle: "Treine com conforto",
    description: "Equipamentos de última geração para seu bem-estar diário"
  }
];

const GallerySection: React.FC = () => {
  return (
    <section className="py-12 bg-muted/30 relative overflow-hidden">
      {/* Background Decorations */}
      <GeometricPattern className="absolute top-12 left-12 opacity-10" size="lg" />
      <GeometricPattern className="absolute bottom-12 right-12 opacity-10" size="md" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Conheça o seu
            <br />
            <span className="text-brand-pink">novo estilo de vida</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada espaço foi projetado para proporcionar conforto, praticidade e momentos especiais
          </p>
        </div>

        {/* Full-width Gallery */}
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {galleryItems.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden aspect-[4/5] hover:z-10 transition-all duration-500 hover:scale-105"
              >
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold mb-3">{item.title}</h3>
                    <p className="text-brand-pink font-bold text-lg mb-4">{item.subtitle}</p>
                    <p className="text-white/90 leading-relaxed text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute top-6 right-6 opacity-60">
                    <GeometricPattern size="sm" />
                  </div>
                </div>
                
                {/* Hover border effect */}
                <div className="absolute inset-0 border-4 border-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-elegant max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Mais que um apartamento, um estilo de vida completo
            </h3>
            
            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    MR
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-primary">Maria Rodrigues</p>
                    <p className="text-sm text-muted-foreground">Investidora</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Localização perfeita para investimento. A valorização da região é garantida!"
                </p>
              </div>
              
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    CS
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-primary">Carlos Silva</p>
                    <p className="text-sm text-muted-foreground">Executivo</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "O rooftop com vista 360° é incrível. Qualidade de vida incomparável!"
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center bg-brand-pink/10 rounded-full px-4 py-2 mb-4">
                <span className="text-brand-pink font-bold text-sm">🏆 Construtora reconhecida no mercado há 15 anos</span>
              </div>
              <p className="text-base text-muted-foreground">
                No N Urban Vila Albuquerque, cada detalhe foi pensado para oferecer 
                o máximo de conveniência e qualidade de vida no centro de São Paulo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;