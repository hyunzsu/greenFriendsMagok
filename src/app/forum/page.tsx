import React from 'react';
import Title from '@/components/Title';
import Link from 'next/link';

export default function ForumPage() {
  return (
    <main className="">
      <Title title="Forum" href="/forum" isMainPage={false} />
      <div className="mt-10 flex h-[300px] flex-col items-center justify-center text-center">
        <h2 className="mb-4 text-xl font-bold">죄송합니다 😢</h2>
        <h2 className="mb-4 text-xl font-bold">지금은 사용할 수 없는 페이지입니다.</h2>
        <Link className="text-lg font-semibold text-secondary transition-colors active:text-tertiary" href="/">
          메인 페이지로 돌아가기
        </Link>
      </div>
    </main>
  );
}
