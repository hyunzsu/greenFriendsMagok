import Link from 'next/link';

export default function FaqPreview() {
  return (
    <div className="flex h-[100px] w-full flex-col py-2 text-2xl font-semibold">
      <div className="flex h-1/2 w-full">
        <Link href="/faq" className="flex w-1/2 items-center justify-center border-b border-r border-primary">
          <p>LIVING</p>
        </Link>
        <Link href="/faq" className="flex w-1/2 items-center justify-center border-b border-primary">
          <p>MOVE-IN</p>
        </Link>
      </div>
      <div className="flex h-1/2 w-full">
        <Link href="/faq" className="flex w-1/2 items-center justify-center border-r border-primary">
          <p>ROOM</p>
        </Link>
        <Link href="/faq" className="flex w-1/2 items-center justify-center">
          <p>SITE</p>
        </Link>
      </div>
    </div>
  );
}
