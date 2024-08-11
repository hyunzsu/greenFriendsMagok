import React from 'react';
import Title from '@/components/Title';

export default function Home() {
  return (
    <main className="">
      <Title title="Notice" href="/notice" isMainPage={true} />
    </main>
  );
}
