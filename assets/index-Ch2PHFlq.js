import{d as t,F as s,A as x,c as l,j as i,I as d,t as r,f as g,S as m,a as b,T as f,b as u,i as k}from"./index-Nu4oZnZW.js";import{b as w}from"./background-DhGLTqEF.js";import{p as y}from"./projects-Cq8EtiZE.js";const n=t.input`
  display: none;
`,h=t(s)`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 0.034138655462184864) 70%
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`,a=t.label`
  position: relative;
  height: 80px;
  width: 90%;
  margin: 5px auto;
  cursor: pointer;
  overflow: hidden;
  border-radius: 40px;
  transition: all 0.6s ease;
  background-image: ${({$background:e})=>`url(${e})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: ${({theme:e})=>e.boxShadowNav};
  scroll-snap-align: start;

  ${n}:checked + & {
    height: 350px;
    background-image: ${({$background:e})=>`url(${e})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: auto;

    ${h} {
      div {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    flex-shrink: 0;
    height: 100%;
    width: 10%;
    max-width: 80px;
    margin: 0 10px;

    ${n}:checked + & {
      width: 70%;
      max-width: 740px;
      height: 100%;
    }
  }
`,$=t(s)`
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.6s ease;
  z-index: 1;

  ${n}:checked + ${a} & {
    opacity: 1;
    pointer-events: auto;
  }
`,p=t.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({theme:e})=>e.colors.green[4]};
  border-radius: 50%;
  transition: background 0.6s;

  &:hover svg {
    transform: scale(1.7);
    transition: transform 0.8s ease;
  }

  &:not(:hover) svg {
    transform: scale(1);
    transition: transform 0.8s ease;
  }
`,j=t(x)`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  white-space: nowrap;
  text-transform: uppercase;
  border: 2px solid ${({theme:e})=>e.colors.green[10]};
  opacity: 0;
  transition: opacity 0.6s ease;

  ${n}:checked + ${a} & {
    opacity: 1;
  }
`,v=t(s)`
  opacity: 0;
  transform: translateY(40px);
  transition: 0.6s;
`,z=t.h3`
  color: ${({theme:e})=>e.colors.green[5]};
  font-size: 24px;
  font-family: 'EB Garamond', serif;

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 30px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    font-size: 36px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    font-size: 44px;
  }
`,S=t(l)`
  color: ${({theme:e})=>e.colors.green[0]};
  font-size: 12px;
  text-align: start;

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    font-size: 14px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    font-size: 16px;
  }
`,C=t(l)`
  color: ${({theme:e})=>e.colors.orange[5]};
  font-size: 10px;
  text-align: end;

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 12px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    font-size: 14px;
  }
`,I=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 14px;
  font-size: 24px;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  background: ${({theme:e})=>e.colors.green[4]};
  color: ${({theme:e})=>e.colors.green[10]};
  border-radius: 50%;
  margin: -65px 15px 15px;
  opacity: 1;
  transition: opacity 0.8 ease;

  ${n}:checked + ${a} & {
    display: none;
    opacity: 0;
    transition: display 0.6s ease;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    margin: 265px 15px 15px;
  }
`,P=({project:e,index:o})=>i.jsxs(i.Fragment,{children:[i.jsx(n,{type:"radio",name:"slide",id:`c-${o}`,defaultChecked:o===0}),i.jsx(a,{htmlFor:`c-${o}`,$background:e.projectImage.src,children:i.jsxs(h,{flexDirection:"column",justifyContent:"space-between",width:"100%",height:"100%",children:[(e.website||e.github)&&i.jsxs($,{justifyContent:"space-between",width:"100%",padding:"16px",children:[e.github&&i.jsx(p,{href:e.github,target:"_blank",rel:"noopener noreferrer",children:i.jsx(d,{name:"icon-github",width:"24px",height:"24px",fill:r.colors.green[10]})}),e.website&&i.jsx(p,{href:e.website,target:"_blank",rel:"noopener noreferrer",children:i.jsx(d,{name:"icon-share",width:"24px",height:"24px",fill:r.colors.green[10]})})]}),e.isTeamProject&&i.jsx(j,{fontSize:"16px",fontWeight:"600",fontFamily:"EB Garamond, serif",right:"0",top:"30%",background:r.colors.orange[5],color:r.colors.green[10],padding:"8px",borderRadius:"5px",children:"Team Project"}),i.jsx(I,{children:o+1}),i.jsxs(v,{flexDirection:"column",justifyContent:"flex-end",width:"100%",padding:"16px",gap:"10px",children:[i.jsx(z,{children:e.projectName}),i.jsx(S,{children:e.description}),i.jsx(C,{children:e.skills})]})]})})]}),B=t.div`
  width: 100%;
  display: flex;
  -webkit-overflow-scrolling: touch;
  padding: 0px;
  flex-direction: column;
  animation: ${g} 1s ease-out forwards;

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    height: 500px;
    flex-direction: row;
    overflow-x: auto;
    padding: 40px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 5px;
      height: 7px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #337912;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      box-shadow: inset 0 0 5px #337912;
    }
  }
`,E=({projects:e})=>i.jsx(B,{children:e.map((o,c)=>i.jsx(P,{project:o,index:c},c))}),N=()=>i.jsxs(m,{"aria-label":"projects section",gap:"10px",padding:["0","0","0 25px","0 100px"],flexWrap:"wrap",alignItems:"baseline",justifyContent:"center",children:[i.jsx(b,{alt:"Hero",loading:"lazy",width:1572,height:620,decoding:"async",src:w}),i.jsx(f,{children:"Here's a glimpse into some of the projects I've had the pleasure of working on:"}),i.jsx(E,{projects:y}),i.jsx(u,{to:k,children:"My Journey of Success 📜 ➾"})]});export{N as default};
