'use client';
import FormInput from '@/components/FormInput';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import React from 'react';

const ChangeEmail = () => {
  return (
    <section className="py-10 px-36">
       <div>
      <div className="w-full flex justify-center items-center align-bottom py-5">
        <h1 className="font-bold text-4xl">Change Email Here</h1>
      </div>
    </div>
    <hr className="w-full" />
      <div className=" flex-col justify-center px-10 py-5 gap-4 ">
        <div className="flex gap-4 ">
          <div className=" flex flex-col gap-7 py-4">
            <div>Current Email: </div>
            <div>New Email: </div>
          </div>
          <div className=" flex flex-col py-1">
            <FormInput
              name="email"
              type="email"
              label=""
              placeholder="Type your current email here"
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
              placeholder="Type your new email here"
              value=""
              error=""
              isError={true}
              handleBlur={() => {}}
              handleChange={() => {}}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Button className="bg-blue-700">Save Email</Button>
        </div>
      </div>
    </section>
  );
};

export default ChangeEmail;
