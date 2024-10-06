import calculateHeightInPixels from './helpers/calculateHeightInPixels';
import styled from 'styled-components';

export const StyledSpacer = styled.div<{ $size: number }>`
  height: ${(props) => calculateHeightInPixels(props.$size)};
`;
