'use client';

import FormInput from '@/components/FormInput';
import { SignupFormData, signupSchema } from '@/lib/schemas/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function SignUpForm() {
  const {
    register, // 입력 필드 등록 함수
    handleSubmit, // 폼 제출
    formState: { errors, isSubmitting }, // 폼 상태 (에러, 제출중 여부)
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema), // zod 스키마 사용한 유효성 검사 설정
    mode: 'onChange', // 실시간 유효성 검사
  });

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
  };

  return (
    <form>
      <FormInput
        label="로그인에 사용할 이메일 주소를 입력해주세요"
        name="email"
        register={register}
        error={errors.email}
        placeholder="test@test.com"
      />
      <FormInput
        label="사용할 비밀번호를 입력해주세요"
        name="password"
        register={register}
        error={errors.password}
        placeholder="비밀번호"
      />
      <FormInput
        label="비밀번호를 동일하게 입력해주세요"
        name="confirmPassword"
        register={register}
        error={errors.confirmPassword}
        placeholder="비밀번호"
      />
    </form>
  );
}
