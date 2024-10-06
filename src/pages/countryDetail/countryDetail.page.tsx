import CountryCard from '../../modules/countryCard/countryCard.module';
import CountryDetailController from './countryDetail.controller';

const CountryDetailPage = () => {
  CountryDetailController();

  return (
    <>
      <CountryCard />
    </>
  );
};

export default CountryDetailPage;
