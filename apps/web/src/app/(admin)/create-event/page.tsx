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
import FormInputCurrency from '@/components/FormInputCurrency';

const CreateEvent = () => {
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
    <main className="container mx-auto px-10 h-full w-3/4 ml-60 py-4 pr-60 ">
      <form onSubmit={handleSubmit}>
        <div className=" mx-auto flex max-w-5xl flex-col gap-2">
          <h1 className="text-4xl font-semibold ">Create a New Event</h1>

          {/* event details */}
          <div className="py-6">
            <h2 className="text-2xl font-mono">Event Details</h2>
            <div className=" flex ">
              <div className="md:w-1/7 my-4 flex flex-col text-start mr-1 ">
                <p>Title </p>
                <p className="mt-4">Category </p>
              </div>
              <div className="md:w-3/4">
                <FormInput
                  name="title"
                  type="text"
                  label=""
                  placeholder="Title"
                  value={values.title}
                  error={errors.title}
                  isError={!!touched.title && !!errors.title}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <FormInput
                  name="category"
                  label=""
                  placeholder="Category"
                  type="text"
                  value={values.category}
                  error={errors.category}
                  isError={!!touched.category && !!errors.category}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* date and time */}
          <div className="py-6">
            <h2 className="text-2xl font-mono">Date & Time</h2>
            <div className="flex items-center gap-5 my-1 ">
              <Input
                type="checkbox"
                name="isFree"
                checked={isFree}
                onChange={handleCheckboxChange}
                className="w-3 h-3"
              />
              <Label className=" text-base">Is this event free?</Label>
            </div>
            <div className="flex py-5 gap-4 ">
              <div>
                <FormInput
                  name="startDate"
                  label="Start Date"
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
                  label="End Date"
                  type="datetime-local"
                  placeholder="End Date"
                  value={values.endDate}
                  error={errors.endDate as string}
                  isError={!!touched.endDate && !!errors.endDate}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </div>
              <FormInput
                name="time"
                label="Time"
                placeholder="Time"
                type="time"
                value={values.time}
                error={errors.time}
                isError={!!touched.time && !!errors.time}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </div>
          </div>

          {/* location */}
          <div className="pb-6">
            <div className="pr-60 flex ">
              <div className="md:w-1/7 my-4 flex flex-col text-start mr-1 ">
                <p>Location </p>
              </div>
              <div className="w-3/4">
                <FormInput
                  name="location"
                  label=""
                  type="text"
                  placeholder="Location"
                  value={values.location}
                  error={errors.location}
                  isError={!!touched.location && !!errors.location}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="py-6">
            <h2 className="text-2xl font-mono mb-2">Additional Information </h2>

            <FormTextArea
              name="description"
              label=""
              placeholder="describe what's special about your event and other importan details here..."
              value={values.description}
              error={errors.description}
              isError={!!touched.description && !!errors.description}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>
          <div>
            <div className="py-6">
              <h2 className="text-2xl font-mono">Available Seat and Price</h2>

              {/* seat and price */}
              <div className="flex justify-start gap-10 py-5">
                <FormInput
                  name="availableSeats"
                  label="available Seats"
                  placeholder=""
                  type="number"
                  value={values.availableSeats}
                  error={errors.availableSeats}
                  isError={!!touched.availableSeats && !!errors.availableSeats}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />

                <FormInputCurrency
                  name="price"
                  label="Price"
                  type="number"
                  placeholder="Price"
                  value={values.price}
                  error={errors.price}
                  isError={!!touched.price && !!errors.price}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              </div>
            </div>
          </div>

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

          <div className="mb-4 flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default AuthGuard(CreateEvent);
