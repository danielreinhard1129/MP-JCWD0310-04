'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav>
      <div className= "fixed left-0 right-0 top-0  z-10 mx-auto w-full justify-between px-10 py-3 shadow-md bg-[#212120]">
        <div className=" justify-between content-center items-center grid grid-cols-3">
          <div className=" text-white">LOGO</div>
          <div className="flex flex-row justify-evenly gap-4 ">
            <Button variant="link" className=" text-white hover:text-[#EC6D47]">All Event</Button>
            <Button variant="link" className=" text-white hover:text-[#EC6D47]">Popular Event</Button>
            <Button variant="link" className=" text-white hover:text-[#EC6D47]" onClick={()=>router.push("")}>Upcoming Event</Button>
          </div>

          <div>
            {/* <div className="flex flex-row justify-evenly items-center">
                <Button>Profile</Button>
                <Button>Log Out</Button>
              </div> */}
            <div className="flex flex-row justify-center items-center gap-6 text-white ">
              <Button variant="ghost" onClick={()=>router.push("/register")} className="bg-[#EC6D47]">Register</Button>
              <Button variant="ghost" onClick={()=>router.push("/login")} className="bg-[#EC6D47]">Login</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
