'use client';

import { NoticeTable } from '@/lib/types/database';
import Link from 'next/link';

interface NoticeItemProps {
  notice: NoticeTable;
}

export default function NoticeItem({ notice }: NoticeItemProps) {
  return (
    <Link href={`/notice/${notice.id}`}>
      <div className="mb-4 cursor-pointer rounded border p-4 active:bg-gray-50">
        <h2 className="text-base font-semibold">{notice.title}</h2>
        <p className="line-clamp-2 text-gray-600">{notice.content}</p>
        <div className="mt-2 text-sm text-gray-500">
          작성자: {notice.author} | 작성일: {new Date(notice.created_at).toLocaleDateString()}
        </div>
      </div>
    </Link>
  );
}
