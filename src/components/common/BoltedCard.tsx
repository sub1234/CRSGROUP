import React from 'react';
import { VentSlots } from './VentSlots';

interface BoltedCardProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  elevated?: boolean;
  withVents?: boolean;
  withScrews?: boolean;
  tag?: string;
  className?: string;
  onClick?: () => void;
}

export const BoltedCard: React.FC<BoltedCardProps> = ({
  children,
  variant = 'light',
  elevated = false,
  withVents = false,
  withScrews = true,
  tag,
  className = '',
  onClick,
}) => {
  const isLight = variant === 'light';

  const baseStyles = isLight
    ? 'bg-[#e0e5ec] text-[#2d3436] border border-white/60'
    : 'bg-[#2d3436] text-[#e0e5ec] border border-white/10';

  const shadowStyles = isLight
    ? elevated
      ? 'shadow-[12px_12px_24px_#babecc,-12px_-12px_24px_#ffffff,inset_1px_1px_0_rgba(255,255,255,0.6)]'
      : 'shadow-[8px_8px_18px_#babecc,-8px_-8px_18px_#ffffff]'
    : elevated
    ? 'shadow-[14px_14px_28px_rgba(0,0,0,0.5),-8px_-8px_20px_rgba(255,255,255,0.05)]'
    : 'shadow-[8px_8px_20px_rgba(0,0,0,0.4),-4px_-4px_12px_rgba(255,255,255,0.04)]';

  const screwClasses = withScrews
    ? isLight
      ? 'bolted-panel'
      : 'bolted-panel-dark'
    : '';

  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl p-6 transition-all duration-300 ${screwClasses} ${baseStyles} ${shadowStyles} ${
        onClick ? 'cursor-pointer hover:-translate-y-1' : ''
      } ${className}`}
    >
      {/* Optional top-right tag / vents header */}
      {(tag || withVents) && (
        <div className="flex items-center justify-between mb-4 pl-2">
          {tag ? (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#d1d9e6]/70 shadow-[inset_1px_1px_2px_#babecc,inset_-1px_-1px_2px_#ffffff] text-[10px] font-mono font-bold uppercase tracking-wider text-[#4a5568]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4757]" />
              {tag}
            </div>
          ) : (
            <div />
          )}
          {withVents && <VentSlots count={3} variant={isLight ? 'light' : 'dark'} />}
        </div>
      )}

      {children}
    </div>
  );
};
