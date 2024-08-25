import InputField from '@/components/InputField';
import { login } from '../_lib/actions';

export default function LoginForm() {
  return (
    <form>
      <InputField label="이메일" id="email" type="email" name="email" />
      <InputField label="비밀번호" id="password" type="password" name="password" />
      <button formAction={login} className="mt-[20px] h-[40px] w-full border border-primary bg-tertiary text-[16px]">
        로그인
      </button>
    </form>
  );
}
