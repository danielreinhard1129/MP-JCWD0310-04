import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const Footer = () => {
  return (
    <footer>
      {/* input email */}
      <div className=" mx-6 my-6">
        <h1>Want to get latest news about events?</h1>
        <Input type="email" placeholder="Enter your email..." />
        <Button type="submit" className="">
          send
        </Button>
      </div>
      <div className="grid grid-cols-3 justify-evenly">
        <div>
          Eventure
          <p>About us</p>
          <p>Venues</p>
          <p>Your Points</p>
          <p>News</p>
          <p>Contacts</p>
        </div>
        <div>
          Information
          <p>Faq</p>
          <p>Refund & Exchange</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          Support Service
          <div className=" justify-center md:justify-start">
            <p>Social Medias</p>
            <div className='flex  gap-5 '>
              <Twitter />
              <Facebook />
              <Instagram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
