'use client';
import FormInput from '@/components/FormInput';
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
import { Switch } from '@/components/ui/switch';

const AccountInfo = () => {
  return (
    <section className="py-10 px-6 md:px-36">
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
        <div className="flex md:flex-row md:gap-8">
          <div className="flex flex-col gap-7 md:py-4 md:w-auto">
            <div>Username: </div>
            <div>Email: </div>
            <div>New Email: </div>
            <div>Referral: </div>
            <div>Your Password: </div>
            <div>New Password: </div>
          </div>
          <div className="w-full gap-y-2 md:w-auto">
            <FormInput
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
            />
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
  );
};

export default AccountInfo;
