import { useController } from 'react-hook-form';
import InputProps from './input.type';

const useInputController = ({ control, label = '', name = '', placeholder = '' }: InputProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return {
    error: error?.message,
    field,
    label,
    name,
    placeholder,
    shouldRenderError: Boolean(error?.message),
    shouldRenderLabel: Boolean(label),
    value: field?.value || '',
  };
};

export default useInputController;
