
'use client'
import LocationFilter from '@/components/LocationFilter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
import Image from 'next/image';

const Explore = () => {
  return (
    <section className="md:px-10 md:py-10 py-5">
      <div className="md:flex md:justify-between md:px-5 px-10  w-full gap-2 py-2 md:py-1 md:w-auto">
        <h1 className=" font-bold text-5xl md:text-3xl md:w-1/4 flex justify-center md:text- md:justify-center md:items-end pb-2 gap-4 tracking-wider">
          Explore
        </h1>
        <div className="md:w-4/5  ">
          <form className=" mx-auto">
            <label className=" text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative md:ml-14">
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
                placeholder="Search events, categories..."
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

        <div className="flex gap-3 pt-2 md:pt-0">
          <Button
            variant="secondary"
            className="flex justify-between w-full md:w-auto md:my-auto "
          >
            <span className="mr-10 "> Reset</span>
            <RefreshCwIcon />
          </Button>
          <Button
            variant="secondary"
            className="flex md:justify-between w-full md:w-auto md: my-auto "
          >
            <span className="mr-10 "> Order By</span>
            <GroupIcon />
          </Button>
        </div>
      </div>

      {/* filter by */}
      <div className="md:flex ">
        <div className="md:w-1/5 flex justify-center md:py-5 ">
          <div className="flex md:flex-col md:gap-4 gap-2 px-5">
            <Button variant="secondary" className="flex justify-between ">
              <FilterIcon />
              <span className="ml-10 hidden md:block "> Filter</span>
            </Button>
            <LocationFilter/>
            <Button variant="secondary" className="flex justify-between">
              <BookIcon />
              <span className="ml-10 hidden md:block"> Category</span>
            </Button>
            <Button variant="secondary" className="flex justify-between">
              <span className="mr-10 hidden md:block"> Date</span>
              <TimerIcon />
            </Button>
            <Button variant="secondary" className="flex justify-between">
              <DollarSign />
              <span className="ml-10 hidden md:block"> Price</span>
            </Button>
          </div>
        </div>

        <div className="md:w-4/5 ">
          <div className="grid md:grid-cols-3 px-10 py-5  gap-4">
            <Card className="shadow-xl md:mb-4 mb-6">
              <CardHeader>
                <div className="relative h-[200px] rounded-t-xl overflow-hidden">
                  <Image
                    src="/assets/images/carousel-1.svg"
                    alt="foto1"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col md:text-xs gap-2">
                <div>
                  <Badge
                    variant="outline"
                    className="rounded-sm bg-green-100 w-16 h-5 text-sm"
                  >
                    Category
                  </Badge>
                </div>
                <CardTitle className="md:text-xl">Metal Rock</CardTitle>
                <p className="text-sm font-light italic flex gap-1">
                  <CalendarIcon size={20} />
                  10 - 11 Aug 2024
                </p>
                <p className="line-clamp-3 flex gap-1">
                  <LocateIcon size={20} />
                  Lapangan Panahan Kenari, Yogyakarta
                </p>
              </CardContent>
              <CardFooter className="flex justify-between md:text-sm">
                <div>Rp. 10.000</div>
                <Button className="bg-blue-700 w-1/4">Buy</Button>
              </CardFooter>
            </Card>

            <Card className="shadow-xl md:mb-4 mb-6">
              <CardHeader>
                <div className="relative h-[200px] rounded-t-xl overflow-hidden">
                  <Image
                    src="/assets/images/carousel-1.svg"
                    alt="foto1"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col md:text-xs gap-2">
                <div>
                  <Badge
                    variant="outline"
                    className="rounded-sm bg-green-100 w-16 h-5 text-sm"
                  >
                    Category
                  </Badge>
                </div>
                <CardTitle className="md:text-xl">Metal Rock</CardTitle>
                <p className="text-sm font-light italic flex gap-1">
                  <CalendarIcon size={20} />
                  10 - 11 Aug 2024
                </p>
                <p className="line-clamp-3 flex gap-1">
                  <LocateIcon size={20} />
                  Lapangan Panahan Kenari, Yogyakarta
                </p>
              </CardContent>
              <CardFooter className="flex justify-between md:text-sm">
                <div>Rp. 10.000</div>
                <Button className="bg-blue-700 w-1/4">Buy</Button>
              </CardFooter>
            </Card>
            <Card className="shadow-xl md:mb-4 mb-6">
              <CardHeader>
                <div className="relative h-[200px] rounded-t-xl overflow-hidden">
                  <Image
                    src="/assets/images/carousel-1.svg"
                    alt="foto1"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col md:text-xs gap-2">
                <div>
                  <Badge
                    variant="outline"
                    className="rounded-sm bg-green-100 w-16 h-5 text-sm"
                  >
                    Category
                  </Badge>
                </div>
                <CardTitle className="md:text-xl">Metal Rock</CardTitle>
                <p className="text-sm font-light italic flex gap-1">
                  <CalendarIcon size={20} />
                  10 - 11 Aug 2024
                </p>
                <p className="line-clamp-3 flex gap-1">
                  <LocateIcon size={20} />
                  Lapangan Panahan Kenari, Yogyakarta
                </p>
              </CardContent>
              <CardFooter className="flex justify-between md:text-sm">
                <div>Rp. 10.000</div>
                <Button className="bg-blue-700 w-1/4">Buy</Button>
              </CardFooter>
            </Card>
            <Card className="shadow-xl md:mb-4 mb-6">
              <CardHeader>
                <div className="relative h-[200px] rounded-t-xl overflow-hidden">
                  <Image
                    src="/assets/images/carousel-1.svg"
                    alt="foto1"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col md:text-xs gap-2">
                <div>
                  <Badge
                    variant="outline"
                    className="rounded-sm bg-green-100 w-16 h-5 text-sm"
                  >
                    Category
                  </Badge>
                </div>
                <CardTitle className="md:text-xl">Metal Rock</CardTitle>
                <p className="text-sm font-light italic flex gap-1">
                  <CalendarIcon size={20} />
                  10 - 11 Aug 2024
                </p>
                <p className="line-clamp-3 flex gap-1">
                  <LocateIcon size={20} />
                  Lapangan Panahan Kenari, Yogyakarta
                </p>
              </CardContent>
              <CardFooter className="flex justify-between md:text-sm">
                <div>Rp. 10.000</div>
                <Button className="bg-blue-700 w-1/4">Buy</Button>
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
