import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  locationId: Yup.number().required('Location is required'),
  venue: Yup.string().required('Venue is required'),
  thumbnail: Yup.array().min(1, 'At least one thumbnail is required'),
  category: Yup.string().required('Category is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date().required('End date is required'),
});
