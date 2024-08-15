import Link from 'next/link';
import cn from '@/lib/utils/cn';

interface TitleProps {
  title: string;
  href: string;
  isMainPage: boolean;
}

export default function Title({ title, href, isMainPage }: TitleProps) {
  const TitleContent = () => (
    <div className="flex cursor-pointer flex-row items-center justify-between py-2">
      <h3 className={cn('font-semibold', isMainPage ? 'text-2xl' : 'mb-3 text-3xl')}>{title}</h3>
      {isMainPage && (
        <div className="ml-8 flex flex-row items-center">
          <span className="text-xs">더보기</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.1333 12.1334L10.2666 7.00003L5.1333 1.8667" stroke="#6E6E6E" strokeMiterlimit="10" />
          </svg>
        </div>
      )}
    </div>
  );

  // 메인 페이지인 경우 Link 컴포넌트로 감싸서 반환
  if (isMainPage) {
    return (
      <Link href={href} className="block">
        <TitleContent />
      </Link>
    );
  }

  // 메인 페이지가 아닌 경우 div로 감싸서 반환
  return (
    <div className="block">
      <TitleContent />
    </div>
  );
}
