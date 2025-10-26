import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  uploadImageSchema,
  type FormData,
} from '../validations/uploadImage-schema';
import { userUploadImage } from '../services/userUploadImage';
import type { FetchServiceError } from '../../../types/fetchError';
import { showMessage } from '../../../adapters/showMessage';
import { useNavigate } from 'react-router-dom';

export function useUploadImage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(uploadImageSchema),
  });

  async function onSubmit(data: FormData) {
    showMessage.dismiss();

    try {
      const formData = new FormData();
      formData.append('profile', data.image[0]);

      await userUploadImage(formData);
      showMessage.success('Image registered successfully');
      navigate('/');
    } catch (error) {
      const err = error as FetchServiceError;
      showMessage.error(`${err.message}`);
    }
  }

  return { register, handleSubmit, onSubmit, errors, isSubmitting };
}
