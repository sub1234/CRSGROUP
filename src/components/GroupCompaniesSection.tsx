import React from 'react';
import { GROUP_COMPANIES } from '../data/materials';
import { BoltedCard } from './common/BoltedCard';
import { LedIndicator } from './common/LedIndicator';
import { Building, Factory, Globe2, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface GroupCompaniesSectionProps {
  onNavigateProducts: () => void;
}

export const GroupCompaniesSection: React.FC<GroupCompaniesSectionProps> = ({ onNavigateProducts }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'crs-enterprises':
        return <Building className="w-6 h-6 text-[#ff4757]" />;
      case 'hitzemeister':
        return <Factory className="w-6 h-6 text-[#ff4757]" />;
      case 'sugarbiz':
        return <Globe2 className="w-6 h-6 text-[#ff4757]" />;
      default:
        return <Truck className="w-6 h-6 text-[#ff4757]" />;
    }
  };

  return (
    <section id="companies" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <LedIndicator color="orange" size="sm" pulse={true} />
          <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#4a5568]">
            ENTERPRISE SYNERGY • OUR GROUP COMPANIES
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2d3436] tracking-tight drop-shadow-[0_1px_1px_#ffffff]">
          CRS GROUP ECOSYSTEM
        </h2>
        <p className="text-sm sm:text-base text-[#4a5568] max-w-2xl mt-3 font-normal leading-relaxed">
          The Group combines the extensive market reputation and trading power of <strong className="text-[#2d3436]">CRS Enterprises</strong> with the specialized refractory manufacturing capabilities of <strong className="text-[#2d3436]">Hitzemeister Private Limited</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {GROUP_COMPANIES.map((company) => (
          <BoltedCard
            key={company.id}
            elevated={company.id === 'hitzemeister' || company.id === 'crs-enterprises'}
            withScrews={true}
            withVents={true}
            tag={company.role.toUpperCase()}
            className="flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_#babecc,4px_4px_8px_#babecc] flex items-center justify-center shrink-0 border border-white/80">
                  {getIcon(company.id)}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#ff4757] font-extrabold uppercase tracking-wider">
                    {company.location}
                  </span>
                  <h3 className="font-sans font-black text-xl text-[#2d3436] tracking-tight leading-snug">
                    {company.name}
                  </h3>
                  <p className="text-xs font-mono text-[#4a5568] font-semibold mt-0.5">
                    {company.tagline}
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#4a5568] leading-relaxed">
                {company.description}
              </p>

              {/* Highlights Box */}
              <div className="p-4 rounded-xl bg-[#d1d9e6]/50 shadow-[inset_2px_2px_4px_#babecc,inset_-1px_-1px_2px_#ffffff] space-y-2">
                <div className="font-mono text-[10px] font-bold text-[#2d3436] uppercase tracking-wider">
                  Key Capabilities & Focus
                </div>
                <ul className="space-y-1.5 text-xs text-[#4a5568]">
                  {company.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff4757] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#babecc]/50 flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#4a5568]">
                CRS GROUP INTEGRATED ENTITY
              </span>
              <button
                onClick={onNavigateProducts}
                className="font-mono text-xs font-bold text-[#ff4757] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View Offerings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </BoltedCard>
        ))}
      </div>
    </section>
  );
};
