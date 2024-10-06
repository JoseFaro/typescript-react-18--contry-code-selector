import { Control } from 'react-hook-form';

interface InputProps {
  control: Control;
  error?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
}

export default InputProps;
