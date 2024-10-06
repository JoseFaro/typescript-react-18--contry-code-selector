import { useForm } from 'react-hook-form';

const useCountrySelectController = () => {
  const { control, getValues, handleSubmit } = useForm();

  const handleOnSubmit = () => {
    console.log('form values', getValues());
  };

  return { control, handleSubmit, handleOnSubmit };
};

export default useCountrySelectController;
