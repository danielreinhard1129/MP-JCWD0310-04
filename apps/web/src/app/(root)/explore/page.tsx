import { Button } from '@/components/ui/button';
import {
  BookIcon,
  CalendarIcon,
  DollarSign,
  FilterIcon,
  GroupIcon,
  LocateIcon,
  RefreshCwIcon,
  TimerIcon,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';
import Image from 'next/image';

const Explore = () => {
  return (
    <section className="px-10 py-10">
      <div className="flex pb-5">
        <h1 className="font-bold text-4xl w-1/5">Explore</h1>
        <div className="w-4/5 px-10">
          <form className="max-w-md mx-auto">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/5">
          <div className="flex flex-col gap-4">
            <Button variant="secondary" className="flex justify-between">
              <span className="mr-10"> Filter</span>
              <FilterIcon />
            </Button>
            <Button variant="secondary" className="flex justify-between">
              <span className="mr-10"> Location</span>
              <LocateIcon />
            </Button>
            <Button variant="secondary" className="flex justify-between">
              <span className="mr-10"> Category</span>
              <BookIcon />
            </Button>
            <Button variant="secondary" className="flex justify-between">
              <span className="mr-10"> Date</span>
              <TimerIcon />
            </Button>
            <Button variant="secondary" className="flex justify-between">
              <span className="mr-10"> Price</span>
              <DollarSign />
            </Button>
          </div>
        </div>
        <div className="w-4/5 ">
          <div className="flex justify-between px-20">
            <Button variant="secondary" className="flex justify-between">
              <span className="mr-10"> Reset</span>
              <RefreshCwIcon />
            </Button>
            <Button variant="secondary" className="flex justify-between">
              <span className="mr-10"> Order By</span>
              <GroupIcon />
            </Button>
          </div>
          <div className="grid grid-cols-3 px-10 py-10 gap-4">
            <Card className="shadow-xl md:mb-4 mb-6">
              <div className="relative h-[200px] rounded-t-xl overflow-hidden">
                <Image
                  src="/assets/images/carousel-1.svg"
                  alt="foto1"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <CardHeader>
                <CardTitle className="md:text-xl">Metal Rock</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col md:text-xs gap-2">
                <p className="flex gap-4">
                  <CalendarIcon size={15} />
                  10 - 11 Aug 2024
                </p>
                <p className="flex gap-4">
                  <LocateIcon size={15} />
                  Lapangan Panahan Kenari, Yogyakarta
                </p>
              </CardContent>
              <CardFooter className="flex justify-between md:text-sm">
                <div>Rp. 10.000</div>
                <Button className="bg-blue-700">Buy</Button>
              </CardFooter>
            </Card>
            <Card className="shadow-xl md:mb-4 mb-6">
              <div className="relative h-[200px] rounded-t-xl overflow-hidden">
                <Image
                  src="/assets/images/carousel-1.svg"
                  alt="foto1"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <CardHeader>
                <CardTitle className="md:text-xl">Metal Rock</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col md:text-xs gap-2">
                <p className="flex gap-4">
                  <CalendarIcon size={15} />
                  10 - 11 Aug 2024
                </p>
                <p className="flex gap-4">
                  <LocateIcon size={15} />
                  Lapangan Panahan Kenari, Yogyakarta
                </p>
              </CardContent>
              <CardFooter className="flex justify-between md:text-sm">
                <div>Rp. 10.000</div>
                <Button className="bg-blue-700">Buy</Button>
              </CardFooter>
            </Card>
            <Card className="shadow-xl md:mb-4 mb-6">
              <div className="relative h-[200px] rounded-t-xl overflow-hidden">
                <Image
                  src="/assets/images/carousel-1.svg"
                  alt="foto1"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <CardHeader>
                <CardTitle className="md:text-xl">Metal Rock</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col md:text-xs gap-2">
                <p className="flex gap-4">
                  <CalendarIcon size={15} />
                  10 - 11 Aug 2024
                </p>
                <p className="flex gap-4">
                  <LocateIcon size={15} />
                  Lapangan Panahan Kenari, Yogyakarta
                </p>
              </CardContent>
              <CardFooter className="flex justify-between md:text-sm">
                <div>Rp. 10.000</div>
                <Button className="bg-blue-700">Buy</Button>
              </CardFooter>
            </Card>
            <Card className="shadow-xl md:mb-4 mb-6">
              <div className="relative h-[200px] rounded-t-xl overflow-hidden">
                <Image
                  src="/assets/images/carousel-1.svg"
                  alt="foto1"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <CardHeader>
                <CardTitle className="md:text-xl">Metal Rock</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col md:text-xs gap-2">
                <p className="flex gap-4">
                  <CalendarIcon size={15} />
                  10 - 11 Aug 2024
                </p>
                <p className="flex gap-4">
                  <LocateIcon size={15} />
                  Lapangan Panahan Kenari, Yogyakarta
                </p>
              </CardContent>
              <CardFooter className="flex justify-between md:text-sm">
                <div>Rp. 10.000</div>
                <Button className="bg-blue-700">Buy</Button>
              </CardFooter>
            </Card>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;