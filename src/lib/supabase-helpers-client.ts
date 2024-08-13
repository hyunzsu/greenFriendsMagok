import { supabase } from './supabase';
import { TableName, RecordType } from '@/lib/types/database';

// 데이터베이스 연결을 확인하는 함수
async function checkDatabaseConnection() {
  try {
    const { data, error } = await supabase.from('notices').select('count', { count: 'exact' });
    if (error) throw error;
    console.log('데이터베이스 연결 성공. 행 수:', data);
  } catch (error) {
    console.error('데이터베이스 연결 실패:', error);
    throw error;
  }
}

// 클라이언트에서 특정 테이블의 모든 데이터를 가져오는 함수
export async function fetchAllFromTableClient<T extends TableName>(
  tableName: T,
  columns: string = '*',
): Promise<RecordType<T>[]> {
  const { data, error } = await supabase.from(tableName).select(columns).order('created_at', { ascending: false });

  if (error) {
    console.error(`클라이언트: ${tableName}에서 데이터를 가져오는 중 오류 발생:`, error);
    return [];
  }
  return data as unknown as RecordType<T>[];
}

// 클라이언트에서 특정 테이블의 단일 레코드를 ID로 가져오는 함수
export async function fetchOneFromTableClient<T extends TableName>(
  tableName: T,
  id: number,
): Promise<RecordType<T> | null> {
  const { data, error } = await supabase.from(tableName).select('*').eq('id', id).single();

  if (error) {
    console.error(`클라이언트: ${tableName}에서 ID ${id}의 레코드를 가져오는 중 오류 발생:`, error);
    return null;
  }
  // 타입 단언을 사용하여 타입 에러 해결 (추후 수정 필요)
  return data as RecordType<T>;
}

// 특정 테이블에서 카테고리별로 필터링된 데이터를 가져오는 함수
export async function fetchFilteredFromTable<T extends TableName>(
  tableName: T,
  category: string,
  columns: string = '*',
): Promise<RecordType<T>[]> {
  console.log('테이블에서 가져오는 중: ', tableName, '카테고리:', category);
  await checkDatabaseConnection();

  // 카테고리 필터링 적용
  let query = supabase.from(tableName).select(columns);

  // 카테고리가 전체가 아닐경우 카테고리 필터링 적용
  if (category !== '전체') {
    // 대소문자를 구분하지 않는 검색을 위해 ilike 사용
    query = query.ilike('category', `%${category}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error(`${tableName}에서 데이터 가져오기 오류:`, error);
    throw error;
  }

  console.log('필터링된 데이터:', data);

  // 타입 단언을 사용하여 타입 에러 해결 (추후 수정 필요)
  return data as unknown as RecordType<T>[];
}
