import React from 'react';

interface LedIndicatorProps {
  color?: 'green' | 'blue' | 'orange' | 'yellow' | 'red';
  label?: string;
  pulse?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LedIndicator: React.FC<LedIndicatorProps> = ({
  color = 'blue',
  label,
  pulse = true,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3.5 h-3.5',
  };

  const colorStyles = {
    green: {
      bg: 'bg-emerald-500',
      glow: 'shadow-[0_0_10px_2px_rgba(16,185,129,0.7)]',
      border: 'border-emerald-300',
    },
    blue: {
      bg: 'bg-[#0ea5e9]',
      glow: 'shadow-[0_0_10px_2px_rgba(14,165,233,0.75)]',
      border: 'border-[#7dd3fc]',
    },
    orange: {
      bg: 'bg-[#0ea5e9]',
      glow: 'shadow-[0_0_10px_2px_rgba(14,165,233,0.75)]',
      border: 'border-[#7dd3fc]',
    },
    red: {
      bg: 'bg-red-600',
      glow: 'shadow-[0_0_10px_2px_rgba(220,38,38,0.8)]',
      border: 'border-red-400',
    },
    yellow: {
      bg: 'bg-amber-400',
      glow: 'shadow-[0_0_10px_2px_rgba(251,191,36,0.75)]',
      border: 'border-amber-200',
    },
  };

  const style = colorStyles[color];

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center">
        <span
          className={`${sizeClasses[size]} rounded-full ${style.bg} ${style.glow} border ${style.border} block ${
            pulse ? 'animate-pulse' : ''
          }`}
        />
        <span className="absolute inset-0 rounded-full bg-white opacity-40 scale-50 -translate-x-0.5 -translate-y-0.5 pointer-events-none" />
      </div>
      {label && (
        <span className="font-mono text-xs uppercase tracking-wider text-[#4a5568] font-semibold select-none">
          {label}
        </span>
      )}
    </div>
  );
};
