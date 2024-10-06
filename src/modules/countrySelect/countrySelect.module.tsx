import CountrySelectController from './countrySelect.controller';
import CountrySelectList from '../countrySelectList/countrySelectList.module';
import './countrySelect.scss';

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
