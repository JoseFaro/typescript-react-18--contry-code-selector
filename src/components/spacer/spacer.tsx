import { StyledSpacer } from './spacer.styled';
import SpacerProps from './spacer.type';

const Spacer: React.FC<SpacerProps> = ({ size = 4 }) => {
  return <StyledSpacer $size={size} />;
};

export default Spacer;
