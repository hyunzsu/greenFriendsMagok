export const revalidate = 60; // 60초마다 재검증

export default function NoticeLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
