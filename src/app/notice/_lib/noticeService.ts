import { createServerSupabaseClient } from '@/lib/supabase-server';
import { NoticeContent } from '@/lib/types/notice';

export async function getNotices(): Promise<NoticeContent[]> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase.from('notices').select('*').order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching notices:', error);
    return [];
  }

  return data || [];
}

export async function getNoticeById(id: number): Promise<NoticeContent | null> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase.from('notices').select('*').eq('id', id).single();

  if (error) {
    console.error('Error fetching notice:', error);
    return null;
  }

  return data;
}
