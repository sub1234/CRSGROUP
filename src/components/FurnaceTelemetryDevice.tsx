import React, { useState, useEffect } from 'react';
import { LedIndicator } from './common/LedIndicator';
import { VentSlots } from './common/VentSlots';
import { Activity, CheckCircle2, RefreshCw } from 'lucide-react';

export const FurnaceTelemetryDevice: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'thermal' | 'chemistry' | 'permeability'>('thermal');
  const [furnaceTemp, setFurnaceTemp] = useState(1642);
  const [blastPressure, setBlastPressure] = useState(4.28);
  const [slagBasicity, setSlagBasicity] = useState(1.85);
  const [isPurging, setIsPurging] = useState(false);
  const [knobRotation, setKnobRotation] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setFurnaceTemp(1640 + Math.floor(Math.random() * 8) - 4);
      setBlastPressure(+(4.25 + Math.random() * 0.08).toFixed(2));
      setSlagBasicity(+(1.84 + Math.random() * 0.03).toFixed(2));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const handlePurge = () => {
    setIsPurging(true);
    setTimeout(() => setIsPurging(false), 1800);
  };

  const handleKnobClick = () => {
    setKnobRotation((prev) => (prev + 45) % 360);
  };

  return (
    <div className="relative group select-none">
      <div className="relative rounded-3xl bg-[#232931] p-5 sm:p-7 border-2 border-[#39424e] shadow-[20px_20px_45px_#babecc,-16px_-16px_40px_#ffffff] bolted-panel-dark transition-transform duration-300 group-hover:scale-[1.01]">
        
        {/* Hardware Top Header Strip */}
        <div className="flex items-center justify-between pb-4 border-b border-[#39424e]/80">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#161a1f] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.8)] border border-white/5">
              <LedIndicator color={isPurging ? 'red' : 'orange'} size="sm" pulse={true} />
              <span className="font-mono text-[10px] tracking-wider font-bold text-neutral-300 uppercase">
                {isPurging ? 'SYSTEM PURGE IN PROGRESS' : 'FURNACE FEED 04 // REALTIME'}
              </span>
            </div>
            <span className="hidden sm:inline-block font-mono text-[10px] text-neutral-400">
              ID: HM-TEL-BF84
            </span>
          </div>

          <div className="flex items-center gap-3">
            <VentSlots count={4} variant="dark" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#161a1f] border border-white/10 shadow-[inset_1px_1px_2px_black]" />
          </div>
        </div>

        {/* Inner Bezel & CRT Terminal Screen */}
        <div className="mt-4 rounded-2xl bg-[#0f1217] p-4 sm:p-5 border border-[#39424e] shadow-[inset_4px_4px_12px_rgba(0,0,0,0.9),inset_-2px_-2px_6px_rgba(255,255,255,0.05)] relative overflow-hidden">
          <div className="absolute inset-0 crt-scanlines opacity-35 pointer-events-none z-20" />
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#ff4757]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-[#ff4757] font-bold">● LIVE SPECTRA</span>
              <span className="text-neutral-500">//</span>
              <span className="text-neutral-300">BLAST HEARTH UNIT-B</span>
            </div>
            <div className="text-[11px] text-neutral-400 font-mono">
              LOG: 2026.09.30-13:48:29
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-3 gap-1.5 my-3 bg-[#161a22] p-1 rounded-lg border border-neutral-800 font-mono text-[11px]">
            <button
              onClick={() => setActiveTab('thermal')}
              className={`py-1 rounded font-bold transition-all cursor-pointer ${
                activeTab === 'thermal'
                  ? 'bg-[#ff4757] text-white shadow-[0_0_8px_rgba(255,71,87,0.5)]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              THERMAL
            </button>
            <button
              onClick={() => setActiveTab('chemistry')}
              className={`py-1 rounded font-bold transition-all cursor-pointer ${
                activeTab === 'chemistry'
                  ? 'bg-[#ff4757] text-white shadow-[0_0_8px_rgba(255,71,87,0.5)]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              CHEMISTRY
            </button>
            <button
              onClick={() => setActiveTab('permeability')}
              className={`py-1 rounded font-bold transition-all cursor-pointer ${
                activeTab === 'permeability'
                  ? 'bg-[#ff4757] text-white shadow-[0_0_8px_rgba(255,71,87,0.5)]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              FLOW/LOGISTICS
            </button>
          </div>

          {/* Telemetry Waveform */}
          <div className="relative z-10 my-3 p-3 rounded-xl bg-[#090b0e] border border-neutral-800 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.9)]">
            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-1.5">
              <span>TUYÈRE CORE WAVELENGTH [λ]</span>
              <span className="text-[#ff4757] font-semibold flex items-center gap-1">
                <Activity className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
                CONTINUOUS FEED
              </span>
            </div>

            <div className="h-20 w-full overflow-hidden relative flex items-center">
              <svg className="w-full h-full text-[#ff4757]" viewBox="0 0 400 60" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gradWave" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff4757" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#ff4757" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ff4757" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,30 Q25,10 50,30 T100,30 T150,15 T200,45 T250,20 T300,35 T350,25 T400,30"
                  fill="none"
                  stroke="url(#gradWave)"
                  strokeWidth="2.5"
                  className="animate-pulse"
                />
                <line x1="0" y1="30" x2="400" y2="30" stroke="#333" strokeDasharray="3,3" strokeWidth="1" />
                <circle cx="250" cy="20" r="4" fill="#ffffff" className="animate-ping" />
              </svg>
            </div>
          </div>

          {/* Metrics Readout */}
          <div className="relative z-10 grid grid-cols-2 gap-2 font-mono">
            <div className="p-2.5 rounded-lg bg-[#141820] border border-neutral-800/80 shadow-[inset_1px_1px_3px_black]">
              <div className="text-[10px] text-neutral-400 uppercase">Hearth Temp</div>
              <div className="text-lg font-bold text-white flex items-baseline gap-1 mt-0.5">
                <span>{furnaceTemp}</span>
                <span className="text-xs text-[#ff4757]">°C</span>
              </div>
              <div className="text-[9px] text-emerald-400 mt-0.5 flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5" /> ±1.2% STABLE
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#141820] border border-neutral-800/80 shadow-[inset_1px_1px_3px_black]">
              <div className="text-[10px] text-neutral-400 uppercase">Blast Pressure</div>
              <div className="text-lg font-bold text-white flex items-baseline gap-1 mt-0.5">
                <span>{blastPressure}</span>
                <span className="text-xs text-[#ff4757]">bar</span>
              </div>
              <div className="text-[9px] text-neutral-400 mt-0.5">Permeability Index 98.4</div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#141820] border border-neutral-800/80 shadow-[inset_1px_1px_3px_black]">
              <div className="text-[10px] text-neutral-400 uppercase">Slag Basicity B2</div>
              <div className="text-lg font-bold text-white flex items-baseline gap-1 mt-0.5">
                <span>{slagBasicity}</span>
                <span className="text-xs text-neutral-400">CaO/SiO₂</span>
              </div>
              <div className="text-[9px] text-emerald-400 mt-0.5">Desulfurization Opt</div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#141820] border border-neutral-800/80 shadow-[inset_1px_1px_3px_black]">
              <div className="text-[10px] text-neutral-400 uppercase">DR Pellet Unit Feed</div>
              <div className="text-lg font-bold text-white flex items-baseline gap-1 mt-0.5">
                <span>67.5%</span>
                <span className="text-xs text-[#ff4757]">Fe</span>
              </div>
              <div className="text-[9px] text-neutral-400 mt-0.5">Batch #HM-9428</div>
            </div>
          </div>
        </div>

        {/* Hardware Controls */}
        <div className="mt-5 pt-4 border-t border-[#39424e]/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              onClick={handleKnobClick}
              className="relative w-12 h-12 rounded-full bg-[#1a1f26] border-2 border-[#39424e] shadow-[4px_4px_10px_black,-2px_-2px_6px_rgba(255,255,255,0.08)] cursor-pointer flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
              title="Click to rotate telemetry channel"
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center transition-transform duration-300"
                style={{ transform: `rotate(${knobRotation}deg)` }}
              >
                <div className="w-1.5 h-3 bg-[#ff4757] rounded-full -translate-y-3 shadow-[0_0_6px_#ff4757]" />
              </div>
              <div className="absolute inset-2.5 rounded-full bg-[#232931] shadow-[inset_1px_1px_2px_black]" />
            </div>

            <div className="font-mono">
              <div className="text-[10px] uppercase font-bold text-neutral-300">
                CH-0{Math.floor(knobRotation / 45) + 1} SELECT
              </div>
              <div className="text-[9px] text-neutral-400">ROTARY DIAL</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePurge}
              disabled={isPurging}
              className="px-3.5 py-2 rounded-lg bg-[#2e3642] text-xs font-mono font-bold uppercase tracking-wider text-neutral-200 border border-white/10 shadow-[3px_3px_6px_black,-2px_-2px_4px_rgba(255,255,255,0.06)] hover:text-[#ff4757] active:translate-y-[1px] active:shadow-[inset_2px_2px_4px_black] transition-all cursor-pointer flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isPurging ? 'animate-spin text-[#ff4757]' : ''}`} />
              {isPurging ? 'Purging...' : 'Flush Feed'}
            </button>

            <button
              onClick={() => alert('Calibration spectra verified: ISO 17025 accredited standards matched.')}
              className="px-3.5 py-2 rounded-lg bg-[#ff4757] text-xs font-mono font-bold uppercase tracking-wider text-white border border-white/20 shadow-[3px_3px_8px_rgba(166,50,60,0.6)] hover:brightness-110 active:translate-y-[1px] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4)] transition-all cursor-pointer"
            >
              Calibrate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
