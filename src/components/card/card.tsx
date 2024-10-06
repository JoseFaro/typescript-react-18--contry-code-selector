import { StyledContainer } from './card.styled';
import CardController from './card.controller';
import CardProps from './card.type';

const Card: CardProps = ({ children, size = 'md' }) => {
  CardController();

  return (
    <StyledContainer className="card" size={size}>
      {children}
    </StyledContainer>
  );
};

export default Card;
