import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="border-primary text-primary w-full border-b bg-white text-sm">
      <div className="mx-auto flex max-w-screen-xl flex-col justify-start p-4 md:flex-row md:items-center md:justify-between">
        <div className="mb-2 border md:mb-0">
          <Image
            className="flex items-center justify-center"
            src="/assets/Logo.svg"
            alt="녹색친구들 마곡 로고 이미지"
            width={244}
            height={25}
          />
        </div>
        <nav>
          <ul className="flex flex-wrap justify-start space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
