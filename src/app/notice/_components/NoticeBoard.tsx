import { getNotices } from '../_lib/noticeService';
import { NoticeTable } from '@/lib/types/database';
import NoticeItem from './NoticeItem';

export default async function NoticeBoard() {
  const notices: NoticeTable[] = await getNotices();

  return (
    <div className="my-5 flex flex-col">
      {notices.map((notice) => (
        <NoticeItem key={notice.id} notice={notice} />
      ))}
    </div>
  );
}
