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
import { useAuthContext } from '../../auth/hooks/useAuthContext';
import { AuthActionTypes } from '../../auth/context/authActions';
import { fetchUser } from '../services/fetchUser';

export type ImageFormData = {
  image: FileList;
};

export function useUploadImage() {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(uploadImageSchema),
  });

  async function onSubmit(data: ImageFormData) {
    const image = data.image[0];
    showMessage.dismiss();

    try {
      const formData = new FormData();
      formData.append('profile', image);

      await userUploadImage(formData);
      const userData = await fetchUser();

      if (userData) {
        dispatch({
          type: AuthActionTypes.UPLOAD_IMAGE,
          payload: { profileUrl: userData.profileUrl },
        });
      }
      showMessage.success('Image registered successfully');
      navigate('/');
    } catch (error) {
      const err = error as FetchServiceError;
      showMessage.error(`${err.message}`);
    }
  }

  return { register, handleSubmit, onSubmit, errors, isSubmitting };
}
