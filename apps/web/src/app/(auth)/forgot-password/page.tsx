'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useForgotPassword from '@/hooks/api/auth/useForgotPassword';
import { useFormik } from 'formik';
import { Loader2 } from 'lucide-react';
import { validationSchema } from './validationSchema';

const ForgotPassword = () => {
  const { forgotPassword, isLoading } = useForgotPassword();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
      },
      validationSchema,
      onSubmit: ({ email }) => {
        forgotPassword(email);
      },
    });
  return (
    <main className="bg-[#212120] h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 mb-6 ">
        <div className="mt-16 flex justify-center">
          <Card className="w-[350px]  bg-[#E7E7E5] text-[#212120]">
            <CardHeader className="space-y-4">
              <CardTitle className="text-center text-2xl mt-4">
                Forgot Password
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Type your email here"
                    value={values.email}
                    error={errors.email}
                    isError={!!touched.email && !!errors.email}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </div>
                <Button
                  disabled={isLoading}
                  type="submit"
                  className=" mt-3 w-fulltext-[#E7E7E5] bg-[#EC6D47]"
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

export default ForgotPassword;
