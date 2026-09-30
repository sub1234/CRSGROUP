import React, { useState, useEffect } from 'react';
import type { MaterialSpec } from '../data/materials';
import { MATERIALS_DATA } from '../data/materials';
import { BoltedCard } from './common/BoltedCard';
import { LedIndicator } from './common/LedIndicator';
import { TactileButton } from './common/TactileButton';
import { RecessedInput, RecessedSelect } from './common/RecessedInput';
import { Send, CheckCircle2, Building, Mail, Phone, MapPin, RefreshCw } from 'lucide-react';

interface ContactRFQSectionProps {
  selectedMaterial: MaterialSpec | null;
}

export const ContactRFQSection: React.FC<ContactRFQSectionProps> = ({ selectedMaterial }) => {
  const [plantName, setPlantName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [materialId, setMaterialId] = useState(MATERIALS_DATA[0].id);
  const [tonnage, setTonnage] = useState(15000);
  const [incoterm, setIncoterm] = useState('CIF-Rotterdam');
  const [deliveryQuarter, setDeliveryQuarter] = useState('Q4-2026');
  const [customSpecs, setCustomSpecs] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRfqCode, setSubmittedRfqCode] = useState<string | null>(null);

  useEffect(() => {
    if (selectedMaterial) {
      setMaterialId(selectedMaterial.id);
    }
  }, [selectedMaterial]);

  const currentMat = MATERIALS_DATA.find((m) => m.id === materialId) || MATERIALS_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedCode = `HM-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRfqCode(generatedCode);
    }, 1200);
  };

  const handleReset = () => {
    setSubmittedRfqCode(null);
    setPlantName('');
    setEmail('');
    setPhone('');
    setCustomSpecs('');
  };

  return (
    <section id="rfq" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <LedIndicator color="orange" size="sm" pulse={true} />
          <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#4a5568]">
            DATA ENTRY SLOT // DISPATCH CONSOLE & RFQ
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2d3436] tracking-tight drop-shadow-[0_1px_1px_#ffffff]">
          REQUEST FOR QUOTATION (RFQ)
        </h2>
        <p className="text-base text-[#4a5568] max-w-2xl mt-2 font-normal">
          Direct terminal interface into Heitzmeister trading and chartering desk. Submit batch tonnage, customized chemical limits, and preferred port of discharge.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Recessed Form */}
        <div className="lg:col-span-7">
          <BoltedCard elevated={true} withScrews={true} withVents={true} tag="STATION: MET-DESK-01">
            {submittedRfqCode ? (
              <div className="p-6 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-400 text-emerald-600 flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="font-mono text-xs uppercase font-bold text-[#ff4757]">
                    TRANSMISSION LOGGED & DIGITALLY STAMPED
                  </span>
                  <h3 className="text-2xl font-black text-[#2d3436] mt-1">
                    RFQ DISPATCH SUCCESSFUL
                  </h3>
                  <div className="mt-3 inline-block px-4 py-2 rounded-xl bg-[#d1d9e6] font-mono text-sm font-bold text-[#2d3436] shadow-[inset_2px_2px_4px_#babecc]">
                    DOCKET NO: {submittedRfqCode}
                  </div>
                </div>

                <p className="text-xs text-[#4a5568] max-w-md mx-auto leading-relaxed">
                  Our metallurgical trading desk in Rotterdam will review your furnace requirement, verify vessel laycan windows, and generate an official pro-forma offer within 4 business hours.
                </p>

                <div className="pt-2">
                  <TactileButton variant="secondary" size="md" onClick={handleReset}>
                    Create Another Ingestion Ticket
                  </TactileButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <RecessedInput
                    label="Steelworks / Plant Name"
                    placeholder="e.g. ArcelorMittal Bremen"
                    required
                    value={plantName}
                    onChange={(e) => setPlantName(e.target.value)}
                    icon={<Building className="w-4 h-4" />}
                  />

                  <RecessedInput
                    label="Procurement Official Email"
                    type="email"
                    placeholder="procurement@steelplant.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    icon={<Mail className="w-4 h-4" />}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <RecessedInput
                    label="Direct Phone / Telex"
                    type="tel"
                    placeholder="+49 (0) 203 123456"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    icon={<Phone className="w-4 h-4" />}
                  />

                  <RecessedSelect
                    label="Selected Raw Material Grade"
                    value={materialId}
                    onChange={(e) => setMaterialId(e.target.value)}
                    options={MATERIALS_DATA.map((m) => ({
                      value: m.id,
                      label: `${m.code} - ${m.name}`,
                    }))}
                  />
                </div>

                {/* Volume Tonnage Slider */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold uppercase text-[#4a5568]">
                    <span>Contract Tonnage Requirement</span>
                    <span className="text-[#ff4757] font-extrabold text-sm">
                      {tonnage.toLocaleString()} METRIC TONS
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#d1d9e6]/50 shadow-[inset_2px_2px_4px_#babecc] flex items-center">
                    <input
                      type="range"
                      min={500}
                      max={75000}
                      step={500}
                      value={tonnage}
                      onChange={(e) => setTonnage(Number(e.target.value))}
                      className="w-full h-2 bg-[#babecc] rounded-lg appearance-none cursor-pointer accent-[#ff4757]"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-[#4a5568]">
                    <span>Min: 500 MT (Trial)</span>
                    <span>Panamax Lot: 55,000 MT</span>
                    <span>Capesize: 75,000 MT</span>
                  </div>
                </div>

                {/* Logistics & Timing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <RecessedSelect
                    label="Incoterms / Port of Discharge"
                    value={incoterm}
                    onChange={(e) => setIncoterm(e.target.value)}
                    options={[
                      { value: 'CIF-Rotterdam', label: 'CIF Port of Rotterdam (NL)' },
                      { value: 'CIF-Antwerp', label: 'CIF Port of Antwerp (BE)' },
                      { value: 'CIF-Taranto', label: 'CIF Port of Taranto (IT)' },
                      { value: 'CIF-Houston', label: 'CIF Port of Houston (US)' },
                      { value: 'FOB-St.Petersburg', label: 'FOB Export Terminal' },
                      { value: 'DAP-Duisburg', label: 'DAP Rail Wagon - Duisburg' },
                    ]}
                  />

                  <RecessedSelect
                    label="Target Laycan / Delivery Window"
                    value={deliveryQuarter}
                    onChange={(e) => setDeliveryQuarter(e.target.value)}
                    options={[
                      { value: 'Q4-2026', label: 'Q4 2026 (Immediate Allocation)' },
                      { value: 'Q1-2027', label: 'Q1 2027 (Long-term Contract)' },
                      { value: 'Q2-2027', label: 'Q2 2027 (Long-term Contract)' },
                      { value: 'Spot-30d', label: 'Spot Vessel (Within 30 Days)' },
                    ]}
                  />
                </div>

                {/* Custom Specs Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold tracking-wider uppercase text-[#4a5568]">
                    Custom Chemical Limits / Sizing Tolerances
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify any strict chemistry caps (e.g., Phosphorus < 0.020%, S < 0.004%, specific tumble indices, or humidity ceilings)..."
                    value={customSpecs}
                    onChange={(e) => setCustomSpecs(e.target.value)}
                    className="w-full bg-[#e0e5ec] text-[#2d3436] placeholder-[#4a5568]/60 font-mono text-xs rounded-lg p-3.5 shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] border-none outline-none focus:shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff,0_0_0_2px_#ff4757]"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <TactileButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    isFullWidth
                    disabled={isSubmitting}
                    icon={isSubmitting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Verifying & Transmitting...' : 'Transmit RFQ to Metallurgical Desk'}
                  </TactileButton>
                </div>
              </form>
            )}
          </BoltedCard>
        </div>

        {/* Right Column: Live Terminal Ticket Preview */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl bg-[#1e2329] p-6 border-2 border-[#39424e] shadow-[14px_14px_30px_#babecc,-12px_-12px_28px_#ffffff] bolted-panel-dark relative overflow-hidden">
            <div className="absolute inset-0 crt-scanlines opacity-30 pointer-events-none" />

            <div className="flex items-center justify-between pb-3 border-b border-neutral-700 font-mono text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <LedIndicator color="green" size="sm" />
                <span className="font-bold text-white">DISPATCH MONITOR</span>
              </div>
              <span className="text-[10px] text-neutral-500">PORT BUFFER #8</span>
            </div>

            <div className="mt-4 space-y-3 font-mono text-xs text-neutral-300">
              <div className="p-3 rounded-lg bg-[#12161b] border border-neutral-800 space-y-1">
                <div className="text-[10px] text-neutral-500 uppercase">Product Code & Material</div>
                <div className="text-white font-bold text-sm truncate">{currentMat.name}</div>
                <div className="text-[#ff4757] text-[11px] font-semibold">{currentMat.code} // {currentMat.categoryLabel}</div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2.5 rounded-lg bg-[#12161b] border border-neutral-800">
                  <div className="text-neutral-500 text-[10px]">TONNAGE</div>
                  <div className="text-white font-bold text-sm">{tonnage.toLocaleString()} MT</div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#12161b] border border-neutral-800">
                  <div className="text-neutral-500 text-[10px]">INCOTERM</div>
                  <div className="text-white font-bold text-xs truncate">{incoterm}</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#12161b] border border-neutral-800 text-[10px] space-y-1">
                <div className="text-neutral-500 uppercase">Guaranteed Specification Anchor</div>
                <div className="flex flex-wrap gap-1 text-neutral-200">
                  {currentMat.primaryChemistry.map((c, i) => (
                    <span key={i} className="px-1.5 py-0.5 rounded bg-neutral-800 text-[#ff4757]">
                      {c.element}: {c.value}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-neutral-800 text-[10px] text-neutral-400">
                <span>ESTIMATED VESSEL CLASS:</span>
                <span className="text-white font-bold">
                  {tonnage > 45000 ? 'CAPESIZE BULKER' : tonnage > 15000 ? 'PANAMAX' : 'HANDYMAX / RAIL'}
                </span>
              </div>
            </div>
          </div>

          {/* Plant Contact Info Card */}
          <div className="p-6 rounded-2xl bg-[#e0e5ec] border border-white/60 shadow-[8px_8px_18px_#babecc,-8px_-8px_18px_#ffffff] space-y-3 font-mono text-xs text-[#4a5568]">
            <div className="flex items-center justify-between pb-2 border-b border-[#babecc]/60">
              <span className="font-bold text-[#2d3436] uppercase">CENTRAL TRADING DESK</span>
              <span className="text-[10px] text-[#ff4757]">24/7 METALLURGICAL LOGISTICS</span>
            </div>

            <div className="flex items-center gap-2.5 text-[#2d3436]">
              <MapPin className="w-4 h-4 text-[#ff4757] shrink-0" />
              <span>Hafenstraße 48, 47119 Duisburg-Ruhrort, Germany</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#ff4757] shrink-0" />
              <span>metals@heitzmeister-steel.com</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#ff4757] shrink-0" />
              <span>+49 (203) 8092-4400 // Rotterdam Telex: 29482 HM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
