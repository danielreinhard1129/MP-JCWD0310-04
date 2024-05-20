'use client';

import Dropzone from '@/components/Dropzone';
import FormInput from '@/components/FormInput';
import FormInputCurrency from '@/components/FormInputCurrency';
import FormTextArea from '@/components/FormTextArea';
import PreviewImages from '@/components/PreviewImages';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { IFormEvent } from '@/types/event.type';
import { useFormikContext } from 'formik';
import { Loader2 } from 'lucide-react';
import { FC } from 'react';

interface EventCreateFormProps {
  isLoading: boolean;
}

const UpdateEventForm: FC<EventCreateFormProps> = ({ isLoading }) => {
  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    handleBlur,
    values,
    errors,
    touched,
  } = useFormikContext<IFormEvent>();

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto md:max-w-6xl pr-2 rounded-lg mt-5">
        <h1 className="text-4xl font-semibold md:mx-10 mt-5">Update Event</h1>
        <div className="grid md:grid-cols-2 gap-10 p-10">
          <div>
            {/* event details */}
            <h2 className="text-2xl font-mono mb-3">Event Details</h2>
            <hr className="mb-3" />
            <div className="flex items-center">
              <Label className="w-28 text-left mr-4">Title</Label>
              <div className="flex-1">
                <FormInput
                  name="title"
                  label=""
                  error={errors.title}
                  isError={!!touched.title && !!errors.title}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Title"
                  type="text"
                  value={values.title}
                />
              </div>
            </div>

            {/* category */}
            <div className="flex items-center mt-4 mb-8">
              {/* <Label className="w-28 text-left mr-4">Category</Label> */}
              {/* <select
                id="categories"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-1"
                name="category"
                onChange={handleChange}
              >
                <option>Choose a Category</option>
                <option value="NightLife">NightLife</option>
                <option value="Festival">Festival</option>
                <option value="Theater Musical">Theater Musical</option>
                <option value="Concert">Concert</option>
              </select> */}
              <FormInput
                name="category"
                label="Category"
                error={errors.category}
                isError={!!touched.category && !!errors.category}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Category"
                type="text"
                value={values.category}
              />
            </div>

            <PreviewImages
              fileImages={values.thumbnail_url}
              onRemoveImage={(idx: number) =>
                setFieldValue(
                  'thumbnail_url',
                  values.thumbnail_url?.toSpliced(idx, 1),
                )
              }
            />

            <Dropzone
              isError={Boolean(errors.thumbnail_url)}
              label="Thumbnail"
              onDrop={(files) =>
                setFieldValue('thumbnail_url', [
                  ...values.thumbnail_url,
                  ...files.map((file) => file),
                ])
              }
            />

            {/* Location */}
            <div className="flex items-center mt-4 mb-8">
              {/* <Label className="w-28 text-left mr-4">Location</Label> */}
              {/* <select
                id="locations"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-1"
                name="location"
                onChange={handleChange}
              >
                <option>Choose a Location</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Surabaya">Surabaya</option>
                <option value="Bandung">Bandung</option>
                <option value="Batam">Batam</option>
              </select> */}
              <FormInput
                name="location"
                label="Location"
                error={errors.location}
                isError={!!touched.location && !!errors.location}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Location"
                type="text"
                value={values.location}
              />
            </div>

            <div className="flex items-center mt-4">
              <Label className="w-28 text-left mr-4">Address</Label>
              <div className="flex-1">
                <FormInput
                  name="address"
                  label="Address (optional)"
                  error={errors.address}
                  isError={!!touched.address && !!errors.address}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Address"
                  type="text"
                  value={String(values.address)}
                />
              </div>
            </div>
            <h2 className="text-2xl font-mono mb-2 mt-5">
              <hr className="mt-3" />
              Additional Information <hr className="mb-3" />
            </h2>
            <FormTextArea
              name="description"
              label=""
              error={errors.description}
              isError={!!touched.description && !!errors.description}
              handleBlur={handleBlur}
              handleChange={handleChange}
              placeholder="describe what's special about your event and other importan details here..."
              value={values.description}
            />
          </div>
          <div>
            {/* Date and Time */}
            <h2 className="text-2xl font-mono mt-0 md:mb-3">
              <hr className="mt-3 md:hidden" />
              Date & Time
              <hr className="mb-3 md:mt-3" />
            </h2>

            <div className="flex md:gap-5 gap-3 justify-start mt-6">
              <FormInput
                name="start_date"
                label="Start Date"
                error={errors.start_date}
                isError={!!touched.start_date && !!errors.start_date}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Start Date"
                type="date"
                value={values.start_date}
              />

              <FormInput
                name="end_date"
                label="End Date"
                error={errors.end_date}
                isError={!!touched.end_date && !!errors.end_date}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="End Date"
                type="date"
                value={values.end_date || 0}
              />

              <FormInput
                name="time"
                label="Time"
                error={errors.time}
                isError={!!touched.time && !!errors.time}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Time"
                type="time"
                value={values.time}
              />
            </div>
            <h2 className="text-2xl font-mono mt-5">
              <hr className="mt-3" />
              Available Seat
              <hr className="mb-3" />
            </h2>
            <div className="flex items-center gap-5 mt-4">
              <FormInput
                name="limit"
                label="Total Ticket"
                error={errors.limit}
                isError={!!touched.limit && !!errors.limit}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Limit"
                type="number"
                value={values.limit}
              />

              <FormInputCurrency
                name="price"
                label="Price"
                type="number"
                placeholder="Price"
                value={values.price}
                handleBlur={handleBlur}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />
            </div>

            <div className="flex justify-end mt-4 ">
              <Button
                disabled={isLoading}
                type="submit"
                className=" text-white"
              >
                {isLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin " />
                )}
                {isLoading ? 'Loading' : 'Submit'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateEventForm;
