'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useRegister from '@/hooks/api/auth/useRegister';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const { register } = useRegister();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      register(values);
    },
  });
  return (
    <main className="bg-[#212120] h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-6 mb-6">
        <div className="mt-16 flex justify-center pb-2 mb-1">
          <Card className="w-[350px]  bg-[#E7E7E5] text-[#212120] ">
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
                  {/* <div className="flex justify-evenly">
                    <div className="flex items-center">
                      <Input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="Organizer"
                        className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="ms-2 text-sm font-medium text-[#212120]">
                        as Organizer
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Input
                        checked
                        id="default-radio-2"
                        type="radio"
                        value=""
                        name="as User"
                        className="w-4 h-4 text-[#212120] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="ms-2 text-sm font-medium text-[#212120]">
                        as User
                      </label>
                    </div>
                  </div> */}
                  <Button
                    type="submit"
                    className=" w-full text-[#E7E7E5] bg-[#EC6D47]"
                  >
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
