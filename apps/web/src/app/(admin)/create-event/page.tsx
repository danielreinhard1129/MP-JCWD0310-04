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
import { validationSchema } from './validationSchema';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
// import useGetCategory from '@/hooks/api/event/userGetCategory';

const Write = () => {
  const [isFree, setIsFree] = useState(false);
  const { createEvent } = useCreateEvent();
  const { id } = useAppSelector((state) => state.user);

  const handleCheckboxChange = (e: any) => {
    setIsFree(e.target.checked);
  };

  // const { categories } = useGetCategory();

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik<IFormCreateEvent>({
    initialValues: {
      title: '',
      description: '',
      location: '',
      venue: '',
      thumbnail: [],
      // categoryId: 0,
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
    },
    validationSchema,
    onSubmit: (values) => {
      // console.log(...values);
      createEvent({ ...values, organizerId: id });
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
            type="date"
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
            type="date"
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

          {/* <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select Category
            </label>
            <select
              id="categories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="categoryId"
              onChange={handleChange}
            >
              <option selected>Choose a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div> */}

          {/* <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select Location
            </label>
            <select
              id="locations"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="location"
              onChange={handleChange}
            >
              <option>Choose a Location</option>
              <option value="Yogyakarta">Yogyakarta</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Semarang">Semarang</option>
              <option value="Bandung">Bandung</option>
              <option value="Surabaya">Surabaya</option>
            </select>
          </div> */}

          <FormInput
            name="venue"
            label="venue"
            placeholder="venue"
            type="text"
            value={values.venue}
            error={errors.venue}
            isError={!!touched.venue && !!errors.venue}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />

          <div>
            {values.ticketTypes.map((ticketType, index) => (
              <div key={index}>
                <label>Tipe Ticket {index + 1}</label>
                <input
                  type="text"
                  name={`ticketTypes[${index}].name`}
                  value={ticketType.name}
                  onChange={handleChange}
                />
                <label>Harga Ticket {index + 1}</label>
                <input
                  type="number"
                  name={`ticketTypes[${index}].price`}
                  value={ticketType.price}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
          <div className="mb-4 flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default AuthGuard(Write);
