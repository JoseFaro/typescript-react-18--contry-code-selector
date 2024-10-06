import { StyledInputContainer } from './countrySelect.styled';

import CountrySelectController from './countrySelect.controller';
// import CountrySelectList from '../countrySelectList/countrySelectList.module';
import Input from '../../components/input/input';

const CountrySelect = () => {
  CountrySelectController();

  return (
    <div>
      <StyledInputContainer>
        <div>
          <Input />
        </div>
        <div>
          <Input />
        </div>
      </StyledInputContainer>

      {/* <CountrySelectList /> */}
    </div>
  );
};

export default CountrySelect;
