import{d as i,j as e,F as l,p as r,I as n,t as s}from"./index-Nu4oZnZW.js";const a=i.a`
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
`,c=()=>e.jsxs(l,{justifyContent:"center",gap:"20px",margin:"18px 0",children:[e.jsx(a,{target:"_blank",href:r.github,rel:"noopener noreferrer",children:e.jsx(n,{name:"icon-github",width:"30px",height:"30px",fill:s.colors.browns[9],className:"social-icon"})}),e.jsx(a,{target:"_blank",href:r.linkedIn,rel:"noopener noreferrer",children:e.jsx(n,{name:"icon-linkedin",width:"30px",height:"30px",fill:s.colors.browns[9],className:"social-icon"})}),e.jsx(a,{target:"_blank",href:r.telegram,rel:"noopener noreferrer",children:e.jsx(n,{name:"icon-telegram",width:"30px",height:"30px",fill:s.colors.browns[9],className:"social-icon"})})]});export{c as S};
