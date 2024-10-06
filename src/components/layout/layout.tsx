import ReactProps from '../../config/reactFC.type';
import Card from '../card/card';
import LayoutController from './layout.controller';
import { Container } from './layout.styled';

const Layout: ReactProps = ({ children }) => {
  LayoutController();

  return (
    <Container>
      <Card>{children}</Card>
    </Container>
  );
};

export default Layout;
