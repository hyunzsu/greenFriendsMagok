'use client';

import { NoticeTable } from '@/lib/types/database';
import Link from 'next/link';

interface NoticeItemProps {
  notice: NoticeTable;
}

export default function NoticeItem({ notice }: NoticeItemProps) {
  return (
    <Link href={`/notice/${notice.id}`}>
      <div className="mb-1 cursor-pointer rounded border p-4 active:bg-gray-50">
        <h2 className="text-base font-semibold">{notice.title}</h2>
        <div className="text-#dedede mt-2 flex flex-row justify-between text-sm">
          <p>{new Date(notice.created_at).toLocaleDateString()}</p>
          <p>{notice.author}</p>
        </div>
      </div>
    </Link>
  );
}
