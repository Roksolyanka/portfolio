import{r as g,d as a,f as w,j as r,B as s,F as b,p as d,t as k,S,a as y,G as $,b as I,R as L}from"./index-dcusRTRR.js";import{S as E}from"./index-q7r7BDKW.js";import{T as F}from"./index-J5SauWqg.js";import{b as R}from"./background-DhGLTqEF.js";const T=e=>{const[i,j]=g.useState(-1),[c,p]=g.useState(!1);return g.useEffect(()=>{const v=setInterval(()=>{i<e.length-1?j(C=>C+1):p(!0)},300);return()=>clearInterval(v)},[i,e.length]),{activeIndex:i,animationComplete:c}},H=a.span`
  color: ${({theme:e})=>e.accentColor};
  font-size: 30px;
  animation: ${w} 1s ease-out forwards;

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 50px;
  }
`,z=a("span").withConfig({shouldForwardProp:e=>e!=="isCustom"})`
  font-family: ${({isCustom:e})=>e?"Splash":"Dancing Script"};
`,B=({name:e})=>{const{activeIndex:i,animationComplete:j}=T(e);return r.jsx(H,{children:e.split("").map((c,p)=>r.jsx(z,{isCustom:c==="R"||c==="K",className:`nameLetter ${!j&&(i===p?"active":"")} ${!j&&(i===p-1||i===p+1?"neighbor":"")}`,children:c},p))})},A=a(s)`
  animation: ${w} 1s ease-out forwards;
`,D=a(s)`
  border-top-width: 2px;
`,o=a.span`
  color: ${({color:e})=>e};
`,{green:h,red:N,orange:m,pink:t,white:n,gray:l,yellow:x,blue:u}=k.colors,{gradient:f}=k,W=()=>r.jsxs(A,{position:"relative",borderRadius:"8px",backgroundImage:f[4],borderWidth:"3px",borderColor:h[6],order:[1,1,1,2],children:[r.jsxs(b,{flexDirection:"row",children:[r.jsx(s,{width:"100%",height:"1px",backgroundImage:f[0]}),r.jsx(s,{width:"100%",height:"1px",backgroundImage:f[1]})]}),r.jsx(s,{padding:"16px",children:r.jsxs(b,{flexDirection:"row",children:[r.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:N[0]}),r.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:m[4],margin:"0 8px"}),r.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:h[2]})]})}),r.jsx(D,{overflow:"hidden",borderStyle:"solid",borderColor:h[9],padding:"16px",fontSize:["10px","10px","10px","12px"],children:r.jsxs("code",{children:[r.jsxs(s,{children:[r.jsx(o,{color:t[0],children:"const"}),r.jsx(o,{color:n[0],children:" coder"}),r.jsx(o,{color:t[0],children:" = "}),r.jsx(o,{color:l[0],children:"{"})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"name:"}),r.jsx(o,{color:l[0],children:" '"}),r.jsx(o,{color:x[0],children:d.name}),r.jsx(o,{color:l[0],children:"',"})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"skills: "}),r.jsx(o,{color:l[0],children:"['"}),d.skills.map((e,i)=>r.jsxs(g.Fragment,{children:[r.jsx(o,{color:x[0],children:e}),i<d.skills.length-1&&r.jsx(o,{color:l[0],children:"', '"})]},i)),r.jsx(o,{color:l[0],children:"'],"})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"hardWorker:"}),r.jsx(o,{color:m[4],children:" true"}),r.jsx(o,{color:l[0],children:","})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"quickLearner:"}),r.jsx(o,{color:m[4],children:" true"}),r.jsx(o,{color:l[0],children:","})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"problemSolver:"}),r.jsx(o,{color:m[4],children:" true"}),r.jsx(o,{color:l[0],children:","})]}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:h[5],children:"isHireable"}),r.jsxs(o,{color:l[0],children:["() ","{"]})]}),r.jsxs(s,{margin:"0 0 0 32px",children:[r.jsx(o,{color:t[0],children:"const"}),r.jsxs(o,{color:l[0],children:[" ","{"," "]}),r.jsx(o,{color:n[0],children:"hardWorker"}),r.jsx(o,{color:l[0],children:", "}),r.jsx(o,{color:n[0],children:"problemSolver"}),r.jsx(o,{color:l[0],children:", "}),r.jsx(o,{color:n[0],children:"skills"}),r.jsxs(o,{color:l[0],children:[" ","}"," "]}),r.jsx(o,{color:t[0],children:"= "}),r.jsx(o,{color:t[0],children:"this"}),r.jsx(o,{color:l[0],children:";"})]}),r.jsxs(s,{margin:"0 0 0 32px",children:[r.jsx(o,{color:t[0],children:"return "}),r.jsx(o,{color:n[0],children:"hardWorker"}),r.jsx(o,{color:x[0],children:" && "}),r.jsx(o,{color:n[0],children:"problemSolver"}),r.jsx(o,{color:x[0],children:" && "}),r.jsx(o,{color:n[0],children:"skills.length"}),r.jsxs(o,{color:x[0],children:[" ",">","= "]}),r.jsx(o,{color:m[4],children:"7"}),r.jsx(o,{color:l[0],children:";"})]}),r.jsx(s,{margin:"0 0 0 16px",children:r.jsxs(o,{color:l[0],children:["}",","]})}),r.jsxs(s,{margin:"0 0 0 16px",children:[r.jsx(o,{color:h[5],children:"shareFunFact"}),r.jsxs(o,{color:l[0],children:["() ","{"]})]}),r.jsxs(s,{margin:"0 0 0 32px",children:[r.jsx(o,{color:u[11],children:"console."}),r.jsx(o,{color:n[0],children:"log"}),r.jsx(o,{color:l[0],children:"("}),r.jsx(o,{color:x[0],children:'"I once solved a bug at 3 AM without coffee. Let us just say, I am as reliable as your unit tests."'}),r.jsx(o,{color:l[0],children:");"})]}),r.jsx(s,{margin:"0 0 0 16px",children:r.jsxs(o,{color:l[0],children:["}",","]})}),r.jsx(s,{children:r.jsxs(o,{color:l[0],children:["}",";"]})}),r.jsx("br",{}),r.jsxs(s,{children:[r.jsx(o,{color:t[0],children:"if"}),r.jsx(o,{color:l[0],children:" ("}),r.jsx(o,{color:n[0],children:"coder."}),r.jsx(o,{color:h[5],children:"isHireable"}),r.jsx(o,{color:l[0],children:"()"}),r.jsxs(o,{color:l[0],children:[") ","{"]})]}),r.jsxs(s,{margin:"0 0 0 8px",children:[r.jsx(o,{color:n[0],children:"coder."}),r.jsx(o,{color:h[5],children:"shareFunFact"}),r.jsx(o,{color:l[0],children:"();"})]}),r.jsxs(s,{margin:"0 0 0 8px",children:[r.jsx(o,{color:u[11],children:"console."}),r.jsx(o,{color:n[0],children:"log"}),r.jsx(o,{color:l[0],children:"("}),r.jsx(o,{color:x[0],children:"'Hiring me means getting a hard-working problem-solver with a love for learning.'"}),r.jsx(o,{color:l[0],children:");"})]}),r.jsxs(s,{children:[r.jsxs(o,{color:l[0],children:["}"," "]}),r.jsx(o,{color:t[0],children:"else"}),r.jsxs(o,{color:l[0],children:[" ","{"]})]}),r.jsxs(s,{margin:"0 0 0 8px",children:[r.jsx(o,{color:u[11],children:"console."}),r.jsx(o,{color:n[0],children:"log"}),r.jsx(o,{color:l[0],children:"("}),r.jsx(o,{color:x[0],children:"'I may not meet all criteria, but I am still ready to improve and grow!'"}),r.jsx(o,{color:l[0],children:");"})]}),r.jsx(s,{children:r.jsxs(o,{color:l[0],children:["}"," "]})})]})})]}),G=a.h1`
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
`,P=a.span`
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
`;const K=()=>{const[e,i]=g.useState(!0),j=()=>{const c=document.createElement("a");c.href=e?d.cv:d.coverLetter,c.download=e?d.cvName:d.coverLetterName,document.body.appendChild(c),c.click(),document.body.removeChild(c)};return r.jsxs(S,{"aria-label":"hero section",children:[r.jsx(y,{alt:"Hero",loading:"lazy",width:1572,height:620,decoding:"async",src:R}),r.jsxs($,{gridTemplateColumns:["1fr","1fr","1fr","1fr 1fr"],gap:"16px",width:"100%",children:[r.jsxs(b,{flexDirection:"column",justifyContent:"center",width:"100%",maxWidth:["100%","100%","100%","600px","700px"],order:[2,2,2,1,1],margin:[0,0,0,"auto"],padding:[0,0,"0 0 16px 0",0],children:[r.jsxs(G,{children:["Hello, this is ",r.jsx("br",{}),r.jsx(B,{name:d.name})," ",r.jsx("br",{}),"I'm a ",r.jsx(P,{children:d.designation})]}),r.jsx(E,{}),r.jsx(F,{togglePosition:e,setTogglePosition:i,handleDownload:j,cvHref:d.cv,coverLetterHref:d.coverLetter,labelFirst:"CV",labelSecond:"COVER LETTER",iconName:"icon-download"}),r.jsx(I,{to:L,children:"About me ➾"})]}),r.jsx(W,{})]})]})};export{K as default};
