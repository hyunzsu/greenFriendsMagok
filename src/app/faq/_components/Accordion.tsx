'use client'; // 이 컴포넌트가 클라이언트 사이드에서 실행됨을 나타냅니다.

import { useState } from 'react';
import { FAQTable } from '@/lib/types/database';
import AccordionItem from './AccordionItem';

// FAQ 데이터와 제목을 받는 props의 타입을 정의
interface FaqProps {
  faqs: FAQTable[]; // FAQ 항목들의 배열
  title: string; // FAQ 섹션의 제목
}

/* Accordion 컴포넌트를 정의, faqs와 title을 props로 받음 */
export default function Accordion({ faqs, title }: FaqProps) {
  // 현재 열려있는 FAQ의 ID를 저장하는 상태 관리
  const [openFaqId, setOpenFaqId] = useState<number | false>(false);

  /* FAQ 항목을 토글하는 함수 */
  const toggleAccordion = (id: number) => {
    setOpenFaqId((prevId) => (prevId === id ? false : id));
    // 클릭한 항목이 이미 열려있으면 닫고(false), 아니면 해당 항목을 엽니다(id).
  };

  return (
    <div className="mb-5 flex flex-col divide-y divide-black">
      {/* 아코디언 제목 */}
      <div className="flex flex-col py-3">
        <span className="text-xl font-bold">{title}</span>
      </div>
      {/* FAQ 항목들을 매핑하여 AccordionItem 컴포넌트로 렌더링 */}
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          faq={faq}
          isOpen={openFaqId === faq.id} // 현재 항목이 열려있는지 여부
          toggleAccordion={() => toggleAccordion(faq.id)} // 토글 함수를 전달
        />
      ))}
    </div>
  );
}
