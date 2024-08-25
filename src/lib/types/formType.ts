export type TFormInput = 'email' | 'password' | 'confirmPassword' | 'name' | 'phone' | 'birth';

export type TFormState = {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
  birth: string;
  valids: Record<TFormInput, boolean>;
  errorMessages: Record<TFormInput, string | null>;
};

export type TFormAction =
  | { type: 'UPDATE_EMAIL'; payload: string }
  | { type: 'UPDATE_PASSWORD'; payload: string }
  | { type: 'UPDATE_CONFIRM_PASSWORD'; payload: string }
  | { type: 'UPDATE_NAME'; payload: string }
  | { type: 'UPDATE_PHONE'; payload: string }
  | { type: 'UPDATE_BIRTH'; payload: string }
  | { type: 'VALIDATE_EMAIL' }
  | { type: 'VALIDATE_PASSWORD' }
  | { type: 'VALIDATE_CONFIRM_PASSWORD' }
  | { type: 'VALIDATE_NAME' }
  | { type: 'VALIDATE_PHONE' }
  | { type: 'VALIDATE_BIRTH' }
  | { type: 'EMAIL_DUPLICATION'; payload: string | null };
