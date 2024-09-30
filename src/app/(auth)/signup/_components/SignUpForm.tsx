'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import FormInput from '@/components/FormInput';
import { SignupFormData, signupSchema } from '@/lib/schemas/authSchema';

export default function SignUpForm() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const supabase = createClientComponentClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
  });

  const verifyEntrancePassword = async () => {
    const enteredPassword = getValues('entrancepassword');

    const { data, error } = await supabase.functions.invoke('verify-entrance-password', {
      body: { password: enteredPassword },
    });

    if (error) {
      console.error('Error verifying password:', error);
      return false;
    }

    return data.isValid;
  };

  const handleVerification = async () => {
    const isValid = await verifyEntrancePassword();
    setIsAuthenticated(isValid);
    if (isValid) {
      console.log('인증 성공!');
      alert('입주민 인증에 성공했습니다!');
    } else {
      console.log('인증 실패');
      alert('입주민 인증에 실패했습니다. 비밀번호를 다시 확인해주세요.');
    }
  };

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
    // 회원가입 로직 구현
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="(입주민 인증 절차) 녹색친구들 마곡 공동현관 비밀번호"
        name="entrancepassword"
        register={register}
        error={errors.entrancepassword}
        placeholder="예) #7890"
      />
      <button type="button" onClick={handleVerification}>
        인증하기
      </button>

      {isAuthenticated && <>{/* 인증 후 표시될 폼 요소들 */}</>}
    </form>
  );
}
