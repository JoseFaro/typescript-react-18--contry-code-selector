import { StyledButton } from './button.styled';
import ButtonProps from './button.type';
import useButtonController from './button.controller';

const Button: React.FC<ButtonProps> = (props) => {
  const { fullWidth, label, onClick } = useButtonController(props);

  return (
    <StyledButton $fullWidth={fullWidth} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
