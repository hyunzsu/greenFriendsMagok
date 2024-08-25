import Link from 'next/link';
import cn from '@/lib/utils/cn';

interface TitleProps {
  title: string;
  href: string;
  isMainPage: boolean;
  className?: string; // 선택적 props로 추가 클래스네임을 받습니다.
}

export default function Title({ title, href, isMainPage, className }: TitleProps) {
  return (
    <Link href={href} className={cn('block', className)}>
      <div className="flex cursor-pointer flex-row items-center justify-between py-2">
        <h3
          className={cn(
            'font-semibold',
            isMainPage ? 'text-2xl' : 'mb-3 text-3xl',
            className, // 추가 클래스네임을 h3 태그에도 적용합니다.
          )}
        >
          {title}
        </h3>
        {isMainPage && (
          <div className="ml-8 flex flex-row items-center">
            <span className="text-xs">더보기</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.1333 12.1334L10.2666 7.00003L5.1333 1.8667" stroke="#6E6E6E" strokeMiterlimit="10" />
            </svg>
          </div>
        )}
      </div>
    </Link>
  );
}
