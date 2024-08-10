'use client';

import Image from 'next/image';
import Link from 'next/link';

interface MenuModalProps {
  closeModal: () => void;
}

interface MenuItem {
  href: string;
  label: string;
}

const menuItems: MenuItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/notice', label: 'Notice' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/forum', label: 'Forum' },
  { href: '/green-friends', label: 'GreenFriends' },
  { href: '/faq', label: 'FAQ' },
];

export default function MenuModal({ closeModal }: MenuModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-secondary"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-title"
    >
      <button onClick={closeModal} className="absolute right-4 top-4" aria-label="메뉴 닫기">
        <Image src="/assets/close-button.svg" alt="닫기" width={30} height={30} />
      </button>
      <nav>
        <h2 id="menu-title" className="sr-only">
          메인 메뉴
        </h2>
        <ul className="space-y-4 text-center">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-4xl font-bold" onClick={closeModal}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
