import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer>
      {/* input email */}
      {/* <div className=" py-4 rounded-3xl h-auto w-auto mx-10 my-5 px-16 border bg-[#212120] text-[#E7E7E5] ">
        <h1 className=" text-3xl py-5">
          Want to get latest news about events?
        </h1>
        <Input
          type="email"
          placeholder="Enter your email..."
          className="border-[#3B3938] bg-[#212120] border-t-0 border-l-0 border-r-0 border-b-2 rounded-none"
        />
      </div> */}
      <div className="grid grid-cols-3 justify-evenly bg-primary text-[#E7E7E5] pt-16 pb-8 px-4">
        <div>
          <h2 className=" text-lg font-semibold">Eventure</h2>
          <div className="text-sm space-y-1">
            <p>About us</p>
            <p>Venues</p>
            <p>Your Points</p>
            <p>News</p>
            <p>Contacts</p>
          </div>
        </div>
        <div>
          <h2 className=" text-lg font-semibold">Information</h2>
          <div className="text-sm space-y-1">
            <p>Faq</p>
            <p>Refund & Exchange</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div>
          <h2 className=" text-lg font-semibold mb-4">Support Service</h2>
          <div className=" justify-center md:justify-start  space-y-1">
            <p>Social Medias</p>
            <div className="flex gap-5">
              <Twitter />
              <Facebook />
              <Instagram />
              <Linkedin />
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: '100%',
          borderTop: '1px solid #ccc',
          margin: 'auto',
        }}
      />
      <div className="bg-primary text-[#E7E7E5] lg:text-xs lg:py-4">
        <Link href="" className="hover:underline">
          &copy;{new Date().getFullYear()} EVENTURE.ALL RIGHTS RESERVED
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
