import styles from './styles.module.css';

import { useRef, useState } from 'react';

type ImageInputProps = {
  onFileChange?: (file: File | null) => void;
} & React.ComponentProps<'input'>;

export function ImageInput({
  onFileChange,
  onChange,
  ...rest
}: ImageInputProps) {
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    if (!file) {
      setPreview(prev => {
        if (prev) URL.revokeObjectURL(prev);
        return null;
      });
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(prev => {
      if (prev) URL.revokeObjectURL(prev);
      return url;
    });

    if (onChange) {
      onChange(e);
    }

    if (onFileChange) {
      onFileChange(file);
    }
  }

  function handleFocus() {
    imageRef.current?.click();
  }

  return (
    <div onClick={handleFocus} className={styles.imgContainer}>
      <label htmlFor='image' className={styles.placeholder}>
        {preview ? (
          <img src={preview} alt='preview' className={styles.img} />
        ) : (
          'Choose file'
        )}
      </label>

      <input
        ref={imageRef}
        type='file'
        accept='image/*'
        onChange={handleChange}
        hidden
        {...rest}
      />
    </div>
  );
}
