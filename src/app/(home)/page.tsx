import React from 'react';
import Title from '@/components/Title';
import Overview from './_components/Overview';
import HeroSection from './_components/HeroSection';
import PreviewList from './_components/PreviewList';
import FaqPreview from './_components/FaqPreview';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="px-4 pb-6 pt-4">
        <Overview />
        <Title title="Notice" href="/notice" isMainPage={true} />
        <PreviewList tableName="notices" />
        <Title title="FAQ" href="/faq" isMainPage={true} />
        <FaqPreview />
      </div>
    </div>
  );
}
