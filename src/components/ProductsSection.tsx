import React, { useState } from 'react';
import type { MaterialSpec } from '../data/materials';
import { MATERIALS_DATA } from '../data/materials';
import { BoltedCard } from './common/BoltedCard';
import { LedIndicator } from './common/LedIndicator';
import { TactileButton } from './common/TactileButton';
import { Download, Factory, Building } from 'lucide-react';

interface ProductsSectionProps {
  onSelectForRfq?: (material: MaterialSpec) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = () => {
  const [selectedDivision, setSelectedDivision] = useState<'all' | 'hitzemeister' | 'crs-enterprises'>('all');
  const [selectedSpecModal, setSelectedSpecModal] = useState<MaterialSpec | null>(null);

  const filteredMaterials = selectedDivision === 'all'
    ? MATERIALS_DATA
    : MATERIALS_DATA.filter((m) => m.division === selectedDivision);

  const getDivisionIcon = (division: string) => {
    if (division === 'hitzemeister') {
      return <Factory className="w-5 h-5 text-[#ff4757]" />;
    }
    return <Building className="w-5 h-5 text-[#ff4757]" />;
  };

  return (
    <section id="products" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <LedIndicator color="orange" size="sm" pulse={true} />
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#4a5568]">
              PRODUCT & COMMODITY DIRECTORY // DUAL-DIVISION SUPPLY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2d3436] tracking-tight drop-shadow-[0_1px_1px_#ffffff]">
            MANUFACTURING & TRADING PORTFOLIO
          </h2>
          <p className="text-base text-[#4a5568] max-w-xl mt-2 font-normal">
            Specialized refractory manufacturing by <strong>Hitzemeister</strong> and prime mineral & metal sourcing by <strong>CRS Enterprises</strong>.
          </p>
        </div>

        {/* Division Filter Badges */}
        <div className="p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] border border-white/60 font-mono text-xs text-[#4a5568] space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-[#2d3436]">PURULIA WORKS & TRADING HUBS</span>
          </div>
          <div className="text-[11px]">DISPATCH VIA ROAD & RAIL NETWORKS</div>
        </div>
      </div>

      {/* Division Selector Buttons */}
      <div className="flex flex-wrap gap-2.5 mb-10 p-2 rounded-2xl bg-[#d1d9e6]/60 shadow-[inset_2px_2px_5px_#babecc,inset_-2px_-2px_5px_#ffffff]">
        <button
          onClick={() => setSelectedDivision('all')}
          className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
            selectedDivision === 'all'
              ? 'bg-[#e0e5ec] text-[#ff4757] shadow-[4px_4px_10px_#babecc,-4px_-4px_10px_#ffffff]'
              : 'text-[#4a5568] hover:text-[#2d3436] hover:bg-[#e0e5ec]/60'
          }`}
        >
          All Offerings ({MATERIALS_DATA.length})
        </button>

        <button
          onClick={() => setSelectedDivision('hitzemeister')}
          className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer flex items-center gap-2 ${
            selectedDivision === 'hitzemeister'
              ? 'bg-[#e0e5ec] text-[#ff4757] shadow-[4px_4px_10px_#babecc,-4px_-4px_10px_#ffffff]'
              : 'text-[#4a5568] hover:text-[#2d3436] hover:bg-[#e0e5ec]/60'
          }`}
        >
          <Factory className="w-3.5 h-3.5" />
          <span>Hitzemeister Manufacturing (Tundish & Refractories)</span>
        </button>

        <button
          onClick={() => setSelectedDivision('crs-enterprises')}
          className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer flex items-center gap-2 ${
            selectedDivision === 'crs-enterprises'
              ? 'bg-[#e0e5ec] text-[#ff4757] shadow-[4px_4px_10px_#babecc,-4px_-4px_10px_#ffffff]'
              : 'text-[#4a5568] hover:text-[#2d3436] hover:bg-[#e0e5ec]/60'
          }`}
        >
          <Building className="w-3.5 h-3.5" />
          <span>CRS Enterprises (Quartzite, Scrap, Pig Iron & Billets)</span>
        </button>
      </div>

      {/* Materials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredMaterials.map((mat) => (
          <BoltedCard
            key={mat.id}
            elevated={false}
            withScrews={true}
            withVents={true}
            tag={mat.divisionName.toUpperCase()}
            className="flex flex-col justify-between group"
          >
            <div className="space-y-4">
              {/* Header: Icon, Code & Stock Status */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_#babecc,4px_4px_8px_#babecc] flex items-center justify-center border border-white/80 group-hover:scale-105 transition-transform duration-200">
                    {getDivisionIcon(mat.division)}
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-[#ff4757] tracking-wider">
                      {mat.code} // {mat.categoryLabel}
                    </span>
                    <h3 className="font-sans font-extrabold text-xl text-[#2d3436] tracking-tight leading-tight">
                      {mat.name}
                    </h3>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1.5 px-2 py-1 rounded bg-[#d1d9e6]/70 shadow-[inset_1px_1px_2px_#babecc] text-[10px] font-mono font-bold text-[#4a5568]">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      mat.stockStatus === 'Manufacturing'
                        ? 'bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.8)]'
                        : 'bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]'
                    }`}
                  />
                  <span>{mat.stockStatus}</span>
                </div>
              </div>

              <p className="text-xs text-[#4a5568] leading-relaxed">
                {mat.description}
              </p>

              {/* Technical Chemistry / Parameters Recessed Module */}
              <div className="p-3.5 rounded-xl bg-[#d1d9e6]/45 shadow-[inset_2px_2px_5px_#babecc,inset_-1px_-1px_3px_#ffffff] border border-white/30">
                <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#4a5568] uppercase pb-2 border-b border-[#babecc]/40 mb-2">
                  <span>KEY SPECIFICATIONS & METALLURGICAL ASSAY</span>
                  <span className="text-[#ff4757]">BATCH VERIFIED</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  {mat.primaryChemistry.map((c, i) => (
                    <div key={i} className="flex justify-between py-0.5 border-b border-[#babecc]/20">
                      <span className="text-[#4a5568]">{c.element}:</span>
                      <span className="font-bold text-[#2d3436]">{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlight bullet points */}
              {mat.highlightPoints && (
                <div className="space-y-1 text-xs text-[#4a5568] font-mono">
                  {mat.highlightPoints.map((pt, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4757]" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Sizing & Standards Details */}
              <div className="space-y-1.5 text-xs font-mono text-[#4a5568] pt-1">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#2d3436] shrink-0">SIZING:</span>
                  <span className="truncate">{mat.sizing}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#2d3436] shrink-0">APPLICATION:</span>
                  <span className="truncate">{mat.application}</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions: Only Datasheet view */}
            <div className="mt-6 pt-4 border-t border-[#babecc]/60 flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs text-[#4a5568]">
                MIN LOT: <strong className="text-[#2d3436]">{mat.minOrderQuantity}</strong>
              </span>

              <div>
                <TactileButton
                  variant="secondary"
                  size="sm"
                  icon={<Download className="w-3.5 h-3.5 text-[#ff4757]" />}
                  onClick={() => setSelectedSpecModal(mat)}
                >
                  View Datasheet
                </TactileButton>
              </div>
            </div>
          </BoltedCard>
        ))}
      </div>

      {/* Datasheet Preview Modal */}
      {selectedSpecModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="max-w-xl w-full">
            <BoltedCard elevated={true} withScrews={true} withVents={true} tag={selectedSpecModal.divisionName.toUpperCase()}>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#babecc]">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#ff4757]">{selectedSpecModal.code}</span>
                    <h3 className="font-sans font-black text-xl text-[#2d3436]">{selectedSpecModal.name}</h3>
                  </div>
                  <LedIndicator color="green" size="md" label="CRS VERIFIED" />
                </div>

                <p className="text-xs text-[#4a5568] leading-relaxed">
                  {selectedSpecModal.description}
                </p>

                <div className="p-4 rounded-xl bg-[#d1d9e6]/50 shadow-[inset_2px_2px_5px_#babecc] font-mono text-xs space-y-2">
                  <div className="font-bold text-[#2d3436] border-b border-[#babecc]/50 pb-1">
                    TECHNICAL PARAMETERS & QUALITY GATES
                  </div>
                  {selectedSpecModal.primaryChemistry.map((c, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-[#4a5568]">{c.element}</span>
                      <span className="font-bold text-[#2d3436]">{c.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-1 border-t border-[#babecc]/40">
                    <span className="text-[#4a5568]">Standard Supply Fraction</span>
                    <span className="font-bold text-[#2d3436]">{selectedSpecModal.sizing}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end">
                  <TactileButton
                    variant="primary"
                    size="sm"
                    onClick={() => setSelectedSpecModal(null)}
                  >
                    Close Window
                  </TactileButton>
                </div>
              </div>
            </BoltedCard>
          </div>
        </div>
      )}
    </section>
  );
};
