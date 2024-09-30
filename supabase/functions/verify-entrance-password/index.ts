import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const CORRECT_PASSWORD = Deno.env.get('ENTRANCE_PASSWORD');

serve(async (req) => {
  // CORS 헤더 추가
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    });
  }

  const { password } = await req.json();

  const isValid = password === CORRECT_PASSWORD;

  return new Response(JSON.stringify({ isValid }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // 모든 출처 허용 (개발 환경용)
    },
  });
});
