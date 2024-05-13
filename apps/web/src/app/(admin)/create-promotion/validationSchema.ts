import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().required('Category is required'),
  thumbnail: Yup.array().min(1),
  location: Yup.string().required('Location is required'),
  availableSeats: Yup.number().min(10).required('availableSeats is required'),
  booked: Yup.number().min(1).required('booked is required'),
  time: Yup.string().required('time is required'),
  price: Yup.number().min(0).required('price is required'),
  isFree: Yup.boolean().required('isFree is required'),
  startDate: Yup.date().required('start date is required'),
  endDate: Yup.date().required('end date is required'),
  voucher: Yup.string().required('Voucher is required'),
});
