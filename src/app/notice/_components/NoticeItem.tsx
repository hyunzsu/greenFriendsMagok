'use client';

import { NoticeTable } from '@/lib/types/database';
import Link from 'next/link';

interface NoticeItemProps {
  notice: NoticeTable;
}

export default function NoticeItem({ notice }: NoticeItemProps) {
  return (
    <Link href={`/notice/${notice.id}`}>
      <div className="cursor-pointer border-t border-primary p-2 active:bg-gray-50">
        <h2 className="text-14 font-semibold">{notice.title}</h2>
        <div className="mt-1 flex flex-row justify-between text-12 text-gray-500">
          <p>{new Date(notice.created_at).toLocaleDateString()}</p>
          <p>{notice.author}</p>
        </div>
      </div>
    </Link>
  );
}
