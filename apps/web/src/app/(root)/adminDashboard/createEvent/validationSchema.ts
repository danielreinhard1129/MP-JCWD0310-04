import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().required('Category is required'),
  location: Yup.string().required('Location is required'),
  availableSeats: Yup.number().min(10).required('availableSeats is required'),
  booked: Yup.number().min(1).required('booked is required'),
  image: Yup.string().min(1),
  startDate: Yup.date().required('start date is required'),
  endDate: Yup.date().required('start date is required'),
  price: Yup.number().min(0).required('price is required'),
  time: Yup.date().required('time is required'),
  isFree: Yup.boolean().required('isFree is required'),
  organizerId: Yup.number().min(1).required('organizerId is required')
});
