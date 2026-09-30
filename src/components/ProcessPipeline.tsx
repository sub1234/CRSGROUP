import React from 'react';
import { BoltedCard } from './common/BoltedCard';
import { LedIndicator } from './common/LedIndicator';
import { Pickaxe, Flame, FlaskConical, TrainFront, CheckCircle2 } from 'lucide-react';

export const ProcessPipeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Geological Selection',
      techLabel: 'RESERVE AUDITING',
      desc: 'Selective mining and grading of high-iron hematite and low-ash coking coals to ensure consistent raw material feed chemistry.',
      icon: <Pickaxe className="w-6 h-6 text-[#ff4757]" />,
      status: 'VERIFIED',
    },
    {
      num: '02',
      title: 'Thermal Beneficiation',
      techLabel: 'PELLET & COKE OVENS',
      desc: 'Disc pelletization with controlled basicity firing at 1,320°C and 48-hour slot-oven carbonization for high mechanical CSR.',
      icon: <Flame className="w-6 h-6 text-[#ff4757]" />,
      status: 'OPTIMIZED',
    },
    {
      num: '03',
      title: 'Spectrometry & Lab QA',
      techLabel: 'XRF & ASTM D5341',
      desc: 'Rigorous automated X-ray fluorescence analysis, cold-crushing verification, and EN 10204 3.1 inspection certificate generation.',
      icon: <FlaskConical className="w-6 h-6 text-[#ff4757]" />,
      status: 'ISO 17025',
    },
    {
      num: '04',
      title: 'Just-in-Time Plant Dispatch',
      techLabel: 'INTERMODAL FREIGHT',
      desc: 'Panamax vessel chartering and dedicated rotary car-dumper rail wagons delivering directly to blast furnace stock houses.',
      icon: <TrainFront className="w-6 h-6 text-[#ff4757]" />,
      status: 'DISPATCHED',
    },
  ];

  return (
    <section id="production" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <LedIndicator color="orange" size="sm" pulse={true} />
          <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#4a5568]">
            PRODUCTION & METALLURGY PIPELINE // HEITZMEISTER PROTOCOL
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2d3436] tracking-tight drop-shadow-[0_1px_1px_#ffffff]">
          FROM MINE TO BLAST FURNACE HEARTH
        </h2>
        <p className="text-base text-[#4a5568] max-w-2xl mt-3 font-normal">
          Industrial supply chain engineered like clockwork. Every ton is tracked, chemically certified, and synchronized with your steelworks production schedule.
        </p>
      </div>

      {/* Process Pipeline Container */}
      <div className="relative">
        
        {/* Physical Connector Pipe behind nodes (hidden on mobile, visible on desktop) */}
        <div className="hidden lg:block absolute top-[72px] left-12 right-12 h-3.5 rounded-full bg-[#d1d9e6] shadow-[inset_0_2px_4px_rgba(0,0,0,0.25),0_1px_1px_#ffffff] z-0 pointer-events-none" />

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((step, idx) => (
            <BoltedCard
              key={idx}
              withScrews={true}
              withVents={true}
              tag={step.status}
              className="flex flex-col justify-between"
            >
              <div>
                {/* Step Node Housing */}
                <div className="relative flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_#babecc,6px_6px_12px_#babecc] flex items-center justify-center border border-white/80">
                    {step.icon}
                  </div>
                  <span className="font-mono text-3xl font-black text-[#babecc] select-none">
                    {step.num}
                  </span>
                </div>

                <div className="text-[10px] font-mono font-bold tracking-widest text-[#ff4757] uppercase mb-1">
                  {step.techLabel}
                </div>

                <h3 className="font-sans font-bold text-lg text-[#2d3436] tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#4a5568] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#babecc]/50 flex items-center justify-between text-[10px] font-mono text-[#4a5568]">
                <span>TOLERANCE: ±0.05%</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> QA READY
                </span>
              </div>
            </BoltedCard>
          ))}
        </div>

      </div>

    </section>
  );
};
