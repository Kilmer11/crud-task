import styles from './styles.module.css';

import { useRef, useState } from 'react';

type ImageInputProps = {
  onClick?: () => void;
};

export function ImageInput() {
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
  }

  return (
    <div
      onClick={() => imageRef.current?.focus()}
      className={styles.imgContainer}
    >
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
        id='image'
        accept='image/*'
        onChange={handleChange}
        hidden
      />
    </div>
  );
}
