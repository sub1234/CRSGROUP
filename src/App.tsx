import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { GroupCompaniesSection } from './components/GroupCompaniesSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ClientsSection } from './components/ClientsSection';
import { ProcessPipeline } from './components/ProcessPipeline';
import { ContactRFQSection } from './components/ContactRFQSection';
import { Footer } from './components/Footer';
import type { MaterialSpec } from './data/materials';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialSpec | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectForRfq = (material: MaterialSpec) => {
    setSelectedMaterial(material);
    scrollToSection('rfq');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#ff4757] selection:text-white">
      {/* Top Console Navbar */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Chassis Layout */}
      <main className="flex-1 space-y-4 md:space-y-8">
        <Hero onNavigate={scrollToSection} />
        <StatsStrip />
        <GroupCompaniesSection onNavigateProducts={() => scrollToSection('products')} />
        <AboutSection />
        <ProductsSection onSelectForRfq={handleSelectForRfq} />
        <ClientsSection />
        <ProcessPipeline />
        <ContactRFQSection selectedMaterial={selectedMaterial} />
      </main>

      {/* Industrial Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;
