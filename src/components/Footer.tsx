import React, { useState, useEffect } from 'react';
import { LedIndicator } from './common/LedIndicator';
import { VentSlots } from './common/VentSlots';
import { Flame, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 bg-[#232931] text-[#e0e5ec] border-t-4 border-[#39424e] relative bolted-panel-dark">
      {/* Industrial Safety Warning Ribbon */}
      <div className="bg-[#1a1f26] border-b border-white/5 py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff4757] animate-ping" />
            <span className="text-[#ff4757] font-bold">CAUTION:</span>
            <span>HEAVY INDUSTRIAL HANDLING // CERTIFIED RIGGING REQUIRED AT ALL STOCK HOUSES</span>
          </div>
          <div className="flex items-center gap-3">
            <span>SYS_TIME: {utcTime || 'SYNCHRONIZING...'}</span>
            <LedIndicator color="green" size="sm" pulse={true} label="LINK 100%" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1a1f26] border border-white/10 shadow-[inset_1px_1px_2px_black] flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#ff4757]" />
              </div>
              <div>
                <span className="font-sans font-black text-xl tracking-tight text-white">
                  HEITZMEISTER
                </span>
                <div className="text-[10px] font-mono text-neutral-400">
                  ROHSTOFFE & HÜTTENWERKE GMBH // EST. 1984
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-sans">
              Global supplier of metallurgical coke, iron ore pellets, virgin HBI, master ferroalloys, and engineered refractory materials for blast furnaces and electric arc furnaces.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="px-2.5 py-1 rounded bg-[#161a20] border border-white/5 font-mono text-[10px] text-neutral-300">
                PORT LOTS: ROTTERDAM • ANTWERP • TARANTO • HOUSTON
              </div>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="space-y-3 font-mono text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] pb-1 border-b border-white/10 flex items-center justify-between">
              <span>SECTIONS</span>
              <VentSlots count={2} variant="dark" />
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-[#ff4757] transition-colors cursor-pointer">
                  Overview Console
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#ff4757] transition-colors cursor-pointer">
                  Plant Architecture
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#ff4757] transition-colors cursor-pointer">
                  Materials & Chemistry
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('production')} className="hover:text-[#ff4757] transition-colors cursor-pointer">
                  Beneficiation Pipeline
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('rfq')} className="hover:text-[#ff4757] transition-colors cursor-pointer">
                  Dispatch RFQ Ticket
                </button>
              </li>
            </ul>
          </div>

          {/* Product Lines */}
          <div className="space-y-3 font-mono text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] pb-1 border-b border-white/10">
              MATERIALS
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>DR-Grade Pellets 67.5%</li>
              <li>Hot Briquetted Iron (HBI)</li>
              <li>Blast Furnace Met Coke</li>
              <li>Pulverized Coal (PCI)</li>
              <li>Ferrosilicon & FeMn</li>
              <li>Magnesia-Carbon Linings</li>
            </ul>
          </div>

          {/* Governance & Standards */}
          <div className="space-y-3 font-mono text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] pb-1 border-b border-white/10">
              STANDARDS
            </div>
            <ul className="space-y-2 text-neutral-400 text-[11px]">
              <li>DIN EN 10204 3.1 / 3.2</li>
              <li>ISO 9001:2015 Quality</li>
              <li>ISO 14001 Environmental</li>
              <li>ISO 17025 Laboratory</li>
              <li>ASTM E382 / D5341 CSR</li>
            </ul>
          </div>
        </div>

        {/* Bottom Hardware Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © 1984–2026 HEITZMEISTER METALLURGICAL LOGISTICS. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a1f26] border border-white/10 text-neutral-300 hover:text-[#ff4757] shadow-[2px_2px_4px_black] active:translate-y-[1px] transition-all cursor-pointer"
          >
            <span>RETURN TO APEX</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
