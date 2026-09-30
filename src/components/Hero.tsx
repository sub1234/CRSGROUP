import React from 'react';
import { TactileButton } from './common/TactileButton';
import { LedIndicator } from './common/LedIndicator';
import { FurnaceTelemetryDevice } from './FurnaceTelemetryDevice';
import { ArrowRight, DownloadCloud, Anchor, Flame, Cpu } from 'lucide-react';

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
              CERTIFIED METALLURGICAL SUPPLY // DIN EN 10204 3.1
            </span>
          </div>

          <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-[#2d3436] tracking-tight leading-[1.08] drop-shadow-[0_1px_1px_#ffffff]">
            ENGINEERED RAW MATERIALS FOR THE WORLD’S <span className="text-[#ff4757]">STEEL PLANTS</span>
          </h1>

          <p className="text-base sm:text-lg text-[#4a5568] leading-relaxed max-w-2xl font-normal drop-shadow-[0_1px_0_#ffffff]">
            From ultra-low gangue DR iron ore pellets and high-CSR blast furnace coke to master ferroalloys and 1,800°C refractory linings. We power continuous casting strands, blast furnaces, and electric arc mini-mills worldwide.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <TactileButton
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              onClick={() => onNavigate('rfq')}
            >
              Configure & Dispatch RFQ
            </TactileButton>

            <TactileButton
              variant="secondary"
              size="lg"
              icon={<DownloadCloud className="w-4 h-4 text-[#ff4757]" />}
              onClick={() => onNavigate('products')}
            >
              Material Spec Sheets
            </TactileButton>
          </div>

          <div className="pt-4 grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] border border-white/50">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#4a5568] font-bold">
                <Flame className="w-3 h-3 text-[#ff4757]" />
                Fe Grade
              </div>
              <div className="font-mono text-base sm:text-lg font-extrabold text-[#2d3436] mt-0.5">
                ≥ 67.5%
              </div>
              <div className="text-[10px] font-mono text-[#4a5568]">DR Pellets</div>
            </div>

            <div className="p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] border border-white/50">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#4a5568] font-bold">
                <Cpu className="w-3 h-3 text-[#ff4757]" />
                Coke CSR
              </div>
              <div className="font-mono text-base sm:text-lg font-extrabold text-[#2d3436] mt-0.5">
                ≥ 66.5%
              </div>
              <div className="text-[10px] font-mono text-[#4a5568]">Hot Strength</div>
            </div>

            <div className="p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] border border-white/50">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#4a5568] font-bold">
                <Anchor className="w-3 h-3 text-[#ff4757]" />
                Logistics
              </div>
              <div className="font-mono text-base sm:text-lg font-extrabold text-[#2d3436] mt-0.5">
                42 Ports
              </div>
              <div className="text-[10px] font-mono text-[#4a5568]">Capesize / Panamax</div>
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
