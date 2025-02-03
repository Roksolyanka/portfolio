import{r as h,d as t,f as p,j as o,B as s,t as r,F as x,p as c,R as w,a as y,G as u,I as g,S as b,b as k}from"./index-BpXZVs8y.js";import{T as v}from"./index-DDFAzzR5.js";import{b as C}from"./background-DhGLTqEF.js";const S=l=>{const[i,a]=h.useState(-1),[n,d]=h.useState(!1);return h.useEffect(()=>{const m=setInterval(()=>{i<l.length-1?a(f=>f+1):d(!0)},300);return()=>clearInterval(m)},[i,l.length]),{activeIndex:i,animationComplete:n}},I=t.span`
  color: ${({theme:l})=>l.accentColor};
  font-size: 30px;
  animation: ${p} 1s ease-out forwards;

  @media (min-width: ${({theme:l})=>l.breakpoints[1]}) {
    font-size: 50px;
  }
`,$=t("span").withConfig({shouldForwardProp:l=>l!=="isCustom"})`
  font-family: ${({isCustom:l})=>l?"Splash":"Dancing Script"};
`,L=({name:l})=>{const{activeIndex:i,animationComplete:a}=S(l);return o.jsx(I,{children:l.split("").map((n,d)=>o.jsx($,{isCustom:n==="R"||n==="K",className:`nameLetter ${!a&&(i===d?"active":"")} ${!a&&(i===d-1||i===d+1?"neighbor":"")}`,children:n},d))})},R=t(s)`
  animation: ${p} 1s ease-out forwards;
`,T=t(s)`
  border-top-width: 2px;
`,e=t.span`
  color: ${({color:l})=>l};
`,E=()=>o.jsxs(R,{position:"relative",borderRadius:"8px",backgroundImage:r.colors.gradient[4],borderWidth:"3px",borderColor:r.colors.green[6],order:[1,1,1,2],children:[o.jsxs(x,{flexDirection:"row",children:[o.jsx(s,{width:"100%",height:"1px",backgroundImage:r.colors.gradient[0]}),o.jsx(s,{width:"100%",height:"1px",backgroundImage:r.colors.gradient[1]})]}),o.jsx(s,{padding:"16px",children:o.jsxs(x,{flexDirection:"row",children:[o.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:r.colors.red[0]}),o.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:r.colors.orange[4],margin:"0 8px"}),o.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:r.colors.green[2]})]})}),o.jsx(T,{overflow:"hidden",borderStyle:"solid",borderColor:r.colors.green[9],padding:"16px",fontSize:["10px","10px","10px","12px"],children:o.jsxs("code",{children:[o.jsxs("div",{children:[o.jsx(e,{color:r.colors.pink[0],children:"const"}),o.jsx(e,{color:r.colors.white[0],children:" coder"}),o.jsx(e,{color:r.colors.pink[0],children:" = "}),o.jsx(e,{color:r.colors.gray[0],children:"❴"})]}),o.jsxs(s,{margin:"0 0 0 16px",children:[o.jsx(e,{color:r.colors.white[0],children:"name:"}),o.jsx(e,{color:r.colors.gray[0],children:" '"}),o.jsx(e,{color:r.colors.yellow[0],children:c.name}),o.jsx(e,{color:r.colors.gray[0],children:"',"})]}),o.jsxs(s,{margin:"0 0 0 16px",children:[o.jsx(e,{color:r.colors.white[0],children:"skills: "}),o.jsx(e,{color:r.colors.gray[0],children:"['"}),c.skills.map((l,i)=>o.jsxs(w.Fragment,{children:[o.jsx(e,{color:r.colors.yellow[0],children:l}),i<c.skills.length-1&&o.jsx(e,{color:r.colors.gray[0],children:"', '"})]},i)),o.jsx(e,{color:r.colors.gray[0],children:"'],"})]}),o.jsxs(s,{margin:"0 0 0 16px",children:[o.jsx(e,{color:r.colors.white[0],children:"hardWorker:"}),o.jsx(e,{color:r.colors.orange[4],children:" true"}),o.jsx(e,{color:r.colors.gray[0],children:","})]}),o.jsxs(s,{margin:"0 0 0 16px",children:[o.jsx(e,{color:r.colors.white[0],children:"quickLearner:"}),o.jsx(e,{color:r.colors.orange[4],children:" true"}),o.jsx(e,{color:r.colors.gray[0],children:","})]}),o.jsxs(s,{margin:"0 0 0 16px",children:[o.jsx(e,{color:r.colors.white[0],children:"problemSolver:"}),o.jsx(e,{color:r.colors.orange[4],children:" true"}),o.jsx(e,{color:r.colors.gray[0],children:","})]}),o.jsxs(s,{margin:"0 0 0 16px",children:[o.jsx(e,{color:r.colors.green[5],children:"hireable"}),o.jsx(e,{color:r.colors.gray[0],children:"() ❴"})]}),o.jsxs(s,{margin:"0 0 0 32px",children:[o.jsx(e,{color:r.colors.pink[0],children:"const"}),o.jsx(e,{color:r.colors.gray[0],children:" ❴ "}),o.jsx(e,{color:r.colors.white[0],children:"hardWorker"}),o.jsx(e,{color:r.colors.gray[0],children:", "}),o.jsx(e,{color:r.colors.white[0],children:"problemSolver"}),o.jsx(e,{color:r.colors.gray[0],children:", "}),o.jsx(e,{color:r.colors.white[0],children:"skills"}),o.jsx(e,{color:r.colors.gray[0],children:" ❵ "}),o.jsx(e,{color:r.colors.pink[0],children:"= "}),o.jsx(e,{color:r.colors.pink[0],children:"this"}),o.jsx(e,{color:r.colors.gray[0],children:";"})]}),o.jsxs(s,{margin:"0 0 0 32px",children:[o.jsx(e,{color:r.colors.pink[0],children:"return "}),o.jsx(e,{color:r.colors.white[0],children:"hardWorker"}),o.jsx(e,{color:r.colors.yellow[0],children:" && "}),o.jsx(e,{color:r.colors.white[0],children:"problemSolver"}),o.jsx(e,{color:r.colors.yellow[0],children:" && "}),o.jsx(e,{color:r.colors.white[0],children:"skills.length"}),o.jsx(e,{color:r.colors.yellow[0],children:" ❯= "}),o.jsx(e,{color:r.colors.orange[4],children:"7"}),o.jsx(e,{color:r.colors.gray[0],children:";"})]}),o.jsx(s,{margin:"0 0 0 16px",children:o.jsx(e,{color:r.colors.gray[0],children:"❵,"})}),o.jsxs(s,{margin:"0 0 0 16px",children:[o.jsx(e,{color:r.colors.green[5],children:"funFact"}),o.jsx(e,{color:r.colors.gray[0],children:"() ❴"})]}),o.jsxs(s,{margin:"0 0 0 32px",children:[o.jsx(e,{color:r.colors.blue[11],children:"console."}),o.jsx(e,{color:r.colors.white[0],children:"log"}),o.jsx(e,{color:r.colors.gray[0],children:"("}),o.jsx(e,{color:r.colors.yellow[0],children:`"I once solved a bug at 3 AM without coffee. Let's just say, I'm as reliable as your unit tests."`}),o.jsx(e,{color:r.colors.gray[0],children:");"})]}),o.jsx(s,{margin:"0 0 0 16px",children:o.jsx(e,{color:r.colors.gray[0],children:"❵,"})}),o.jsx("div",{children:o.jsx(e,{color:r.colors.gray[0],children:"❵;"})}),o.jsx("br",{}),o.jsxs("div",{children:[o.jsx(e,{color:r.colors.pink[0],children:"if"}),o.jsx(e,{color:r.colors.gray[0],children:" ("}),o.jsx(e,{color:r.colors.white[0],children:"coder."}),o.jsx(e,{color:r.colors.green[5],children:"hireable"}),o.jsx(e,{color:r.colors.gray[0],children:"()"}),o.jsx(e,{color:r.colors.gray[0],children:") ❴"})]}),o.jsxs(s,{margin:"0 0 0 8px",children:[o.jsx(e,{color:r.colors.white[0],children:"coder."}),o.jsx(e,{color:r.colors.green[5],children:"funFact"}),o.jsx(e,{color:r.colors.gray[0],children:"();"})]}),o.jsxs(s,{margin:"0 0 0 8px",children:[o.jsx(e,{color:r.colors.blue[11],children:"console."}),o.jsx(e,{color:r.colors.white[0],children:"log"}),o.jsx(e,{color:r.colors.gray[0],children:"("}),o.jsx(e,{color:r.colors.yellow[0],children:"'Hiring me means getting a hard-working problem-solver with a love for learning.'"}),o.jsx(e,{color:r.colors.gray[0],children:");"})]}),o.jsxs("div",{children:[o.jsx(e,{color:r.colors.gray[0],children:"❵ "}),o.jsx(e,{color:r.colors.pink[0],children:"else"}),o.jsx(e,{color:r.colors.gray[0],children:" ❴"})]}),o.jsxs(s,{margin:"0 0 0 8px",children:[o.jsx(e,{color:r.colors.blue[11],children:"console."}),o.jsx(e,{color:r.colors.white[0],children:"log"}),o.jsx(e,{color:r.colors.gray[0],children:"("}),o.jsx(e,{color:r.colors.yellow[0],children:"'I may not meet all criteria, but I'm still ready to improve and grow!'"}),o.jsx(e,{color:r.colors.gray[0],children:");"})]}),o.jsx("div",{children:o.jsx(e,{color:r.colors.gray[0],children:"❵ "})})]})})]}),N=t.section`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`,z=t.h1`
  text-align: center;
  font-family: 'EB Garamond', serif;
  font-weight: 700;
  font-size: 20px;
  color: ${({theme:l})=>l.textColor};

  @media (min-width: ${({theme:l})=>l.breakpoints[1]}) {
    font-weight: 800;
  }

  @media (min-width: ${({theme:l})=>l.breakpoints[2]}) {
    font-size: 30px;
  }
`,F=t.span`
  color: ${({theme:l})=>l.colors.orange[5]};
`,j=t.a`
  .social-icon {
    fill: ${({theme:l})=>l.textColor};
  }

  &:hover .social-icon {
    transform: scale(2);
    transition: transform 0.8s ease, fill 0.8s ease;
    fill: ${({theme:l})=>l.colors.green[4]};
  }

  &:not(:hover) .social-icon {
    transform: scale(1);
    transition: transform 0.8s ease;
  }
`;t.span`
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  font-size: 20px;
  color: ${({theme:l})=>l.textColor};

  @media (min-width: ${({theme:l})=>l.breakpoints[1]}) {
    font-weight: 800;
  }

  @media (min-width: ${({theme:l})=>l.breakpoints[2]}) {
    font-size: 24px;
  }
`;const D=()=>{const[l,i]=h.useState(!0),a=()=>{const n=document.createElement("a");n.href=l?c.cv:c.coverLetter,n.download=l?c.cvName:c.coverLetterName,document.body.appendChild(n),n.click(),document.body.removeChild(n)};return o.jsxs(N,{"aria-label":"hero section",children:[o.jsx(y,{alt:"Hero",loading:"lazy",width:"1572",height:"620",decoding:"async",src:C}),o.jsxs(u,{gridTemplateColumns:["1fr","1fr","1fr","1fr 1fr"],gap:"16px",width:"100%",children:[o.jsxs(x,{flexDirection:"column",justifyContent:"center",width:"100%",maxWidth:["100%","100%","100%","600px","700px"],order:[2,2,2,1,1],margin:[0,0,0,"auto"],padding:[0,0,"0 0 16px 0",0],children:[o.jsxs(z,{children:["Hello, this is ",o.jsx("br",{}),o.jsx(L,{name:c.name})," ",o.jsx("br",{}),"I'm a ",o.jsx(F,{children:c.designation})]}),o.jsxs(x,{justifyContent:"center",gap:"20px",margin:"18px 0",children:[o.jsx(j,{target:"_blank",href:c.github,rel:"noopener noreferrer",children:o.jsx(g,{name:"icon-github",width:"30px",height:"30px",fill:r.colors.browns[9],className:"social-icon"})}),o.jsx(j,{target:"_blank",href:c.linkedIn,rel:"noopener noreferrer",children:o.jsx(g,{name:"icon-linkedin-circle",width:"30px",height:"30px",fill:r.colors.browns[9],className:"social-icon"})}),o.jsx(j,{target:"_blank",href:c.telegram,rel:"noopener noreferrer",children:o.jsx(g,{name:"icon-telegram",width:"30px",height:"30px",fill:r.colors.browns[9],className:"social-icon"})})]}),o.jsx(v,{togglePosition:l,setTogglePosition:i,handleDownload:a,cvHref:c.cv,coverLetterHref:c.coverLetter,labelFirst:"CV",labelSecond:"COVER LETTER",iconName:"icon-download"}),o.jsx(b,{to:k,children:"About me ➾"})]}),o.jsx(E,{})]})]})};export{D as default};
