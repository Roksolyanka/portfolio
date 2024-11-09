import{d as t,I as i,L as e}from"./index-CASmeT5j.js";const n="/portfolio/assets/background-DxiBAvkg.svg",s=t.section`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`,r=t.img`
  position: absolute;
  top: -100px;
  z-index: -10;
  color: transparent;
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  height: 100%;

  @media (min-width: ${({theme:o})=>o.breakpoints[2]}) {
    width: 100%;
  }

  @media (min-width: ${({theme:o})=>o.breakpoints[3]}) {
    width: 1440px;
  }
`,l=t.h1`
  text-align: center;
  font-family: 'EB Garamond', serif;
  font-weight: 700;
  font-size: 20px;
  color: ${({theme:o})=>o.textColor};

  @media (min-width: ${({theme:o})=>o.breakpoints[1]}) {
    font-weight: 800;
  }

  @media (min-width: ${({theme:o})=>o.breakpoints[2]}) {
    font-size: 30px;
  }
`,c=t.span`
  color: ${({theme:o})=>o.colors.orange[5]};
`,d=t.a`
  .social-icon {
    fill: ${({theme:o})=>o.textColor};
  }

  &:hover .social-icon {
    transform: scale(2);
    transition: transform 0.8s ease, fill 0.8s ease;
    fill: ${({theme:o})=>o.colors.green[4]};
  }

  &:not(:hover) .social-icon {
    transform: scale(1);
    transition: transform 0.8s ease;
  }
`;t.span`
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  font-size: 20px;
  color: ${({theme:o})=>o.textColor};

  @media (min-width: ${({theme:o})=>o.breakpoints[1]}) {
    font-weight: 800;
  }

  @media (min-width: ${({theme:o})=>o.breakpoints[2]}) {
    font-size: 24px;
  }
`;t(i)`
  fill: ${({theme:o})=>o.textColor};
`;const f=t(e)`
  font-family: 'EB Garamond', serif;
  font-size: 20px;
  font-weight: bold;
  color: ${({theme:o})=>o.accentColor};
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
    background-color: ${({theme:o})=>o.hoverColor};
    transition: all 0.6s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: ${({theme:o})=>o.hoverColor};
    transition: color 0.6s ease, transform 0.6s ease;
    transform: translateX(10px);
  }

  &:not(:hover) {
    transition: all 0.6s ease;
  }
`;export{r as B,s as H,d as S,l as T,c as a,n as b,f as c};
