import { getNoticeById } from '@/lib/noticeService';
import { NoticeContent } from '@/lib/types/notice';

export const revalidate = 60; // 60초마다 재검증

export default async function NoticeDetailPage({ params }: { params: { id: string } }) {
  const notice: NoticeContent | null = await getNoticeById(parseInt(params.id));

  if (!notice) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-3xl font-bold">{notice.title}</h1>
      <div className="mb-4 text-sm text-gray-500">
        작성자: {notice.author} | 작성일: {new Date(notice.created_at).toLocaleDateString()}
      </div>
      <div className="whitespace-pre-wrap">{notice.content}</div>
    </div>
  );
}
