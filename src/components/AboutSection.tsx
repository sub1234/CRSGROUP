import React, { useState } from 'react';
import { BoltedCard } from './common/BoltedCard';
import { LedIndicator } from './common/LedIndicator';
import { VentSlots } from './common/VentSlots';
import { Compass, Flame, Award, Quote, CheckCircle2, Factory } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'why-us' | 'director' | 'tundish'>('about');

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <LedIndicator color="orange" size="sm" pulse={true} />
          <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#4a5568]">
            SECTION 01 // ABOUT CRS GROUP & HITZEMEISTER
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2d3436] tracking-tight drop-shadow-[0_1px_1px_#ffffff]">
          FROM RAW MATERIALS TO REFRACTORY SOLUTIONS
        </h2>
        <p className="text-base text-[#4a5568] max-w-2xl mt-3 font-normal leading-relaxed">
          Combining the commercial and trading strength of <strong className="text-[#2d3436]">CRS Enterprises</strong> with the specialized refractory manufacturing capabilities of <strong className="text-[#2d3436]">Hitzemeister Private Limited</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Module Switcher */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-2 rounded-2xl bg-[#d1d9e6]/60 shadow-[inset_2px_2px_5px_#babecc,inset_-2px_-2px_5px_#ffffff] space-y-2">
            <button
              onClick={() => setActiveTab('about')}
              className={`w-full text-left p-4 rounded-xl font-mono text-xs uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-between ${
                activeTab === 'about'
                  ? 'bg-[#e0e5ec] text-[#2d3436] shadow-[6px_6px_12px_#babecc,-6px_-6px_12px_#ffffff] border-l-4 border-[#ff4757]'
                  : 'text-[#4a5568] hover:bg-[#e0e5ec]/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Compass className="w-4 h-4 text-[#ff4757]" />
                <span>01. About Us</span>
              </div>
              <span className="text-[10px] text-[#4a5568]">DOC-01</span>
            </button>

            <button
              onClick={() => setActiveTab('tundish')}
              className={`w-full text-left p-4 rounded-xl font-mono text-xs uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-between ${
                activeTab === 'tundish'
                  ? 'bg-[#e0e5ec] text-[#2d3436] shadow-[6px_6px_12px_#babecc,-6px_-6px_12px_#ffffff] border-l-4 border-[#ff4757]'
                  : 'text-[#4a5568] hover:bg-[#e0e5ec]/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Flame className="w-4 h-4 text-[#ff4757]" />
                <span>03. Tundish Boards</span>
              </div>
              <span className="text-[10px] text-[#4a5568]">DOC-03</span>
            </button>

            <button
              onClick={() => setActiveTab('why-us')}
              className={`w-full text-left p-4 rounded-xl font-mono text-xs uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-between ${
                activeTab === 'why-us'
                  ? 'bg-[#e0e5ec] text-[#2d3436] shadow-[6px_6px_12px_#babecc,-6px_-6px_12px_#ffffff] border-l-4 border-[#ff4757]'
                  : 'text-[#4a5568] hover:bg-[#e0e5ec]/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-[#ff4757]" />
                <span>04. Why Us?</span>
              </div>
              <span className="text-[10px] text-[#4a5568]">DOC-04</span>
            </button>

            <button
              onClick={() => setActiveTab('director')}
              className={`w-full text-left p-4 rounded-xl font-mono text-xs uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-between ${
                activeTab === 'director'
                  ? 'bg-[#e0e5ec] text-[#2d3436] shadow-[6px_6px_12px_#babecc,-6px_-6px_12px_#ffffff] border-l-4 border-[#ff4757]'
                  : 'text-[#4a5568] hover:bg-[#e0e5ec]/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Quote className="w-4 h-4 text-[#ff4757]" />
                <span>06. Director's Desk</span>
              </div>
              <span className="text-[10px] text-[#4a5568]">DOC-06</span>
            </button>
          </div>

          {/* Meaning plaque */}
          <div className="p-5 rounded-2xl bg-[#e0e5ec] border border-white/60 shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_#babecc,4px_4px_10px_#babecc]">
            <div className="flex items-center justify-between pb-3 border-b border-[#babecc]/60 mb-3">
              <span className="font-mono text-[10px] font-bold uppercase text-[#4a5568]">
                NAME ETYMOLOGY
              </span>
              <VentSlots count={3} />
            </div>
            <div className="space-y-2">
              <div className="font-sans font-black text-base text-[#2d3436]">
                Hitzemeister = "Master of Heating"
              </div>
              <p className="text-xs text-[#4a5568] leading-relaxed">
                Derived from German industrial heritage, representing mastery over high-temperature pyrometallurgy, refractory endurance, and thermal engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Tab Content */}
        <div className="lg:col-span-8">
          <BoltedCard elevated={true} withVents={true} withScrews={true} tag={activeTab.toUpperCase()}>
            
            {/* 01. About Us */}
            {activeTab === 'about' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_#babecc,4px_4px_8px_#babecc] flex items-center justify-center">
                    <Factory className="w-6 h-6 text-[#ff4757]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-2xl text-[#2d3436] tracking-tight">
                      Built for Industry
                    </h3>
                    <p className="font-mono text-xs text-[#ff4757] font-bold">
                      MINERAL SUPPLY • INDUSTRIAL MATERIALS • REFRACTORY SOLUTIONS
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed">
                  <strong>CRS Group</strong> is an emerging industrial business group operating across mineral supply, industrial materials, steel-industry supplies and refractory manufacturing.
                </p>

                <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed">
                  The Group combines the commercial and supply-chain capabilities of <strong>CRS Enterprises Private Limited</strong> with the specialised manufacturing capabilities of <strong>Hitzemeister Private Limited</strong>.
                </p>

                <div className="p-4 rounded-xl bg-[#d1d9e6]/50 shadow-[inset_2px_2px_4px_#babecc] border-l-4 border-[#ff4757] space-y-1">
                  <div className="font-mono text-xs font-bold text-[#2d3436]">
                    OUR CORE OBJECTIVE:
                  </div>
                  <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                    To become a reliable industrial partner for the steel, mining, metallurgical and manufacturing sectors.
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed">
                  With capabilities spanning mineral sourcing, material supply, trading, manufacturing and industrial solutions, CRS Group works with customers to provide reliable materials and products tailored to their operational requirements.
                </p>

                <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed">
                  While our trading activities are carried out through <strong>CRS Enterprises Private Limited</strong>, our manufacturing operations are undertaken through <strong>Hitzemeister Private Limited</strong>. Inspired by the meaning of Hitzemeister — <em>“Master of Heating”</em> — we are committed to manufacturing high-quality products that meet demanding industrial standards.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#babecc]/50 font-mono text-center">
                  <div className="p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_1px_1px_3px_#ffffff,2px_2px_5px_#babecc]">
                    <div className="text-sm font-black text-[#2d3436]">QUALITY</div>
                    <div className="text-[10px] text-[#4a5568]">Strict batch testing</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_1px_1px_3px_#ffffff,2px_2px_5px_#babecc]">
                    <div className="text-sm font-black text-[#2d3436]">CONSISTENCY</div>
                    <div className="text-[10px] text-[#4a5568]">Zero deviation supply</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_1px_1px_3px_#ffffff,2px_2px_5px_#babecc]">
                    <div className="text-sm font-black text-[#2d3436]">RELIABILITY</div>
                    <div className="text-[10px] text-[#4a5568]">Long-term trust</div>
                  </div>
                </div>
              </div>
            )}

            {/* 03. Tundish Boards Focus */}
            {activeTab === 'tundish' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_#babecc,4px_4px_8px_#babecc] flex items-center justify-center">
                    <Flame className="w-6 h-6 text-[#ff4757]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-2xl text-[#2d3436] tracking-tight">
                      Tundish Boards
                    </h3>
                    <p className="font-mono text-xs text-[#ff4757] font-bold">
                      REFRACTORY SOLUTIONS FOR CONTINUOUS CASTING
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#d1d9e6]/50 shadow-[inset_2px_2px_4px_#babecc] space-y-1">
                    <div className="font-mono text-xs font-bold text-[#ff4757] uppercase">
                      HIGH TEMPERATURE RESISTANCE
                    </div>
                    <p className="text-xs text-[#4a5568] leading-relaxed">
                      Designed specifically for demanding metallurgical environments and high molten steel contact temperatures.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#d1d9e6]/50 shadow-[inset_2px_2px_4px_#babecc] space-y-1">
                    <div className="font-mono text-xs font-bold text-[#ff4757] uppercase">
                      CONSISTENT QUALITY
                    </div>
                    <p className="text-xs text-[#4a5568] leading-relaxed">
                      Controlled manufacturing protocols assuring reliable, reproducible batch performance across sequences.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#d1d9e6]/50 shadow-[inset_2px_2px_4px_#babecc] space-y-1">
                    <div className="font-mono text-xs font-bold text-[#ff4757] uppercase">
                      DIMENSIONAL ACCURACY
                    </div>
                    <p className="text-xs text-[#4a5568] leading-relaxed">
                      Manufactured strictly according to required steel plant and caster machine specifications.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#d1d9e6]/50 shadow-[inset_2px_2px_4px_#babecc] space-y-1">
                    <div className="font-mono text-xs font-bold text-[#ff4757] uppercase">
                      APPLICATION FOCUSED
                    </div>
                    <p className="text-xs text-[#4a5568] leading-relaxed">
                      Specifications can be precisely aligned with unique customer and metallurgical heat requirements.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#e0e5ec] shadow-[inset_1px_1px_3px_#ffffff,2px_2px_5px_#babecc] flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#2d3436]">RELIABLE SUPPLY CHAIN</span>
                    <p className="text-xs text-[#4a5568]">Production and dispatch planned around demanding industrial timelines.</p>
                  </div>
                  <span className="px-3 py-1 rounded bg-emerald-100 text-emerald-700 font-mono text-xs font-bold">
                    IN PRODUCTION
                  </span>
                </div>
              </div>
            )}

            {/* 04. Why Us? */}
            {activeTab === 'why-us' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_#babecc,4px_4px_8px_#babecc] flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#ff4757]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-2xl text-[#2d3436] tracking-tight">
                      Why Choose CRS Group?
                    </h3>
                    <p className="font-mono text-xs text-[#ff4757] font-bold">
                      A COMPREHENSIVE INDUSTRIAL PLATFORM
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-[#d1d9e6]/40 shadow-[inset_1px_1px_3px_#babecc]">
                    <span className="font-mono text-xs font-bold text-[#2d3436] uppercase flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff4757]" /> Integrated Approach
                    </span>
                    <p className="text-xs text-[#4a5568] mt-1 pl-6">
                      Our businesses operate across different stages of the industrial supply chain, from manufacturing to trading.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#d1d9e6]/40 shadow-[inset_1px_1px_3px_#babecc]">
                    <span className="font-mono text-xs font-bold text-[#2d3436] uppercase flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff4757]" /> Industry Understanding
                    </span>
                    <p className="text-xs text-[#4a5568] mt-1 pl-6">
                      Our team combines decades of steel-industry experience with our Directors’ extensive international exposure, creating strong expertise to understand industrial requirements and deliver reliable, practical solutions.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#d1d9e6]/40 shadow-[inset_1px_1px_3px_#babecc]">
                    <span className="font-mono text-xs font-bold text-[#2d3436] uppercase flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff4757]" /> Supply & Manufacturing Capability
                    </span>
                    <p className="text-xs text-[#4a5568] mt-1 pl-6">
                      We focus on dependable sourcing, procurement and logistics coordination, while Hitzemeister adds specialized refractory manufacturing capability to the Group.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#d1d9e6]/40 shadow-[inset_1px_1px_3px_#babecc]">
                    <span className="font-mono text-xs font-bold text-[#2d3436] uppercase flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff4757]" /> Flexibility
                    </span>
                    <p className="text-xs text-[#4a5568] mt-1 pl-6">
                      Our businesses can respond swiftly to both standard and customized industrial requirements, serving customers across different stages of their material and production needs.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 06. Director's Desk */}
            {activeTab === 'director' && (
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#babecc]/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_#babecc,4px_4px_8px_#babecc] flex items-center justify-center">
                      <Quote className="w-6 h-6 text-[#ff4757]" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-2xl text-[#2d3436] tracking-tight">
                        From the Director's Desk
                      </h3>
                      <p className="font-mono text-xs text-[#ff4757] font-bold">
                        BUILDING INDUSTRY. CREATING TRUST. DELIVERING VALUE.
                      </p>
                    </div>
                  </div>
                  <LedIndicator color="green" size="sm" label="OFFICIAL" />
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                  <p className="italic font-semibold text-[#2d3436]">
                    Dear Partners, Customers and Well-Wishers,
                  </p>

                  <p>
                    It gives us immense pleasure to introduce CRS Group, a growing industrial group built around a simple philosophy — reliability, integrity and long-term partnerships.
                  </p>

                  <p>
                    Our journey has been driven by our understanding of the industrial sector and the evolving requirements of our customers. Through CRS Enterprises Private Limited, we have developed our capabilities in minerals, industrial materials, scrap and steel-industry supplies. With Hitzemeister Private Limited, we have taken the next step into specialised refractory manufacturing, tundish boards and steel-industry solutions.
                  </p>

                  <p>
                    We believe that the future of industrial businesses lies not only in supplying products, but in understanding the challenges faced by our customers and becoming an integral part of their operations. We are investing in our manufacturing capabilities, strengthening our supply network and continuously exploring new opportunities across the industrial value chain.
                  </p>

                  <p>
                    Our vision is to build CRS Group into a trusted and diversified industrial organization, with capabilities extending from raw-material sourcing and industrial supply to specialized manufacturing and engineered solutions. We sincerely thank our customers, suppliers, employees and business partners for their continued trust and support.
                  </p>

                  <p className="font-bold text-[#2d3436]">
                    The journey ahead is ambitious, and we believe the strongest growth is built together.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#babecc]/50 flex flex-wrap items-center justify-between gap-4 font-mono">
                  <div>
                    <div className="font-black text-base text-[#2d3436]">
                      SUBHAM CHOWDHARY
                    </div>
                    <div className="text-xs text-[#ff4757] font-bold">
                      Director • CRS Group
                    </div>
                    <div className="text-[11px] text-[#4a5568]">
                      CRS Enterprises Private Limited • Hitzemeister Private Limited
                    </div>
                  </div>

                  <div className="text-right text-[11px] text-[#4a5568] space-y-0.5">
                    <div>Purulia, West Bengal, India</div>
                    <div>London, United Kingdom</div>
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
