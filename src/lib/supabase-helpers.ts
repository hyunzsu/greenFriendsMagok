import { createServerSupabaseClient } from '@/lib/supabase-server';
import { TableName, RecordType } from '@/lib/types/database';

// 테이블에서 모든 데이터를 가져오는 범용 함수 (해당 페이지들에서 사용)
export async function fetchAllFromTable<T extends TableName>(
  tableName: T,
  columns: string = '*',
): Promise<RecordType<T>[]> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase.from(tableName).select(columns).order('created_at', { ascending: false });

  if (error) {
    console.error(`${tableName}에서 데이터를 가져오는 중 오류 발생:`, error);
    return [];
  }
  // 타입 안전성을 위해 unknown으로 먼저 변환한 후 RecordType<T>[]로 변환
  return data as unknown as RecordType<T>[];
}

// 테이블에서 특정 ID의 단일 레코드를 가져오는 범용 함수
export async function fetchOneFromTable<T extends TableName>(tableName: T, id: number): Promise<RecordType<T> | null> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase.from(tableName).select('*').eq('id', id).single();

  if (error) {
    console.error(`${tableName}에서 ID ${id}의 레코드를 가져오는 중 오류 발생:`, error);
    return null;
  }
  return data as RecordType<T>;
}

// 메인 페이지용: 특정 테이블의 최근 게시물 제목 몇 개를 가져오는 범용 함수
export async function fetchRecentPostTitles<T extends TableName>(
  tableName: T,
  limit: number = 5,
): Promise<Pick<RecordType<T>, 'id' | 'title' | 'created_at'>[]> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from(tableName)
    .select('id, title, created_at')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error(`${tableName}에서 최근 게시물을 가져오는 중 오류 발생:`, error);
    return [];
  }
  return data as Pick<RecordType<T>, 'id' | 'title' | 'created_at'>[];
}
