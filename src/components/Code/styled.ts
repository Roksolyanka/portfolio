import styled from 'styled-components';
import { Box } from '../../ui';

export const WrapperForCode = styled(Box)`
  border-top-width: 2px;
`;

export const SpanText = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;
