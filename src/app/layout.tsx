import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  title: '녹색친구들 마곡',
  description: '녹색친구들 마곡 입주예정자들을 위한 정보 공유 사이트',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
        <main className="flex-grow px-4 pb-6 pt-4">
          <h1 className="sr-only">녹색친구들 마곡</h1>
          {children}
        </main>
        <div id="portal"></div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
