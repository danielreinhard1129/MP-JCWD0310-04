'use client';
import FormInput from '@/components/FormInput';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const AccountInfo = () => {
  return (
    <section className="py-10 px-36">
    <div className="flex">
      <div className="w-full flex justify-center items-center align-bottom">
        <h1 className="font-bold text-4xl">Account Information</h1>
      </div>
      <div className=" flex place-self-center items-center gap-3">
        <Switch />
        <p className="text-sm font-semibold">Become Admin</p>
      </div>
    </div>
    <hr className="w-full" />
    
      {/* profile account */}

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
         <Button className="bg-blue-700">Delete Account</Button>
        </div>
      </div>
    
  </section>
    
  )
}

export default AccountInfo