import ReactProps from '../../config/types';
import Card from '../card/card';
import LayoutController from './layout.controller';
import { Container } from './layout.styled';

const Layout: ReactProps = ({ children }) => {
  LayoutController();

  return (
    <Container>
      <Card size="sm">{children}</Card>
    </Container>
  );
};

export default Layout;
