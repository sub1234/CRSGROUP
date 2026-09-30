import React from 'react';

export interface TactileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isFullWidth?: boolean;
}

export const TactileButton: React.FC<TactileButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  isFullWidth = false,
  className = '',
  disabled = false,
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-xs py-2 px-3.5 min-h-[38px] rounded-md gap-1.5',
    md: 'text-xs md:text-sm py-2.5 px-5 min-h-[48px] rounded-lg gap-2',
    lg: 'text-sm md:text-base py-3.5 px-7 min-h-[54px] rounded-xl gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#ff4757] text-white font-bold border border-white/20 shadow-[4px_4px_10px_rgba(166,50,60,0.45),-3px_-3px_8px_rgba(255,120,130,0.5)] hover:brightness-105 active:translate-y-[2px] active:shadow-[inset_4px_4px_8px_rgba(130,20,30,0.6),inset_-2px_-2px_6px_rgba(255,120,130,0.4)]',
    secondary:
      'bg-[#e0e5ec] text-[#2d3436] font-bold border border-white/40 shadow-[6px_6px_14px_#babecc,-6px_-6px_14px_#ffffff] hover:text-[#ff4757] hover:shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] active:translate-y-[2px] active:shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff]',
    ghost:
      'bg-transparent text-[#4a5568] font-semibold hover:bg-[#d1d9e6]/50 hover:text-[#2d3436] hover:shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] active:translate-y-[1px]',
    dark:
      'bg-[#2d3436] text-[#f0f2f5] font-bold border border-white/10 shadow-[6px_6px_14px_rgba(0,0,0,0.35),-4px_-4px_10px_rgba(255,255,255,0.08)] hover:text-[#ff4757] active:translate-y-[2px] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.1)]',
  };

  return (
    <button
      className={`inline-flex items-center justify-center tracking-wider uppercase font-mono transition-all duration-150 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4757] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e0e5ec] disabled:opacity-40 disabled:pointer-events-none disabled:shadow-none ${
        sizeStyles[size]
      } ${variantStyles[variant]} ${isFullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
