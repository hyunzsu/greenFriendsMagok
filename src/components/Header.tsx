import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MeatBallsMenu from './MeatBallsMenu';

const Header = () => {
  return (
    <header className="w-full border-b border-primary bg-white px-2.5 text-primary">
      <div className="mx-auto flex h-[50px] max-w-screen-xl items-center justify-between">
        <div className="flex items-center">
          <Link href="/" aria-label="홈으로 이동">
            <div className="pt-[4px]">
              <Image src="/assets/Logo.svg" alt="녹색친구들 마곡 로고" width={244} height={25} priority />
            </div>
          </Link>
        </div>
        <MeatBallsMenu />
      </div>
    </header>
  );
};

export default Header;
