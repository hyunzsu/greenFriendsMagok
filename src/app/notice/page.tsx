import Title from '@/components/Title';
import SlideCategory from '@/components/SlideCategory';

export default function Notice() {
  return (
    <section className="">
      <Title title="Notice" href="/board" isMainPage={false} />
      <SlideCategory boardType="notice" />
    </section>
  );
}
