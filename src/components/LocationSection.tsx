import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Train, GraduationCap, Heart, Building2, MessageCircle } from "lucide-react";
import GeometricPattern from './GeometricPattern';

interface LocationPoint {
  icon: React.ElementType;
  name: string;
  distance: string;
  color: string;
}

const nearbyPoints: LocationPoint[] = [
  {
    icon: Train,
    name: "Estação República",
    distance: "300m",
    color: "text-blue-600"
  },
  {
    icon: GraduationCap,
    name: "Universidade Mackenzie",
    distance: "800m", 
    color: "text-purple-600"
  },
  {
    icon: Heart,
    name: "Hospital Santa Casa",
    distance: "600m",
    color: "text-red-500"
  },
  {
    icon: Building2,
    name: "Centro Empresarial",
    distance: "400m",
    color: "text-green-600"
  }
];

const LocationSection: React.FC = () => {
  const handleLocationCTA = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Quero saber mais sobre a localização do N Urban Vila Albuquerque.', '_blank');
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <GeometricPattern className="absolute top-8 left-8 opacity-10" size="lg" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              Localização
              <br />
              <span className="text-brand-pink">Privilegiada</span>
            </h2>
            
            <div className="h-1 w-24 bg-gradient-primary mb-8"></div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Perto de tudo que importa: metrô, universidades, hospitais e comércio. 
              Um investimento inteligente no coração de São Paulo.
            </p>

            {/* Address */}
            <div className="bg-gradient-subtle rounded-2xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-brand-pink mr-3" />
                <h3 className="text-xl font-bold text-primary">Endereço</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                R. Dr. Cesário Mota Júnior, 542<br />
                Vila Buarque - São Paulo/SP
              </p>
            </div>

            {/* Nearby Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {nearbyPoints.map((point, index) => (
                <div key={index} className="flex items-center p-4 bg-muted/50 rounded-xl">
                  <point.icon className={`w-5 h-5 mr-3 ${point.color}`} />
                  <div>
                    <p className="font-semibold text-primary text-sm">{point.name}</p>
                    <p className="text-xs text-muted-foreground">{point.distance}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleLocationCTA}
              className="rounded-full text-lg px-8"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Saiba mais sobre a localização
            </Button>
          </div>

          {/* Map/Visual Side */}
          <div className="relative">
            <div className="bg-gradient-primary rounded-3xl p-8 text-white relative overflow-hidden">
              <GeometricPattern className="absolute top-4 right-4 opacity-30" size="sm" />
              
              <h3 className="text-2xl font-bold mb-6">Vila Buarque</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <span>Centro de SP</span>
                  <span className="font-semibold">5 min</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <span>Av. Paulista</span>
                  <span className="font-semibold">8 min</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <span>Vila Madalena</span>
                  <span className="font-semibold">12 min</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <span>Pinheiros</span>
                  <span className="font-semibold">15 min</span>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="font-semibold">Conectado ao metrô</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;