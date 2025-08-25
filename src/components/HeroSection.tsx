import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Calendar } from "lucide-react";
import GeometricPattern from './GeometricPattern';
import heroImage from "@/assets/hero-building.jpg";

const HeroSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma visita ao N Urban Vila Albuquerque.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Geometric Pattern Decorations */}
      <GeometricPattern className="absolute top-8 left-8 animate-float" size="lg" />
      <GeometricPattern className="absolute bottom-8 right-8 animate-float" size="md" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-8xl font-light mb-2 tracking-wider">
            n<span className="text-brand-pink">urban</span>
          </h1>
          <div className="h-1 w-24 bg-brand-pink mx-auto mb-4"></div>
          <p className="text-xl sm:text-2xl font-light tracking-wide">VILA BUARQUE</p>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          Seu novo jeito de viver
          <br />
          <span className="text-brand-pink">em São Paulo</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 font-light opacity-90 animate-fade-in">
          Studios inteligentes, rooftop completo e conveniência no térreo
        </p>

        {/* Location Badge */}
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-10">
          <MapPin className="w-5 h-5 mr-2 text-brand-pink" />
          <span className="text-lg font-medium">R. Dr. Cesário Mota Júnior, 542</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="text-lg px-8 py-6 rounded-full min-w-[280px]"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Agende sua visita no WhatsApp
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-6 rounded-full border-white/30 text-white hover:bg-white/10 min-w-[280px]"
          >
            <Calendar className="w-6 h-6 mr-3" />
            Ver disponibilidade
          </Button>
        </div>

        {/* Exclusivity Badge */}
        <div className="mt-12 inline-block">
          <div className="bg-gradient-primary rounded-full px-8 py-3 font-semibold text-lg shadow-lg">
            Apenas 175 unidades exclusivas
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;