'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useRegister from '@/hooks/api/auth/useRegister';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { validationSchemaRegister } from '../validationSchema';
import Image from 'next/image';

const Register = () => {
  const router = useRouter();
  const { register } = useRegister();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      referral: '',
      role: '',
    },
    validationSchema: validationSchemaRegister,
    onSubmit: (values) => {
      register(values);
    },
  });
  return (
    <main className=" h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-6 mb-6">
        <div className="mt-16 flex justify-center pb-2 mb-1">
          <Card className="w-[350px] text-black shadow-2xl">
            <CardHeader className="space-y-2">
              <CardTitle className="text-center text-2xl mt-4">
                Register
              </CardTitle>
              <CardDescription className="text-center">
                Create an account, and book your event
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={formik.handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  <FormInput
                    name="username"
                    type="text"
                    label="Username"
                    placeholder="Type your Username here"
                    value={formik.values.username}
                    error={formik.errors.username}
                    isError={
                      !!formik.touched.username && !!formik.errors.username
                    }
                    handleBlur={formik.handleBlur}
                    handleChange={formik.handleChange}
                  />
                  <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Type your email here"
                    value={formik.values.email}
                    error={formik.errors.email}
                    isError={!!formik.touched.email && !!formik.errors.email}
                    handleBlur={formik.handleBlur}
                    handleChange={formik.handleChange}
                  />
                  <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Type your Password here"
                    value={formik.values.password}
                    error={formik.errors.password}
                    isError={
                      !!formik.touched.password && !!formik.errors.password
                    }
                    handleBlur={formik.handleBlur}
                    handleChange={formik.handleChange}
                  />
                  <FormInput
                    name="referral"
                    type="text"
                    label="Referral"
                    placeholder="Referral"
                    value={formik.values.referral}
                    error={formik.errors.referral}
                    isError={
                      !!formik.touched.referral && !!formik.errors.referral
                    }
                    handleBlur={formik.handleBlur}
                    handleChange={formik.handleChange}
                  />
                  <Button type="submit" className=" w-full bg-blue-700">
                    Register
                  </Button>
                  <p
                    className="cursor-pointer text-end text-xs"
                    onClick={() => router.push('/login')}
                  >
                    Already have an account ?
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Register;
