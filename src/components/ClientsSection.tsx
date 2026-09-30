import React from 'react';
import { ESTEEMED_CUSTOMERS } from '../data/materials';
import { BoltedCard } from './common/BoltedCard';
import { LedIndicator } from './common/LedIndicator';
import { Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  return (
    <section id="clients" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#d1d9e6]/70 shadow-[inset_1px_1px_3px_#babecc]">
          <LedIndicator color="orange" size="sm" pulse={true} />
          <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#4a5568]">
            TRUSTED BY INDUSTRY • BUILT ON RELATIONSHIPS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2d3436] tracking-tight drop-shadow-[0_1px_1px_#ffffff]">
          OUR ESTEEMED CUSTOMERS
        </h2>
        <p className="text-sm sm:text-base text-[#4a5568] mt-3 font-normal leading-relaxed">
          At CRS Group, we believe that strong industrial businesses are built on trust, consistency, and dependable execution. Our association with industry leaders reflects our commitment to delivering reliable materials, products, and services that support demanding steelmaking operations.
        </p>
      </div>

      {/* Customer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {ESTEEMED_CUSTOMERS.map((customer, idx) => (
          <BoltedCard
            key={idx}
            withScrews={true}
            withVents={true}
            tag={`CLIENT 0${idx + 1}`}
            className="flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-200"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_#babecc,3px_3px_6px_#babecc] flex items-center justify-center border border-white/60 group-hover:scale-105 transition-transform duration-200">
                  <Building2 className="w-5 h-5 text-[#ff4757]" />
                </div>
                <div className="text-[10px] font-mono text-[#ff4757] font-bold">
                  {customer.sector}
                </div>
              </div>

              <h3 className="font-sans font-black text-lg text-[#2d3436] tracking-tight leading-snug">
                {customer.name}
              </h3>
            </div>

            <div className="mt-4 pt-3 border-t border-[#babecc]/50 flex items-center justify-between text-[11px] font-mono text-[#4a5568]">
              <span>{customer.region}</span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Active Partner
              </span>
            </div>
          </BoltedCard>
        ))}

        {/* Callout Card */}
        <div className="p-6 rounded-2xl bg-[#282f38] text-white border border-white/10 shadow-[8px_8px_18px_#babecc,-8px_-8px_18px_#ffffff] flex flex-col justify-between bolted-panel-dark">
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#ff4757]">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-mono text-xs uppercase font-bold tracking-wider">
                Industry Trust
              </span>
            </div>
            <h4 className="font-sans font-extrabold text-lg text-white">
              Proud to Serve Market Leaders
            </h4>
            <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-sans">
              * This list represents a selection of the industrial steel plants and manufacturing corporations we serve and is not exhaustive.
            </p>
          </div>
          <div className="font-mono text-[10px] text-neutral-500 pt-3 border-t border-white/10 mt-3">
            VERIFIED INDUSTRIAL SUPPLY CREDENTIALS
          </div>
        </div>
      </div>
    </section>
  );
};
