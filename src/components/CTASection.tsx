import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Star, Clock, Users, Phone } from "lucide-react";
import GeometricPattern from './GeometricPattern';

const CTASection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Quero garantir minha unidade no N Urban Vila Albuquerque com as condições especiais de lançamento.', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+551199999999', '_self');
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <GeometricPattern className="absolute top-8 left-8 opacity-30" size="lg" />
      <GeometricPattern className="absolute bottom-8 right-8 opacity-30" size="md" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Condições Especiais de
              <br />
              <span className="text-brand-pink">Lançamento</span>
            </h2>
            <div className="h-1 w-32 bg-brand-pink mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl font-light opacity-90 max-w-3xl mx-auto leading-relaxed">
              Garanta sua unidade com benefícios exclusivos de pré-lançamento. 
              Seja um dos primeiros a conquistar o N Urban Vila Albuquerque.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Star className="w-12 h-12 text-brand-pink mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Preços de Lançamento</h3>
              <p className="opacity-90">Condições exclusivas para os primeiros compradores</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Clock className="w-12 h-12 text-brand-pink mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Financiamento Facilitado</h3>
              <p className="opacity-90">Planos especiais e entrada facilitada</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Users className="w-12 h-12 text-brand-pink mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Assessoria Completa</h3>
              <p className="opacity-90">Acompanhamento desde a escolha até a entrega</p>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="bg-brand-pink/20 border border-brand-pink/30 rounded-2xl p-8 mb-12 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">🔥 Apenas 175 unidades disponíveis</h3>
            <p className="text-lg opacity-90 mb-6">
              Empreendimento exclusivo com unidades limitadas. Não perca esta oportunidade única 
              de morar no coração de São Paulo com todo o conforto e praticidade.
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span>12 pessoas visualizando agora</span>
              </div>
              <div className="w-1 h-4 bg-white/30"></div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                <span>3 unidades reservadas hoje</span>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6">
              Não deixe para depois. Agende sua visita agora!
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="text-xl px-12 py-8 rounded-full min-w-[320px] bg-green-500 hover:bg-green-600 animate-pulse-glow"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Falar no WhatsApp agora
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={handlePhoneClick}
                className="text-xl px-12 py-8 rounded-full border-white/30 text-white hover:bg-white/10 min-w-[320px]"
              >
                <Phone className="w-6 h-6 mr-3" />
                Ligar agora: (11) 9999-9999
              </Button>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-lg opacity-80">
              <strong>N Urban Vila Albuquerque</strong> • R. Dr. Cesário Mota Júnior, 542 • nurbanvilabuarque.com.br
            </p>
            <p className="text-sm opacity-60 mt-2">
              Horário de atendimento: Segunda a sábado das 8h às 20h • Domingos das 9h às 17h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;