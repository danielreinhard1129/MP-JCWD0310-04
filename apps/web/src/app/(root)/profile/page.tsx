'use client';
import FormInput from '@/components/FormInput';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import AuthGuard from '@/hoc/AuthGuard';

const Profile = () => {
  return (
    <section className=" container py-10 mx-auto px-52">
      <div className="flex pb-2">
        <h1 className="font-bold text-2xl w-1/5">Account Settings</h1>
        <div className="w-3/5 flex justify-center items-center align-bottom">
          <h1 className="font-bold text-4xl">Account Information</h1>
        </div>
        <div className="w-1/5 flex justify-center place-self-center items-center gap-2">
          <Switch />
          <p className="text-sm font-semibold">Become Admin</p>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex">
        <div className="w-1/5 bg-[#EEEE]">
          <div className="flex flex-col gap-6">
            <Button variant="ghost" className="flex justify-between">
              <span className="mr-10"> Account Info</span>
            </Button>
            <Button variant="ghost" className="flex justify-between">
              <span className="mr-10"> Change Email</span>
            </Button>
            <Button variant="ghost" className="flex justify-between">
              <span className="mr-10"> Change Password</span>
            </Button>
          </div>
        </div>
        <div className="w-4/5 ">
          <div className=" flex-col justify-center px-10 py-5 gap-4">
            <div className="py-5">
              <Avatar className="mx-auto w-28 h-28">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex gap-4">
              <div className=" flex flex-col gap-7 py-4">
                <div>Username: </div>
                <div>Email: </div>
                <div>Referral: </div>
              </div>
              <div className=" w-full">
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
                  name="Referral"
                  type="text"
                  label=""
                  placeholder="referral number"
                  value=""
                  error=""
                  isError={true}
                  handleBlur={() => {}}
                  handleChange={() => {}}
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button className="bg-blue-700">Save Profile</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default (Profile);
