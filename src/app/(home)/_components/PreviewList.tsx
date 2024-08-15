import { fetchRecentPostTitles } from '@/lib/supabase-helpers';
import { TableName } from '@/lib/types/database';
import Link from 'next/link';

const limit = 5;

interface PreviewListProps {
  tableName: TableName;
}

export default async function PreviewList({ tableName }: PreviewListProps) {
  const previewData = await fetchRecentPostTitles(tableName, limit);

  return (
    <div className="mb-4 flex flex-col">
      {previewData.map((target, index) => (
        <Link key={target.id} href={`/notice/${target.id}`}>
          <div className={`cursor-pointer p-2 active:bg-gray-50 ${index !== 0 ? 'border-t border-primary' : ''}`}>
            <p className="text-14 font-semibold">{target.title}</p>
            <div className="mt-1 flex flex-row justify-between text-12 text-gray-500">
              <p>{new Date(target.created_at).toLocaleDateString()}</p>
              <p>{target.author}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
