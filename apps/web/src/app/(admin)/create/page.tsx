'use client';

import Dropzone from '@/components/Dropzone';
import FormInput from '@/components/FormInput';
import FormInputCurrency from '@/components/FormInputCurrency';
import FormTextArea from '@/components/FormTextArea';
import PreviewImages from '@/components/PreviewImages';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import useCreateEvent from '@/hooks/api/event/useCreateEvent';
import { useAppSelector } from '@/redux/hooks';
import { IFormEvent } from '@/types/event.type';
import { addDays } from 'date-fns';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';

const CreateEvent = () => {
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
  } = useFormik<IFormEvent>({
    initialValues: {
      title: '',
      thumbnail_url: [],
      description: '',
      limit: 0,
      start_date: new Date(),
      end_date: addDays(new Date(), 1),
      time: '',
      address: '',
      location: '',
      price: 0,
      category: '',
      voucherAmount: 0,
      voucherCode: '',
      voucherExpDate: new Date(),
      voucherLimit: 0,
    },
    validationSchema,
    onSubmit: (values) => {
      createEvent({ ...values, userId: id });
    },
  });

  return (
    <main className="ml-10 py-10">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto md:max-w-6xl pr-2 rounded-lg mt-5">
          <h1 className="text-4xl font-semibold md:mx-10 mt-5">
            Create a New Event
          </h1>
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
                <Label className="w-28 text-left mr-4">Category</Label>
                <select
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
                </select>
              </div>

              <PreviewImages
                fileImages={values.thumbnail_url}
                onRemoveImage={(idx: number) =>
                  setFieldValue(
                    'thumbnail_url',
                    values.thumbnail_url.toSpliced(idx, 1),
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
                <Label className="w-28 text-left mr-4">Location</Label>
                <select
                  id="locations"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-1"
                  name="location"
                  onChange={handleChange}
                >
                  <option>Choose a Location</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="Surabaya">Surabaya</option>
                  <option value="Bandung">Bandung</option>
                  <option value="Yogyakarta">Yogyakarta</option>
                  <option value="Batam">Batam</option>
                </select>
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
              </div>

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

              {/* CREATE VOUCHER */}
              <div className="flex flex-col gap-5 mt-5">
                <FormInput
                  name="voucherCode"
                  label="Voucher Code"
                  error={errors.voucherCode}
                  isError={!!touched.voucherCode && !!errors.voucherCode}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Voucher Code"
                  type="text"
                  value={String(values.voucherCode)}
                />
                <FormInput
                  name="voucherAmount"
                  label="Voucher Amount"
                  error={errors.voucherAmount}
                  isError={!!touched.voucherAmount && !!errors.voucherAmount}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Voucher Amount"
                  type="number"
                  value={values.voucherAmount || 0}
                />
                <FormInput
                  name="voucherLimit"
                  label="Voucher Limit"
                  error={errors.voucherLimit}
                  isError={!!touched.voucherLimit && !!errors.voucherLimit}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Voucher Limit"
                  type="number"
                  value={values.voucherLimit || 0}
                />
                <FormInput
                  name="voucherExpDate"
                  label="Voucher Expired Date"
                  error={errors.voucherExpDate}
                  isError={!!touched.voucherExpDate && !!errors.voucherExpDate}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Voucher Expired Date"
                  type="date"
                  value={values.voucherExpDate || 0}
                />
              </div>

              <div className="flex justify-end mt-4 ">
                <div className="mb-4 flex justify-end">
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default CreateEvent;
