import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-primary bg-white text-xs text-primary">
      <div className="mx-auto max-w-screen-xl p-4 md:flex md:justify-between">
        <div className="mb-4 md:mb-0">
          <p>161-11 Magokjungang-ro, Gangseo-gu, Seoul</p>
          <p className="font-semibold">Magok, GreenFriends</p>
        </div>
        <div className="mb-4 md:mb-0">
          <p className="font-semibold">Developers</p>
          <div className="flex flex-row">
            <div>
              <p className="font-semibold">Kim Dohyeon</p>
              <p>Email. fridaynight@kakao.com</p>
              <p>GitHub. github.com/kimzeze</p>
            </div>
            <div className="ml-4">
              <p className="font-semibold">Hyeon Jisoo</p>
              <p>Email. hyunzsu@kakao.com</p>
              <p>GitHub. github.com/hyunzsu</p>
            </div>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <p>본 사이트는 녹색친구들 [마곡] 입주예정자가 운영하는 사이트임을 알립니다.</p>
          <p>고객센터 | 사이트 문의 | 녹색친구들 공식 홈페이지 바로가기</p>
        </div>
        <div>
          <p className="font-semibold">
            Copyright © 2024 Kimdohyeon. Hyenjisoo. <br /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
