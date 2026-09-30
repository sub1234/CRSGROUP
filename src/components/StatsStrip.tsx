import React from 'react';
import { LedIndicator } from './common/LedIndicator';
import { VentSlots } from './common/VentSlots';
import { Award, Globe2, Zap, Factory } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      metric: '4.85M',
      unit: 'MT/YR',
      label: 'Annual Material Supply',
      subtext: 'Iron Ore, Coke & Alloys',
      icon: <Factory className="w-5 h-5 text-[#ff4757]" />,
    },
    {
      metric: '99.72%',
      unit: 'BATCH OK',
      label: 'Metallurgical Compliance',
      subtext: 'Zero-deviation chemistry',
      icon: <Award className="w-5 h-5 text-[#ff4757]" />,
    },
    {
      metric: '1,850',
      unit: '°C',
      label: 'Thermal Endurance',
      subtext: 'MgO-C & Alumina Castables',
      icon: <Zap className="w-5 h-5 text-[#ff4757]" />,
    },
    {
      metric: '42',
      unit: 'SEAPORTS',
      label: 'Direct Delivery Corridors',
      subtext: 'Capesize & Rail freight',
      icon: <Globe2 className="w-5 h-5 text-[#ff4757]" />,
    },
  ];

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto my-8">
      <div className="relative rounded-3xl bg-[#282f38] p-6 sm:p-8 border border-white/10 shadow-[14px_14px_30px_#babecc,-12px_-12px_28px_#ffffff] bolted-panel-dark">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <LedIndicator color="green" size="md" pulse={true} />
            <span className="font-mono text-xs uppercase tracking-widest font-bold text-neutral-300">
              OPERATIONAL PERFORMANCE TELEMETRY // FY2026 AUDITED
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-neutral-400 hidden sm:inline-block">
              ISO 9001:2015 // ISO 14001
            </span>
            <VentSlots count={4} variant="dark" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="relative p-5 rounded-2xl bg-[#1d2229] border border-white/5 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.8),inset_-1px_-1px_2px_rgba(255,255,255,0.06)] group hover:border-[#ff4757]/40 transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#282f38] flex items-center justify-center shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1),2px_2px_6px_black]">
                  {s.icon}
                </div>
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#12161b] text-neutral-400 border border-white/5">
                  SYS-0{idx + 1}
                </span>
              </div>

              <div className="flex items-baseline gap-1 mt-2">
                <span className="font-mono text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {s.metric}
                </span>
                <span className="font-mono text-xs font-bold text-[#ff4757]">
                  {s.unit}
                </span>
              </div>

              <div className="font-sans font-bold text-sm text-neutral-200 mt-1">
                {s.label}
              </div>

              <div className="font-mono text-xs text-neutral-400 mt-0.5">
                {s.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
