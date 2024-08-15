import Image from 'next/image';
import cn from '@/lib/utils/cn';
import { FAQTable } from '@/lib/types/database';

interface FaqItemProps {
  faq: FAQTable;
  isOpen: boolean;
  toggleAccordion: () => void;
}

export default function AccordionItem({ faq, isOpen, toggleAccordion }: FaqItemProps) {
  return (
    <div className={cn('flex flex-col py-3', isOpen ? 'bg-[#f1efeb]' : 'bg-transparent')}>
      {/* 질문 */}
      <div className="flex cursor-pointer items-center justify-between font-bold" onClick={toggleAccordion}>
        <span className="mr-4 line-clamp-2 flex-1 font-bold">{faq.question}</span>
        <Image
          src={isOpen ? '/assets/minus-button.svg' : '/assets/plus-button.svg'}
          alt={isOpen ? '닫기' : '열기'}
          width={24}
          height={24}
          className="transition-transform duration-500"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </div>
      {/* 답변 */}
      <div
        className={cn(
          'overflow-hidden transition-[max-height] duration-500 ease-in-out',
          isOpen ? 'max-h-screen' : 'max-h-0',
        )}
      >
        <div
          className={cn(
            'px-5 py-2 text-14 font-medium transition-opacity duration-700',
            isOpen ? 'opacity-100' : 'opacity-0',
          )}
        >
          {faq.answer}
        </div>
      </div>
    </div>
  );
}
