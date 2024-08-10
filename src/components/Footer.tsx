import React from 'react';

export default function Footer() {
  return (
    <footer className="border-primary text-primary w-full border-t bg-white text-xs">
      <div className="mx-auto max-w-screen-xl p-4 md:flex md:justify-between">
        <div className="mb-4 md:mb-0">
          <p>7-9, Omok-ro 26-gil, Yangcheon-gu, Seoul</p>
          <p className="font-semibold">BrickStudio</p>
        </div>
        <div className="mb-4 md:mb-0">
          <p>Email. fridaynight@kakao.com</p>
          <p>Instagram. @kimdohyeon</p>
          <p>GitHub. github.com/kimzeze</p>
        </div>
        <div className="mb-4 md:mb-0">
          <p>사이트 소개 | 서비스이용약관 | 개인정보처리방침</p>
          <p>고객센터 | 제휴문의 | 광고문의</p>
        </div>
        <div>
          <p className="font-semibold">
            Copyright © 2024 Kimdohyeon. <br /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
