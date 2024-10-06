import ReactProps from '../../config/reactFC.type';
import CardController from './card.controller';

const Card: ReactProps = ({ children }) => {
  CardController();

  return <div className="card">{children}</div>;
};

export default Card;
