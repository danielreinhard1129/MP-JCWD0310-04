import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, LocateIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import EventCard from '@/components/EventCard';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <>
    {/* herosection */}
     
      <HeroSection/>
      {/* eventCard upcoming event */}
      <section className="container mx-auto py-6 md:px-36 px-8">
        <h1 className="font-bold md:text-2xl text-xl md:py-6">
          Upcoming Event
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 py-4 md:gap-4">
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
      </section>
      {/* promotion */}
      <section className="bg-blue-700 w-full text-white md:pt-7 md:pb-10 py-6 pb-8">
        <div className=" px-8 container mx-auto md:px-36">
          <div className="md:pb-4 mb-2 text-center">
            <h1 className="font-bold md:text-2xl text-xl">PROMOTION !!!</h1>
            <p className="font-light">
              Kumpulan event-event laris manis di sini
            </p>
          </div>
          <div className="flex justify-center">
            <Carousel className="md:w-full w-[300px] max-w-7xl">
              <CarouselContent className="-ml-2 md:-ml-4 w-[300px]">
                <CarouselItem className="pl-2 md:pl-4 ">
                  <Card>
                    <div className="relative h-[200px] rounded-t-xl overflow-hidden">
                      <Image
                        src="/assets/images/carousel-1.svg"
                        alt="foto1"
                        objectFit="cover"
                        layout="fill"
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
                    <CardFooter className="flex gap-2">
                      <Badge>Metal</Badge>
                      <Badge variant="secondary">Music</Badge>
                    </CardFooter>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4">
                  <Card>
                    <div className="relative h-[200px] rounded-t-xl overflow-hidden">
                      <Image
                        src="/assets/images/carousel-1.svg"
                        alt="foto1"
                        objectFit="cover"
                        layout="fill"
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
                    <CardFooter className="flex gap-2">
                      <Badge>Metal</Badge>
                      <Badge variant="secondary">Music</Badge>
                    </CardFooter>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4">
                  <Card>
                    <div className="relative h-[200px] rounded-t-xl overflow-hidden">
                      <Image
                        src="/assets/images/carousel-1.svg"
                        alt="foto1"
                        objectFit="cover"
                        layout="fill"
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
                    <CardFooter className="flex gap-2">
                      <Badge>Metal</Badge>
                      <Badge variant="secondary">Music</Badge>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Popular event */}
      {/* <section className="container mx-auto py-6 md:px-36 px-8">
        <h1 className="font-bold md:text-2xl text-xl md:py-6">
          Event Terdekat
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 py-4 md:gap-4">
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
      </section> */}
      <EventCard/>

    </>
  );
}
