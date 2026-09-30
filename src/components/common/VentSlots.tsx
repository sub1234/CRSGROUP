import React from 'react';

interface VentSlotsProps {
  count?: number;
  orientation?: 'vertical' | 'horizontal';
  variant?: 'light' | 'dark';
  className?: string;
}

export const VentSlots: React.FC<VentSlotsProps> = ({
  count = 3,
  orientation = 'vertical',
  variant = 'light',
  className = '',
}) => {
  const slots = Array.from({ length: count });

  const slotStyle = variant === 'light'
    ? 'bg-[#d1d9e6] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3),inset_-1px_-1px_1px_rgba(255,255,255,0.9)]'
    : 'bg-[#1e2329] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8),inset_-1px_-1px_1px_rgba(255,255,255,0.08)]';

  return (
    <div
      className={`flex ${
        orientation === 'vertical' ? 'flex-row gap-1.5' : 'flex-col gap-1.5'
      } ${className}`}
      aria-hidden="true"
    >
      {slots.map((_, i) => (
        <div
          key={i}
          className={`rounded-full ${slotStyle} ${
            orientation === 'vertical' ? 'w-1 h-5' : 'h-1 w-5'
          }`}
        />
      ))}
    </div>
  );
};
