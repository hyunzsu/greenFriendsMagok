import Link from 'next/link';

interface TitleProps {
  title: string;
  href: string;
  isMainPage: boolean;
}

const Title = ({ title, href, isMainPage }: TitleProps) => {
  const TitleContent = () => (
    <div className="flex cursor-pointer flex-row items-center justify-between py-2">
      <h3 className="text-2xl font-semibold">{title}</h3>
      {isMainPage && (
        <div className="ml-8 flex flex-row items-center">
          <span className="text-xs">더보기</span>
          <div>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.1333 12.1334L10.2666 7.00003L5.1333 1.8667" stroke="#6E6E6E" strokeMiterlimit="10"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );

  if (isMainPage) {
    return (
      <Link href={href} className="block border border-primary">
        <TitleContent />
      </Link>
    );
  }

  return (
    <div className="block border border-primary">
      <TitleContent />
    </div>
  );
};

export default Title;
