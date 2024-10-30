import{d as s,j as o}from"./index-CzMRpaH3.js";const a="/portfolio/assets/avatar-D5ROt4mm.jpg",r="/portfolio/assets/avatar-2x-BzvVK_xP.jpg",i=s.img`
  width: fit-content;
  height: 260px;
  border-radius: 50%;
  border: 4px solid ${({theme:t})=>t.colors.blue[8]};
  box-shadow: ${({theme:t})=>t.colors.boxShadow[3]};
  color: transparent;
  float: right;

  @media (min-width: ${({theme:t})=>t.breakpoints[1]}) {
    height: 220px;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints[2]}) {
    height: 265px;
  }
`,n=()=>o.jsx("div",{children:o.jsx(i,{alt:"Roksolana Kushnir",width:1e3,height:1e3,loading:"lazy",decoding:"async",src:a,srcSet:`${a} 1x, ${r} 2x`})});export{n as default};
