import React from 'react';
import { TactileButton } from './common/TactileButton';
import { LedIndicator } from './common/LedIndicator';
import { FurnaceTelemetryDevice } from './FurnaceTelemetryDevice';
import { ArrowRight, DownloadCloud, Anchor, Flame, Cpu, Building2, Factory } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="absolute top-0 right-10 w-96 h-96 blueprint-grid opacity-15 pointer-events-none rounded-3xl" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: 60% text & controls */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#d1d9e6]/80 shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] border border-white/40">
            <LedIndicator color="orange" size="sm" pulse={true} />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4a5568]">
              CRS GROUP // INDUSTRIAL MATERIALS • MINERALS • REFRACTORIES
            </span>
          </div>

          <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-[#2d3436] tracking-tight leading-[1.08] drop-shadow-[0_1px_1px_#ffffff]">
            FROM RAW MATERIALS TO <span className="text-[#ff4757]">REFRACTORY SOLUTIONS</span>
          </h1>

          <p className="text-base sm:text-lg text-[#4a5568] leading-relaxed max-w-2xl font-normal drop-shadow-[0_1px_0_#ffffff]">
            <strong>CRS Group</strong> brings together the trusted trading power of <strong>CRS Enterprises</strong> (Quartzite, Scrap, Pig Iron & Billet Trading) and the specialized manufacturing excellence of <strong>Hitzemeister Private Limited</strong> (Tundish Boards, Ramming Mass & Customized Refractories).
          </p>

          <div className="p-4 rounded-2xl bg-[#d1d9e6]/50 shadow-[inset_2px_2px_4px_#babecc] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#e0e5ec] shadow-[1px_1px_3px_#babecc]">
              <Factory className="w-4 h-4 text-[#ff4757] shrink-0" />
              <div>
                <strong className="text-[#2d3436] block">Hitzemeister</strong>
                <span className="text-[#4a5568] text-[11px]">Tundish Boards & Consumables</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#e0e5ec] shadow-[1px_1px_3px_#babecc]">
              <Building2 className="w-4 h-4 text-[#ff4757] shrink-0" />
              <div>
                <strong className="text-[#2d3436] block">CRS Enterprises</strong>
                <span className="text-[#4a5568] text-[11px]">Scrap, Quartzite & Pig Iron</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <TactileButton
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              onClick={() => onNavigate('rfq')}
            >
              Contact Us & Send Inquiry
            </TactileButton>

            <TactileButton
              variant="secondary"
              size="lg"
              icon={<DownloadCloud className="w-4 h-4 text-[#ff4757]" />}
              onClick={() => onNavigate('products')}
            >
              Explore Products & Minerals
            </TactileButton>
          </div>

          <div className="pt-4 grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] border border-white/50">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#4a5568] font-bold">
                <Flame className="w-3 h-3 text-[#ff4757]" />
                Tundish Boards
              </div>
              <div className="font-mono text-base sm:text-lg font-extrabold text-[#2d3436] mt-0.5">
                Up to 1,680°C
              </div>
              <div className="text-[10px] font-mono text-[#4a5568]">Continuous Casting</div>
            </div>

            <div className="p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] border border-white/50">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#4a5568] font-bold">
                <Cpu className="w-3 h-3 text-[#ff4757]" />
                Quartzite & Scrap
              </div>
              <div className="font-mono text-base sm:text-lg font-extrabold text-[#2d3436] mt-0.5">
                ≥ 98.5% SiO₂
              </div>
              <div className="text-[10px] font-mono text-[#4a5568]">Foundry & EAF Grade</div>
            </div>

            <div className="p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] border border-white/50">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#4a5568] font-bold">
                <Anchor className="w-3 h-3 text-[#ff4757]" />
                Client Base
              </div>
              <div className="font-mono text-base sm:text-lg font-extrabold text-[#2d3436] mt-0.5">
                Industry Leaders
              </div>
              <div className="text-[10px] font-mono text-[#4a5568]">Shyam, Rashmi, AIC</div>
            </div>
          </div>
        </div>

        {/* Right Column: 40% interactive 3D Device Visualization */}
        <div className="lg:col-span-5">
          <FurnaceTelemetryDevice />
        </div>
      </div>
    </section>
  );
};
