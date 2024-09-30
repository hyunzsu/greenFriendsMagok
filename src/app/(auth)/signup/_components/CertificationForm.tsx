'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/components/FormInput';
import { SignupFormData, signupSchema } from '@/lib/schemas/authSchema';
import { useAuth } from '@/lib/hooks/useAuth';

export default function CertificationForm() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 인증 상태 관리하는 상태
  const { verifyEntrancePassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
  });

  // 비밀번호 검증 처리 함수
  const handleVerification = async () => {
    const enteredPassword = getValues('entrancepassword');
    const isValid = await verifyEntrancePassword(enteredPassword);
    setIsAuthenticated(isValid);
    alert(isValid ? '입주민 인증에 성공했습니다!' : '입주민 인증에 실패했습니다. 비밀번호를 다시 확인해주세요.');
  };

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
    // 회원가입 로직 구현
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 입주민 인증을 위한 비밀번호 입력 필드 */}
      <FormInput
        label="(입주민 인증 절차) 녹색친구들 마곡 공동현관 비밀번호"
        name="entrancepassword"
        register={register}
        error={errors.entrancepassword}
        placeholder="예) 공동현관 비밀번호를 입력해주세요"
      />
      <button type="button" onClick={handleVerification}>
        인증하기
      </button>

      {/* 인증 성공 시 표시될 추가 폼 요소들 */}
      {isAuthenticated && <>{/* 인증 후 표시될 폼 요소들 */}</>}
    </form>
  );
}
