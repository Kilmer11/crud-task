import * as yup from 'yup';

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const SUPPORTED_FORMATS = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/webp',
];

export const uploadImageSchema = yup.object().shape({
  image: yup.mixed().required('Image is required'),
  /* .test('fileSize', 'File size is too large (max: 2MB)', value => {
      if (!(value instanceof File)) return false;
      return value.size <= MAX_FILE_SIZE;
    }) */
  /* .test('fileType', 'Unsupported file format', value => {
      if (!(value instanceof File)) return false;
      return SUPPORTED_FORMATS.includes(value.type);
    }), */
});

export type FormData = yup.InferType<typeof uploadImageSchema>;
