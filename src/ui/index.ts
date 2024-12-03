import { HTMLProps } from 'react';
import styled, { CSSProperties } from 'styled-components';
import {
  alignItems,
  background,
  backgroundImage,
  border,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  bottom,
  boxShadow,
  color,
  display,
  flex,
  flexDirection,
  flexGrow,
  flexWrap,
  fontSize,
  gridTemplateColumns,
  height,
  justifyContent,
  left,
  margin,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  order,
  overflow,
  overflowX,
  padding,
  position,
  ResponsiveValue,
  right,
  space,
  top,
  typography,
  width,
  zIndex,
} from 'styled-system';

type CustomStyledProps = HTMLProps<HTMLDivElement> & {
  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  flexWrap?: CSSProperties['flexWrap'];
  flexGrow?: CSSProperties['flexGrow'];
  background?: CSSProperties['background'];
  backgroundImage?: CSSProperties['backgroundImage'];
  border?: CSSProperties['border'];
  borderRadius?: CSSProperties['borderRadius'];
  borderWidth?: CSSProperties['borderWidth'];
  borderColor?: CSSProperties['borderColor'];
  borderStyle?: CSSProperties['borderStyle'];
  bottom?: CSSProperties['bottom'];
  boxShadow?: CSSProperties['boxShadow'];
  color?: CSSProperties['color'];
  display?: CSSProperties['display'];
  gridTemplateColumns?:
    | CSSProperties['gridTemplateColumns']
    | Array<CSSProperties['gridTemplateColumns']>;
  height?: CSSProperties['height'];
  left?: CSSProperties['left'];
  margin?: CSSProperties['margin'] | Array<CSSProperties['margin']>;
  overflow?: CSSProperties['overflow'];
  padding?: CSSProperties['padding'] | Array<CSSProperties['padding']>;
  position?: CSSProperties['position'];
  right?: CSSProperties['right'];
  space?: ResponsiveValue<string | number>;
  fontSize?: CSSProperties['fontSize'] | Array<CSSProperties['fontSize']>;
  top?: CSSProperties['top'];
  typography?: CSSProperties['fontSize'] | CSSProperties['fontWeight'] | string;
  width?: CSSProperties['width'];
  zIndex?: CSSProperties['zIndex'];
  maxWidth?: CSSProperties['maxWidth'] | Array<CSSProperties['maxWidth']>;
  minWidth?: CSSProperties['minWidth'] | Array<CSSProperties['minWidth']>;
  order?: CSSProperties['order'] | Array<CSSProperties['order']>;
  gap?: ResponsiveValue<string | number>;
  minHeight?: CSSProperties['minHeight'] | Array<CSSProperties['minHeight']>;
  flex?: CSSProperties['flex'] | Array<CSSProperties['flex']>;
  opacity?: CSSProperties['opacity'];
  overflowX?: CSSProperties['overflowX'];
};

export const Box = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'flexDirection',
      'justifyContent',
      'alignItems',
      'flexWrap',
      'flexGrow',
      'gridTemplateColumns',
      'width',
      'height',
      'maxWidth',
      'minWidth',
      'minHeight',
      'gap',
      'borderRadius',
      'borderWidth',
      'borderColor',
      'borderStyle',
      'position',
      'top',
      'left',
      'zIndex',
      'overflowX',
      'backgroundImage',
    ].includes(prop),
})<CustomStyledProps>(
  width,
  maxWidth,
  minWidth,
  height,
  minHeight,
  space,
  fontSize,
  padding,
  margin,
  color,
  typography,
  display,
  border,
  borderRadius,
  borderWidth,
  borderColor,
  borderStyle,
  boxShadow,
  background,
  backgroundImage,
  overflow,
  position,
  top,
  bottom,
  left,
  right,
  zIndex,
  order,
  opacity,
  overflowX
);

export const FlexBox = styled(Box)`
  display: flex;
  gap: ${(props) => props.gap};
  ${flexDirection};
  ${justifyContent};
  ${alignItems};
  ${flexWrap};
  ${flexGrow};
  ${space};
  ${margin};
  ${top};
  ${left};
  ${position};
  ${height};
  ${width};
  ${flex};
`;

export const AbsoluteBox = styled(Box)`
  position: absolute;
  ${position};
  ${top};
  ${bottom};
  ${left};
  ${right};
`;

export const FlexBoxAbsolute = styled(AbsoluteBox)`
  display: flex;
  ${flexDirection};
  ${justifyContent};
  ${alignItems};
`;

export const GridColumns = styled(Box)`
  display: grid;
  ${gridTemplateColumns};
  gap: ${(props) => props.gap};
  ${space};
`;

export const Text = styled.p`
  ${color};
  ${margin};
  ${typography};
`;

export const Button = styled.button<CustomStyledProps>`
  ${width}
  ${space}

  :disabled,
  :hover {
  }

  :disabled {
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

export const ListItem = styled.li``;
