import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowUpRight, CalendarIcon, LocateIcon } from 'lucide-react';
import Image from 'next/image';
import { Badge } from './ui/badge';

const EventCard = () => {
  return (
    <section className=" container h-fit mx-auto py-6 md:px-36 px-8">
      <h1 className="font-bold md:text-2xl text-xl md:py-6">
        Rekomendasi Event
      </h1>

      {/* 1st column */}
      <div className="grid md:grid-cols-4 gap-4">
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
                category
              </Badge>
            </div>
            <CardTitle className="md:text-xl">Metal Rock</CardTitle>
            <h2 className="line-clamp-2 text-lg font-semibold"></h2>
            <p className="text-sm font-light italic flex gap-1">
              <CalendarIcon size={15} />
              10 - 11 Aug 2024
            </p>
            <p className="line-clamp-3 flex gap-1">
              <LocateIcon size={15} />
              Lapangan Panahan Kenari, Yogyakarta
            </p>
          </CardContent>
          <CardFooter className="flex justify-between md:text-sm">
            <div>Rp. 10.000</div>
            <Button className="bg-primary">Buy</Button>
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
                category
              </Badge>
            </div>
            <CardTitle className="md:text-xl">Metal Rock</CardTitle>
            <h2 className="line-clamp-2 text-lg font-semibold"></h2>
            <p className="text-sm font-light italic flex gap-1">
              <CalendarIcon size={15} />
              10 - 11 Aug 2024
            </p>
            <p className="line-clamp-3 flex gap-1">
              <LocateIcon size={15} />
              Lapangan Panahan Kenari, Yogyakarta
            </p>
          </CardContent>
          <CardFooter className="flex justify-between md:text-sm">
            <div>Rp. 10.000</div>
            <Button className="bg-primary">Buy</Button>
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
                category
              </Badge>
            </div>
            <CardTitle className="md:text-xl">Metal Rock</CardTitle>
            <h2 className="line-clamp-2 text-lg font-semibold"></h2>
            <p className="text-sm font-light italic flex gap-1">
              <CalendarIcon size={15} />
              10 - 11 Aug 2024
            </p>
            <p className="line-clamp-3 flex gap-1">
              <LocateIcon size={15} />
              Lapangan Panahan Kenari, Yogyakarta
            </p>
          </CardContent>
          <CardFooter className="flex justify-between md:text-sm">
            <div>Rp. 10.000</div>
            <Button className="bg-primary">Buy</Button>
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
                category
              </Badge>
            </div>
            <CardTitle className="md:text-xl">Metal Rock</CardTitle>
            <h2 className="line-clamp-2 text-lg font-semibold"></h2>
            <p className="text-sm font-light italic flex gap-1">
              <CalendarIcon size={15} />
              10 - 11 Aug 2024
            </p>
            <p className="line-clamp-3 flex gap-1">
              <LocateIcon size={15} />
              Lapangan Panahan Kenari, Yogyakarta
            </p>
          </CardContent>
          <CardFooter className="flex justify-between md:text-sm">
            <div>Rp. 10.000</div>
            <Button className="bg-primary">Buy</Button>
          </CardFooter>
        </Card>
      </div>

      {/* 2nd column */}
      <div className=" grid md:grid-cols-2 md:gap-5 py-4">
        <Card className="md:flex w-full md:mb-4 mb-6 shadow-xl">
          <div className="relative w-full md:h-full md:rounded-xl h-[200px] rounded-t-xl overflow-hidden">
            <CardHeader>
              <Image
                src="/assets/images/carousel-1.svg"
                alt="foto1"
                fill
                style={{ objectFit: 'cover' }}
              />
            </CardHeader>
          </div>

          <div className=" w-full items-center gap-2">
            <div className="md:flex flex-col gap-1">
              <CardContent className="flex flex-col md:text-xs gap-2">
                <div>
                  <Badge
                    variant="outline"
                    className="rounded-sm bg-green-100 w-16 h-5 text-sm"
                  >
                    category
                  </Badge>
                </div>
                <CardTitle className="md:text-xl">Metal Rock</CardTitle>
                <p className="text-sm font-light italic flex gap-1">
                  <CalendarIcon size={15} />
                  10 - 11 Aug 2024
                </p>
                <p className="line-clamp-3 flex gap-1">
                  <LocateIcon size={15} />
                  Lapangan Panahan Kenari, Yogyakarta
                </p>
              </CardContent>
              <CardFooter className="flex justify-between md:text-sm">
                <div>Rp. 10.000</div>
                <Button className="bg-primary">Buy</Button>
              </CardFooter>
            </div>
          </div>
        </Card>
        <div className="grid md:grid-flow-row gap-1">
          <Card className="shadow-xl">
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
                  category
                </Badge>
              </div>
              <CardTitle className="md:text-xl">Metal Rock</CardTitle>
              <h2 className="line-clamp-2 text-lg font-semibold"></h2>
              <p className="text-sm font-light italic flex gap-1">
                <CalendarIcon size={15} />
                10 - 11 Aug 2024
              </p>
              <p className="line-clamp-3 flex gap-1">
                <LocateIcon size={15} />
                Lapangan Panahan Kenari, Yogyakarta
              </p>
            </CardContent>
            <CardFooter className="flex justify-between md:text-sm">
              <div>Rp. 10.000</div>
              <Button className="bg-blue-700">Buy</Button>
            </CardFooter>
          </Card>

          {/* button */}
          <Button className=" bg-blue-700 md:h-full h-1/2 text-xl">
            View All
            <ArrowUpRight size={48} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
