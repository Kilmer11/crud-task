import { Button } from '../../components/button';
import { ImageInput } from '../../components/imageInput';
import { FormTemplate } from '../../template/formTemplate';

export function UploadImage() {
  return (
    <FormTemplate>
      <h2>Send your image</h2>

      <ImageInput title='Choose a file' aria-label='Choose a file' />

      <Button title='Send' aria-label='Send'>
        Send
      </Button>
    </FormTemplate>
  );
}
