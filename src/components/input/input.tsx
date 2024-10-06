import useInputController from './input.controller';
import { StyledError, StyledInput, StyledLabel } from './input.styled';
import InputProps from './input.type';

const Input: React.FC<InputProps> = (props) => {
  const { error, field, label, placeholder, shouldRenderError, shouldRenderLabel, value } =
    useInputController(props);

  return (
    <div>
      {shouldRenderLabel ? <StyledLabel>{label}</StyledLabel> : null}

      <StyledInput {...field} placeholder={placeholder} value={value} />

      {shouldRenderError ? <StyledError>{error}</StyledError> : null}
    </div>
  );
};

export default Input;
