import{r as g,d,f as C,j as r,B as s,F as u,p as i,t as f,S as I,a as $,G as L,I as b,b as E,R as F}from"./index-YRH5_mbv.js";import{T as R}from"./index-CLD8LdyM.js";import{b as T}from"./background-DhGLTqEF.js";const H=e=>{const[c,j]=g.useState(-1),[t,p]=g.useState(!1);return g.useEffect(()=>{const y=setInterval(()=>{c<e.length-1?j(S=>S+1):p(!0)},300);return()=>clearInterval(y)},[c,e.length]),{activeIndex:c,animationComplete:t}},N=d.span`
  color: ${({theme:e})=>e.accentColor};
  font-size: 30px;
  animation: ${C} 1s ease-out forwards;

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 50px;
  }
`,z=d("span").withConfig({shouldForwardProp:e=>e!=="isCustom"})`
  font-family: ${({isCustom:e})=>e?"Splash":"Dancing Script"};
`,B=({name:e})=>{const{activeIndex:c,animationComplete:j}=H(e);return r.jsx(N,{children:e.split("").map((t,p)=>r.jsx(z,{isCustom:t==="R"||t==="K",className:`nameLetter ${!j&&(c===p?"active":"")} ${!j&&(c===p-1||c===p+1?"neighbor":"")}`,children:t},p))})},A=d(s)`
  animation: ${C} 1s ease-out forwards;
`,D=d(s)`
  border-top-width: 2px;
`,o=d.span`
  color: ${({color:e})=>e};
`,{green:h,red:W,orange:m,pink:a,white:n,gray:l,yellow:x,blue:w}=f.colors,{gradient:k}=f,G=()=>r.jsxs(A,{position:"relative",borderRadius:"8px",backgroundImage:k[4],borderWidth:"3px",borderColor:h[6],order:[1,1,1,2],children:[r.jsxs(u,{flexDirection:"row",children:[r.jsx(s,{width:"100%",height:"1px",backgroundImage:k[0]}),r.jsx(s,{width:"100%",height:"1px",backgroundImage:k[1]})]}),r.jsx(s,{padding:"16px",children:r.jsxs(u,{flexDirection:"row",children:[r.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:W[0]}),r.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:m[4],margin:"0 8px"}),r.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:h[2]})]})}),r.jsx(D,{overflow:"hidden",borderStyle:"solid",borderColor:h[9],padding:"16px",fontSize:["10px","10px","10px","12px"],children:r.jsxs("code",{children:[r.jsxs(s,{children:[r.jsx(o,{color:a[0],children:"const"}),r.jsx(o,{color:n[0],children:" coder"}),r.jsx(o,{color:a[0],children:" = "}),r.jsx(o,{color:l[0],children:"{"})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"name:"}),r.jsx(o,{color:l[0],children:" '"}),r.jsx(o,{color:x[0],children:i.name}),r.jsx(o,{color:l[0],children:"',"})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"skills: "}),r.jsx(o,{color:l[0],children:"['"}),i.skills.map((e,c)=>r.jsxs(g.Fragment,{children:[r.jsx(o,{color:x[0],children:e}),c<i.skills.length-1&&r.jsx(o,{color:l[0],children:"', '"})]},c)),r.jsx(o,{color:l[0],children:"'],"})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"hardWorker:"}),r.jsx(o,{color:m[4],children:" true"}),r.jsx(o,{color:l[0],children:","})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"quickLearner:"}),r.jsx(o,{color:m[4],children:" true"}),r.jsx(o,{color:l[0],children:","})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"problemSolver:"}),r.jsx(o,{color:m[4],children:" true"}),r.jsx(o,{color:l[0],children:","})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:h[5],children:"isHireable"}),r.jsxs(o,{color:l[0],children:["() ","{"]})]}),r.jsxs(s,{margin:"0 0 0 32px",children:[r.jsx(o,{color:a[0],children:"const"}),r.jsxs(o,{color:l[0],children:[" ","{"," "]}),r.jsx(o,{color:n[0],children:"hardWorker"}),r.jsx(o,{color:l[0],children:", "}),r.jsx(o,{color:n[0],children:"problemSolver"}),r.jsx(o,{color:l[0],children:", "}),r.jsx(o,{color:n[0],children:"skills"}),r.jsxs(o,{color:l[0],children:[" ","}"," "]}),r.jsx(o,{color:a[0],children:"= "}),r.jsx(o,{color:a[0],children:"this"}),r.jsx(o,{color:l[0],children:";"})]}),r.jsxs(s,{margin:"0 0 0 32px",children:[r.jsx(o,{color:a[0],children:"return "}),r.jsx(o,{color:n[0],children:"hardWorker"}),r.jsx(o,{color:x[0],children:" && "}),r.jsx(o,{color:n[0],children:"problemSolver"}),r.jsx(o,{color:x[0],children:" && "}),r.jsx(o,{color:n[0],children:"skills.length"}),r.jsxs(o,{color:x[0],children:[" ",">","= "]}),r.jsx(o,{color:m[4],children:"7"}),r.jsx(o,{color:l[0],children:";"})]}),r.jsx(s,{margin:"0 0 0 16px",children:r.jsxs(o,{color:l[0],children:["}",","]})}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:h[5],children:"shareFunFact"}),r.jsxs(o,{color:l[0],children:["() ","{"]})]}),r.jsxs(s,{margin:"0 0 0 32px",children:[r.jsx(o,{color:w[11],children:"console."}),r.jsx(o,{color:n[0],children:"log"}),r.jsx(o,{color:l[0],children:"("}),r.jsx(o,{color:x[0],children:'"I once solved a bug at 3 AM without coffee. Let us just say, I am as reliable as your unit tests."'}),r.jsx(o,{color:l[0],children:");"})]}),r.jsx(s,{margin:"0 0 0 16px",children:r.jsxs(o,{color:l[0],children:["}",","]})}),r.jsx(s,{children:r.jsxs(o,{color:l[0],children:["}",";"]})}),r.jsx("br",{}),r.jsxs(s,{children:[r.jsx(o,{color:a[0],children:"if"}),r.jsx(o,{color:l[0],children:" ("}),r.jsx(o,{color:n[0],children:"coder."}),r.jsx(o,{color:h[5],children:"isHireable"}),r.jsx(o,{color:l[0],children:"()"}),r.jsxs(o,{color:l[0],children:[") ","{"]})]}),r.jsxs(s,{margin:"0 0 0 8px",children:[r.jsx(o,{color:n[0],children:"coder."}),r.jsx(o,{color:h[5],children:"shareFunFact"}),r.jsx(o,{color:l[0],children:"();"})]}),r.jsxs(s,{margin:"0 0 0 8px",children:[r.jsx(o,{color:w[11],children:"console."}),r.jsx(o,{color:n[0],children:"log"}),r.jsx(o,{color:l[0],children:"("}),r.jsx(o,{color:x[0],children:"'Hiring me means getting a hard-working problem-solver with a love for learning.'"}),r.jsx(o,{color:l[0],children:");"})]}),r.jsxs(s,{children:[r.jsxs(o,{color:l[0],children:["}"," "]}),r.jsx(o,{color:a[0],children:"else"}),r.jsxs(o,{color:l[0],children:[" ","{"]})]}),r.jsxs(s,{margin:"0 0 0 8px",children:[r.jsx(o,{color:w[11],children:"console."}),r.jsx(o,{color:n[0],children:"log"}),r.jsx(o,{color:l[0],children:"("}),r.jsx(o,{color:x[0],children:"'I may not meet all criteria, but I am still ready to improve and grow!'"}),r.jsx(o,{color:l[0],children:");"})]}),r.jsx(s,{children:r.jsxs(o,{color:l[0],children:["}"," "]})})]})})]}),P=d.h1`
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
`,_=d.span`
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
`;const q=()=>{const[e,c]=g.useState(!0),j=()=>{const t=document.createElement("a");t.href=e?i.cv:i.coverLetter,t.download=e?i.cvName:i.coverLetterName,document.body.appendChild(t),t.click(),document.body.removeChild(t)};return r.jsxs(I,{"aria-label":"hero section",children:[r.jsx($,{alt:"Hero",loading:"lazy",width:"1572",height:"620",decoding:"async",src:T}),r.jsxs(L,{gridTemplateColumns:["1fr","1fr","1fr","1fr 1fr"],gap:"16px",width:"100%",children:[r.jsxs(u,{flexDirection:"column",justifyContent:"center",width:"100%",maxWidth:["100%","100%","100%","600px","700px"],order:[2,2,2,1,1],margin:[0,0,0,"auto"],padding:[0,0,"0 0 16px 0",0],children:[r.jsxs(P,{children:["Hello, this is ",r.jsx("br",{}),r.jsx(B,{name:i.name})," ",r.jsx("br",{}),"I'm a ",r.jsx(_,{children:i.designation})]}),r.jsxs(u,{justifyContent:"center",gap:"20px",margin:"18px 0",children:[r.jsx(v,{target:"_blank",href:i.github,rel:"noopener noreferrer",children:r.jsx(b,{name:"icon-github",width:"30px",height:"30px",fill:f.colors.browns[9],className:"social-icon"})}),r.jsx(v,{target:"_blank",href:i.linkedIn,rel:"noopener noreferrer",children:r.jsx(b,{name:"icon-linkedin-circle",width:"30px",height:"30px",fill:f.colors.browns[9],className:"social-icon"})}),r.jsx(v,{target:"_blank",href:i.telegram,rel:"noopener noreferrer",children:r.jsx(b,{name:"icon-telegram",width:"30px",height:"30px",fill:f.colors.browns[9],className:"social-icon"})})]}),r.jsx(R,{togglePosition:e,setTogglePosition:c,handleDownload:j,cvHref:i.cv,coverLetterHref:i.coverLetter,labelFirst:"CV",labelSecond:"COVER LETTER",iconName:"icon-download"}),r.jsx(E,{to:F,children:"About me ➾"})]}),r.jsx(G,{})]})]})};export{q as default};
