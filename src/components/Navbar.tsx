import React, { useState } from 'react';
import { LedIndicator } from './common/LedIndicator';
import { TactileButton } from './common/TactileButton';
import { Menu, X, Flame, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Overview' },
    { id: 'companies', label: 'Group' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products & Minerals' },
    { id: 'clients', label: 'Clients' },
    { id: 'rfq', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-4 py-3 md:px-8 bg-[#e0e5ec]/95 backdrop-blur-md border-b border-[#babecc]/50 shadow-[0_4px_12px_rgba(186,190,204,0.4)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Lockup */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          {/* Logo Hardware Emblem */}
          <div className="w-10 h-10 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_#babecc,4px_4px_8px_#babecc] flex items-center justify-center border border-white/60 group-hover:scale-105 transition-transform duration-200">
            <div className="w-6 h-6 rounded-lg bg-[#2d3436] flex items-center justify-center shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8)]">
              <Flame className="w-3.5 h-3.5 text-[#ff4757] animate-pulse" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-sans font-black text-lg md:text-xl tracking-tighter text-[#2d3436] drop-shadow-[0_1px_0_#ffffff]">
                CRS GROUP
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono font-bold bg-[#ff4757] text-white px-2 py-0.5 rounded shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]">
                HITZEMEISTER
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono tracking-widest text-[#4a5568] uppercase font-bold">
                CRS Enterprises • Hitzemeister Pvt Ltd
              </span>
              <span className="w-1 h-1 rounded-full bg-[#babecc]" />
              <LedIndicator color="green" size="sm" pulse={true} label="PURULIA WORKS" className="hidden lg:inline-flex" />
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#d1d9e6]/50 p-1.5 rounded-xl shadow-[inset_2px_2px_5px_#babecc,inset_-2px_-2px_5px_#ffffff]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#e0e5ec] text-[#ff4757] shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff]'
                    : 'text-[#4a5568] hover:text-[#2d3436] hover:bg-[#e0e5ec]/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Quick Contact CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <TactileButton
            variant="primary"
            size="sm"
            icon={<Mail className="w-3.5 h-3.5" />}
            onClick={() => handleNavClick('rfq')}
          >
            Contact & Inquiry
          </TactileButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-11 h-11 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff] flex items-center justify-center text-[#2d3436] active:shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] transition-all cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff4757]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-[#babecc]/60 space-y-2 pb-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between px-2 pb-2">
            <LedIndicator color="green" size="sm" label="PURULIA & LONDON CONNECTED" />
            <span className="text-[10px] font-mono text-[#4a5568]">+91-7863950905</span>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left px-4 py-3 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff] font-mono text-xs uppercase font-bold text-[#2d3436] active:shadow-[inset_3px_3px_6px_#babecc]"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <TactileButton
              variant="primary"
              size="md"
              isFullWidth
              onClick={() => handleNavClick('rfq')}
            >
              Submit Procurement Inquiry
            </TactileButton>
          </div>
        </div>
      )}
    </header>
  );
};
