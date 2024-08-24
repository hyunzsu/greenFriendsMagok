import React from 'react';
import Title from '@/components/Title';
import KakaoMap from '@/components/KakaoMap';

export default function NeighborhoodPage() {
  return (
    <section className="flex h-screen flex-col">
      <Title title="Neighborhood" href="/neighborhood" isMainPage={false} />
      <h3 className="text-2xl font-semibold">병원</h3>
      <div className="mt-3 max-h-[500px] flex-grow border border-primary">
        <KakaoMap />
      </div>
    </section>
  );
}
