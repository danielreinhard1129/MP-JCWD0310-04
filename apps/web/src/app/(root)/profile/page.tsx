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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthGuard from '@/hoc/AuthGuard';
import useGetUser from '@/hooks/api/user/useGetUser';
import { useAppSelector } from '@/redux/hooks';

const AccountInfo = () => {
  const { id, username, email, referralCode } = useAppSelector(
    (state) => state.user,
  );
  // const { user } = useGetUser(Number(id));
  // console.log(id);
  // console.log(user);

  // if (!user) {
  //   return notFound();
  // }
  return (
    <section className="container flex justify-center mx-auto">
      <div className="py-5 ">
        <h1 className="font-bold text-4xl text-center">Account Information</h1>

        <hr className="w-full my-2  text-center" />

        {/* profile account */}

        <div className="grid md:grid-cols-2 justify-center py-2 gap-4">
          <div className="md:flex md:justify-end justify-center  md:py-4 ">
            <Avatar className=" w-32 h-32">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className=" md:gap-8">
            <div className="grid gap-7 md:py-1 md:w-auto">
              <div className="flex items-center justify-between">
                <Label className="w-28 text-left mr-4">Username</Label>
                <Input type="text" value={` ${username}`} />
              </div>
              <div className="flex items-center justify-between ">
                <Label className="w-28 text-left mr-4">Email:</Label>
                <Input type="text" value={` ${email}`} />
              </div>
              <div className="flex items-center justify-between ">
                <Label className="w-28 text-left mr-4">Referral</Label>
                <Input type="text" value={` ${referralCode}`} />
              </div>
            </div>
          </div>
          <div className="flex gap-4 my-4 justify-center col-span-2">
            <div>
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
            <div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-blue-700">Save Change Profile</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthGuard(AccountInfo);
