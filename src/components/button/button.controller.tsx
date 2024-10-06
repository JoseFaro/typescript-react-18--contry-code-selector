import ButtonProps from './button.type';

const useButtonController = ({
  fullWidth = false,
  label = '',
  onClick = () => {},
}: ButtonProps) => {
  return {
    fullWidth,
    label,
    onClick,
  };
};

export default useButtonController;
