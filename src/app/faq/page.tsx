import Title from '@/components/Title';
import { getFaqs } from './_lib/faqService';
import Accordion from './_components/Accordion';

export default async function FAQ() {
  const faqs = await getFaqs();

  return (
    <section className="">
      <Title title="FAQ" href="/faq" isMainPage={false} />
      <Accordion faqs={faqs} title={'생활 관련'} />
    </section>
  );
}
