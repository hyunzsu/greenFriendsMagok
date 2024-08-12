import React from 'react';
import Title from '@/components/Title';
import FAQ from '../faq/page';

export default function Home() {
  return (
    <main className="">
      <Title title="Notice" href="/notice" isMainPage={true} />
      <FAQ />
    </main>
  );
}
