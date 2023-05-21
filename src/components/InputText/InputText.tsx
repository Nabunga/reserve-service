import { TextField } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';
import { useController } from 'react-hook-form';
import css from './InputText.module.scss';

interface InputTextProps {
  type: HTMLInputTypeAttribute;
  name: string;
  label: string;
  disabled?: boolean;
  validateRules?: any;
  required?: boolean;
  minLength?: number | { value: number, message: string };
  maxLength?: number | { value: number, message: string };
  className?: string;
}

const InputText = (props: InputTextProps): JSX.Element => {

  const {
    type,
    label,
    name,
    className,
    validateRules,
    minLength,
    maxLength,
    required = false,
    disabled = false
  } = props;

  const { field, fieldState: { error } } = useController({
    name,
    rules: {
      validate: validateRules,
      minLength,
      maxLength,
      required
    }
  })

  return (
    <>
      <TextField
        name={field.name}
        type={type}
        value={field.value}
        label={label}
        onChange={field.onChange}
        onBlur={field.onBlur}
        disabled={disabled}
        required={required}
        error={!!error}
        className={className}
      />
      <p className={css.errorText}>
        {error?.message || ''}
      </p>
    </>
  )
}

export default InputText;