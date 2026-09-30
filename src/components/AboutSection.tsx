import React, { useState } from 'react';
import { BoltedCard } from './common/BoltedCard';
import { LedIndicator } from './common/LedIndicator';
import { VentSlots } from './common/VentSlots';
import { ShieldCheck, HardHat, Compass, FileCheck, Layers, Scale } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'facilities' | 'compliance'>('mission');

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <LedIndicator color="orange" size="sm" pulse={true} />
          <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#4a5568]">
            ENTERPRISE ARCHITECTURE // ABOUT HEITZMEISTER
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2d3436] tracking-tight drop-shadow-[0_1px_1px_#ffffff]">
          METALLURGICAL PRECISION SINCE 1984
        </h2>
        <p className="text-base text-[#4a5568] max-w-2xl mt-3 font-normal">
          Supplying the world's most demanding blast furnaces, basic oxygen shops, and electric arc mini-mills with chemically unyielding raw materials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Module Selector */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-2 rounded-2xl bg-[#d1d9e6]/60 shadow-[inset_2px_2px_5px_#babecc,inset_-2px_-2px_5px_#ffffff] space-y-2">
            <button
              onClick={() => setActiveTab('mission')}
              className={`w-full text-left p-4 rounded-xl font-mono text-xs uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-between ${
                activeTab === 'mission'
                  ? 'bg-[#e0e5ec] text-[#2d3436] shadow-[6px_6px_12px_#babecc,-6px_-6px_12px_#ffffff] border-l-4 border-[#ff4757]'
                  : 'text-[#4a5568] hover:bg-[#e0e5ec]/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Compass className="w-4 h-4 text-[#ff4757]" />
                <span>Core Philosophy</span>
              </div>
              <span className="text-[10px] text-[#4a5568]">MOD-01</span>
            </button>

            <button
              onClick={() => setActiveTab('facilities')}
              className={`w-full text-left p-4 rounded-xl font-mono text-xs uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-between ${
                activeTab === 'facilities'
                  ? 'bg-[#e0e5ec] text-[#2d3436] shadow-[6px_6px_12px_#babecc,-6px_-6px_12px_#ffffff] border-l-4 border-[#ff4757]'
                  : 'text-[#4a5568] hover:bg-[#e0e5ec]/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-[#ff4757]" />
                <span>Terminal Infrastructure</span>
              </div>
              <span className="text-[10px] text-[#4a5568]">MOD-02</span>
            </button>

            <button
              onClick={() => setActiveTab('compliance')}
              className={`w-full text-left p-4 rounded-xl font-mono text-xs uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-between ${
                activeTab === 'compliance'
                  ? 'bg-[#e0e5ec] text-[#2d3436] shadow-[6px_6px_12px_#babecc,-6px_-6px_12px_#ffffff] border-l-4 border-[#ff4757]'
                  : 'text-[#4a5568] hover:bg-[#e0e5ec]/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <FileCheck className="w-4 h-4 text-[#ff4757]" />
                <span>Audits & Certification</span>
              </div>
              <span className="text-[10px] text-[#4a5568]">MOD-03</span>
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-[#e0e5ec] border border-white/60 shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_#babecc,4px_4px_10px_#babecc]">
            <div className="flex items-center justify-between pb-3 border-b border-[#babecc]/60 mb-3">
              <span className="font-mono text-[10px] font-bold uppercase text-[#4a5568]">
                HARDWARE DOSSIER
              </span>
              <VentSlots count={3} />
            </div>
            <div className="space-y-2 text-xs font-mono text-[#4a5568]">
              <div className="flex justify-between">
                <span>FOUNDING:</span>
                <span className="font-bold text-[#2d3436]">1984 (Duisburg/Rotterdam)</span>
              </div>
              <div className="flex justify-between">
                <span>LAB METHOD:</span>
                <span className="font-bold text-[#2d3436]">Optical Spark & XRF</span>
              </div>
              <div className="flex justify-between">
                <span>BLAST FURNACE LOGISTICS:</span>
                <span className="font-bold text-[#2d3436]">Dedicated 24/7 Rail & Barge</span>
              </div>
              <div className="flex justify-between">
                <span>ISO REGISTRATION:</span>
                <span className="font-bold text-emerald-600">CERT-2026-HM90</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Active Tab Content in Bolted Panel */}
        <div className="lg:col-span-8">
          <BoltedCard elevated={true} withVents={true} withScrews={true} tag={activeTab.toUpperCase()}>
            {activeTab === 'mission' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_#babecc,4px_4px_8px_#babecc] flex items-center justify-center">
                    <Scale className="w-6 h-6 text-[#ff4757]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-2xl text-[#2d3436] tracking-tight">
                      Material Honesty & Structural Integrity
                    </h3>
                    <p className="font-mono text-xs text-[#ff4757]">
                      ZERO-CONTAMINATION POLICY ACROSS EVERY FREIGHT CONSIGNMENT
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed">
                  In modern steelmaking, a 0.05% deviation in coke CSR or iron ore alumina content can destabilize a blast furnace hearth, triggering million-dollar shutdowns. Heitzmeister was engineered to eliminate chemistry variability.
                </p>

                <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed">
                  Inspired by the unadorned functionality of Dieter Rams and modern high-end technical apparatus, our operations treat heavy raw materials with micrometer-level precision. Every pellet, briquette, and refractory brick is verified against exact customer heat recipe tolerances before vessel loading.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#babecc]/60">
                  <div className="p-4 rounded-xl bg-[#d1d9e6]/40 shadow-[inset_1px_1px_3px_#babecc]">
                    <div className="font-mono text-xs font-bold text-[#2d3436] mb-1">
                      GUARANTEED HOMOGENEITY
                    </div>
                    <p className="text-xs text-[#4a5568]">
                      Automated bed-blending and mechanical screening eliminate size segregation during bulk handling.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#d1d9e6]/40 shadow-[inset_1px_1px_3px_#babecc]">
                    <div className="font-mono text-xs font-bold text-[#2d3436] mb-1">
                      CARBON-NEUTRAL ROADMAP
                    </div>
                    <p className="text-xs text-[#4a5568]">
                      Pioneering low-carbon HBI and bio-coke supplements to support hydrogen-based green steel transition.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'facilities' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_#babecc,4px_4px_8px_#babecc] flex items-center justify-center">
                    <HardHat className="w-6 h-6 text-[#ff4757]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-2xl text-[#2d3436] tracking-tight">
                      Deepwater Terminals & Screening Hubs
                    </h3>
                    <p className="font-mono text-xs text-[#ff4757]">
                      STRATEGIC BOTTLENECK-FREE MARITIME HUBS
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed">
                  Heitzmeister controls strategic terminal allocations across key North Sea, Mediterranean, and Asian maritime choke points. With continuous ship unloaders running at 3,500 MT/hr, we minimize vessel demurrage and assure rapid turnaround.
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[#d1d9e6]/50 shadow-[inset_1px_1px_3px_#babecc] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#2d3436]">ROTTERDAM EURO-BULK TERMINAL</span>
                      <div className="text-[11px] text-[#4a5568]">Draft: 24m (Capesize) • Stockyard: 850,000 MT capacity</div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-700 font-bold text-[10px]">
                      OPERATIONAL
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#d1d9e6]/50 shadow-[inset_1px_1px_3px_#babecc] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#2d3436]">RHINE-RUHR BARGE & RAIL HUB</span>
                      <div className="text-[11px] text-[#4a5568]">Automated 4-deck vibrating screens • Direct rail coupling</div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-700 font-bold text-[10px]">
                      OPERATIONAL
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#d1d9e6]/50 shadow-[inset_1px_1px_3px_#babecc] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#2d3436]">TARANTO MEDITERRANEAN HUB</span>
                      <div className="text-[11px] text-[#4a5568]">Pellet moisture control • Direct EAF silo feed links</div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-700 font-bold text-[10px]">
                      OPERATIONAL
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'compliance' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_#babecc,4px_4px_8px_#babecc] flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[#ff4757]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-2xl text-[#2d3436] tracking-tight">
                      Accredited Testing & Standard Adherence
                    </h3>
                    <p className="font-mono text-xs text-[#ff4757]">
                      EVERY SHIPMENT BACKED BY INDEPENDENT INSPECTION CERTIFICATES
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed">
                  Our internal laboratories collaborate seamlessly with global third-party inspection firms (SGS, Bureau Veritas, Intertek). Every bulk parcel is sampled automatically according to ISO 3082 and analyzed with traceable calibration curves.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] text-center">
                    <div className="font-mono text-xl font-black text-[#2d3436]">ISO 9001</div>
                    <div className="font-mono text-[10px] text-[#4a5568] uppercase mt-1">Quality Management</div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] text-center">
                    <div className="font-mono text-xl font-black text-[#2d3436]">EN 10204</div>
                    <div className="font-mono text-[10px] text-[#4a5568] uppercase mt-1">Inspection Docs 3.1/3.2</div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] text-center">
                    <div className="font-mono text-xl font-black text-[#2d3436]">ISO 17025</div>
                    <div className="font-mono text-[10px] text-[#4a5568] uppercase mt-1">Lab Testing Competence</div>
                  </div>
                </div>
              </div>
            )}
          </BoltedCard>
        </div>
      </div>
    </section>
  );
};
