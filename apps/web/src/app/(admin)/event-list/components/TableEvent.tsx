'use client';
import { ImageUp } from 'lucide-react';
import { FileStack } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from '@/components/ui/table';
import useGetEvents from '@/hooks/api/event/useGetEvents';
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

const TableEvent = () => {
  const { data: events } = useGetEvents({});

  return (
    <section className="container h-screen w-full ">
      <div className="text-4xl font-bold p-5 mt-10">
        <h1>Event List</h1>
      </div>
      <div>
        <Table className="table-auto">
          <TableHeader>
            <TableRow>
              <TableHead>Event Name</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Start & End Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Available Seats</TableHead>
              <TableHead>Booked</TableHead>
              <TableHead>Free Event</TableHead>
              <TableHead>Price</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event, index) => {
              return (
                <TableRow key={index}>
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
                  <TableCell
                    className={event.isFree ? 'text-green-500' : 'text-red-500'}
                  >
                    {event.isFree ? 'true' : 'false'}
                  </TableCell>
                  <TableCell>{event.price}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">...</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Action</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <div className="cursor-pointer flex text-yellow-500 hover:text-yellow-600">
                            <EditIcon className="ml-3 mr-4 h-5 w-5" />
                            <span className="text-sm">Edit</span>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <div className="cursor-pointer flex text-red-500 mt-2 hover:text-red-600">
                            <DeleteIcon className="ml-3 mr-4 h-5 w-5 mb-2" />
                            <span className="text-sm">Delete</span>
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default TableEvent;
