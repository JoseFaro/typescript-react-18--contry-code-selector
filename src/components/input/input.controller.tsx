import InputProps from './input.type';

const useInputController = ({
  error = '',
  label = '',
  name = '',
  placeholder = '',
  onBlur = () => {},
  onChange = () => {},
  onClick = () => {},
  onFocus = () => {},
  onKeyDown = () => {},
  value = '',
}: InputProps) => {
  return {
    error,
    label,
    name,
    placeholder,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    shouldRenderLabel: Boolean(label),
    value,
  };
};

export default useInputController;
