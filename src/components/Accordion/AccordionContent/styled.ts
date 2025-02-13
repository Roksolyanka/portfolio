import styled from 'styled-components';
import { GridColumns } from '../../../ui';

export const Content = styled(GridColumns)`
  font-size: 14px;
  font-weight: 600;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 30px;
  justify-items: center;
  transition: max-height 0.4s ease;
  max-height: 0;
  overflow: hidden;
  padding: 0;
  backdrop-filter: blur(20px) saturate(100%);
  border: 1px solid ${({ theme }) => theme.accentColor};
  background: ${({ theme }) => theme.backdropColor[3]};
  color: ${({ theme }) => theme.textColor};

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 16px;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 18px;
  }
`;
