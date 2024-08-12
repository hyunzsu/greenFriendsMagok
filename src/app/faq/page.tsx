import Accordion from '@/components/Accordion';
import Title from '@/components/Title';
import { fqas } from '@/lib/data/faq';
import FAQ from '@/lib/types/faq';

export default function FAQ() {
  return (
    <section className="flex flex-col divide-y divide-black">
      <Title title="FAQ" href="/faq" isMainPage={false} />
      {fqas.map((data: FAQ) => (
        <Accordion key={data.id} question={data.question} answer={data.answer} isAccordionOpen={data.isAccordionOpen} />
      ))}
    </section>
  );
}
