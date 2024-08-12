import { getNotices } from '@/lib/noticeService';
import { NoticeContent } from '@/lib/types/notice';
import NoticeItem from './NoticeItem';

export default async function NoticeBoard() {
  const notices: NoticeContent[] = await getNotices();

  return (
    <div className="space-y-4">
      {notices.map((notice) => (
        <NoticeItem key={notice.id} notice={notice} />
      ))}
    </div>
  );
}
