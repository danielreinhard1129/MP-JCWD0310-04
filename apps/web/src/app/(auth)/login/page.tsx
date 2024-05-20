'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useLogin from '@/hooks/api/auth/useLogin';
import { useFormik } from 'formik';
import { validationSchemaLogin } from '../validationSchema';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Login = () => {
  const router = useRouter();
  const { login } = useLogin();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: validationSchemaLogin,
      onSubmit: (values) => {
        login(values);
      },
    });
  return (
    <main className=" container flex items-center justify-center h-screen overflow-hidden">
      <div className=" md:mx-auto md:px-4 md:py-10 py-24 mb-6  ">
        <div className="md:mt-16 grid md:grid-cols-2 md:w-[700px]  ">
          {/* kiri */}
          <div className="relative bg-cover bg-primary bg-center md:rounded-l-lg pl-5 hidden md:block ">
            <div className=" relative h-[25px] md:w-1/4 p-5 ">
              <Image
                src="/assets/images/eventure_logo.png"
                alt="logonobg"
                style={{ objectFit: 'contain' }}
                fill
              />
            </div>
            <div className="absolute bottom-0 left-0 right-1 top-0 h-full w-full rounded-l-lg p-3">
              <div className="text-white flex flex-col justify-center h-full w-full p-5 ">
                <h2 className="my-6 text-5xl font-mono text-right ml-10 ">
                  Welcome Back!
                </h2>
                <p className="mb-6 text-lg font-semibold font-mono break-words mr-10 ">
                  Discover all new event. log in for personalized
                  recommendations today.
                </p>
              </div>
            </div>
          </div>
          {/* kanan */}
          <div>
            <div className="w-full text-black md:shadow-2xl  rounded-r-lg p-5">
              <CardHeader className="space-y-4">
                <CardTitle className="text-center text-3xl ">Login</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid w-full items-center gap-4 ">
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

                    <FormInput
                      name="password"
                      type="password"
                      label="Password"
                      placeholder="Type your Password here"
                      value={values.password}
                      error={errors.password}
                      isError={!!touched.password && !!errors.password}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                    />

                    <div className='px-3'>
                      <p
                        className="cursor-pointer text-end text-xs py-1"
                        onClick={() => router.push('/forgot-password')}
                      >
                        Forgot Password ?
                      </p>
                      <div className=" text-end text-xs flex gap-1 justify-end py-1">
                        Don&apos;t have an account?
                        <p
                          className="cursor-pointer"
                          onClick={() => router.push('/register')}
                        >
                          Register Here
                        </p>
                      </div>
                      <p
                        className="cursor-pointer text-end text-xs py-1"
                        onClick={() => router.push('/register-organizer')}
                      >
                        Register as Organizer
                      </p>
                    </div>
                    <Button type="submit" className=" mt-3 w-full bg-blue-700">
                      Login
                    </Button>
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

export default Login;
