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
      role: 'customer',
      points: 0,
    },
    validationSchema: validationSchemaRegister,
    onSubmit: (values) => {
      register(values);
    },
  });
  return (
    <main className=" container flex items-center justify-center h-screen w-full pt-6 overflow-hidden">
      <div className=" mx-auto px-4 md:py-10 py-24 mb-6  ">
        <div className="md:mt-16 grid md:grid-cols-2 w-[700px] ">
          {/* kiri */}
          <div className="relative bg-cover bg-primary bg-center rounded-l-lg pl-5 hidden md:block">
            <div className=" relative h-[25px] w-1/4  p-5  ">
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
                  Discover all new event. sign in for personalized
                  recommendations today.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full text-black md:shadow-2xl  rounded-r-lg p-3">
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
