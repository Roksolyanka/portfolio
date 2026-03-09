import{r as u,d as a,f as C,j as r,B as l,F as v,p as f,t as S,S as I,a as F,G as L,b as T,R as E}from"./index-B17MNmM0.js";import{S as R}from"./index-Cn2kyVLs.js";import{T as H}from"./index-BBpAFf5M.js";import{b as B}from"./background-DhGLTqEF.js";const z=e=>{const[n,h]=u.useState(-1),[c,d]=u.useState(!1);return u.useEffect(()=>{const b=setInterval(()=>{n<e.length-1?h(p=>p+1):d(!0)},300);return()=>clearInterval(b)},[n,e.length]),{activeIndex:n,animationComplete:c}},D=a.span`
  color: ${({theme:e})=>e.accentColor};
  font-size: 30px;
  animation: ${C} 1s ease-out forwards;

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 50px;
  }
`,N=a("span").withConfig({shouldForwardProp:e=>e!=="isCustom"})`
  font-family: ${({isCustom:e})=>e?"Splash":"Dancing Script"};
`,W=({name:e})=>{const{activeIndex:n,animationComplete:h}=z(e);return r.jsx(D,{children:e.split("").map((c,d)=>r.jsx(N,{isCustom:c==="R"||c==="K",className:`nameLetter ${!h&&(n===d?"active":"")} ${!h&&(n===d-1||n===d+1?"neighbor":"")}`,children:c},d))})},A=a(l)`
  animation: ${C} 1s ease-out forwards;
`,G=a(l)`
  border-top-width: 2px;
`,o=a.span`
  color: ${({color:e})=>e};
`,{green:j,red:P,orange:g,pink:t,white:i,gray:s,yellow:x,blue:w}=S.colors,{gradient:k}=S,O=()=>r.jsxs(A,{position:"relative",borderRadius:"8px",backgroundImage:k[4],borderWidth:"3px",borderColor:j[6],order:[1,1,1,2],children:[r.jsxs(v,{flexDirection:"row",children:[r.jsx(l,{width:"100%",height:"1px",backgroundImage:k[0]}),r.jsx(l,{width:"100%",height:"1px",backgroundImage:k[1]})]}),r.jsx(l,{padding:"16px",children:r.jsxs(v,{flexDirection:"row",children:[r.jsx(l,{width:"12px",height:"12px",borderRadius:"50px",background:P[0]}),r.jsx(l,{width:"12px",height:"12px",borderRadius:"50px",background:g[4],margin:"0 8px"}),r.jsx(l,{width:"12px",height:"12px",borderRadius:"50px",background:j[2]})]})}),r.jsx(G,{overflow:"hidden",borderStyle:"solid",borderColor:j[9],padding:"16px",fontSize:["10px","10px","10px","12px"],children:r.jsxs("code",{children:[r.jsxs(l,{children:[r.jsx(o,{color:t[0],children:"const"}),r.jsx(o,{color:i[0],children:" coder"}),r.jsx(o,{color:t[0],children:" = "}),r.jsx(o,{color:s[0],children:"{"})]}),r.jsxs(l,{margin:"0 0 0 16px",children:[r.jsx(o,{color:i[0],children:"name:"}),r.jsx(o,{color:s[0],children:" '"}),r.jsx(o,{color:x[0],children:f.name}),r.jsx(o,{color:s[0],children:"',"})]}),r.jsxs(l,{margin:"0 0 0 16px",children:[r.jsx(o,{color:i[0],children:"skills: "}),r.jsx(o,{color:s[0],children:"['"}),f.skills.map((e,n)=>r.jsxs(u.Fragment,{children:[r.jsx(o,{color:x[0],children:e}),n<f.skills.length-1&&r.jsx(o,{color:s[0],children:"', '"})]},n)),r.jsx(o,{color:s[0],children:"'],"})]}),r.jsxs(l,{margin:"0 0 0 16px",children:[r.jsx(o,{color:i[0],children:"hardWorker:"}),r.jsx(o,{color:g[4],children:" true"}),r.jsx(o,{color:s[0],children:","})]}),r.jsxs(l,{margin:"0 0 0 16px",children:[r.jsx(o,{color:i[0],children:"quickLearner:"}),r.jsx(o,{color:g[4],children:" true"}),r.jsx(o,{color:s[0],children:","})]}),r.jsxs(l,{margin:"0 0 0 16px",children:[r.jsx(o,{color:i[0],children:"problemSolver:"}),r.jsx(o,{color:g[4],children:" true"}),r.jsx(o,{color:s[0],children:","})]}),r.jsxs(l,{margin:"0 0 0 16px",children:[r.jsx(o,{color:j[5],children:"isHireable"}),r.jsxs(o,{color:s[0],children:["() ","{"]})]}),r.jsxs(l,{margin:"0 0 0 32px",children:[r.jsx(o,{color:t[0],children:"const"}),r.jsxs(o,{color:s[0],children:[" ","{"," "]}),r.jsx(o,{color:i[0],children:"hardWorker"}),r.jsx(o,{color:s[0],children:", "}),r.jsx(o,{color:i[0],children:"problemSolver"}),r.jsx(o,{color:s[0],children:", "}),r.jsx(o,{color:i[0],children:"skills"}),r.jsxs(o,{color:s[0],children:[" ","}"," "]}),r.jsx(o,{color:t[0],children:"= "}),r.jsx(o,{color:t[0],children:"this"}),r.jsx(o,{color:s[0],children:";"})]}),r.jsxs(l,{margin:"0 0 0 32px",children:[r.jsx(o,{color:t[0],children:"return "}),r.jsx(o,{color:i[0],children:"hardWorker"}),r.jsx(o,{color:x[0],children:" && "}),r.jsx(o,{color:i[0],children:"problemSolver"}),r.jsx(o,{color:x[0],children:" && "}),r.jsx(o,{color:i[0],children:"skills.length"}),r.jsxs(o,{color:x[0],children:[" ",">","= "]}),r.jsx(o,{color:g[4],children:"7"}),r.jsx(o,{color:s[0],children:";"})]}),r.jsx(l,{margin:"0 0 0 16px",children:r.jsxs(o,{color:s[0],children:["}",","]})}),r.jsxs(l,{margin:"0 0 0 16px",children:[r.jsx(o,{color:j[5],children:"shareFunFact"}),r.jsxs(o,{color:s[0],children:["() ","{"]})]}),r.jsxs(l,{margin:"0 0 0 32px",children:[r.jsx(o,{color:w[11],children:"console."}),r.jsx(o,{color:i[0],children:"log"}),r.jsx(o,{color:s[0],children:"("}),r.jsx(o,{color:x[0],children:'"I once solved a bug at 3 AM without coffee. Let us just say, I am as reliable as your unit tests."'}),r.jsx(o,{color:s[0],children:");"})]}),r.jsx(l,{margin:"0 0 0 16px",children:r.jsxs(o,{color:s[0],children:["}",","]})}),r.jsx(l,{children:r.jsxs(o,{color:s[0],children:["}",";"]})}),r.jsx("br",{}),r.jsxs(l,{children:[r.jsx(o,{color:t[0],children:"if"}),r.jsx(o,{color:s[0],children:" ("}),r.jsx(o,{color:i[0],children:"coder."}),r.jsx(o,{color:j[5],children:"isHireable"}),r.jsx(o,{color:s[0],children:"()"}),r.jsxs(o,{color:s[0],children:[") ","{"]})]}),r.jsxs(l,{margin:"0 0 0 8px",children:[r.jsx(o,{color:i[0],children:"coder."}),r.jsx(o,{color:j[5],children:"shareFunFact"}),r.jsx(o,{color:s[0],children:"();"})]}),r.jsxs(l,{margin:"0 0 0 8px",children:[r.jsx(o,{color:w[11],children:"console."}),r.jsx(o,{color:i[0],children:"log"}),r.jsx(o,{color:s[0],children:"("}),r.jsx(o,{color:x[0],children:"'Hiring me means getting a hard-working problem-solver with a love for learning.'"}),r.jsx(o,{color:s[0],children:");"})]}),r.jsxs(l,{children:[r.jsxs(o,{color:s[0],children:["}"," "]}),r.jsx(o,{color:t[0],children:"else"}),r.jsxs(o,{color:s[0],children:[" ","{"]})]}),r.jsxs(l,{margin:"0 0 0 8px",children:[r.jsx(o,{color:w[11],children:"console."}),r.jsx(o,{color:i[0],children:"log"}),r.jsx(o,{color:s[0],children:"("}),r.jsx(o,{color:x[0],children:"'I may not meet all criteria, but I am still ready to improve and grow!'"}),r.jsx(o,{color:s[0],children:");"})]}),r.jsx(l,{children:r.jsxs(o,{color:s[0],children:["}"," "]})})]})})]}),U=a.h1`
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
`,V=a.span`
  color: ${({theme:e})=>e.colors.orange[5]};
`;a.span`
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
`;const J=()=>{const{name:e,designation:n,cv:h,coverLetter:c,cvName:d,coverLetterName:b}=f,[p,y]=u.useState(!0),$=()=>{const m=document.createElement("a");m.href=p?h:c,m.download=p?d:b,document.body.appendChild(m),m.click(),document.body.removeChild(m)};return r.jsxs(I,{"aria-label":"hero section",children:[r.jsx(F,{alt:"Hero",fetchpriority:"high",width:1572,height:620,decoding:"async",src:B}),r.jsxs(L,{gridTemplateColumns:["1fr","1fr","1fr","1fr 1fr"],gap:"16px",width:"100%",children:[r.jsxs(v,{flexDirection:"column",justifyContent:"center",width:"100%",maxWidth:["100%","100%","100%","600px","700px"],order:[2,2,2,1,1],margin:[0,0,0,"auto"],padding:[0,0,"0 0 16px 0",0],children:[r.jsxs(U,{children:["Hello, this is ",r.jsx("br",{}),r.jsx(W,{name:e})," ",r.jsx("br",{}),"I'm a ",r.jsx(V,{children:n})]}),r.jsx(R,{}),r.jsx(H,{togglePosition:p,setTogglePosition:y,handleDownload:$,cvHref:h,coverLetterHref:c,labelFirst:"CV",labelSecond:"COVER LETTER",iconName:"icon-download"}),r.jsx(T,{to:E,children:"The Face Behind the Code 👩‍💻 ➾"})]}),r.jsx(O,{})]})]})};export{J as default};
