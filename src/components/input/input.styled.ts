import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  box-sizing: border-box;
  color: ${(props) => props.theme.blue};
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 10px 5px 10px 10px;
  max-width: 100%;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  width: 100%;

  &:focus {
    background-color: ${(props) => props.theme.white};
    border-color: ${(props) => props.theme.blue};
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    color: ${(props) => props.theme.blue};
    outline: 0;
  }

  ::placeholder {
    color: ${(props) => props.theme.white};
    opacity: 1;
  }

  &:disabled,
  &[readonly] {
    background-color: ${(props) => props.theme.white};
    opacity: 1;
  }
`;

export const StyledLabel = styled.label`
  display: block;
`;
