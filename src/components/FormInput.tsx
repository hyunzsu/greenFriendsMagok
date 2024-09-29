import { FieldError, UseFormRegister } from 'react-hook-form';

type FormInputProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  type?: string;
  placeholder?: string;
  isCheckbox?: boolean;
};

export default function FormInput({
  label,
  name,
  register,
  error,
  type = 'text',
  placeholder = '',
  isCheckbox = false,
}: FormInputProps) {
  return (
    <div>
      {isCheckbox ? (
        <div>
          <input id={name} type="checkbox" {...register(name)} />
          <label htmlFor={name}>{label}</label>
        </div>
      ) : (
        <div className="flex w-full flex-col">
          <label htmlFor={name}>{label}</label>
          <input id={name} type={type} placeholder={placeholder} {...register(name)} />
        </div>
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
}
