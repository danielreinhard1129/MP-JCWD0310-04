'use client';

import { FormikHandlers } from 'formik';
import React, { HTMLInputTypeAttribute } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface FormInputProps {
  name: string;
  label: string;
  type: string | HTMLInputTypeAttribute;
  value: string | number | Date;
  placeholder: string;
  isError: boolean;
  error: string | undefined;
  handleChange: FormikHandlers['handleChange'];
  handleBlur: FormikHandlers['handleBlur'];
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  type,
  isError,
  placeholder,
  value,
  error,
  handleChange,
  handleBlur,
}) => {
  const displayValue =
    typeof value === 'object' && value instanceof Date
      ? value.toISOString() // Jika tipe data adalah Date, ubah menjadi string format tanggal
      : value; // Jika bukan tipe data Date, biarkan nilai tetap sama
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={name} className={isError ? 'text-red-500' : 'text-black'}>
        {label}
      </Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={handleChange}
        value={displayValue}
        className={isError ? 'border-red-500' : ''}
      />
      {isError ? <div className="text-xs text-red-500">{error}</div> : null}
    </div>
  );
};

export default FormInput;
