import React from 'react';

export default function Footer() {
  return (
    <footer className="border-primary text-primary w-full border-t bg-white text-xs">
      <div className="mx-auto max-w-screen-xl p-4 md:flex md:justify-between">
        <div className="mb-4 md:mb-0">
          <p>161-11 Magokjungang-ro, Gangseo-gu, Seoul</p>
          <p className="font-semibold">Magok, GreenFriends</p>
        </div>
        <div className="mb-4 md:mb-0">
          <p>Email. fridaynight@kakao.com</p>
          <p>GitHub. github.com/kimzeze</p>
        </div>
        <div className="mb-4 md:mb-0">
          <p>본 사이트는 녹색친구들 [마곡] 입주예정자가 운영하는 사이트임을 알립니다.</p>
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
