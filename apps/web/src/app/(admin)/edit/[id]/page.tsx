'use client';

import { useAppSelector } from '@/redux/hooks';
import { Formik } from 'formik';
import UpdateEventForm from './components/UpdateEventForm';
import { validationSchema } from './components/validationSchema';
import useUpdateEvent from '@/hooks/api/event/useUpdateEvent';
import useGetEvent from '@/hooks/api/event/useGetEvent';
import Unauthorized from '@/components/Unauthorized';
import { getChangedValues } from '@/utils/getChangedValues';

const UpdateEvent = ({ params }: { params: { id: string } }) => {
  const { event, isLoading: isLoadingGetEvent } = useGetEvent(
    Number(params.id),
  );
  const { updateEvent, isLoading } = useUpdateEvent(Number(params.id));
  const { id } = useAppSelector((state) => state.user);

  const initialValues = {
    title: event?.title || '',
    description: event?.description || '',
    location: event?.location || '',
    address: event?.address || '',
    thumbnail: [],
    category: event?.category || '',
    availableSeats: event?.availableSeats || 0,
    booked: event?.booked || 0,
    price: event?.price || 0,
    startDate: event?.startDate || new Date(),
    endDate: event?.endDate || new Date(),
    // voucherAmount: 0,
    // voucherCode: '',
    // voucherExpDate: new Date(),
    // voucherLimit: 0,
  };

  if (isLoading) {
    return (
      <div className=" container text-center pt-24  text-4xl font-extrabold">
        Loading
      </div>
    );
  }

  if (id !== event?.organizerId) {
    return <Unauthorized />;
  }

  return (
    <main className="ml-10 py-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);

          const payload = getChangedValues(values, initialValues);

          if (!payload.thumbnail?.length) {
            delete payload.thumbnail;
          }
          updateEvent(payload);
        }}
        enableReinitialize
      >
        <UpdateEventForm isLoading={isLoading} />
      </Formik>
    </main>
  );
};

export default UpdateEvent;
