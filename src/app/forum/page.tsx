import React from 'react';
import Title from '@/components/Title';

export default function Home() {
  return (
    <main className="">
      <Title title="Forum" href="/forum" isMainPage={false} />
    </main>
  );
}
