import{d as t,f as c,F as l,j as e,S as d,a as x,T as h,c as p,p as r,I as a,t as s,P as n,b as m,l as g}from"./index-dcusRTRR.js";import{S as j}from"./index-q7r7BDKW.js";import{b as f}from"./background-DhGLTqEF.js";const b=t(l)`
  animation: ${c} 1s ease-out forwards;
`,i=t.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  border: thick double ${({theme:o})=>o.colors.orange[6]};
  border-radius: 20px;
  text-decoration: none;
  background-color: ${({theme:o})=>o.colors.orange[3]};
  padding: 5px 0;
  color: ${({theme:o})=>o.colors.browns[9]};
  transition: all 0.6s;

  &:hover {
    background-color: ${({theme:o})=>o.colors.orange[6]};
    border: thick double ${({theme:o})=>o.colors.orange[3]};
  }

  @media (min-width: ${({theme:o})=>o.breakpoints[1]}) {
    padding: 20px 0;
    gap: 8px;
  }

  @media (min-width: ${({theme:o})=>o.breakpoints[3]}) {
    width: 300px;
  }
`,y=()=>e.jsxs(d,{"aria-label":"contact section",flexDirection:"column",justifyContent:"center",gap:"20px",children:[e.jsx(x,{alt:"Hero",loading:"lazy",width:1572,height:620,decoding:"async",src:f}),e.jsxs(l,{flexDirection:"column",gap:"10px",children:[e.jsx(h,{children:"Feel free to reach out!"}),e.jsx(p,{children:"Whether you'd like to learn more about my work, discuss a project, or just say hello, drop me a message—I'd love to connect!"})]}),e.jsxs(b,{gap:"10px",flexWrap:"wrap",justifyContent:"center",padding:[0,0,"20px 0","40px 0","50px 0"],children:[e.jsxs(i,{target:"_blank",href:`mailto:${r.email}`,rel:"noopener noreferrer",children:[e.jsx(a,{name:"icon-mail",width:"30px",height:"30px",fill:s.colors.browns[9]}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:r.email})]}),e.jsxs(i,{href:`tel:${r.phone}`,rel:"noopener noreferrer",children:[e.jsx(a,{name:"icon-phone",width:"30px",height:"30px",fill:s.colors.browns[9]}),e.jsx(n,{children:"Phone"}),e.jsx(n,{children:r.phone})]}),e.jsxs(i,{target:"_blank",href:r.addressLink,rel:"noopener noreferrer",children:[e.jsx(a,{name:"icon-location",width:"30px",height:"30px",fill:s.colors.browns[9]}),e.jsx(n,{children:"Location"}),e.jsx(n,{children:r.address})]})]}),e.jsx(j,{}),e.jsx(m,{to:g,children:"🏡 Welcome Home ➾"})]});export{y as default};
