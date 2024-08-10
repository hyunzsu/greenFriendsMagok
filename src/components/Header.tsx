import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="border-primary text-primary w-full border-b bg-white px-2.5">
      <h1 className="sr-only">녹색친구들 마곡</h1>
      <div className="mx-auto flex h-[50px] max-w-screen-xl justify-start md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-center border md:mb-0">
          <span>
            <Image src="/assets/Logo.svg" alt="녹색친구들 마곡 로고 이미지" width={244} height={25} priority />
          </span>
        </div>
      </div>
    </header>
  );
}
