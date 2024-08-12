import Title from '@/components/Title';
import SlideCategory from '@/components/SlideCategory';
import NoticeBoard from './_components/NoticeBoard';

export default async function NoticesPage() {
  return (
    <section className="">
      <Title title="Notice" href="/board" isMainPage={false} />
      <SlideCategory boardType="notice" />
      <NoticeBoard />
    </section>
  );
}
