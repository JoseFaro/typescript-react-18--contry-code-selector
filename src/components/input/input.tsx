import useInputController from './input.controller';
import { StyledInput, StyledLabel } from './input.styled';
import InputProps from './input.type';

const Input: React.FC<InputProps> = (props) => {
  const { label, onChange, onBlur, onFocus, onClick, onKeyDown, shouldRenderLabel, value } =
    useInputController(props);

  return (
    <>
      {shouldRenderLabel ? <StyledLabel>{label}</StyledLabel> : null}

      <StyledInput
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onClick={onClick}
        onKeyDown={onKeyDown}
        type="text"
        value={value}
      />
    </>
  );
};

export default Input;
