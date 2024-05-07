'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logoutAction } from '@/redux/slices/userSlice';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NavItems from './NavItems';
import { Separator } from './ui/separator';

const Navbar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.user);

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
  };

  return (
    <nav className="bg-[#212120]">
      <div className="container py-6 px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="">
            <h1 className="text-white text-4xl">LOGO</h1>
          </Link>

          <div className="hidden md:block w-full max-w-lg">
            <NavItems />
          </div>

          <div className="flex gap-3">
            {Boolean(id) ? (
              <>
                <Button
                  onClick={() => router.push('/profile')}
                  variant="ghost"
                  className="bg-[#EC6D47]"
                >
                  Profile
                </Button>
                <Button
                  onClick={logout}
                  variant="ghost"
                  className="bg-[#EC6D47]"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => router.push('/register')}
                  className="bg-[#EC6D47]"
                >
                  Register
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => router.push('/login')}
                  className="bg-[#EC6D47]"
                >
                  Login
                </Button>
              </>
            )}
          </div>
          <nav className="md:hidden">
            <Sheet>
              <SheetTrigger className="align-middle">
                <Menu color="white" />
              </SheetTrigger>
              <SheetContent className="flex flex-col gap-6 bg-black md:hidden">
                <h1 className="text-2xl">Logo</h1>
                <Separator className="border border-gray-50" />
                <NavItems />
              </SheetContent>
            </Sheet>
          </nav>
          {/* <div className="flex flex-row justify-center items-center gap-6 text-white ">
            {Boolean(id) ? (
              <>
              <Button
                  variant="link"
                  className="text-white hover:text-[#EC6D47]"
                  onClick={() => router.push('/profile')}
                >
                  Profile
                </Button>
                <Button
                  onClick={logout}
                  variant="ghost"
                  className="bg-[#EC6D47]"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => router.push('/register')}
                  className="bg-[#EC6D47]"
                >
                  Register
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => router.push('/login')}
                  className="bg-[#EC6D47]"
                >
                  Login
                </Button>
              </>
            )}
          </div> */}
          {/* <div className="flex flex-row justify-evenly gap-4 ">
            <Button variant="link" className=" text-white hover:text-[#EC6D47]">
              All Event
            </Button>
            <Button variant="link" className=" text-white hover:text-[#EC6D47]">
              Popular Event
            </Button>
            <Button variant="link" className=" text-white hover:text-[#EC6D47]">
              Upcoming Event
            </Button>
          </div> */}

          {/* <div className="flex flex-row justify-evenly items-center">
                <Button>Profile</Button>
                <Button>Log Out</Button>
              </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
