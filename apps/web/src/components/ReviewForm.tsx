'use client';
import { IFormCreateReview } from '@/types/review.type';
import FormTextArea from '@/components/FormTextArea';
import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';

import { useFormik } from 'formik';
import { usePathname } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import useCreateReviews from '@/hooks/api/review/useCreateReview';


const ReviewForm = () => {
  const pathname = usePathname();
  const parts = pathname.split('/');
  const result = parts[1]; 
  // console.log(result);
  const {id} = useAppSelector((state) => state.user)
    
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
      comment: '',
      rating: '',
      createdAt: '',
    },
    onSubmit: (values) => {
      console.log(values);
      
      createReview({ ...values,userId:id , eventId: result});
    },
  });
//   console.log(pathname.slice(1));
  

  return (
    <div className="mx-auto max-w-md space-y-6 px-4 py-12">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Leave a Review</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Share your thoughts and experience with us.
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
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        <div className="space-y-2">
          <FormTextArea
            name="comment"
            label ="comment"
            placeholder="Share your thoughts...."
            value={values.comment}
            error={errors.comment}
            isError={!!touched.comment && !!errors.comment}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        <Button className="w-full" type="submit">
          Submit Review
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;