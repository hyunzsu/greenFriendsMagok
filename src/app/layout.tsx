import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

/* 메타데이터 설정 */
export const metadata: Metadata = {
  title: '녹색친구들 마곡',
  description: '녹색친구들 마곡 입주예정자들을 위한 정보 공유 사이트',
};

/* 뷰포트 설정 */
export const viewport: Viewport = {
  width: 'device-width', // 모바일 기기의 화면 크기와 맞춤
  initialScale: 1, // 초기 화면 배율
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col text-base antialiased">
        <Header />
        <main className="flex-grow px-4 py-6">{children}</main>
        <div id="portal"></div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
