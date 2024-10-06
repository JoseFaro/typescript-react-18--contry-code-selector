import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppRoutes from './routes';
import Layout from './components/layout/layout';
import theme from './theme/colors';

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Layout>
            <AppRoutes />
          </Layout>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
