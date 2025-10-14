import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('Name is required').min(8),
  email: yup.string().required('Email is required').email('Type a valid email'),
  password: yup.string().required('Password is required').min(8),
});

export type FormData = yup.InferType<typeof schema>;
