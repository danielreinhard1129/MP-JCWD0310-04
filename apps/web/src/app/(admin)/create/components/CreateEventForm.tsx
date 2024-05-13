'use client';

import Dropzone from '@/components/Dropzone';
import FormInput from '@/components/FormInput';
import FormTextArea from '@/components/FormTextArea';
import PreviewImages from '@/components/PreviewImages';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useGetCategory from '@/hooks/api/event/useGetCategory';
import { IFormCreateEvent } from '@/types/event.type';
import { useFormikContext } from 'formik';
import { Loader2 } from 'lucide-react';
import { FC, useState } from 'react';

interface EventCreateFormProps {
  isLoading: boolean;
}

const CreateEventForm: FC<EventCreateFormProps> = ({ isLoading }) => {
  const [isFree, setIsFree] = useState(false);
  const { categories } = useGetCategory();
  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    handleBlur,
    values,
    errors,
    touched,
  } = useFormikContext<IFormCreateEvent>();

  const handleCheckboxChange = (e: any) => {
    setIsFree(e.target.checked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto flex max-w-5xl flex-col gap-4">
        <FormInput
          name="title"
          type="text"
          label="Title"
          placeholder="Title"
          value={values.title}
          error={errors.title}
          isError={!!touched.title && !!errors.title}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />

        <FormTextArea
          name="description"
          label="Description"
          error={errors.description}
          isError={!!touched.description && !!errors.description}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Description"
          value={values.description}
        />

        <div>
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
        </div>

        <FormInput
          name="venue"
          label="venue"
          error={errors.venue}
          isError={!!touched.venue && !!errors.venue}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="venue"
          type="text"
          value={values.venue}
        />

        <div>
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

        <FormInput
          name="availableSeats"
          label="availableSeats"
          error={errors.availableSeats}
          isError={!!touched.availableSeats && !!errors.availableSeats}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="availableSeats"
          type="number"
          value={values.availableSeats}
        />

        <FormInput
          name="price"
          label="price"
          error={errors.price}
          isError={!!touched.price && !!errors.price}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="price"
          type="number"
          value={values.price}
        />

        <FormInput
          name="time"
          label="time"
          error={errors.time}
          isError={!!touched.time && !!errors.time}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="time"
          type="time"
          value={values.time}
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
          <Button className="mt-6 w-full" disabled={isLoading} type="submit">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? 'Loading' : 'Submit'}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CreateEventForm;
