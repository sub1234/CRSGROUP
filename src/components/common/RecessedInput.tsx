import React from 'react';

interface RecessedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  badge?: string;
  icon?: React.ReactNode;
}

export const RecessedInput: React.FC<RecessedInputProps> = ({
  label,
  helperText,
  badge,
  icon,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full space-y-1.5">
      {(label || badge) && (
        <div className="flex items-center justify-between text-xs font-mono font-bold tracking-wider uppercase text-[#4a5568]">
          {label && <label htmlFor={inputId}>{label}</label>}
          {badge && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#d1d9e6] text-[#2d3436] font-normal">
              {badge}
            </span>
          )}
        </div>
      )}

      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-4 text-[#4a5568] pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          className={`w-full min-h-[52px] bg-[#e0e5ec] text-[#2d3436] placeholder-[#4a5568]/60 font-mono text-sm rounded-lg px-4 ${
            icon ? 'pl-11' : ''
          } shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] border-none outline-none transition-all duration-150 focus:shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff,0_0_0_2px_#ff4757] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
          {...props}
        />
      </div>

      {helperText && (
        <p className="text-[11px] font-mono text-[#4a5568] pl-1">{helperText}</p>
      )}
    </div>
  );
};

interface RecessedSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  badge?: string;
  options: { value: string; label: string }[];
}

export const RecessedSelect: React.FC<RecessedSelectProps> = ({
  label,
  helperText,
  badge,
  options,
  className = '',
  id,
  ...props
}) => {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full space-y-1.5">
      {(label || badge) && (
        <div className="flex items-center justify-between text-xs font-mono font-bold tracking-wider uppercase text-[#4a5568]">
          {label && <label htmlFor={selectId}>{label}</label>}
          {badge && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#d1d9e6] text-[#2d3436] font-normal">
              {badge}
            </span>
          )}
        </div>
      )}

      <div className="relative">
        <select
          id={selectId}
          className={`w-full min-h-[52px] appearance-none bg-[#e0e5ec] text-[#2d3436] font-mono text-sm rounded-lg px-4 shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] border-none outline-none transition-all duration-150 focus:shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff,0_0_0_2px_#ff4757] cursor-pointer ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#e0e5ec] text-[#2d3436]">
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#4a5568]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {helperText && (
        <p className="text-[11px] font-mono text-[#4a5568] pl-1">{helperText}</p>
      )}
    </div>
  );
};
