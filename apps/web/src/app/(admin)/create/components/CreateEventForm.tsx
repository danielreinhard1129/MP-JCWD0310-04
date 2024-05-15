'use client';

import Dropzone from '@/components/Dropzone';
import FormInput from '@/components/FormInput';
import FormInputCurrency from '@/components/FormInputCurrency';
import FormTextArea from '@/components/FormTextArea';
import PreviewImages from '@/components/PreviewImages';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useGetLocation from '@/hooks/api/event/useGetLocation';
import { IFormCreateEvent } from '@/types/event.type';
import { FieldArray, useFormikContext } from 'formik';
import { CirclePlus, DeleteIcon, Loader2 } from 'lucide-react';
import { FC, useEffect, useState } from 'react';

interface EventCreateFormProps {
  isLoading: boolean;
}

const CreateEventForm: FC<EventCreateFormProps> = ({ isLoading }) => {
  const [isFree, setIsFree] = useState(false);
  const { locations } = useGetLocation();
  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    handleBlur,
    values,
    errors,
    touched,
  } = useFormikContext<IFormCreateEvent>();

  useEffect(() => {
    // Saat nilai checkbox berubah, perbarui nilai isFree di formik
    setFieldValue('isFree', isFree);
  }, [isFree, setFieldValue]);

  const handleCheckboxChange = (e: any) => {
    setIsFree(e.target.checked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto md:max-w-6xl pr-2rounded-lg mt-5">
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
                  type="text"
                  label=""
                  placeholder="Title"
                  value={values.title}
                  error={errors.title}
                  isError={!!touched.title && !!errors.title}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
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
                <option value="Horror">Horror</option>
                <option value="Theather">Theather</option>
                <option value="Music">Music</option>
              </select>
            </div>

            <PreviewImages
              fileImages={values.thumbnail}
              onRemoveImage={(idx: number) =>
                setFieldValue('thumbnail', values.thumbnail.toSpliced(idx, 1))
              }
            />

            <Dropzone
              isError={Boolean(errors.thumbnail)}
              label="Thumbnail"
              onDrop={(files) =>
                setFieldValue('thumbnail', [
                  ...values.thumbnail,
                  ...files.map((file) => file),
                ])
              }
            />

            {/* Location */}
            <div className="flex items-center mt-4">
              <Label className="w-28 text-left mr-4">Location</Label>
              <select
                id="locations"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-1"
                name="locationId"
                onChange={handleChange}
              >
                <option selected>Choose a Location</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.city}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center mt-4">
              <Label className="w-28 text-left mr-4">Venue</Label>
              <div className="flex-1">
                <FormInput
                  name="venue"
                  label=""
                  error={errors.venue}
                  isError={!!touched.venue && !!errors.venue}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  placeholder="venue"
                  type="text"
                  value={values.venue}
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

            <div className="flex md:gap-5 gap-3 justify-start mt-6">
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
            <h2 className="text-2xl font-mono mt-5">
              <hr className="mt-3" />
              Available Seat
              <hr className="mb-3" />
            </h2>
            <div className="flex items-center gap-5 mt-4">
              <Label className="w-28 text-left mr-4">Available Seats</Label>
              <div className="flex-1">
                <FormInput
                  name="availableSeats"
                  label=""
                  error={errors.availableSeats}
                  isError={!!touched.availableSeats && !!errors.availableSeats}
                  handleBlur={handleBlur}
                  // handleChange={handleChange}
                  handleChange={(e: any) => {
                    // Dapatkan nilai dari input
                    const newValue = parseInt(e.target.value);
                    // Perbarui nilai availableSeats di dalam form values
                    setFieldValue('availableSeats', newValue);
                    // Panggil handleChange dari Formik untuk menangani perubahan nilai input lainnya
                    handleChange(e);
                  }}
                  placeholder="availableSeats"
                  type="number"
                  value={values.availableSeats}
                />
              </div>

              {/* <FormInputCurrency
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
                disabled={isFree}
              /> */}
            </div>
            <div
              className={`transition-opacity duration-500 ${
                isFree ? 'opacity-0 invisible hidden' : 'opacity-100 visible'
              }`}
            >
              <FieldArray name="ticketTypes">
                {({ push, remove }) => (
                  <div>
                    <div className="flex justify-between">
                      <h2 className="text-2xl font-mono mt-5">Ticket Types</h2>
                      <div className=" mt-4">
                        <Button
                          type="button"
                          className="bg-green-500 hover:bg-green-600"
                          onClick={() => {
                            // Hitung total limit dari semua ticketTypes yang sudah ada
                            const totalLimit = values.ticketTypes.reduce(
                              (acc, curr) => acc + curr.limit,
                              0,
                            );
                            // Hitung sisa availableSeats
                            const remainingSeats =
                              values.availableSeats - totalLimit;
                            // Pastikan sisa availableSeats tidak negatif
                            if (remainingSeats > 0) {
                              // Jika masih ada sisa, tambahkan ticket baru dengan limit sesuai sisa availableSeats
                              push({
                                name: '',
                                price: 0,
                                limit: remainingSeats,
                              });
                            }
                          }}
                        >
                          <CirclePlus /> Ticket Type
                        </Button>
                      </div>
                    </div>
                    {values.ticketTypes.map((ticketType, index) => (
                      <div
                        key={index}
                        className="flex mt-4 gap-4 justify-center items-center"
                      >
                        <div>
                          <Label>Type Ticket {index + 1}</Label>
                          <Input
                            type="text"
                            name={`ticketTypes[${index}].name`}
                            value={values.ticketTypes[index].name}
                            placeholder="Type"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={isFree}
                          />
                        </div>
                        <div>
                          <FormInputCurrency
                            name={`ticketTypes[${index}].price`}
                            label={`Price Ticket ${index + 1}`}
                            type="number"
                            placeholder={`ticketTypes[${index}].price`}
                            value={values.ticketTypes[index].price}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            setFieldValue={setFieldValue}
                            disabled={isFree}
                          />
                        </div>
                        <div>
                          <Label>Limit Ticket {index + 1}</Label>
                          <Input
                            type="number"
                            name={`ticketTypes[${index}].limit`}
                            value={values.ticketTypes[index].limit}
                            placeholder="Limit"
                            // onChange={handleChange}
                            onChange={(e: any) => {
                              // Dapatkan nilai input
                              const newValue = parseInt(e.target.value);
                              // Dapatkan nilai availableSeats dari form values
                              const availableSeats = values.availableSeats;
                              // Validasi agar nilai baru tidak melebihi availableSeats
                              if (newValue > availableSeats) {
                                // Jika melebihi, atur nilai input kembali ke availableSeats
                                e.target.value = availableSeats;
                              }
                              // Panggil handleChange untuk menangani perubahan nilai input lainnya
                              handleChange(e);
                            }}
                            onBlur={handleBlur}
                            disabled={isFree}
                          />
                        </div>
                        <Button
                          type="button"
                          onClick={() => remove(index)}
                          className="mt-6 bg-red-500 hover:bg-red-600"
                        >
                          <DeleteIcon />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </FieldArray>

              <h2 className="text-2xl font-mono mt-5">
                <hr className="mt-3" />
                Voucher
                <hr className="mb-3" />
              </h2>

              <div className="flex items-center mt-4">
                <Label className="w-28 text-left mr-4">Title</Label>
                <div className="flex-1">
                  <FormInput
                    name="voucherName"
                    label=""
                    error={errors.voucherName}
                    isError={!!touched.voucherName && !!errors.voucherName}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    placeholder="Voucher Name"
                    type="text"
                    value={values.voucherName}
                  />
                </div>
              </div>

              <div className="flex items-center mt-4">
                <Label className="w-28 text-left mr-4">Limit</Label>
                <div className="flex-1">
                  <FormInput
                    name="voucherLimit"
                    label=""
                    error={errors.voucherLimit}
                    isError={!!touched.voucherLimit && !!errors.voucherLimit}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    placeholder="Limit"
                    type="number"
                    value={values.voucherLimit}
                  />
                </div>
              </div>

              <div className="flex items-center mt-4">
                <Label className="w-28 text-left mr-4">Price</Label>
                <div className="flex-1">
                  <FormInputCurrency
                    name="voucherPrice"
                    label=""
                    type="number"
                    placeholder="Price"
                    value={values.voucherPrice}
                    // error={errors.voucherPrice}
                    // isError={!!touched.voucherPrice && !!errors.voucherPrice}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                    disabled={isFree}
                  />
                </div>
              </div>
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

export default CreateEventForm;
