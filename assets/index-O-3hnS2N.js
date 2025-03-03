import{d as a,f as m,T as u,c as f,F as w,r as l,j as t,S as C,a as $,p as b,b as k,k as y}from"./index-dcusRTRR.js";import{b as j}from"./background-DhGLTqEF.js";const v=a(u).withConfig({shouldForwardProp:e=>e!=="isChecked"})`
  opacity: ${({isChecked:e})=>e?1:0};
  transition: opacity 0.6s;
`,S=a(f).withConfig({shouldForwardProp:e=>e!=="isChecked"})`
  color: ${({theme:e})=>e.colors.orange[6]};
  opacity: ${({isChecked:e})=>e?1:0};
  transition: 0.6s;
`,I=a(w).withConfig({shouldForwardProp:e=>e!=="isChecked"})`
  min-height: ${({isChecked:e})=>e?"auto":"400px"};
  transition: 0.6s;
  animation: ${m} 1s ease-out forwards;
`,F=a("label").withConfig({shouldForwardProp:e=>e!=="isChecked"&&e!=="position"&&e!=="aspectRatio"})`
  cursor: pointer;
  width: ${({aspectRatio:e})=>e&&e>1?"240px":"180px"};
  height: ${({aspectRatio:e})=>e&&e>1?"180px":"240px"};
  border-radius: 10px;
  overflow: hidden;
  background: ${({theme:e})=>e.accentColor};
  border: 5px solid ${({theme:e})=>e.accentColor};
  box-shadow: 0 0 5px ${({theme:e})=>e.accentColor},
    0 0 10px ${({theme:e})=>e.accentColor};
  position: ${({isChecked:e})=>e?"relative":"absolute"};
  transition: all 0.8s ease;

  ${({isChecked:e,position:s=0})=>e?`
      transform: none; 
    `:`
      transform: rotate(${s*10+5}deg) ;  
    `}

  &:hover img {
    filter: grayscale(0);
    transform: scale(1.08);
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    width: ${({aspectRatio:e})=>e&&e>1?"400px":"300px"};
    height: ${({aspectRatio:e})=>e&&e>1?"300px":"400px"};
  }
`,P=a.img`
  display: block;
  width: 100%;
  height: 100%;
  filter: grayscale(1);
  transition: 0.4s;
`,L=()=>{const[e,s]=l.useState(!1),[d,h]=l.useState([]),p=(i,n)=>{const{naturalWidth:o,naturalHeight:r}=n.target,g=o/r;h(x=>{const c=[...x];return c[i]=g,c})};return t.jsxs(C,{"aria-label":"achievements section",flexDirection:"column",gap:"10px",children:[t.jsx($,{alt:"Hero",loading:"lazy",width:1572,height:620,decoding:"async",src:j}),t.jsx("input",{type:"checkbox",id:"click",checked:e,onChange:()=>s(!e),style:{display:"none"}}),t.jsx(v,{isChecked:e,padding:"20px 0 0 0",children:"Some of my achievements are listed below"}),t.jsx(I,{isChecked:e,alignItems:"center",justifyContent:"center",width:"100%",gap:"20px",flexWrap:"wrap",position:"relative",children:b.achievements.map(({src:i,srcset:n},o)=>t.jsx(F,{htmlFor:"click",position:o,isChecked:e,aspectRatio:d[o],children:t.jsx(P,{src:i,srcSet:n,alt:`Achievement ${o+1}`,onLoad:r=>p(o,r)})},o))}),t.jsx(S,{isChecked:e,padding:"0 0 20px 0",children:"More will be added soon ..."}),t.jsx(k,{to:y,children:"Let's Connect ➾"})]})};export{L as default};
