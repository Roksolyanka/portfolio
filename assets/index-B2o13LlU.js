import{r as g,d,f as C,j as r,B as n,F as u,p as s,R as I,t as f,a as $,G as L,I as b,S as R,b as E}from"./index-B4WdNwWO.js";import{T}from"./index-DHXQfFTT.js";import{b as N}from"./background-DhGLTqEF.js";const z=e=>{const[c,j]=g.useState(-1),[t,m]=g.useState(!1);return g.useEffect(()=>{const y=setInterval(()=>{c<e.length-1?j(S=>S+1):m(!0)},300);return()=>clearInterval(y)},[c,e.length]),{activeIndex:c,animationComplete:t}},F=d.span`
  color: ${({theme:e})=>e.accentColor};
  font-size: 30px;
  animation: ${C} 1s ease-out forwards;

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 50px;
  }
`,H=d("span").withConfig({shouldForwardProp:e=>e!=="isCustom"})`
  font-family: ${({isCustom:e})=>e?"Splash":"Dancing Script"};
`,B=({name:e})=>{const{activeIndex:c,animationComplete:j}=z(e);return r.jsx(F,{children:e.split("").map((t,m)=>r.jsx(H,{isCustom:t==="R"||t==="K",className:`nameLetter ${!j&&(c===m?"active":"")} ${!j&&(c===m-1||c===m+1?"neighbor":"")}`,children:t},m))})},A=d(n)`
  animation: ${C} 1s ease-out forwards;
`,D=d(n)`
  border-top-width: 2px;
`,o=d.span`
  color: ${({color:e})=>e};
`,{gradient:w,green:h,red:W,orange:p,pink:a,white:i,gray:l,yellow:x,blue:k}=f.colors,G=()=>r.jsxs(A,{position:"relative",borderRadius:"8px",backgroundImage:w[4],borderWidth:"3px",borderColor:h[6],order:[1,1,1,2],children:[r.jsxs(u,{flexDirection:"row",children:[r.jsx(n,{width:"100%",height:"1px",backgroundImage:w[0]}),r.jsx(n,{width:"100%",height:"1px",backgroundImage:w[1]})]}),r.jsx(n,{padding:"16px",children:r.jsxs(u,{flexDirection:"row",children:[r.jsx(n,{width:"12px",height:"12px",borderRadius:"50px",background:W[0]}),r.jsx(n,{width:"12px",height:"12px",borderRadius:"50px",background:p[4],margin:"0 8px"}),r.jsx(n,{width:"12px",height:"12px",borderRadius:"50px",background:h[2]})]})}),r.jsx(D,{overflow:"hidden",borderStyle:"solid",borderColor:h[9],padding:"16px",fontSize:["10px","10px","10px","12px"],children:r.jsxs("code",{children:[r.jsxs(n,{children:[r.jsx(o,{color:a[0],children:"const"}),r.jsx(o,{color:i[0],children:" coder"}),r.jsx(o,{color:a[0],children:" = "}),r.jsx(o,{color:l[0],children:"❴"})]}),r.jsxs(n,{margin:"0 0 0 16px",children:[r.jsx(o,{color:i[0],children:"name:"}),r.jsx(o,{color:l[0],children:" '"}),r.jsx(o,{color:x[0],children:s.name}),r.jsx(o,{color:l[0],children:"',"})]}),r.jsxs(n,{margin:"0 0 0 16px",children:[r.jsx(o,{color:i[0],children:"skills: "}),r.jsx(o,{color:l[0],children:"['"}),s.skills.map((e,c)=>r.jsxs(I.Fragment,{children:[r.jsx(o,{color:x[0],children:e}),c<s.skills.length-1&&r.jsx(o,{color:l[0],children:"', '"})]},c)),r.jsx(o,{color:l[0],children:"'],"})]}),r.jsxs(n,{margin:"0 0 0 16px",children:[r.jsx(o,{color:i[0],children:"hardWorker:"}),r.jsx(o,{color:p[4],children:" true"}),r.jsx(o,{color:l[0],children:","})]}),r.jsxs(n,{margin:"0 0 0 16px",children:[r.jsx(o,{color:i[0],children:"quickLearner:"}),r.jsx(o,{color:p[4],children:" true"}),r.jsx(o,{color:l[0],children:","})]}),r.jsxs(n,{margin:"0 0 0 16px",children:[r.jsx(o,{color:i[0],children:"problemSolver:"}),r.jsx(o,{color:p[4],children:" true"}),r.jsx(o,{color:l[0],children:","})]}),r.jsxs(n,{margin:"0 0 0 16px",children:[r.jsx(o,{color:h[5],children:"hireable"}),r.jsx(o,{color:l[0],children:"() ❴"})]}),r.jsxs(n,{margin:"0 0 0 32px",children:[r.jsx(o,{color:a[0],children:"const"}),r.jsx(o,{color:l[0],children:" ❴ "}),r.jsx(o,{color:i[0],children:"hardWorker"}),r.jsx(o,{color:l[0],children:", "}),r.jsx(o,{color:i[0],children:"problemSolver"}),r.jsx(o,{color:l[0],children:", "}),r.jsx(o,{color:i[0],children:"skills"}),r.jsx(o,{color:l[0],children:" ❵ "}),r.jsx(o,{color:a[0],children:"= "}),r.jsx(o,{color:a[0],children:"this"}),r.jsx(o,{color:l[0],children:";"})]}),r.jsxs(n,{margin:"0 0 0 32px",children:[r.jsx(o,{color:a[0],children:"return "}),r.jsx(o,{color:i[0],children:"hardWorker"}),r.jsx(o,{color:x[0],children:" && "}),r.jsx(o,{color:i[0],children:"problemSolver"}),r.jsx(o,{color:x[0],children:" && "}),r.jsx(o,{color:i[0],children:"skills.length"}),r.jsx(o,{color:x[0],children:" ❯= "}),r.jsx(o,{color:p[4],children:"7"}),r.jsx(o,{color:l[0],children:";"})]}),r.jsx(n,{margin:"0 0 0 16px",children:r.jsx(o,{color:l[0],children:"❵,"})}),r.jsxs(n,{margin:"0 0 0 16px",children:[r.jsx(o,{color:h[5],children:"funFact"}),r.jsx(o,{color:l[0],children:"() ❴"})]}),r.jsxs(n,{margin:"0 0 0 32px",children:[r.jsx(o,{color:k[11],children:"console."}),r.jsx(o,{color:i[0],children:"log"}),r.jsx(o,{color:l[0],children:"("}),r.jsx(o,{color:x[0],children:`"I once solved a bug at 3 AM without coffee. Let's just say, I'm as reliable as your unit tests."`}),r.jsx(o,{color:l[0],children:");"})]}),r.jsx(n,{margin:"0 0 0 16px",children:r.jsx(o,{color:l[0],children:"❵,"})}),r.jsx(n,{children:r.jsx(o,{color:l[0],children:"❵;"})}),r.jsx("br",{}),r.jsxs(n,{children:[r.jsx(o,{color:a[0],children:"if"}),r.jsx(o,{color:l[0],children:" ("}),r.jsx(o,{color:i[0],children:"coder."}),r.jsx(o,{color:h[5],children:"hireable"}),r.jsx(o,{color:l[0],children:"()"}),r.jsx(o,{color:l[0],children:") ❴"})]}),r.jsxs(n,{margin:"0 0 0 8px",children:[r.jsx(o,{color:i[0],children:"coder."}),r.jsx(o,{color:h[5],children:"funFact"}),r.jsx(o,{color:l[0],children:"();"})]}),r.jsxs(n,{margin:"0 0 0 8px",children:[r.jsx(o,{color:k[11],children:"console."}),r.jsx(o,{color:i[0],children:"log"}),r.jsx(o,{color:l[0],children:"("}),r.jsx(o,{color:x[0],children:"'Hiring me means getting a hard-working problem-solver with a love for learning.'"}),r.jsx(o,{color:l[0],children:");"})]}),r.jsxs(n,{children:[r.jsx(o,{color:l[0],children:"❵ "}),r.jsx(o,{color:a[0],children:"else"}),r.jsx(o,{color:l[0],children:" ❴"})]}),r.jsxs(n,{margin:"0 0 0 8px",children:[r.jsx(o,{color:k[11],children:"console."}),r.jsx(o,{color:i[0],children:"log"}),r.jsx(o,{color:l[0],children:"("}),r.jsx(o,{color:x[0],children:"'I may not meet all criteria, but I'm still ready to improve and grow!'"}),r.jsx(o,{color:l[0],children:");"})]}),r.jsx(n,{children:r.jsx(o,{color:l[0],children:"❵ "})})]})})]}),P=d.section`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`,_=d.h1`
  text-align: center;
  font-family: 'EB Garamond', serif;
  font-weight: 700;
  font-size: 20px;
  color: ${({theme:e})=>e.textColor};

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-weight: 800;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    font-size: 30px;
  }
`,O=d.span`
  color: ${({theme:e})=>e.colors.orange[5]};
`,v=d.a`
  .social-icon {
    fill: ${({theme:e})=>e.textColor};
  }

  &:hover .social-icon {
    transform: scale(2);
    transition: transform 0.8s ease, fill 0.8s ease;
    fill: ${({theme:e})=>e.colors.green[4]};
  }

  &:not(:hover) .social-icon {
    transform: scale(1);
    transition: transform 0.8s ease;
  }
`;d.span`
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  font-size: 20px;
  color: ${({theme:e})=>e.textColor};

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-weight: 800;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    font-size: 24px;
  }
`;const K=()=>{const[e,c]=g.useState(!0),j=()=>{const t=document.createElement("a");t.href=e?s.cv:s.coverLetter,t.download=e?s.cvName:s.coverLetterName,document.body.appendChild(t),t.click(),document.body.removeChild(t)};return r.jsxs(P,{"aria-label":"hero section",children:[r.jsx($,{alt:"Hero",loading:"lazy",width:"1572",height:"620",decoding:"async",src:N}),r.jsxs(L,{gridTemplateColumns:["1fr","1fr","1fr","1fr 1fr"],gap:"16px",width:"100%",children:[r.jsxs(u,{flexDirection:"column",justifyContent:"center",width:"100%",maxWidth:["100%","100%","100%","600px","700px"],order:[2,2,2,1,1],margin:[0,0,0,"auto"],padding:[0,0,"0 0 16px 0",0],children:[r.jsxs(_,{children:["Hello, this is ",r.jsx("br",{}),r.jsx(B,{name:s.name})," ",r.jsx("br",{}),"I'm a ",r.jsx(O,{children:s.designation})]}),r.jsxs(u,{justifyContent:"center",gap:"20px",margin:"18px 0",children:[r.jsx(v,{target:"_blank",href:s.github,rel:"noopener noreferrer",children:r.jsx(b,{name:"icon-github",width:"30px",height:"30px",fill:f.colors.browns[9],className:"social-icon"})}),r.jsx(v,{target:"_blank",href:s.linkedIn,rel:"noopener noreferrer",children:r.jsx(b,{name:"icon-linkedin-circle",width:"30px",height:"30px",fill:f.colors.browns[9],className:"social-icon"})}),r.jsx(v,{target:"_blank",href:s.telegram,rel:"noopener noreferrer",children:r.jsx(b,{name:"icon-telegram",width:"30px",height:"30px",fill:f.colors.browns[9],className:"social-icon"})})]}),r.jsx(T,{togglePosition:e,setTogglePosition:c,handleDownload:j,cvHref:s.cv,coverLetterHref:s.coverLetter,labelFirst:"CV",labelSecond:"COVER LETTER",iconName:"icon-download"}),r.jsx(R,{to:E,children:"About me ➾"})]}),r.jsx(G,{})]})]})};export{K as default};
