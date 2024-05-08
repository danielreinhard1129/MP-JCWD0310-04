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
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isExplorePage = pathname === '/explore';

  return (
    <nav className="mx-auto px-10 md:px-52 py-6 md:py-4 flex justify-between gap-6 items-center bg-blue-700 w-full text-white">
      <div className="font-bold">Logo</div>
      {!isExplorePage && (
        <div className="relative flex md:mr-auto md:w-[400px]" id="search">
          <span
            className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
            id="button-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          <input
            type="search"
            className="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out placeholder:text-gray-600 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-white dark:autofill:shadow-autofill dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            id="exampleFormControlInput2"
            aria-describedby="button-addon2"
          />
        </div>
      )}
      <div className="font-bold hidden md:flex md:justify-between md:gap-10 md:items-center">
        <Button variant="outline" className="text-blue-700 font-bold">
          Create Event
        </Button>
        <h1>Find Event</h1>
        <h1>History</h1>
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
            <DropdownMenuItem>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
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
                <Link href="">
                  <Button
                    variant="ghost"
                    className="w-full flex justify-between"
                  >
                    <span>Log out</span>
                    <LogOut />
                  </Button>
                </Link>
              </li>
            </ul>
            <Separator className="border border-gray-50" />
            {/* <h1 className="font-bold">Logo</h1> */}
            <ul className="flex-between flex w-full flex-col items-start gap-2">
              <li className="w-full">
                <Link href="">
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
                <Link href="">
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
    </nav>
  );
};

export default Header;
