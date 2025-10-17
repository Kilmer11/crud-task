import * as yup from 'yup';

export const schema = yup.object({
  email: yup.string().required().email('Type a valid email'),
  password: yup.string().required().min(8),
});

export type FormData = yup.InferType<typeof schema>;
