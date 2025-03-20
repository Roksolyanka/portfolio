import{r as g,d as x,f as S,j as r,B as l,F as C,p as u,t as y,S as D,a as F,G as L,b as T,R as E}from"./index-saBTTolZ.js";import{S as R}from"./index-Blm65K6z.js";import{s as H,T as z}from"./skills-D5Kwx8Qe.js";import{p as B}from"./projects-Cq8EtiZE.js";import{b as N}from"./background-DhGLTqEF.js";const W=e=>{const[i,j]=g.useState(-1),[t,c]=g.useState(!1);return g.useEffect(()=>{const f=setInterval(()=>{i<e.length-1?j(b=>b+1):c(!0)},300);return()=>clearInterval(f)},[i,e.length]),{activeIndex:i,animationComplete:t}},A=x.span`
  color: ${({theme:e})=>e.accentColor};
  font-size: 30px;
  animation: ${S} 1s ease-out forwards;

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 50px;
  }
`,G=x("span").withConfig({shouldForwardProp:e=>e!=="isCustom"})`
  font-family: ${({isCustom:e})=>e?"Splash":"Dancing Script"};
`,P=({name:e})=>{const{activeIndex:i,animationComplete:j}=W(e);return r.jsx(A,{children:e.split("").map((t,c)=>r.jsx(G,{isCustom:t==="R"||t==="K",className:`nameLetter ${!j&&(i===c?"active":"")} ${!j&&(i===c-1||i===c+1?"neighbor":"")}`,children:t},c))})},O=x(l)`
  animation: ${S} 1s ease-out forwards;
`,U=x(l)`
  border-top-width: 2px;
`,o=x.span`
  color: ${({color:e})=>e};
`,{green:h,red:V,orange:m,pink:d,white:n,gray:s,yellow:a,blue:k}=y.colors,{gradient:v}=y,q=()=>r.jsxs(O,{position:"relative",borderRadius:"8px",backgroundImage:v[4],borderWidth:"3px",borderColor:h[6],order:[1,1,1,2],children:[r.jsxs(C,{flexDirection:"row",children:[r.jsx(l,{width:"100%",height:"1px",backgroundImage:v[0]}),r.jsx(l,{width:"100%",height:"1px",backgroundImage:v[1]})]}),r.jsx(l,{padding:"16px",children:r.jsxs(C,{flexDirection:"row",children:[r.jsx(l,{width:"12px",height:"12px",borderRadius:"50px",background:V[0]}),r.jsx(l,{width:"12px",height:"12px",borderRadius:"50px",background:m[4],margin:"0 8px"}),r.jsx(l,{width:"12px",height:"12px",borderRadius:"50px",background:h[2]})]})}),r.jsx(U,{overflow:"hidden",borderStyle:"solid",borderColor:h[9],padding:"16px",fontSize:["10px","10px","10px","12px"],children:r.jsxs("code",{children:[r.jsxs(l,{children:[r.jsx(o,{color:d[0],children:"const"}),r.jsx(o,{color:n[0],children:" coder"}),r.jsx(o,{color:d[0],children:" = "}),r.jsx(o,{color:s[0],children:"{"})]}),r.jsxs(l,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"name:"}),r.jsx(o,{color:s[0],children:" '"}),r.jsx(o,{color:a[0],children:u.name}),r.jsx(o,{color:s[0],children:"',"})]}),r.jsxs(l,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"skills: "}),r.jsx(o,{color:s[0],children:"['"}),u.skills.map((e,i)=>r.jsxs(g.Fragment,{children:[r.jsx(o,{color:a[0],children:e}),i<u.skills.length-1&&r.jsx(o,{color:s[0],children:"', '"})]},i)),r.jsx(o,{color:s[0],children:"'],"})]}),r.jsxs(l,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"hardWorker:"}),r.jsx(o,{color:m[4],children:" true"}),r.jsx(o,{color:s[0],children:","})]}),r.jsxs(l,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"quickLearner:"}),r.jsx(o,{color:m[4],children:" true"}),r.jsx(o,{color:s[0],children:","})]}),r.jsxs(l,{margin:"0 0 0 16px",children:[r.jsx(o,{color:n[0],children:"problemSolver:"}),r.jsx(o,{color:m[4],children:" true"}),r.jsx(o,{color:s[0],children:","})]}),r.jsxs(l,{margin:"0 0 0 16px",children:[r.jsx(o,{color:h[5],children:"isHireable"}),r.jsxs(o,{color:s[0],children:["() ","{"]})]}),r.jsxs(l,{margin:"0 0 0 32px",children:[r.jsx(o,{color:d[0],children:"const"}),r.jsxs(o,{color:s[0],children:[" ","{"," "]}),r.jsx(o,{color:n[0],children:"hardWorker"}),r.jsx(o,{color:s[0],children:", "}),r.jsx(o,{color:n[0],children:"problemSolver"}),r.jsx(o,{color:s[0],children:", "}),r.jsx(o,{color:n[0],children:"skills"}),r.jsxs(o,{color:s[0],children:[" ","}"," "]}),r.jsx(o,{color:d[0],children:"= "}),r.jsx(o,{color:d[0],children:"this"}),r.jsx(o,{color:s[0],children:";"})]}),r.jsxs(l,{margin:"0 0 0 32px",children:[r.jsx(o,{color:d[0],children:"return "}),r.jsx(o,{color:n[0],children:"hardWorker"}),r.jsx(o,{color:a[0],children:" && "}),r.jsx(o,{color:n[0],children:"problemSolver"}),r.jsx(o,{color:a[0],children:" && "}),r.jsx(o,{color:n[0],children:"skills.length"}),r.jsxs(o,{color:a[0],children:[" ",">","= "]}),r.jsx(o,{color:m[4],children:"7"}),r.jsx(o,{color:s[0],children:";"})]}),r.jsx(l,{margin:"0 0 0 16px",children:r.jsxs(o,{color:s[0],children:["}",","]})}),r.jsxs(l,{margin:"0 0 0 16px",children:[r.jsx(o,{color:h[5],children:"shareFunFact"}),r.jsxs(o,{color:s[0],children:["() ","{"]})]}),r.jsxs(l,{margin:"0 0 0 32px",children:[r.jsx(o,{color:k[11],children:"console."}),r.jsx(o,{color:n[0],children:"log"}),r.jsx(o,{color:s[0],children:"("}),r.jsx(o,{color:a[0],children:'"I once solved a bug at 3 AM without coffee. Let us just say, I am as reliable as your unit tests."'}),r.jsx(o,{color:s[0],children:");"})]}),r.jsx(l,{margin:"0 0 0 16px",children:r.jsxs(o,{color:s[0],children:["}",","]})}),r.jsx(l,{children:r.jsxs(o,{color:s[0],children:["}",";"]})}),r.jsx("br",{}),r.jsxs(l,{children:[r.jsx(o,{color:d[0],children:"if"}),r.jsx(o,{color:s[0],children:" ("}),r.jsx(o,{color:n[0],children:"coder."}),r.jsx(o,{color:h[5],children:"isHireable"}),r.jsx(o,{color:s[0],children:"()"}),r.jsxs(o,{color:s[0],children:[") ","{"]})]}),r.jsxs(l,{margin:"0 0 0 8px",children:[r.jsx(o,{color:n[0],children:"coder."}),r.jsx(o,{color:h[5],children:"shareFunFact"}),r.jsx(o,{color:s[0],children:"();"})]}),r.jsxs(l,{margin:"0 0 0 8px",children:[r.jsx(o,{color:k[11],children:"console."}),r.jsx(o,{color:n[0],children:"log"}),r.jsx(o,{color:s[0],children:"("}),r.jsx(o,{color:a[0],children:"'Hiring me means getting a hard-working problem-solver with a love for learning.'"}),r.jsx(o,{color:s[0],children:");"})]}),r.jsxs(l,{children:[r.jsxs(o,{color:s[0],children:["}"," "]}),r.jsx(o,{color:d[0],children:"else"}),r.jsxs(o,{color:s[0],children:[" ","{"]})]}),r.jsxs(l,{margin:"0 0 0 8px",children:[r.jsx(o,{color:k[11],children:"console."}),r.jsx(o,{color:n[0],children:"log"}),r.jsx(o,{color:s[0],children:"("}),r.jsx(o,{color:a[0],children:"'I may not meet all criteria, but I am still ready to improve and grow!'"}),r.jsx(o,{color:s[0],children:");"})]}),r.jsx(l,{children:r.jsxs(o,{color:s[0],children:["}"," "]})})]})})]}),K={personal:u,skills:H,projects:B},M=e=>({data:K[e]}),_=x.h1`
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
`,J=x.span`
  color: ${({theme:e})=>e.colors.orange[5]};
`;x.span`
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
`;const or=()=>{const{data:e}=M("personal"),{name:i,designation:j,cv:t,coverLetter:c,cvName:f,coverLetterName:b}=e,[w,$]=g.useState(!0),I=()=>{const p=document.createElement("a");p.href=w?t:c,p.download=w?f:b,document.body.appendChild(p),p.click(),document.body.removeChild(p)};return r.jsxs(D,{"aria-label":"hero section",children:[r.jsx(F,{alt:"Hero",loading:"lazy",width:1572,height:620,decoding:"async",src:N}),r.jsxs(L,{gridTemplateColumns:["1fr","1fr","1fr","1fr 1fr"],gap:"16px",width:"100%",children:[r.jsxs(C,{flexDirection:"column",justifyContent:"center",width:"100%",maxWidth:["100%","100%","100%","600px","700px"],order:[2,2,2,1,1],margin:[0,0,0,"auto"],padding:[0,0,"0 0 16px 0",0],children:[r.jsxs(_,{children:["Hello, this is ",r.jsx("br",{}),r.jsx(P,{name:i})," ",r.jsx("br",{}),"I'm a ",r.jsx(J,{children:j})]}),r.jsx(R,{}),r.jsx(z,{togglePosition:w,setTogglePosition:$,handleDownload:I,cvHref:t,coverLetterHref:c,labelFirst:"CV",labelSecond:"COVER LETTER",iconName:"icon-download"}),r.jsx(T,{to:E,children:"The Face Behind the Code 👩‍💻 ➾"})]}),r.jsx(q,{})]})]})};export{or as default};
