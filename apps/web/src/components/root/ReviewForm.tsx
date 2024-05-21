'use client';

import FormInput from '@/components/FormInput';
import FormTextArea from '@/components/root/FormTextArea';
import { Button } from '@/components/ui/button';
import useCreateReviews from '@/hooks/api/reviews/useCreateReview';
import { useAppSelector } from '@/redux/hooks';
import { IFormCreateReview } from '@/types/review.type';
import { useFormik } from 'formik';
import { usePathname } from 'next/navigation';

const ReviewForm = () => {
  const pathname = usePathname();
  const parts = pathname.split('/');
  const result = parts[1];
  // console.log(result);
  const { id } = useAppSelector((state) => state.user);

  const { createReview } = useCreateReviews();

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik<IFormCreateReview>({
    initialValues: {
      rating: 0,
      review: '',
      // createdAt: '',
    },
    onSubmit: (values) => {
      console.log(values);
      console.log(Number(result));
      console.log(Number(id));

      createReview({ ...values, eventId: Number(result), userId: Number(id) });
    },
  });
  //   console.log(pathname.slice(1));

  return (
    <div className="mx-auto max-w-md space-y-6 px-4 py-12">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">What do You Think?</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Share your thoughts and experience about this event with us.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div> */}
        </div>
        <div className="space-y-2">
          <FormInput
            name="rating"
            type="text"
            label="Rating"
            placeholder="Rating"
            value={values.rating}
            error={errors.rating}
            isError={!!touched.rating && !!errors.rating}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <FormTextArea
            name="review"
            label="Review"
            placeholder="Share your thoughts...."
            value={values.review}
            error={errors.review}
            isError={!!touched.review && !!errors.review}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <Button className="w-full" type="submit">
          Submit here
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
