import { HTMLProps } from 'react';
import { Link } from 'react-router-dom';

import styled, { CSSProperties, keyframes } from 'styled-components';
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
  fontFamily,
  fontSize,
  fontWeight,
  gridTemplateColumns,
  height,
  justifyContent,
  left,
  margin,
  maxHeight,
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
  textAlign,
  top,
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
  fontWeight?: CSSProperties['fontWeight'];
  fontFamily?: CSSProperties['fontFamily'];
  top?: CSSProperties['top'];
  width?: CSSProperties['width'];
  zIndex?: CSSProperties['zIndex'];
  maxWidth?: CSSProperties['maxWidth'] | Array<CSSProperties['maxWidth']>;
  minWidth?: CSSProperties['minWidth'] | Array<CSSProperties['minWidth']>;
  order?: CSSProperties['order'] | Array<CSSProperties['order']>;
  gap?: ResponsiveValue<string | number>;
  minHeight?: CSSProperties['minHeight'] | Array<CSSProperties['minHeight']>;
  maxHeight?: CSSProperties['maxHeight'] | Array<CSSProperties['maxHeight']>;
  flex?: CSSProperties['flex'] | Array<CSSProperties['flex']>;
  opacity?: CSSProperties['opacity'];
  overflowX?: CSSProperties['overflowX'];
};

const shouldFilterProps = [
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
  'maxHeight',
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
  'boxShadow',
];

export const Box = styled.div.withConfig({
  shouldForwardProp: (prop) => !shouldFilterProps.includes(prop),
})<CustomStyledProps>(
  width,
  maxWidth,
  minWidth,
  height,
  minHeight,
  maxHeight,
  space,
  fontSize,
  fontWeight,
  fontFamily,
  padding,
  margin,
  color,
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
  ${flex};
`;

export const AbsoluteBox = styled(Box)`
  position: absolute;
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
`;

export const Text = styled.p``;

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !shouldFilterProps.includes(prop),
})<CustomStyledProps>(
  width,
  maxWidth,
  minWidth,
  height,
  minHeight,
  maxHeight,
  space,
  fontSize,
  fontWeight,
  fontFamily,
  padding,
  margin,
  color,
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

export const FlexButton = styled(Button)`
  display: flex;
  gap: ${(props) => props.gap};
  ${flexDirection};
  ${justifyContent};
  ${alignItems};
  ${flexWrap};
  ${flexGrow};
  ${flex};
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const MainSection = styled.section.withConfig({
  shouldForwardProp: (prop) => !shouldFilterProps.includes(prop),
})<CustomStyledProps>(padding, flexWrap);

export const Section = styled(MainSection)`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  gap: ${(props) => props.gap};
  ${flexDirection};
  ${justifyContent};
  ${alignItems};
  ${flexWrap};
`;

export const Background = styled.img`
  position: absolute;
  top: -100px;
  z-index: -10;
  color: transparent;
  max-width: 100%;
  width: 100%;
  object-fit: cover;
  pointer-events: none;

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 1440px;
  }
`;

export const StyledLink = styled(Link)`
  font-family: 'EB Garamond', serif;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.accentColor};
  text-decoration: none;
  margin: 0 auto;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.hoverColor};
    transition: all 0.6s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: ${({ theme }) => theme.hoverColor};
    transition: color 0.6s ease, transform 0.6s ease;
    transform: translateX(10px);
  }

  &:not(:hover) {
    transition: all 0.6s ease;
  }
`;

export const H2 = styled.h2.withConfig({
  shouldForwardProp: (prop) => !shouldFilterProps.includes(prop),
})<CustomStyledProps>(space, fontSize, fontWeight, fontFamily, padding, color);

export const TitleH2 = styled(H2)`
  text-align: center;
  font-family: 'EB Garamond', serif;
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.textColor};

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-weight: 800;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 30px;
  }
`;

export const Paragraph = styled.p.withConfig({
  shouldForwardProp: (prop) => !shouldFilterProps.includes(prop),
})<CustomStyledProps>(
  space,
  fontSize,
  fontWeight,
  fontFamily,
  padding,
  color,
  textAlign
);

export const StyledParagraph = styled(Paragraph)`
  text-align: center;
  font-family: 'EB Garamond', serif;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.textColor};

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 18px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    font-size: 24px;
  }
`;
