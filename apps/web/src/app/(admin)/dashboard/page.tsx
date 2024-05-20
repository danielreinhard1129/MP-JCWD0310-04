'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useAppSelector } from '@/redux/hooks';
import {
  ArrowUpRight,
  CircleCheck,
  CircleX,
  PlusSquareIcon,
} from 'lucide-react';
import ChartByYear from './components/ChartByYears';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const { username } = useAppSelector((state) => state.user);
  const initials = username.substring(0, 2);
  const router = useRouter();
  return (
    <section className="container mx-auto md:max-w-6xl md:px-4 md:pr-2 rounded-lg">
      <div className="text-4xl font-bold py-5">
        <h1>Dashboard</h1>
      </div>

      <div className="grid gap-4">
        {/* Profile and Button Section */}
        <div className="grid  md:grid-cols-2 gap-4">
          <div className="bg-slate-200 border border-b-gray-200 rounded-md p-4 flex items-center justify-between space-x-4">
            <div>
              <h2 className="text-3xl font-semibold">Hello, {username}...</h2>
              <p className="text-lg italic font-medium">
                It &apos;s good to see you again
              </p>
            </div>
            <Avatar className="cursor-pointer w-20 h-20">
              <AvatarImage src="" />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex md:flex-col md:space-y-4 gap-4">
            <Button
              variant="secondary"
              className="flex items-center gap-4"
              onClick={() => router.push('/create')}
            >
              <PlusSquareIcon />
              <span className="text-xl">Create Event</span>
            </Button>
            {/* <Button variant="secondary" className="flex items-center gap-4">
              <PlusSquareIcon />
              <span className="text-xl ">Delete Event</span>
            </Button> */}
          </div>
        </div>

        {/* Statistics and Transactions Section */}
        <div className="grid md:grid-cols-2 gap-4 ">
          <div className="bg-white border rounded-md p-4">
            <h1 className="text-xl font-semibold mb-4">Statistics</h1>
            <ChartByYear />
            <Button
              className="bg-blue-700 mt-auto text-xl flex items-center justify-center gap-2"
              onClick={() => router.push('/statistic')}
            >
              View Details
              <ArrowUpRight size={24} />
            </Button>
          </div>
          <div className="bg-white border rounded-md p-4 flex md:flex-col">
            <h1 className="text-xl font-semibold mb-4">
              Transaction and Approval
            </h1>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>No.</TableHead>
                  <TableHead>Name User</TableHead>
                  <TableHead>Transaction Id</TableHead>
                  <TableHead>Event Id</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3].map((id) => (
                  <TableRow key={id}>
                    <TableCell>{id}</TableCell>
                    <TableCell className="font-medium">User Name</TableCell>
                    <TableCell>Transaction</TableCell>
                    <TableCell>Event name</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800 gap-1">
                        <CircleCheck />
                        Approve
                      </Badge>
                      <Badge className="bg-red-300 text-red-800 gap-1">
                        <CircleX />
                        Cancelled
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button
              className="bg-blue-700 mt-auto text-xl flex items-center justify-center gap-2"
              onClick={() => router.push('/approval')}
            >
              View All
              <ArrowUpRight size={24} />
            </Button>
          </div>
        </div>

        {/* Event List Section */}
        <div className="bg-white border rounded-md p-4">
          <h1 className="text-xl font-semibold mb-4">Event List</h1>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event Name</TableHead>
                <TableHead>Thumbnail</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Venue</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Start Time</TableHead>
                <TableHead>Available Seats</TableHead>
                <TableHead>Booked</TableHead>
                <TableHead>Ticket Types</TableHead>
                <TableHead>Free Event</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Java Jazz</TableCell>
                <TableCell>Festival</TableCell>
                <TableCell>11 August 2024</TableCell>
                <TableCell>14 August 2024</TableCell>
                <TableCell>Festival</TableCell>
                <TableCell>11 August 2024</TableCell>
                <TableCell>14 August 2024</TableCell>
                <TableCell>19:00</TableCell>
                <TableCell>100</TableCell>
                <TableCell>80</TableCell>
                <TableCell>VIP, Regular</TableCell>
                <TableCell>No</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button
            className="bg-blue-700 mt-4 text-xl flex items-center justify-center gap-2"
            onClick={() => router.push('/event-list')}
          >
            View All
            <ArrowUpRight size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
