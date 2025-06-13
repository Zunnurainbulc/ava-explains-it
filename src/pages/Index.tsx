
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SubjectsGrid from '../components/SubjectsGrid';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SubjectsGrid />
      <FeaturesSection />
      <HowItWorks />
    </div>
  );
};

export default Index;
