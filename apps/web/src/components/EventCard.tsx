import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

const EventCard = () => {
  return (
    <section className="h-fit">
      <div className="grid grid-cols-4 gap-4">
        <Card className="w-full">
          <CardContent>
            <div className="grid w-full items-center gap-2">
              <div className="flex flex-col space-y-2">
                <div className="relative h-[150px]">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1682600415610-e634ad0a485e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="band"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </div>
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
        <Card className=" w-full">
          <CardContent>
            <div className="grid w-full items-center gap-2">
              <div className="flex flex-col space-y-2">
                <div className="relative h-[150px]">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1682600415610-e634ad0a485e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="band"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg shadow-md"
                  />
                </div>
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
        <Card className=" w-full">
          <CardContent>
            <div className="grid w-full items-center gap-2">
              <div className="flex flex-col space-y-2">
                <div className="relative h-[150px]">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1682600415610-e634ad0a485e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="band"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg shadow-md"
                  />
                </div>
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
        <Card className=" w-full">
          <CardContent>
            <div className="grid w-full items-center gap-2">
              <div className="flex flex-col space-y-2">
                <div className="relative h-[150px]">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1682600415610-e634ad0a485e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="band"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg shadow-md"
                  />
                </div>
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
        <Card className="flex w-full col-span-3">
          <CardHeader className="w-full h-[250px]">
            <div className="relative h-full">
              <Image
                src="https://plus.unsplash.com/premium_photo-1682600415610-e634ad0a485e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="band"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg shadow-md"
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
        <div className="grid grid-flow-row gap-4">
          <Card className=" w-full">
            <CardContent>
              <div className="grid grid-cols-2 grid-flow-col w-full items-center gap-2">
                <div className="flex flex-col space-y-2">
                  <div className="relative h-[150px]">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1682600415610-e634ad0a485e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="band"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg shadow-md"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1">
                  <CardDescription>Feb 23 (ISTORA Senayan)</CardDescription>
                  <CardTitle>Pixies</CardTitle>
                  <CardDescription>JAKARTA</CardDescription>
                  <Button variant="outline">Buy now</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Button className=" bg-[#EC6D47] h-full">View All</Button>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
