import CountrySelectController from './countrySelect.controller';
import CountrySelectList from '../countrySelectList/countrySelectList.module';

const CountrySelect = () => {
  CountrySelectController();

  return (
    <div>
      Country Select Module
      <CountrySelectList />
    </div>
  );
};

export default CountrySelect;
