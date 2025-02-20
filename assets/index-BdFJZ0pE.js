import{r as f,d,f as C,j as r,B as s,F as u,p as i,R as I,t as g,S as $,a as L,G as R,I as b,b as E,c as T}from"./index-CWJ4oigr.js";import{T as N}from"./index-hJllWPMu.js";import{b as z}from"./background-DhGLTqEF.js";const F=e=>{const[c,j]=f.useState(-1),[t,p]=f.useState(!1);return f.useEffect(()=>{const y=setInterval(()=>{c<e.length-1?j(S=>S+1):p(!0)},300);return()=>clearInterval(y)},[c,e.length]),{activeIndex:c,animationComplete:t}},B=d.span`
  color: ${({theme:e})=>e.accentColor};
  font-size: 30px;
  animation: ${C} 1s ease-out forwards;

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 50px;
  }
`,H=d("span").withConfig({shouldForwardProp:e=>e!=="isCustom"})`
  font-family: ${({isCustom:e})=>e?"Splash":"Dancing Script"};
`,A=({name:e})=>{const{activeIndex:c,animationComplete:j}=F(e);return r.jsx(B,{children:e.split("").map((t,p)=>r.jsx(H,{isCustom:t==="R"||t==="K",className:`nameLetter ${!j&&(c===p?"active":"")} ${!j&&(c===p-1||c===p+1?"neighbor":"")}`,children:t},p))})},D=d(s)`
  animation: ${C} 1s ease-out forwards;
`,W=d(s)`
  border-top-width: 2px;
`,o=d.span`
  color: ${({color:e})=>e};
`,{green:h,red:G,orange:m,pink:a,white:n,gray:l,yellow:x,blue:w}=g.colors,{gradient:k}=g,P=()=>r.jsxs(D,{position:"relative",borderRadius:"8px",backgroundImage:k[4],borderWidth:"3px",borderColor:h[6],order:[1,1,1,2],children:[r.jsxs(u,{flexDirection:"row",children:[r.jsx(s,{width:"100%",height:"1px",backgroundImage:k[0]}),r.jsx(s,{width:"100%",height:"1px",backgroundImage:k[1]})]}),r.jsx(s,{padding:"16px",children:r.jsxs(u,{flexDirection:"row",children:[r.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:G[0]}),r.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:m[4],margin:"0 8px"}),r.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:h[2]})]})}),r.jsx(W,{overflow:"hidden",borderStyle:"solid",borderColor:h[9],padding:"16px",fontSize:["10px","10px","10px","12px"],children:r.jsxs("code",{children:[r.jsxs(s,{children:[r.jsx(o,{color:a[0],children:"const"}),r.jsx(o,{color:n[0],children:" coder"}),r.jsx(o,{color:a[0],children:" = "}),r.jsx(o,{color:l[0],children:"{"})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"name:"}),r.jsx(o,{color:l[0],children:" '"}),r.jsx(o,{color:x[0],children:i.name}),r.jsx(o,{color:l[0],children:"',"})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"skills: "}),r.jsx(o,{color:l[0],children:"['"}),i.skills.map((e,c)=>r.jsxs(I.Fragment,{children:[r.jsx(o,{color:x[0],children:e}),c<i.skills.length-1&&r.jsx(o,{color:l[0],children:"', '"})]},c)),r.jsx(o,{color:l[0],children:"'],"})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"hardWorker:"}),r.jsx(o,{color:m[4],children:" true"}),r.jsx(o,{color:l[0],children:","})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"quickLearner:"}),r.jsx(o,{color:m[4],children:" true"}),r.jsx(o,{color:l[0],children:","})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"problemSolver:"}),r.jsx(o,{color:m[4],children:" true"}),r.jsx(o,{color:l[0],children:","})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:h[5],children:"hireable"}),r.jsxs(o,{color:l[0],children:["() ","{"]})]}),r.jsxs(s,{margin:"0 0 0 32px",children:[r.jsx(o,{color:a[0],children:"const"}),r.jsxs(o,{color:l[0],children:[" ","{"," "]}),r.jsx(o,{color:n[0],children:"hardWorker"}),r.jsx(o,{color:l[0],children:", "}),r.jsx(o,{color:n[0],children:"problemSolver"}),r.jsx(o,{color:l[0],children:", "}),r.jsx(o,{color:n[0],children:"skills"}),r.jsxs(o,{color:l[0],children:[" ","}"," "]}),r.jsx(o,{color:a[0],children:"= "}),r.jsx(o,{color:a[0],children:"this"}),r.jsx(o,{color:l[0],children:";"})]}),r.jsxs(s,{margin:"0 0 0 32px",children:[r.jsx(o,{color:a[0],children:"return "}),r.jsx(o,{color:n[0],children:"hardWorker"}),r.jsx(o,{color:x[0],children:" && "}),r.jsx(o,{color:n[0],children:"problemSolver"}),r.jsx(o,{color:x[0],children:" && "}),r.jsx(o,{color:n[0],children:"skills.length"}),r.jsxs(o,{color:x[0],children:[" ",">","= "]}),r.jsx(o,{color:m[4],children:"7"}),r.jsx(o,{color:l[0],children:";"})]}),r.jsx(s,{margin:"0 0 0 16px",children:r.jsxs(o,{color:l[0],children:["}",","]})}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:h[5],children:"funFact"}),r.jsxs(o,{color:l[0],children:["() ","{"]})]}),r.jsxs(s,{margin:"0 0 0 32px",children:[r.jsx(o,{color:w[11],children:"console."}),r.jsx(o,{color:n[0],children:"log"}),r.jsx(o,{color:l[0],children:"("}),r.jsx(o,{color:x[0],children:'"I once solved a bug at 3 AM without coffee. Let us just say, I am as reliable as your unit tests."'}),r.jsx(o,{color:l[0],children:");"})]}),r.jsx(s,{margin:"0 0 0 16px",children:r.jsxs(o,{color:l[0],children:["}",","]})}),r.jsx(s,{children:r.jsxs(o,{color:l[0],children:["}",";"]})}),r.jsx("br",{}),r.jsxs(s,{children:[r.jsx(o,{color:a[0],children:"if"}),r.jsx(o,{color:l[0],children:" ("}),r.jsx(o,{color:n[0],children:"coder."}),r.jsx(o,{color:h[5],children:"hireable"}),r.jsx(o,{color:l[0],children:"()"}),r.jsxs(o,{color:l[0],children:[") ","{"]})]}),r.jsxs(s,{margin:"0 0 0 8px",children:[r.jsx(o,{color:n[0],children:"coder."}),r.jsx(o,{color:h[5],children:"funFact"}),r.jsx(o,{color:l[0],children:"();"})]}),r.jsxs(s,{margin:"0 0 0 8px",children:[r.jsx(o,{color:w[11],children:"console."}),r.jsx(o,{color:n[0],children:"log"}),r.jsx(o,{color:l[0],children:"("}),r.jsx(o,{color:x[0],children:"'Hiring me means getting a hard-working problem-solver with a love for learning.'"}),r.jsx(o,{color:l[0],children:");"})]}),r.jsxs(s,{children:[r.jsxs(o,{color:l[0],children:["}"," "]}),r.jsx(o,{color:a[0],children:"else"}),r.jsxs(o,{color:l[0],children:[" ","{"]})]}),r.jsxs(s,{margin:"0 0 0 8px",children:[r.jsx(o,{color:w[11],children:"console."}),r.jsx(o,{color:n[0],children:"log"}),r.jsx(o,{color:l[0],children:"("}),r.jsx(o,{color:x[0],children:"'I may not meet all criteria, but I am still ready to improve and grow!'"}),r.jsx(o,{color:l[0],children:");"})]}),r.jsx(s,{children:r.jsxs(o,{color:l[0],children:["}"," "]})})]})})]}),_=d.h1`
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
`;const K=()=>{const[e,c]=f.useState(!0),j=()=>{const t=document.createElement("a");t.href=e?i.cv:i.coverLetter,t.download=e?i.cvName:i.coverLetterName,document.body.appendChild(t),t.click(),document.body.removeChild(t)};return r.jsxs($,{"aria-label":"hero section",children:[r.jsx(L,{alt:"Hero",loading:"lazy",width:"1572",height:"620",decoding:"async",src:z}),r.jsxs(R,{gridTemplateColumns:["1fr","1fr","1fr","1fr 1fr"],gap:"16px",width:"100%",children:[r.jsxs(u,{flexDirection:"column",justifyContent:"center",width:"100%",maxWidth:["100%","100%","100%","600px","700px"],order:[2,2,2,1,1],margin:[0,0,0,"auto"],padding:[0,0,"0 0 16px 0",0],children:[r.jsxs(_,{children:["Hello, this is ",r.jsx("br",{}),r.jsx(A,{name:i.name})," ",r.jsx("br",{}),"I'm a ",r.jsx(O,{children:i.designation})]}),r.jsxs(u,{justifyContent:"center",gap:"20px",margin:"18px 0",children:[r.jsx(v,{target:"_blank",href:i.github,rel:"noopener noreferrer",children:r.jsx(b,{name:"icon-github",width:"30px",height:"30px",fill:g.colors.browns[9],className:"social-icon"})}),r.jsx(v,{target:"_blank",href:i.linkedIn,rel:"noopener noreferrer",children:r.jsx(b,{name:"icon-linkedin-circle",width:"30px",height:"30px",fill:g.colors.browns[9],className:"social-icon"})}),r.jsx(v,{target:"_blank",href:i.telegram,rel:"noopener noreferrer",children:r.jsx(b,{name:"icon-telegram",width:"30px",height:"30px",fill:g.colors.browns[9],className:"social-icon"})})]}),r.jsx(N,{togglePosition:e,setTogglePosition:c,handleDownload:j,cvHref:i.cv,coverLetterHref:i.coverLetter,labelFirst:"CV",labelSecond:"COVER LETTER",iconName:"icon-download"}),r.jsx(E,{to:T,children:"About me ➾"})]}),r.jsx(P,{})]})]})};export{K as default};
