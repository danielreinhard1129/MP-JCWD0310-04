'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useForgotPassword from '@/hooks/api/auth/useForgotPassword';
import { useFormik } from 'formik';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { validationSchema } from './validationSchema';
import { notFound, useSearchParams } from 'next/navigation';
import useResetPassword from '@/hooks/api/auth/useResetPassword';

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  if (!token) {
    notFound();
  }

  const router = useRouter();
  const { resetPassword, isLoading } = useResetPassword();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        password: '',
        confirmPassword: '',
      },
      validationSchema,
      onSubmit: ({ password }) => {
        resetPassword(password, token);
      },
    });
  return (
    <main className="bg-[#212120] h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 mb-6 ">
        <div className="mt-16 flex justify-center">
          <Card className="w-[350px]  bg-[#E7E7E5] text-[#212120]">
            <CardHeader className="space-y-4">
              <CardTitle className="text-center text-2xl mt-4">
                Reset Password
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Type your password here"
                    value={values.password}
                    error={errors.password}
                    isError={!!touched.password && !!errors.password}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                  <FormInput
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    value={values.confirmPassword}
                    error={values.confirmPassword}
                    isError={
                      !!touched.confirmPassword && !!errors.confirmPassword
                    }
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                </div>
                <Button
                  className="mt-6 w-full bg-[#EC6D47]"
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
