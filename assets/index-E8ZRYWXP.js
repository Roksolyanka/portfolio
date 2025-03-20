import{d as n,f as o,j as a,S as l,a as d,G as c,p as s,F as h,c as p,r as i,b as x,e as g}from"./index-saBTTolZ.js";import{b as m}from"./background-DhGLTqEF.js";const f=n.img`
  width: fit-content;
  height: 260px;
  border-radius: 50%;
  color: transparent;
  float: right;
  margin: 0 auto;
  cursor: pointer;
  animation: ${o} 1s ease-out forwards;

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
`,r=n.span`
  color: ${({theme:e})=>e.colors.orange[5]};
  font-weight: bold;
`,b=()=>a.jsxs(l,{"aria-label":"about section",children:[a.jsx(d,{alt:"Hero",loading:"lazy",width:1572,height:620,decoding:"async",src:m}),a.jsxs(c,{gridTemplateColumns:["1fr","1fr","1fr","1fr 1fr"],gap:"16px",width:"100%",children:[a.jsx(f,{alt:s.name,width:1e3,height:1e3,loading:"lazy",decoding:"async",src:s.photo.src,srcSet:s.photo.srcset}),a.jsxs(h,{flexDirection:"column",justifyContent:"center",width:"100%",maxWidth:["100%","100%","100%","600px","700px"],order:[2,2,2,1,1],margin:[0,0,0,"auto"],padding:[0,0,"0 0 16px 0",0],gap:"16px",children:[a.jsxs(p,{margin:"auto",fontSize:["16px","18px","20px","22px","24px"],children:["Greetings! ",a.jsx("br",{})," My name is"," ",a.jsx(r,{children:s.name}),", and I am a frontend developer passionate about creating responsive, user-oriented websites. My expertise lies in advanced frontend technologies like"," ",s.skills.slice(0,3).map((e,t)=>a.jsxs(i.Fragment,{children:[a.jsx(r,{children:e}),t<2&&", "]},e)),". Currently, I am actively working with"," ",s.skills.slice(3).map((e,t)=>a.jsxs(i.Fragment,{children:[a.jsx(r,{children:e}),t<s.skills.slice(3).length-1&&", "]},e)),", always striving to push the boundaries of what's possible. I continuously improve my skills and stay updated on the latest trends to remain at the forefront of our dynamic industry."]}),a.jsx(x,{to:g,children:"Coding Superpowers 💪 ➾"})]})]})]});export{b as default};
