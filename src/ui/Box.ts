import styled from 'styled-components';
import {
  alignItems,
  bottom,
  flexDirection,
  height,
  justifyContent,
  left,
  right,
  top,
  width,
} from 'styled-system';

export const Box = styled.div`
  ${width}
  ${height}
`;

export const AbsoluteBox = styled(Box)`
  ${top}
  ${bottom}
${left}
${right}

position: absolute;
`;

export const FlexBox = styled(Box)`
  ${flexDirection}
  ${justifyContent}
${alignItems}

display: flex;
`;

export const FlexBoxAbsolute = styled(AbsoluteBox)`
  ${flexDirection}
  ${justifyContent}
${alignItems}

display: flex;
`;
