import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  location: Yup.string().required('Location is required'),
  address: Yup.string().required('Address is required'),
  thumbnail: Yup.array().min(1, 'At least one thumbnail is required'),
  category: Yup.string().required('Category is required'),
  availableSeats: Yup.number().required('Category is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date().required('End date is required'),
});
