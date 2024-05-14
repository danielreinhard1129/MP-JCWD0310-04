'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import useGetUser from '@/hooks/api/user/useGetUser';
import { useAppSelector } from '@/redux/hooks';
import { notFound } from 'next/navigation';

const AccountInfo = () => {
  const { id } = useAppSelector((state) => state.user);
  const { user } = useGetUser(id);

  // if (!user) {
  //   return notFound();
  // }
  return (
    <div className="container flex justify-center mx-auto">
      <section className="py-10   ">
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">Account Information</h1>
          <div className="flex items-center gap-3">
            <Switch />
            <p className="text-sm font-semibold">Become Admin</p>
          </div>
        </div>
        <hr className="w-full my-6" />

        {/* profile account */}

        <div className="flex flex-col items-center justify-center px-10 py-5 gap-4">
          <div className="py-5">
            <Avatar className=" w-28 h-28">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className=" md:gap-8">
            <div className="flex flex-col gap-7 md:py-4 md:w-auto">
              <div className="flex items-center justify-between">
                <Label className="w-28 text-left mr-4">Username</Label>
                {/* <p>{user.username}</p> */}
              </div>
              <div className="flex justify-between ">
                <Label className="w-28 text-left mr-4">Email:</Label>
                {/* <p>{user.email}</p> */}
              </div>
              <div className="flex justify-between ">
                <Label className="w-28 text-left mr-4">Referral</Label>
                {/* <p>{user.referral}</p> */}
              </div>
            </div>
            <div className="w-full gap-y-2 md:w-auto">
              {/* <FormInput
                name="username"
                type="text"
                label=""
                placeholder="Type your Username here"
                value=""
                error=""
                isError={true}
                handleBlur={() => {}}
                handleChange={() => {}}
              />
              <FormInput
                name="email"
                type="email"
                label=""
                placeholder="Type your email here"
                value=""
                error=""
                isError={true}
                handleBlur={() => {}}
                handleChange={() => {}}
              />
              <FormInput
                name="newEmail"
                type="email"
                label=""
                placeholder="Type your new email here"
                value=""
                error=""
                isError={true}
                handleBlur={() => {}}
                handleChange={() => {}}
              />
              <FormInput
                name="referral"
                type="text"
                label=""
                placeholder="Referral number"
                value=""
                error=""
                isError={true}
                handleBlur={() => {}}
                handleChange={() => {}}
              />
              <FormInput
                name="password"
                type="password"
                label=""
                placeholder="Type your current password here"
                value=""
                error=""
                isError={true}
                handleBlur={() => {}}
                handleChange={() => {}}
              />
              <FormInput
                name="newPassword"
                type="password"
                label=""
                placeholder="Type your new password here"
                value=""
                error=""
                isError={true}
                handleBlur={() => {}}
                handleChange={() => {}}
              /> */}
            </div>
          </div>

          <div className="mt-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-blue-700">Delete Account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountInfo;
