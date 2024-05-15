'use client';

import AuthGuardAdmin from '@/hoc/AuthGuardAdmin';
import useCreateEvent from '@/hooks/api/event/useCreateEvent';
import { useAppSelector } from '@/redux/hooks';
import { Formik } from 'formik';
import CreateEventForm from './components/CreateEventForm';
import { validationSchema } from './validationSchema';

const Write = () => {
  const { createEvent, isLoading } = useCreateEvent();
  const { id } = useAppSelector((state) => state.user);

  const initialValues = {
    title: '',
    description: '',
    locationId: 0,
    venue: '',
    thumbnail: [],
    category: '',
    availableSeats: 0,
    booked: 0,
    // price: 0,
    isFree: false,
    startDate: new Date(),
    endDate: new Date(),
    ticketTypes: [{ name: '', price: 0, limit: 0 }],
    voucherName: '',
    voucherLimit: 0,
    voucherPrice: 0,
  };

  return (
    <main className="ml-10 py-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const validTicketTypes = values.ticketTypes.filter(
            (ticketType) =>
              ticketType.name.trim() !== '' ||
              ticketType.price > 0 ||
              ticketType.limit > 0,
          );
          createEvent({
            ...values,
            ticketTypes: validTicketTypes,
            organizerId: id,
          });
        }}
      >
        <CreateEventForm isLoading={isLoading} />
      </Formik>
    </main>
  );
};

export default AuthGuardAdmin(Write);
