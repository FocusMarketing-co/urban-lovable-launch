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
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Decorations */}
      <GeometricPattern className="absolute top-12 left-12 opacity-10" size="lg" />
      <GeometricPattern className="absolute bottom-12 right-12 opacity-10" size="md" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-brand-pink font-semibold mb-3">{item.subtitle}</p>
                  <p className="text-white/90 leading-relaxed group-hover:opacity-100 opacity-0 transition-opacity duration-300 delay-100">
                    {item.description}
                  </p>
                </div>
                
                {/* Decorative element */}
                <div className="absolute top-4 right-4 opacity-60">
                  <GeometricPattern size="sm" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Mais que um apartamento, um estilo de vida completo
            </h3>
            <p className="text-lg text-muted-foreground">
              No N Urban Vila Albuquerque, cada detalhe foi pensado para oferecer 
              o máximo de conveniência e qualidade de vida no centro de São Paulo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;