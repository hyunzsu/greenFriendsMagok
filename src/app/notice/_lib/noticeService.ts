// app/notice/_lib/noticeService.ts

import { fetchAllFromTable, fetchOneFromTable, fetchRecentPostTitles } from '@/lib/supabase-helpers';
import { NoticeTable } from '@/lib/types/database';

// 모든 공지사항을 가져오는 함수
export async function getNotices(): Promise<NoticeTable[]> {
  return fetchAllFromTable('notices');
}

// 특정 ID의 공지사항을 가져오는 함수
export async function getNoticeById(id: number): Promise<NoticeTable | null> {
  return fetchOneFromTable('notices', id);
}

// 최근 공지사항의 제목, ID, 생성일을 가져오는 함수
export async function getRecentNotices(limit: number = 5): Promise<Pick<NoticeTable, 'id' | 'title' | 'created_at'>[]> {
  return fetchRecentPostTitles('notices', limit);
}
