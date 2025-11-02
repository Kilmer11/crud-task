import styles from './styles.module.css';

import { Button } from '../../components/button';
import { FormTemplate } from '../../template/formTemplate';
import { useRef, useState } from 'react';

export function ConfirmCode() {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [values, setValues] = useState<string[]>(['', '', '', '', '', '']);

  function handleChangeInput(index: number, value: string) {
    if (!/^\d*$/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  return (
    <FormTemplate>
      <h2 className={styles.h2}>Confirm your email</h2>

      <div className={styles.inputDiv}>
        {values.map((value, index) => {
          return (
            <input
              key={index}
              ref={el => {
                if (el) inputsRef.current[index] = el;
              }}
              type='text'
              maxLength={1}
              value={value}
              onChange={e => handleChangeInput(index, e.target.value)}
              onKeyDown={e => handleKeyDown(e, index)}
            />
          );
        })}
      </div>

      <Button>Send</Button>
    </FormTemplate>
  );
}
