import{d as s,f as r,j as t,a as l,G as d,p as i,F as c,R as o,S as h,c as p}from"./index-BpXZVs8y.js";import{b as m}from"./background-DhGLTqEF.js";const x=s.section`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`,g=s.img`
  width: fit-content;
  height: 260px;
  border-radius: 50%;
  color: transparent;
  float: right;
  margin: 0 auto;
  cursor: pointer;
   animation: ${r} 1s ease-out forwards;

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
`,f=s.p`
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
`,n=s.span`
  color: ${({theme:e})=>e.colors.orange[5]};
  font-weight: bold;
`,y=()=>t.jsxs(x,{"aria-label":"about section",children:[t.jsx(l,{alt:"Hero",loading:"lazy",width:"1572",height:"620",decoding:"async",src:m}),t.jsxs(d,{gridTemplateColumns:["1fr","1fr","1fr","1fr 1fr"],gap:"16px",width:"100%",children:[t.jsx(g,{alt:i.name,width:1e3,height:1e3,loading:"lazy",decoding:"async",src:i.photo.src,srcSet:i.photo.srcset}),t.jsxs(c,{flexDirection:"column",justifyContent:"center",width:"100%",maxWidth:["100%","100%","100%","600px","700px"],order:[2,2,2,1,1],margin:[0,0,0,"auto"],padding:[0,0,"0 0 16px 0",0],gap:"16px",children:[t.jsxs(f,{children:["Greetings! ",t.jsx("br",{})," My name is"," ",t.jsx(n,{children:i.name}),", and I am a frontend developer passionate about creating responsive, user-oriented websites. My expertise lies in advanced frontend technologies like"," ",i.skills.slice(0,3).map((e,a)=>t.jsxs(o.Fragment,{children:[t.jsx(n,{children:e}),a<2&&", "]},e)),". Currently, I am actively working with"," ",i.skills.slice(3).map((e,a)=>t.jsxs(o.Fragment,{children:[t.jsx(n,{children:e}),a<i.skills.slice(3).length-1&&", "]},e)),", always striving to push the boundaries of what's possible. I continuously improve my skills and stay updated on the latest trends to remain at the forefront of our dynamic industry."]}),t.jsx(h,{to:p,children:"My skills ➾"})]})]})]});export{y as default};
