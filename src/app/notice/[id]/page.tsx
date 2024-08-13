import { BackButtonServer } from '@/components/_index';
import { getNoticeById } from '../_lib/noticeService';
import { NoticeTable } from '@/lib/types/database';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

export const revalidate = 60; // 60초마다 재검증

export default async function NoticeDetailPage({ params }: { params: { id: string } }) {
  const notice: NoticeTable | null = await getNoticeById(parseInt(params.id));

  if (!notice) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container mx-auto px-2">
      <BackButtonServer className="mb-2" />
      <div className="pt-1 text-sm font-semibold text-secondary">{notice.category}</div>
      <h1 className="mb-4 border-b border-primary pb-2 text-xl font-bold">{notice.title}</h1>
      <div className="whitespace-pre-wrap py-2 text-14">
        {notice.image && (
          <Image
            src={notice.image}
            alt="공지사항 이미지"
            width={400}
            height={300}
            className="mb-4 h-auto w-full object-contain"
          />
        )}
        <ReactMarkdown>{notice.content}</ReactMarkdown>
      </div>
      <div className="mb-2 flex justify-end border-b border-primary py-1 text-sm text-gray-500">
        <p className="center flex items-center justify-center">
          {new Date(notice.created_at).toLocaleString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })}
        </p>
      </div>
    </div>
  );
}
