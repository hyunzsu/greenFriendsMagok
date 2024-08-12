import { getNotices } from '../_lib/noticeService';
import { NoticeContent } from '@/lib/types/notice';
import NoticeItem from './NoticeItem';

export default async function NoticeBoard() {
  const notices: NoticeContent[] = await getNotices();

  return (
    <div className="my-2 space-y-4 border border-primary">
      {notices.map((notice) => (
        <NoticeItem key={notice.id} notice={notice} />
      ))}
    </div>
  );
}
