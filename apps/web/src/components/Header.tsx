'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  HistoryIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
  LogOut,
  Settings,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { usePathname, useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logoutAction } from '@/redux/slices/userSlice';

const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.user);

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
  };
  const pathname = usePathname();
  // const isExplorePage = pathname === '/explore';

  return (
    <nav className="mx-auto px-10 md:px-52 py-6 md:py-4 flex justify-between gap-6 items-center bg-blue-700 w-full text-white">
      <div className="font-bold cursor-pointer" onClick={logout}>
        Logo
      </div>
      {Boolean(id) ? (
        <>
          <div className="font-bold hidden md:flex md:justify-between md:gap-10 md:items-center">
            <h1
              className="cursor-pointer"
              onClick={() => router.push('/explore')}
            >
              Find Event
            </h1>
            <h1
              className="cursor-pointer"
              onClick={() => router.push('/history')}
            >
              History
            </h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push('/profile')}>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <MenuIcon />
              </SheetTrigger>
              <SheetContent className="flex flex-col gap-6">
                <Avatar className="mx-auto w-24 h-24">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <ul className="flex-between flex w-full flex-col items-start gap-2">
                  <li className="w-full">
                    <Link href="">
                      <Button
                        variant="ghost"
                        className="w-full flex justify-between"
                      >
                        <span>Profile</span>
                        <UserIcon />
                      </Button>
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link href="">
                      <Button
                        variant="ghost"
                        className="w-full flex justify-between"
                      >
                        <span>Settings</span>
                        <Settings />
                      </Button>
                    </Link>
                  </li>
                  <li className="w-full">
                    <Button
                      variant="ghost"
                      className="w-full flex justify-between"
                      onClick={logout}
                    >
                      <span>Log out</span>
                      <LogOut />
                    </Button>
                  </li>
                </ul>
                <Separator className="border border-gray-50" />
                {/* <h1 className="font-bold">Logo</h1> */}
                <ul className="flex-between flex w-full flex-col items-start gap-2">
                  <li className="w-full">
                    <Link href="/explore">
                      <Button
                        variant="ghost"
                        className="w-full flex justify-between"
                      >
                        <span>Find Event</span>
                        <SearchIcon />
                      </Button>
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link href="/history">
                      <Button
                        variant="ghost"
                        className="w-full flex justify-between"
                      >
                        <span>History</span>
                        <HistoryIcon />
                      </Button>
                    </Link>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </>
      ) : (
        <div className="flex gap-10 items-center">
          <h1
            className="font-bold cursor-pointer"
            onClick={() => router.push('/explore')}
          >
            Find Event
          </h1>
          <Button
            variant="outline"
            className="text-blue-700 font-bold cursor-pointer"
            onClick={() => router.push('/register')}
          >
            Register
          </Button>
          <Button
            variant="outline"
            className="text-blue-700 font-bold cursor-pointer"
            onClick={() => router.push('/login')}
          >
            Login
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Header;
