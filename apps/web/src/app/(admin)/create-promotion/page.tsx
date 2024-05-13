'use client';

import Dropzone from '@/components/Dropzone';
import FormInput from '@/components/FormInput';
import FormTextArea from '@/components/FormTextArea';
import PreviewImages from '@/components/PreviewImages';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthGuard from '@/hoc/AuthGuard';
import useCreatePromotion from '@/hooks/api/event/useCreatePromotion';
import { useAppSelector } from '@/redux/hooks';
import { IFormCreateEvent, IFormCreatePromotion } from '@/types/event.type';
import { useFormik } from 'formik';
import { useState } from 'react';
import { validationSchema } from './validationSchema';

const Write = () => {
  const [isFree, setIsFree] = useState(false);
  const { createPromotion } = useCreatePromotion();
  const { id } = useAppSelector((state) => state.user);

  const handleCheckboxChange = (e) => {
    setIsFree(e.target.checked);
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik<IFormCreatePromotion>({
    initialValues: {
      title: '',
      description: '',
      location: '',
      thumbnail: [],
      category: '',
      availableSeats: 0,
      booked: 0,
      price: 0,
      time: '',
      isFree: false,
      startDate: new Date(),
      endDate: new Date(),
      voucher: '',
    },
    validationSchema,
    onSubmit: (values) => {
      createPromotion({ ...values, organizerId: id });
      console.log(values);
    },
  });

  return (
    <main className="container mx-auto px-4">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto flex max-w-5xl flex-col gap-4">
          <FormInput
            name="title"
            type="text"
            label="title"
            placeholder="Title"
            value={values.title}
            error={errors.title}
            isError={!!touched.title && !!errors.title}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <FormTextArea
            name="description"
            label="Desription"
            placeholder="Description"
            value={values.description}
            error={errors.description}
            isError={!!touched.description && !!errors.description}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormInput
            name="location"
            label="location"
            type="text"
            placeholder="Location"
            value={values.location}
            error={errors.location}
            isError={!!touched.location && !!errors.location}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />

          <FormInput
            name="availableSeats"
            label="availableSeats"
            placeholder="Available Seats"
            type="number"
            value={values.availableSeats}
            error={errors.availableSeats}
            isError={!!touched.availableSeats && !!errors.availableSeats}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />

          <FormInput
            name="booked"
            label="booked"
            type="number"
            placeholder="Booked"
            value={values.booked}
            error={errors.booked}
            isError={!!touched.booked && !!errors.booked}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />

          <PreviewImages
            fileImages={values.thumbnail}
            onRemoveImage={(idx: number) =>
              setFieldValue('thumbnail', values.thumbnail.toSpliced(idx, 1))
            }
          />
          <Dropzone
            isError={Boolean(errors.thumbnail)}
            label="thumbnail"
            onDrop={(files) =>
              setFieldValue('thumbnail', [
                ...values.thumbnail,
                ...files.map((file) => file),
              ])
            }
          />

          <FormInput
            name="startDate"
            label="startDate"
            type="datetime-local"
            placeholder="Start Date"
            value={values.startDate}
            error={errors.startDate as string}
            isError={!!touched.startDate && !!errors.startDate}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />

          <FormInput
            name="endDate"
            label="endDate"
            type="datetime-local"
            placeholder="End Date"
            value={values.endDate}
            error={errors.endDate as string}
            isError={!!touched.endDate && !!errors.endDate}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
          <FormInput
            name="price"
            label="price"
            type="number"
            placeholder="Price"
            value={values.price}
            error={errors.price}
            isError={!!touched.price && !!errors.price}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
          <FormInput
            name="time"
            label="time"
            placeholder="Time"
            type="time"
            value={values.time}
            error={errors.time}
            isError={!!touched.time && !!errors.time}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />

          <div className="flex flex-col space-y-1.5">
            <Label>Is Free</Label>
            <Input
              type="checkbox"
              name="isFree"
              checked={isFree}
              onChange={handleCheckboxChange}
            />
          </div>

          <FormInput
            name="category"
            label="category"
            placeholder="Category"
            type="text"
            value={values.category}
            error={errors.category}
            isError={!!touched.category && !!errors.category}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
          <FormInput
            name="voucher"
            label="voucher"
            placeholder="Voucher Code"
            type="text"
            value={values.voucher}
            error={errors.voucher}
            isError={!!touched.voucher && !!errors.voucher}
            handleBlur={handleBlur}
            handleChange={handleChange}
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
