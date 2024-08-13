import React from 'react';
import Title from '@/components/Title';

export default function Home() {
  return (
    <main className="">
      <Title title="About Us" href="/aboutus" isMainPage={false} />
    </main>
  );
}
