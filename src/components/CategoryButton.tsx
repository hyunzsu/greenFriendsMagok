'use client';

export default function CategoryButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="h-[30px] whitespace-nowrap rounded-full border border-primary px-3.5 text-[16px]"
      // onClick={onClick}
    >
      {label}
    </button>
  );
}
