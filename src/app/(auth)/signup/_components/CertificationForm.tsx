'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/components/FormInput';
import { SignupFormData, signupSchema } from '@/lib/schemas/authSchema';
import { useAuth } from '@/lib/hooks/useAuth';
import Button from '@/components/Button';
import cn from '@/lib/utils/cn';

export default function CertificationForm() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 인증 상태 관리하는 state
  const { verifyEntrancePassword } = useAuth();

  // react-hook-form의 useForm 훅 설정
  const {
    register, // 입력 필드 등록 함수
    formState: { errors }, // 폼 에러 상태
    getValues, // 폼 값 가져오는 함수
    watch, // 폼 필드 값 감시 함수
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema), // zod 스키마를 사용한 유효성 검사 설정
    mode: 'onChange', // 값이 변경될 때마다 유효성 검사 실행
  });

  // 약관 동의 체크박스 상태 감시
  const agreeToTerms = watch('agreeToTerms');
  const agreeToPrivacyPolicy = watch('agreeToPrivacyPolicy');
  // 모든 약관에 동의했는지 확인
  const isAllAgreed = agreeToTerms && agreeToPrivacyPolicy;

  // 비밀번호 검증 처리 함수
  const handleVerification = async () => {
    const enteredPassword = getValues('entrancepassword'); // 입력된 비밀번호 가져오기
    const isValid = await verifyEntrancePassword(enteredPassword); // 비밀번호 유효성 검사
    setIsAuthenticated(isValid); // 인증 상태 업데이트
    alert(isValid ? '입주민 인증에 성공했습니다!' : '입주민 인증에 실패했습니다. 비밀번호를 다시 확인해주세요.');
  };

  return (
    <div className="my-20 flex flex-col gap-10 px-4">
      {/* 입주민 인증을 위한 비밀번호 입력 필드 */}
      <div className="flex items-center justify-between gap-6">
        <FormInput
          label="(입주민 인증 절차) 녹색친구들 마곡 공동현관 비밀번호"
          name="entrancepassword"
          register={register}
          error={errors.entrancepassword}
          placeholder="예) 공동현관 비밀번호를 입력해주세요"
          width="w-3/4" // 너비를 3/4로 지정
        />
        <Button
          label="인증하기"
          type="button"
          onClick={handleVerification}
          className="border-none bg-primary text-sm font-bold text-white"
        />
      </div>

      {/* 인증 성공 시 표시될 추가 폼 요소들 */}
      {isAuthenticated && (
        <>
          <div>
            <h3 className="text-xl font-semibold">서비스 이용약관에 동의해주세요.</h3>
            <FormInput
              label="[필수] 이용약관에 동의"
              name="agreeToTerms"
              register={register}
              error={errors.agreeToTerms}
              isCheckbox={true}
            />
            <FormInput
              label="[필수] 개인정보 수집 및 이용 동의"
              name="agreeToPrivacyPolicy"
              register={register}
              error={errors.agreeToPrivacyPolicy}
              isCheckbox={true}
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <Button
              label="카카오로 3초만에 시작하기"
              type="button"
              onClick={() => {
                /* 카카오 로그인 로직 */
              }}
              className={cn(
                'h-[50px] w-full border-none font-bold text-black transition-colors duration-300',
                isAllAgreed ? 'bg-[#FEE602] hover:bg-[#FDD800]' : 'cursor-not-allowed bg-[#FEE602]/50',
              )}
              disabled={!isAllAgreed}
            />
            <Button
              label="이메일로 회원가입"
              type="button"
              onClick={() => {
                /* 이메일로 회원가입 페이지 이동 */
              }}
              className={cn(
                'h-[50px] w-full border-none font-bold text-white transition-colors duration-300',
                isAllAgreed ? 'bg-primary hover:bg-black' : 'cursor-not-allowed bg-primary/50',
              )}
              disabled={!isAllAgreed}
            />
          </div>
        </>
      )}
    </div>
  );
}
