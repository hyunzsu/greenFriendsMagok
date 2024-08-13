'use client';

import Image from 'next/image';
import { useState } from 'react';
import cn from '@/lib/utils/cn';

interface AccordionProps {
  isAccordionOpen?: boolean;
  question: string;
  answer: string;
}

export default function Accordion({ isAccordionOpen: initialOpen = false, question, answer }: AccordionProps) {
  const [isAccordionOpen, setAccordionOpen] = useState(initialOpen);

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="flex flex-col py-4">
      {/* 질문 */}
      <div onClick={toggleAccordion} className="flex cursor-pointer items-center justify-between font-bold">
        <span className="mr-4 line-clamp-2 flex-1">{question}</span>
        <Image
          src={isAccordionOpen ? '/assets/minus-button.svg' : '/assets/plus-button.svg'}
          alt={isAccordionOpen ? '닫기' : '열기'}
          width={24}
          height={24}
          className="transition-transform duration-500"
          style={{ transform: isAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </div>
      {/* 답변 */}
      <div
        className={cn(
          'overflow-hidden transition-[max-height] duration-500 ease-in-out',
          isAccordionOpen ? 'max-h-screen' : 'max-h-0',
        )}
      >
        <div className={cn('py-2 transition-opacity duration-700', isAccordionOpen ? 'opacity-100' : 'opacity-0')}>
          {answer}
        </div>
      </div>
    </div>
  );
}
