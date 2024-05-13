'use client';

import AuthGuard from '@/hoc/AuthGuard';
import useCreateEvent from '@/hooks/api/event/useCreateEvent';
import { useAppSelector } from '@/redux/hooks';
import { Formik } from 'formik';
import CreateEventForm from './components/CreateEventForm';
// import useGetCategory from '@/hooks/api/event/userGetCategory';

const Write = () => {
  const { createEvent, isLoading } = useCreateEvent();
  const { id } = useAppSelector((state) => state.user);

  const initialValues = {
    title: '',
    description: '',
    location: '',
    venue: '',
    thumbnail: [],
    categoryId: 0,
    availableSeats: 0,
    booked: 0,
    price: 0,
    time: '',
    isFree: false,
    startDate: new Date(),
    endDate: new Date(),
    ticketTypes: [
      { name: '', price: 0 },
      { name: '', price: 0 },
      { name: '', price: 0 },
    ],
  };

  return (
    <main className="container mx-auto px-4">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          createEvent({ ...values, organizerId: id });
        }}
      >
        <CreateEventForm isLoading={isLoading} />
      </Formik>
    </main>
  );
};

export default AuthGuard(Write);
