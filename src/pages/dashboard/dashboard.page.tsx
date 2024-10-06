import CountrySelect from '../../modules/countrySelect/countrySelect';
import DashboardController from './dashboard.controller';

const DashboardPage = () => {
  DashboardController();

  return (
    <>
      <CountrySelect />
    </>
  );
};

export default DashboardPage;
