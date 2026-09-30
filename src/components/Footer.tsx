import React from 'react';
import { VentSlots } from './common/VentSlots';
import { ArrowUp, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 bg-[#232931] text-[#e0e5ec] border-t-4 border-[#39424e] relative bolted-panel-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 px-2 rounded-xl bg-white border border-white/20 shadow-[2px_2px_6px_black] flex items-center justify-center">
                <img
                  src="./hitzemeister-logo.jpg"
                  alt="Hitzemeister Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-sans font-black text-xl tracking-tight text-white">
                  CRS GROUP
                </span>
                <div className="text-[10px] font-mono text-neutral-400">
                  CRS ENTERPRISES PVT LTD • HITZEMEISTER PVT LTD
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-sans">
              From raw materials to refractory solutions. Powering continuous casting machines, induction furnaces, and integrated steelmakers across India and globally.
            </p>

            <div className="space-y-1.5 text-xs font-mono text-neutral-300 pt-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#38bdf8]" />
                <a href="tel:+917863950905" className="hover:text-white">+91-786 3950905 (India)</a>
                <span className="text-neutral-500">•</span>
                <a href="tel:+447824609436" className="hover:text-white">+44-782 4609436 (UK)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#38bdf8]" />
                <a href="mailto:acc.crsenterprises@gmail.com" className="hover:text-white underline">
                  acc.crsenterprises@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Group Entities */}
          <div className="space-y-3 font-mono text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] pb-1 border-b border-white/10 flex items-center justify-between">
              <span>GROUP ENTITIES</span>
              <VentSlots count={2} variant="dark" />
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <strong className="text-neutral-200 block">CRS Enterprises Pvt Ltd</strong>
                <span className="text-[10px]">Purulia • Minerals & Scrap Trading</span>
              </li>
              <li>
                <strong className="text-neutral-200 block">Hitzemeister Pvt Ltd</strong>
                <span className="text-[10px]">Purulia • Refractory Manufacturing</span>
              </li>
              <li>
                <strong className="text-neutral-200 block">Sugarbiz Limited</strong>
                <span className="text-[10px]">London • Advisory & Trade Finance</span>
              </li>
              <li>
                <strong className="text-neutral-200 block">Anandi</strong>
                <span className="text-[10px]">Purulia • Logistics & Transport Fleet</span>
              </li>
            </ul>
          </div>

          {/* Product Lines */}
          <div className="space-y-3 font-mono text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] pb-1 border-b border-white/10">
              PRODUCTS
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>Tundish Boards (CCM)</li>
              <li>Ramming Mass (Silica)</li>
              <li>Ball Mill Refractory Powder</li>
              <li>Quartzite & Minerals</li>
              <li>Heavy Melting Scrap (HMS 1&2)</li>
              <li>Pig Iron, Sponge & Billets</li>
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-3 font-mono text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] pb-1 border-b border-white/10">
              LOCATIONS
            </div>
            <div className="space-y-3 text-neutral-400 text-[11px]">
              <div>
                <strong className="text-neutral-200 block">Factory & Works:</strong>
                <p>814, Narayanpur, Purulia, West Bengal - 723121, India</p>
              </div>
              <div>
                <strong className="text-neutral-200 block">UK Corporate Office:</strong>
                <p>128, City Road, London, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hardware Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © 2026 CRS GROUP • CRS ENTERPRISES PVT LTD • HITZEMEISTER PVT LTD. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a1f26] border border-white/10 text-neutral-300 hover:text-[#38bdf8] shadow-[2px_2px_4px_black] active:translate-y-[1px] transition-all cursor-pointer"
          >
            <span>RETURN TO APEX</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
