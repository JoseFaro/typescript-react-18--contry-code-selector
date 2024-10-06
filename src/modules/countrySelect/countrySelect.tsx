import { StyledInputContainer } from './countrySelect.styled';

import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Spacer from '../../components/spacer/spacer';
import useCountrySelectController from './countrySelect.controller';

const CountrySelect = () => {
  const { control, handleSubmit, handleOnSubmit } = useCountrySelectController();

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <StyledInputContainer>
        <Input control={control} name="countryCode" placeholder="+1" />
        <Input control={control} name="phone" />
      </StyledInputContainer>

      <Spacer size={6} />

      <Button fullWidth={true} label="Submit" onClick={handleSubmit(handleOnSubmit)} />
    </form>
  );
};

export default CountrySelect;
