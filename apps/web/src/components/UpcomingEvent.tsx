'use client'
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { CalendarIcon, LocateIcon } from 'lucide-react';
import Image from 'next/image';

const UpcomingEvent = () => {
  return (
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
  )
}

export default UpcomingEvent