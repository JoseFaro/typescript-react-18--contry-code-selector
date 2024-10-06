import { Sizes } from '../../config/types';
import styled from 'styled-components';

export const StyledContainer = styled.div<{ size: Sizes }>`
  background-color: white;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${(props) => props.theme.sizes[props.size]};
  padding: 40px;
  transition: box-shadow 0.3s ease;
  width: 100%;
`;
