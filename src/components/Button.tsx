import React from 'react';
import cn from '@/lib/utils/cn';

type TButton = {
  label: string;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({ label, type, className, onClick, disabled }: TButton) {
  return (
    <button
      type={type}
      className={cn('hover:bg-secondary] border-primary h-[40px] w-[140px] border-2 text-[16px]', className)}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
