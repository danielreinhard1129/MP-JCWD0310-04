import * as Yup from 'yup';

export const validationSchemaRegister = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  referral: Yup.string(),
});
