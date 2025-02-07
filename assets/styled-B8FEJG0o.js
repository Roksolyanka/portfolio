import{m as n,d as i}from"./index-B4WdNwWO.js";const e=n`
  100% {
    opacity: 1;
    transform: scale(1);
  }
`,a=i("section").withConfig({shouldForwardProp:t=>t!=="isAccordeon"})`
  display: flex;
  gap: 20px;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  flex-direction: ${({isAccordeon:t})=>t?"column":"row"};
  align-content: ${({isAccordeon:t})=>t?"center":"normal"};

  @media (min-width: ${({theme:t})=>t.breakpoints[3]}) {
    gap: 30px;
  }
`,r=i.h2`
  text-align: center;
  font-family: 'EB Garamond', serif;
  font-weight: 700;
  font-size: 20px;
  color: ${({theme:t})=>t.textColor};

  @media (min-width: ${({theme:t})=>t.breakpoints[1]}) {
    font-weight: 800;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints[2]}) {
    font-size: 30px;
  }
`;export{a as S,r as T,e as a};
