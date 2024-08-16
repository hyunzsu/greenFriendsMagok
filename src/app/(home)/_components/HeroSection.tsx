import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="">
      <div className="">
        <Image src={'/assets/heroImage.png'} layout="full" width={600} height={900} alt="녹색친구들 마곡 메인 이미지" />
      </div>
    </div>
  );
}
