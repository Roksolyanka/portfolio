import{d as s,j as t,G as r,p as i,F as l,R as o,b as d}from"./index-CWNn5md1.js";import{B as c,b as h,c as p}from"./styled-Cn9wTXb8.js";const m=s.section`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`,x=s.img`
  width: fit-content;
  height: 260px;
  border-radius: 50%;
  color: transparent;
  float: right;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.1);
    transition: all 0.8s ease;
  }

  &:not(:hover) {
    transform: scale(1);
    filter: grayscale(60%);
    transition: all 0.8s ease;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    height: 300px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    height: 350px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[4]}) {
    height: 400px;
  }
`,g=s.p`
  text-align: center;
  font-family: 'EB Garamond', serif;
  font-weight: 500;
  font-size: 16px;
  color: ${({theme:e})=>e.textColor};
  margin: auto;

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 18px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    font-size: 20px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    font-size: 22px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    font-size: 24px;
  }
`,a=s.span`
  color: ${({theme:e})=>e.colors.orange[5]};
  font-weight: bold;
`,b=()=>t.jsxs(m,{"aria-label":"about section",children:[t.jsx(c,{alt:"Hero",loading:"lazy",width:"1572",height:"620",decoding:"async",src:h}),t.jsxs(r,{gridTemplateColumns:["1fr","1fr","1fr","1fr 1fr"],gap:"16px",width:"100%",children:[t.jsx(x,{alt:i.name,width:1e3,height:1e3,loading:"lazy",decoding:"async",src:i.photo.src,srcSet:i.photo.srcset}),t.jsxs(l,{flexDirection:"column",justifyContent:"center",width:"100%",maxWidth:["100%","100%","100%","600px","700px"],order:[2,2,2,1,1],margin:[0,0,0,"auto"],padding:[0,0,"0 0 16px 0",0],gap:"16px",children:[t.jsxs(g,{children:["Greetings! ",t.jsx("br",{})," My name is"," ",t.jsx(a,{children:i.name}),", and I am a frontend developer passionate about creating responsive, user-oriented websites. My expertise lies in advanced frontend technologies like"," ",i.skills.slice(0,3).map((e,n)=>t.jsxs(o.Fragment,{children:[t.jsx(a,{children:e}),n<2&&", "]},e)),". Currently, I am actively working with"," ",i.skills.slice(3).map((e,n)=>t.jsxs(o.Fragment,{children:[t.jsx(a,{children:e}),n<i.skills.slice(3).length-1&&", "]},e)),", always striving to push the boundaries of what's possible. I continuously improve my skills and stay updated on the latest trends to remain at the forefront of our dynamic industry."]}),t.jsx(p,{to:d,children:"My skills ➾"})]})]})]});export{b as default};
