import Image from 'next/image';

export default function Overview() {
  return (
    <div className="mb-4 flex cursor-pointer flex-col items-center justify-between py-2">
      <h3 className="mb-3 w-full text-left text-2xl font-semibold">Overview</h3>
      {/* <div className="h-[500px] w-full border border-primary"></div> */}
      <Image src={'/assets/overview.png'} alt="건물 건체 안내 이미지" width={600} height={933} />
    </div>
  );
}
