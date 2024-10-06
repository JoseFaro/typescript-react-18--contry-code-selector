import { StyledButtonProps } from './button.type';
import styled from 'styled-components';

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};

  background-color: ${(props) => props.theme.primary};
  border: 1px solid transparent;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 25px;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  text-align: center;
  vertical-align: middle;
  user-select: none;

  &:hover {
    background-color: #0b5ed7;
    border-color: #0a58ca;
    color: #fff;
  }

  &:focus {
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    color: #fff;
  }

  &:active,
  &:focus:active {
    background-color: #0a58ca;
    border-color: #0a53be;
    box-shadow: none;
    color: #fff;
  }

  &:disabled,
  &.disabled {
    opacity: 0.65;
    pointer-events: none;
  }
`;
