'use client';

import Unauthorized from '@/components/Unauthorized';
import useGetEvent from '@/hooks/api/event/useGetEvent';
import useUpdateEvent from '@/hooks/api/event/useUpdateEvent';
import { useAppSelector } from '@/redux/hooks';
import { getChangedValues } from '@/utils/getChangedValues';
import { addDays } from 'date-fns';
import { Formik } from 'formik';
import UpdateEventForm from './components/UpdateEventForm';
import { validationSchema } from './components/validationSchema';
import AuthGuard from '@/hoc/AuthGuardAdmin';

const UpdateEvent = ({ params }: { params: { id: string } }) => {
  const { event, isLoading: isLoadingGetEvent } = useGetEvent(
    Number(params.id),
  );

  const { isLoading, updateEvent } = useUpdateEvent(Number(params.id));
  const { id } = useAppSelector((state) => state.user);

  const initialValues = {
    title: event?.title || '',
    thumbnail_url: [],
    description: event?.description || '',
    limit: event?.limit || 0,
    start_date: event?.start_date || new Date(),
    end_date: event?.end_date || addDays(new Date(), 1),
    time: event?.time || '',
    address: event?.address || '',
    location: event?.location || '',
    price: event?.price || 0,
    category: event?.category || '',
  };

  if (isLoading) {
    return (
      <div className=" container text-center pt-24  text-4xl font-extrabold">
        Loading
      </div>
    );
  }

  if (id !== event?.userId) {
    return <Unauthorized />;
  }

  return (
    <main className="ml-10 py-10">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);

          const payload = getChangedValues(values, initialValues);

          if (!payload.thumbnail_url?.length) {
            delete payload.thumbnail_url;
          }
          updateEvent(payload);
        }}
        enableReinitialize
        validationSchema={validationSchema}
      >
        <UpdateEventForm isLoading={isLoading} />
      </Formik>
    </main>
  );
};

export default AuthGuard(UpdateEvent);
