import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Waves, ShoppingCart, Dumbbell, Users, Car, MessageCircle } from "lucide-react";
import GeometricPattern from './GeometricPattern';

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: MapPin,
    title: "Localização Premium",
    description: "Coração de São Paulo, próximo ao metrô, universidades e principais hospitais"
  },
  {
    icon: Waves,
    title: "Rooftop Completo",
    description: "Piscina, lounge, churrasqueira e vista panorâmica da cidade"
  },
  {
    icon: ShoppingCart,
    title: "Conveniência no Térreo",
    description: "Mini mercado, lavanderia e bicicletário para seu dia a dia"
  },
  {
    icon: Dumbbell,
    title: "Academia Exclusiva",
    description: "Equipamentos modernos para você treinar sem sair de casa"
  },
  {
    icon: Users,
    title: "Espaços de Lazer",
    description: "Salão de festas, terraço e espaços de convivência únicos"
  },
  {
    icon: Car,
    title: "Mobilidade Urbana",
    description: "Próximo ao transporte público e principais vias de acesso"
  }
];

const BenefitsSection: React.FC = () => {
  const handleCTAClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Quero saber mais sobre as unidades do N Urban Vila Albuquerque.', '_blank');
  };

  return (
    <section className="py-12 bg-gradient-subtle relative overflow-hidden">
      {/* Background Decorations */}
      <GeometricPattern className="absolute top-12 right-12 opacity-20" size="lg" />
      <GeometricPattern className="absolute bottom-12 left-12 opacity-20" size="md" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Por que escolher o
            <br />
            <span className="text-brand-pink">N Urban?</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais que um lar, um estilo de vida urbano completo no coração de São Paulo
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
              <div className="mt-3 text-xs text-brand-pink font-semibold">
                {index === 0 && "✓ Valorização garantida na região"}
                {index === 1 && "✓ Vista panorâmica exclusiva"}
                {index === 2 && "✓ Mais de 10 facilidades no térreo"}
                {index === 3 && "✓ Equipamentos de última geração"}
                {index === 4 && "✓ Eventos e networking premium"}
                {index === 5 && "✓ 3 linhas de metrô próximas"}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-elegant border border-border/50">
          <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Unidades limitadas
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Seja um dos primeiros moradores e garante condições especiais de lançamento
          </p>
          
          <Button 
            variant="cta" 
            size="lg" 
            onClick={handleCTAClick}
            className="text-xl px-12 py-6 rounded-full"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Fale agora com um consultor
          </Button>
          
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Consultores online agora</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;