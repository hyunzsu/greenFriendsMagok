import Script from 'next/script';

export const revalidate = 60; // 60초마다 재검증

export default function NeighborhoodLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false&libraries=services`}
      />
      <div className="px-4 pb-6 pt-4">{children}</div>
    </>
  );
}
