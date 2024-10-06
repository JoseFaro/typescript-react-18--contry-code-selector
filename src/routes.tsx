import { Route, Routes } from 'react-router-dom';

import NotFoundPage from './pages/notFound/notFound.page';
import DashboardPage from './pages/dashboard/dashboard.page';
import CountryDetailPage from './pages/countryDetail/countryDetail.page';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/country/{:id}" element={<CountryDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
