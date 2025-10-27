import * as yup from 'yup';

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const SUPPORTED_FORMATS = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/webp',
];

export const uploadImageSchema = yup.object().shape({
  image: yup
    .mixed()
    .required('Image is required')
    .test('fileSize', 'File size is too large (max: 2MB)', value => {
      const file =
        value instanceof File
          ? value
          : value instanceof FileList
            ? value?.[0]
            : null;
      if (!file) return false;
      return file.size <= MAX_FILE_SIZE;
    })
    .test('fileType', 'Unsupported file format', value => {
      const file =
        value instanceof File
          ? value
          : value instanceof FileList
            ? value?.[0]
            : null;
      if (!file) return false;
      return SUPPORTED_FORMATS.includes(file.type);
    }),
});

export type FormData = yup.InferType<typeof uploadImageSchema>;
