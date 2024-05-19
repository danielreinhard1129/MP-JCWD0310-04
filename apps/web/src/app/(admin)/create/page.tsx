'use client';

import useCreateEvent from '@/hooks/api/event/useCreateEvent';
import { useAppSelector } from '@/redux/hooks';
import { Formik } from 'formik';
import CreateEventForm from './components/CreateEventForm';
import { validationSchema } from './validationSchema';

const CreateEvent = () => {
  const { createEvent, isLoading } = useCreateEvent();
  const { id } = useAppSelector((state) => state.user);

  const initialValues = {
    title: '',
    description: '',
    location: '',
    address: '',
    thumbnail: [],
    category: '',
    availableSeats: 0,
    booked: 0,
    price: 0,
    startDate: new Date(),
    endDate: new Date(),
    voucherAmount: 0,
    voucherCode: '',
    voucherExpDate: new Date(),
    voucherLimit: 0,
  };

  return (
    <main className="ml-10 py-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          createEvent({
            ...values,
            organizerId: id,
          });
        }}
      >
        <CreateEventForm isLoading={isLoading} />
      </Formik>
    </main>
  );
};

export default CreateEvent;
