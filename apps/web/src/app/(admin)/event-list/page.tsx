'use client';
import { BadgePlus, ImageUp } from 'lucide-react';
import { FileStack } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from '@/components/ui/table';
// import useGetEvents from '@/hooks/api/event/useGetEvents';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';
import { appConfig } from '@/utils/config';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DeleteIcon, EditIcon } from 'lucide-react';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import useGetEventsByOrganizer from '@/hooks/api/event/useGetEventsByOrganizer';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import Pagination from '@/components/Pagination';

const EventList = () => {
  const { id } = useAppSelector((state) => state.user);
  const [page, setPage] = useState<number>(1);
  const { data: events, meta } = useGetEventsByOrganizer({
    id: id,
    page,
    take: 8,
  });

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  const formatRupiah = (number: any) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  };

  const router = useRouter();

  console.log('akjdshfjasdf', events);
  let number = 1;
  return (
    <section className="container h-screen w-full ">
      <div className="text-4xl font-bold p-5 mt-10">
        <h1>Event List</h1>
      </div>
      <div>
        <Table className="table-auto">
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Event Name</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Start & End Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Available Seats</TableHead>
              <TableHead>Booked</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>
                {/* <Button
                  variant="ghost"
                  className="flex gap-2 rounded-none p-0 text-[#767676] hover:bg-inherit"
                  onClick={() => {
                    router.push('/create');
                  }}
                >
                  <p className="text-[16px] font-medium">Create Event</p>
                  <BadgePlus className="h-6 w-6" />
                </Button> */}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{number++}</TableCell>
                  <TableCell className="font-medium">{event.title}</TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger>
                        <Button variant="secondary">
                          <ImageUp />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80 h-80">
                        <Image
                          src={appConfig.baseURL + `/assets${event.thumbnail}`}
                          alt="Thumbnail"
                          style={{ objectFit: 'contain' }}
                          fill
                        />
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>{event.category}</TableCell>
                  <TableCell>
                    {format(event.startDate, 'hh MMM yyyy')}-{' '}
                    {format(event.endDate, 'hh MMM yyyy')}
                  </TableCell>
                  <TableCell>
                    {format(new Date(event.startDate), 'HH:mm')} -{' '}
                    {format(new Date(event.endDate), 'HH:mm')}{' '}
                  </TableCell>
                  <TableCell>{event.availableSeats}</TableCell>
                  <TableCell>{event.booked}</TableCell>
                  <TableCell>
                    {event.price === 0 ? 'Free' : formatRupiah(event.price)}
                  </TableCell>
                  <TableCell>
                    <Button variant="outline">
                      <div
                        className="cursor-pointer flex text-yellow-500 hover:text-yellow-600"
                        onClick={() => router.push(`/edit/${event.id}`)}
                      >
                        <EditIcon className="ml-3 mr-4 h-5 w-5" />
                        <span className="text-sm">Edit</span>
                      </div>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div className="mx-auto w-fit">
          <Pagination
            total={meta?.total || 0}
            take={meta?.take || 0}
            onChangePage={handleChangePaginate}
          />
        </div>
      </div>
    </section>
  );
};

export default EventList;
