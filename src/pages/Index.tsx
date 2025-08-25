import React from 'react';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import LocationSection from '@/components/LocationSection';
import GallerySection from '@/components/GallerySection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <LocationSection />
      <GallerySection />
      <CTASection />
    </main>
  );
};

export default Index;
