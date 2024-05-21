'use client';

import { FormikHandlers } from 'formik';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

interface FormInputProps {
  name: string;
  label: string;
  placeholder: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  value: string;
  isError: boolean;
  error: string | undefined;
}

const FormTextArea: React.FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  value,
  isError,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={name} className={isError ? 'text-red-500' : ''}>
        {label}
      </Label>
      <Textarea
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        style={{ resize: 'none' }}
        rows={4}
      />
      {isError ? <div className="text-xs text-red-500">{error}</div> : null}
    </div>
  );
};

export default FormTextArea;
