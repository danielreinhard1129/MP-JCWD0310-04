import * as Yup from 'yup';

export const validationSchemaRegister = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  referralCode: Yup.string(),
});

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const validationSchemaResetPassword = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Your password is too short.'),
  confirmPassword: Yup.string()
    .required('Please retype your required')
    .oneOf([Yup.ref('password')], 'Your password do not match.'),
});

export const validationSchemaForgotPassword = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});
