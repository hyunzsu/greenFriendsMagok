'use client';
import cn from '@/lib/utils/cn';

type CategoryButtonProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};
export default function CategoryButton({ label, isSelected, onClick }: CategoryButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'h-[30px] whitespace-nowrap rounded-full border border-primary px-3.5 text-[16px]',
        isSelected ? 'bg-secondary' : 'hover:bg-secondary/50',
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
