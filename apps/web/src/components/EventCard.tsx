import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowUpRight, Search } from 'lucide-react';
import Image from 'next/image';
import { Input } from './ui/input';

const EventCard = () => {
  return (
    <section className=" container h-fit text-black px-20">
      <div className=" text-5xl text-center py-7 mt-2">
        <h1>Upcoming Events This Month</h1>
      </div>
      <div className=" relative w-full ml-10">
        <Input
          type="text"
          placeholder="        Search for events"
          className=" rounded-md pl-8 w-1/3  mb-2 px-1 bg-white text-black"
        />
        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl text-black">
          <Search />
        </span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Card className="w-full shadow-xl">
          <CardContent>
            <div className="grid w-full items-center gap-2">
              <div className="flex flex-col space-y-2">
                <CardHeader className="relative h-[150px]">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1682600415610-e634ad0a485e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="band"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </CardHeader>
              </div>
              <div className="flex flex-col space-y-1">
                <CardDescription>Feb 23 (ISTORA Senayan)</CardDescription>
                <CardTitle>Pixies</CardTitle>
                <CardDescription>JAKARTA</CardDescription>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Buy now</Button>
          </CardFooter>
        </Card>
        <Card className="w-full shadow-xl">
          <CardContent>
            <div className="grid w-full items-center gap-2">
              <div className="flex flex-col space-y-2">
                <CardHeader className="relative h-[150px]">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1682600415610-e634ad0a485e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="band"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </CardHeader>
              </div>
              <div className="flex flex-col space-y-1">
                <CardDescription>Feb 23 (ISTORA Senayan)</CardDescription>
                <CardTitle>Pixies</CardTitle>
                <CardDescription>JAKARTA</CardDescription>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Buy now</Button>
          </CardFooter>
        </Card>
        <Card className="w-full shadow-xl">
          <CardContent>
            <div className="grid w-full items-center gap-2">
              <div className="flex flex-col space-y-2">
                <CardHeader className="relative h-[150px]">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1682600415610-e634ad0a485e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="band"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </CardHeader>
              </div>
              <div className="flex flex-col space-y-1">
                <CardDescription>Feb 23 (ISTORA Senayan)</CardDescription>
                <CardTitle>Pixies</CardTitle>
                <CardDescription>JAKARTA</CardDescription>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Buy now</Button>
          </CardFooter>
        </Card>
        <Card className="w-full shadow-xl">
          <CardContent>
            <div className="grid w-full items-center gap-2">
              <div className="flex flex-col space-y-2">
                <CardHeader className="relative h-[150px]">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1682600415610-e634ad0a485e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="band"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </CardHeader>
              </div>
              <div className="flex flex-col space-y-1">
                <CardDescription>Feb 23 (ISTORA Senayan)</CardDescription>
                <CardTitle>Pixies</CardTitle>
                <CardDescription>JAKARTA</CardDescription>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Buy now</Button>
          </CardFooter>
        </Card>
      </div>
      <div className=" grid grid-cols-4 gap-5 py-4">
        <Card className="flex w-full col-span-3 shadow-xl">
          <CardHeader className="w-full h-full">
            <div className="relative h-full">
              <Image
                src="https://plus.unsplash.com/premium_photo-1682600415610-e634ad0a485e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="band"
                layout="fill"
                // width={300}
                // height={300}
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className=" w-full items-center gap-2">
              <div className="flex flex-col gap-1">
                <CardDescription>Feb 23 (ISTORA Senayan)</CardDescription>
                <CardTitle>Pixies</CardTitle>
                <CardDescription>JAKARTA</CardDescription>
                <Button variant="outline">Buy now</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-flow-row gap-2">
          <Card className=" w-full shadow-xl">
            <CardContent>
              <div className="grid grid-cols-2 grid-flow-col w-full items-center gap-2">
                <CardHeader className="w-full h-full">
                  <div className="relative h-full">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1682600415610-e634ad0a485e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="band"
                      layout="fill"
                      // width={300}
                      // height={300}
                      objectFit="cover"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </CardHeader>
                <div className="flex flex-row space-y-2">
                  <div className="flex flex-col space-y-1">
                    <CardDescription>Feb 23 (ISTORA Senayan)</CardDescription>
                    <CardTitle>Pixies</CardTitle>
                    <CardDescription>JAKARTA</CardDescription>
                    <Button variant="outline">Buy now</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Button className=" bg-[#EC6D47] h-[100px] text-xl">
            View All
            <ArrowUpRight size={48} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
