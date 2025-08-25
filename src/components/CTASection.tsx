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
          <div className="bg-red-500/20 border-2 border-red-400/50 rounded-2xl p-8 mb-12 backdrop-blur-sm animate-pulse-glow">
            <h3 className="text-3xl font-bold mb-4 text-red-100">🔥 APENAS 175 UNIDADES DISPONÍVEIS</h3>
            <p className="text-xl opacity-95 mb-6 font-medium">
              Empreendimento EXCLUSIVO com unidades limitadas. Não perca esta oportunidade ÚNICA 
              de morar no coração de São Paulo com todo o conforto e praticidade.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-base mb-4">
              <div className="flex items-center bg-green-500/20 rounded-full px-4 py-2">
                <div className="w-4 h-4 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="font-semibold">17 pessoas visualizando AGORA</span>
              </div>
              <div className="flex items-center bg-yellow-500/20 rounded-full px-4 py-2">
                <div className="w-4 h-4 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                <span className="font-semibold">8 unidades reservadas HOJE</span>
              </div>
              <div className="flex items-center bg-red-500/20 rounded-full px-4 py-2">
                <div className="w-4 h-4 bg-red-400 rounded-full mr-3 animate-pulse"></div>
                <span className="font-semibold">Últimas 23 unidades restantes</span>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-8">
            <h3 className="text-4xl font-bold mb-6">
              Não deixe para depois. Agende sua visita AGORA!
            </h3>
            
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center max-w-6xl mx-auto">
              {/* WhatsApp CTA */}
              <div className="flex-1 text-center">
                <Button 
                  variant="cta" 
                  size="lg" 
                  onClick={handleWhatsAppClick}
                  className="text-2xl px-16 py-10 rounded-full w-full max-w-[400px] bg-green-500 hover:bg-green-600 animate-pulse-glow shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-8 h-8 mr-3" />
                  Falar no WhatsApp AGORA
                </Button>
                <p className="text-sm opacity-80 mt-2">Resposta imediata • Sem compromisso</p>
              </div>
              
              {/* OR Divider */}
              <div className="text-2xl font-bold opacity-60">OU</div>
              
              {/* Lead Form */}
              <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-[400px] w-full">
                <h4 className="text-xl font-bold mb-4 text-center">Receba informações por WhatsApp</h4>
                <div className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Seu nome" 
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 border-0 focus:ring-2 focus:ring-brand-pink"
                  />
                  <input 
                    type="tel" 
                    placeholder="(11) 99999-9999" 
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 border-0 focus:ring-2 focus:ring-brand-pink"
                  />
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full text-lg py-3 rounded-lg border-white/30 text-white hover:bg-white/10 bg-white/5"
                  >
                    Enviar informações
                  </Button>
                </div>
                <p className="text-xs opacity-70 mt-3 text-center">
                  Seus dados estão seguros • Não fazemos spam
                </p>
              </div>
            </div>
            
            {/* Phone CTA */}
            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={handlePhoneClick}
                className="text-lg px-8 py-4 rounded-full border-white/30 text-white hover:bg-white/10 bg-white/5"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ou ligue: (11) 9999-9999
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