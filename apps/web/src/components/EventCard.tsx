import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowUpRight, CalendarIcon, LocateIcon } from 'lucide-react';
import Image from 'next/image';

const EventCard = () => {
  return (
    <section className=" container h-fit text-black mx-auto py-6 md:px-36 px-8">
      <h1 className="font-bold md:text-2xl text-xl md:py-6">
        Rekomendasi Event
      </h1>

      <div className="grid grid-cols-4 gap-4">
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
      </div>

      <div className=" grid md:grid-cols-4 md:gap-5 py-4">
        <Card className="flex w-full md:col-span-3 shadow-xl">
          <div className="relative w-full h-full md:rounded-xl rounded-t-xl overflow-hidden">
            <Image
              src="/assets/images/carousel-1.svg"
              alt="foto1"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className=" w-full items-center gap-2">
            <div className="flex flex-col gap-1">
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
            </div>
          </div>
        </Card>
        <div className="grid grid-flow-row gap-2">
          <Card className="flex w-full col-span-3 shadow-xl">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/assets/images/carousel-1.svg"
                alt="foto1"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className=" w-full items-center gap-2">
              <div className="flex flex-col gap-1">
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
              </div>
            </div>
          </Card>

          {/* button */}
          <Button className=" bg-blue-700 h-[200px] text-xl">
            View All
            <ArrowUpRight size={48} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
