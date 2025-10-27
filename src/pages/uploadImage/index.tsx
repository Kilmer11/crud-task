import { Button } from '../../components/button';
import { ImageInput } from '../../components/imageInput';
import { Loading } from '../../components/loading';
import { useAuthContext } from '../../features/auth/hooks/useAuthContext';
import { useUploadImage } from '../../features/user/hooks/useUploadImage';
import { FormTemplate } from '../../template/formTemplate';

export function UploadImage() {
  const { state } = useAuthContext();
  const { register, handleSubmit, onSubmit, errors, isSubmitting } =
    useUploadImage();

  if (state.isLoading) return <Loading />;

  return (
    <FormTemplate onSubmit={handleSubmit(onSubmit)}>
      <h2>Send your image</h2>

      <ImageInput
        {...register('image')}
        id='image'
        title='Choose a file'
        aria-label='Choose a file'
      />
      {errors.image && <span>{errors.image.message}</span>}

      <Button disabled={isSubmitting} title='Send' aria-label='Send'>
        Send
      </Button>
    </FormTemplate>
  );
}
