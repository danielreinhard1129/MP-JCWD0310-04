import React from 'react'
import { Input } from './ui/input'

const EmailNews = () => {
  return (
    <section className=' container pb-2 mb-1'>
        <div className=" py-4 rounded-3xl h-full w-auto mx-10 my-5 mb-5 px-16 border text-[#E7E7E5]">
        <h1 className=" text-3xl py-5">
          Want to get latest news about events?
        </h1>
        <Input
          type="email"
          placeholder="Enter your email..."
          className="border-[#3B3938] bg-[#212120] border-t-0 border-l-0 border-r-0 border-b-2 rounded-none"
        />
      </div>
    </section>
  )
}

export default EmailNews