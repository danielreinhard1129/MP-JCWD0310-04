'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useRegister from '@/hooks/api/auth/useRegister';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { validationSchemaRegister } from '../validationSchema';

const Register = () => {
  const router = useRouter();
  const { register } = useRegister();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        username: '',
        email: '',
        password: '',
        referralCode: '',
        role: 'CUSTOMER',
        point: 0,
      },
      validationSchema: validationSchemaRegister,
      onSubmit: (values) => {
        register(values);
      },
    });
  return (
    <main className=" container flex items-center justify-center h-screen w-full pt-6 overflow-hidden">
      <div className=" mx-auto px-4 md:py-10 py-24 mb-6  ">
        <div className="md:mt-16 grid md:grid-cols-2  md:w-[700px] ">
          {/* kiri */}
          <div className="relative bg-cover bg-primary bg-center rounded-l-lg pl-5 hidden md:block ">
            <div className=" relative h-[25px] w-1/4  p-5 ">
              <Image
                src="/assets/images/eventure_logo.png"
                alt="logonobg"
                style={{ objectFit: 'contain' }}
                fill
              />
            </div>
            <div className="absolute bottom-0 left-0 right-1 top-0 h-full w-full rounded-l-lg">
              <div className="text-white flex flex-col justify-center h-full w-full p-5 ">
                <h2 className="my-6 text-5xl font-mono text-right ml-10 ">
                  Welcome Back!
                </h2>
                <p className="mb-6 text-lg font-semibold font-mono break-words mr-10 ">
                  Discover all new event. sign in for making your own event
                  today.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full text-black md:shadow-2xl rounded-r-lg p-5">
              <CardHeader className="space-y-2">
                <CardTitle className="text-center text-2xl mt-4">
                  Register
                </CardTitle>
                <CardDescription className="text-center">
                  Create an account, and book your event
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid w-full items-center gap-4">
                    <FormInput
                      name="username"
                      label="Username"
                      error={errors.username}
                      isError={!!touched.username && !!errors.username}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Username"
                      type="text"
                      value={values.username}
                    />
                    <FormInput
                      name="email"
                      label="Email"
                      error={errors.email}
                      isError={!!touched.email && !!errors.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Email"
                      type="text"
                      value={values.email}
                    />
                    <FormInput
                      name="password"
                      label="password"
                      error={errors.password}
                      isError={!!touched.password && !!errors.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="password"
                      type="password"
                      value={values.password}
                    />
                    <FormInput
                      name="referralCode"
                      label="referralCode"
                      error={errors.referralCode}
                      isError={!!touched.referralCode && !!errors.referralCode}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="referralCode"
                      type="text"
                      value={values.referralCode}
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
                    <p
                      className="cursor-pointer text-end text-xs"
                      onClick={() => router.push('/register-organizer')}
                    >
                      Register as Organizer
                    </p>
                  </div>
                </form>
              </CardContent>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
