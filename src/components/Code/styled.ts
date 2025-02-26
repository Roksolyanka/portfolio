import styled from 'styled-components';
import { Box, fadeIn } from '../../ui';

export const CodeStyle = styled(Box)`
  animation: ${fadeIn} 1s ease-out forwards;
`;

export const WrapperForCode = styled(Box)`
  border-top-width: 2px;
`;

export const StyledSpan = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;
