interface InputProps {
  error?: string;
  label?: string;
  name?: string;
  onBlur?: () => void;
  onChange?: () => void;
  onClick?: () => void;
  onKeyDown?: () => void;
  onFocus?: () => void;
  placeholder?: string;
  value?: string | number;
}

export default InputProps;
