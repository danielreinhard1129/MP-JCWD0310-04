'use client';

import Dropzone from '@/components/Dropzone';
import FormInput from '@/components/FormInput';
import FormTextArea from '@/components/FormTextArea';
import PreviewImages from '@/components/PreviewImages';
import { Button } from '@/components/ui/button';
import AuthGuard from '@/hoc/AuthGuard';
import useCreateEvent from '@/hooks/api/event/useCreateEvent';
import { useAppSelector } from '@/redux/hooks';
import { IFormCreateEvent } from '@/types/event.type';
import { useFormik } from 'formik';

const Write = () => {
  const { createEvent } = useCreateEvent();
  const { id } = useAppSelector((state) => state.user);

  const {
    handleSubmit,
    values,
    errors,
    handleBlur,
    handleChange,
    touched,
    setFieldValue,
  } = useFormik<IFormCreateEvent>({
    initialValues: {
      title: '',
      description: '',
      location: '',
      availableSeats: 0,
      booked: 0,
      image: [],
      startDate: new Date(),
      endDate: new Date(),
      price: 0,
      time: new Date(),
      isFree: false,
      category: '',
      organizerId: '',
    },
    onSubmit: (values) => {
      createEvent({ ...values, organizerId: id });
    },
  });

  return (
    <main className="container mx-auto px-4">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto flex max-w-5xl flex-col gap-4">
          <FormInput
            name="title"
            label="title"
            error={errors.title}
            isError={!!touched.title && !!errors.title}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Title"
            type="text"
            value={values.title}
          />

          <FormTextArea
            name="description"
            error={errors.description}
            isError={!!touched.description && !!errors.description}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Description"
            value={values.description}
          />
          <FormInput
            name="location"
            label="location"
            error={errors.location}
            isError={!!touched.location && !!errors.location}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Location"
            type="text"
            value={values.location}
          />

          <FormInput
            name="availableSeats"
            label="availableSeats"
            error={errors.availableSeats}
            isError={!!touched.availableSeats && !!errors.availableSeats}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Available Seats"
            type="text"
            value={values.availableSeats}
          />
          <FormInput
            name="booked"
            label="booked"
            error={errors.booked}
            isError={!!touched.booked && !!errors.booked}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Booked"
            type="text"
            value={values.booked}
          />

          <PreviewImages
            fileImages={values.image}
            onRemoveImage={(idx: number) =>
              setFieldValue('image', values.image?.toSpliced(idx, 1))
            }
          />
          <Dropzone
            isError={Boolean(errors.image)}
            label="Image"
            onDrop={(files) =>
              setFieldValue('image', [
                ...values.image,
                ...files.map((file) => file),
              ])
            }
          />

          <FormInput
            name="startDate"
            label="startDate"
            error={errors.startDate}
            isError={!!touched.startDate && !!errors.startDate}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Start Date"
            type="text"
            value={values.startDate}
          />
          <FormInput
            name="endDate"
            label="endDate"
            error={errors.endDate}
            isError={!!touched.endDate && !!errors.endDate}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="End Date"
            type="text"
            value={values.endDate}
          />
          <FormInput
            name="price"
            label="price"
            error={errors.price}
            isError={!!touched.price && !!errors.price}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Price"
            type="text"
            value={values.price}
          />
          <FormInput
            name="time"
            label="time"
            error={errors.time}
            isError={!!touched.time && !!errors.time}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Time"
            type="text"
            value={values.time}
          />
          <FormInput
            name="isFree"
            label="isFree"
            error={errors.isFree}
            isError={!!touched.isFree && !!errors.isFree}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="is Free"
            type="text"
            value={values.isFree}
          />

          <FormInput
            name="category"
            label="category"
            error={errors.category}
            isError={!!touched.category && !!errors.category}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Category"
            type="text"
            value={values.category}
          />

          <FormInput
            name="organizerId"
            label="organizerId"
            error={errors.organizerId}
            isError={!!touched.organizerId && !!errors.organizerId}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="organizer Id"
            type="text"
            value={values.organizerId}
          />

          <div className="mb-4 flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default AuthGuard(Write);
