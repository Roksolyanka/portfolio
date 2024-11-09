import{r as m,d as n,j as e,F as f,B as s,t as j,p as l,R as S,I as u,G as C,a as I}from"./index-CASmeT5j.js";import{H as L,B as F,b as N,T,a as H,S as w,c as B}from"./styled-D6XxxQq0.js";const R=r=>{const[t,d]=m.useState(-1),[o,a]=m.useState(!1);return m.useEffect(()=>{const b=setInterval(()=>{t<r.length-1?d($=>$+1):a(!0)},300);return()=>clearInterval(b)},[t,r.length]),{activeIndex:t,animationComplete:o}},A=n.span`
  color: ${({theme:r})=>r.accentColor};
  font-size: 30px;

  @media (min-width: ${({theme:r})=>r.breakpoints[1]}) {
    font-size: 50px;
  }
`,W=n("span").withConfig({shouldForwardProp:r=>r!=="isCustom"})`
  font-family: ${({isCustom:r})=>r?"Splash":"Dancing Script"};
`,z=({name:r})=>{const{activeIndex:t,animationComplete:d}=R(r);return e.jsx(A,{children:r.split("").map((o,a)=>e.jsx(W,{isCustom:o==="R"||o==="K",className:`nameLetter ${!d&&(t===a?"active":"")} ${!d&&(t===a-1||t===a+1?"neighbor":"")}`,children:o},a))})},P=n.div`
  order: 1;
  border-color: ${({theme:r})=>r.colors.green[6]};
  border-width: 3px;
  border-radius: 8px;
  position: relative;
  background-image: ${({theme:r})=>r.colors.gradient[4]};

  @media (min-width: ${({theme:r})=>r.breakpoints[2]}) {
    order: 2;
  }
`,D=n.div`
  width: 100%;
  height: 1px;
  background-image: ${({theme:r})=>r.colors.gradient[0]};
`,E=n.div`
  width: 100%;
  height: 1px;
  background-image: ${({theme:r})=>r.colors.gradient[1]};
`,G=n.div`
  overflow: hidden;
  border-style: solid;
  border-top-width: 2px;
  border-color: ${({theme:r})=>r.colors.green[9]};
  padding: 16px;
  font-size: 10px;

  @media (min-width: ${({theme:r})=>r.breakpoints[2]}) {
    font-size: 12px;
  }
`,x=n.span`
  color: ${({theme:r})=>r.colors.pink[0]};
`,c=n.span`
  color: ${({theme:r})=>r.colors.white[0]};
`,i=n.span`
  color: ${({theme:r})=>r.colors.gray[0]};
`,p=n.span`
  color: ${({theme:r})=>r.colors.orange[4]};
`,h=n.span`
  color: ${({theme:r})=>r.colors.yellow[0]};
`,v=n.span`
  color: ${({theme:r})=>r.colors.blue[11]};
`,g=n.span`
  color: ${({theme:r})=>r.colors.green[5]};
`,O=()=>e.jsxs(P,{children:[e.jsxs(f,{flexDirection:"row",children:[e.jsx(D,{}),e.jsx(E,{})]}),e.jsx(s,{padding:"16px",children:e.jsxs(f,{flexDirection:"row",children:[e.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:j.colors.red[0]}),e.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:j.colors.orange[4],margin:"0 8px"}),e.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:j.colors.green[2]})]})}),e.jsx(G,{children:e.jsxs("code",{children:[e.jsxs("div",{children:[e.jsx(x,{children:"const"}),e.jsx(c,{children:" coder"}),e.jsx(x,{children:" = "}),e.jsx(i,{children:"❴"})]}),e.jsxs(s,{margin:"0 0 0 16px",children:[e.jsx(c,{children:"name:"}),e.jsx(i,{children:" '"}),e.jsx(h,{children:l.name}),e.jsx(i,{children:"',"})]}),e.jsxs(s,{margin:"0 0 0 16px",children:[e.jsx(c,{children:"skills: "}),e.jsx(i,{children:"['"}),l.skills.map((r,t)=>e.jsxs(S.Fragment,{children:[e.jsx(h,{children:r}),t<l.skills.length-1&&e.jsx(i,{children:"', '"})]},t)),e.jsx(i,{children:"'],"})]}),e.jsxs(s,{margin:"0 0 0 16px",children:[e.jsx(c,{children:"hardWorker:"}),e.jsx(p,{children:" true"}),e.jsx(i,{children:","})]}),e.jsxs(s,{margin:"0 0 0 16px",children:[e.jsx(c,{children:"quickLearner:"}),e.jsx(p,{children:" true"}),e.jsx(i,{children:","})]}),e.jsxs(s,{margin:"0 0 0 16px",children:[e.jsx(c,{children:"problemSolver:"}),e.jsx(p,{children:" true"}),e.jsx(i,{children:","})]}),e.jsxs(s,{margin:"0 0 0 16px",children:[e.jsx(g,{children:"hireable"}),e.jsx(i,{children:"() ❴"})]}),e.jsxs(s,{margin:"0 0 0 32px",children:[e.jsx(x,{children:"const"}),e.jsx(i,{children:" ❴ "}),e.jsx(c,{children:"hardWorker"}),e.jsx(i,{children:", "}),e.jsx(c,{children:"problemSolver"}),e.jsx(i,{children:", "}),e.jsx(c,{children:"skills"}),e.jsx(i,{children:" ❵ "}),e.jsx(x,{children:"= "}),e.jsx(x,{children:"this"}),e.jsx(i,{children:";"})]}),e.jsxs(s,{margin:"0 0 0 32px",children:[e.jsx(x,{children:"return "}),e.jsx(c,{children:"hardWorker"}),e.jsx(h,{children:" && "}),e.jsx(c,{children:"problemSolver"}),e.jsx(h,{children:" && "}),e.jsx(c,{children:"skills.length"}),e.jsx(h,{children:" ❯= "}),e.jsx(p,{children:"7"}),e.jsx(i,{children:";"})]}),e.jsx(s,{margin:"0 0 0 16px",children:e.jsx(i,{children:"❵,"})}),e.jsxs(s,{margin:"0 0 0 16px",children:[e.jsx(g,{children:"funFact"}),e.jsx(i,{children:"() ❴"})]}),e.jsxs(s,{margin:"0 0 0 32px",children:[e.jsx(v,{children:"console."}),e.jsx(c,{children:"log"}),e.jsx(i,{children:"("}),e.jsx(h,{children:`"I once solved a bug at 3 AM without coffee. Let's just say, I'm as reliable as your unit tests."`}),e.jsx(i,{children:");"})]}),e.jsx(s,{margin:"0 0 0 16px",children:e.jsx(i,{children:"❵,"})}),e.jsx("div",{children:e.jsx(i,{children:"❵;"})}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx(x,{children:"if"}),e.jsx(i,{children:" ("}),e.jsx(c,{children:"coder."}),e.jsx(g,{children:"hireable"}),e.jsx(i,{children:"()"}),e.jsx(i,{children:") ❴"})]}),e.jsxs(s,{margin:"0 0 0 8px",children:[e.jsx(c,{children:"coder."}),e.jsx(g,{children:"funFact"}),e.jsx(i,{children:"();"})]}),e.jsxs(s,{margin:"0 0 0 8px",children:[e.jsx(v,{children:"console."}),e.jsx(c,{children:"log"}),e.jsx(i,{children:"("}),e.jsx(h,{children:"'Hiring me means getting a hard-working problem-solver with a love for learning.'"}),e.jsx(i,{children:");"})]}),e.jsxs("div",{children:[e.jsx(i,{children:"❵ "}),e.jsx(x,{children:"else"}),e.jsx(i,{children:" ❴"})]}),e.jsxs(s,{margin:"0 0 0 8px",children:[e.jsx(v,{children:"console."}),e.jsx(c,{children:"log"}),e.jsx(i,{children:"("}),e.jsx(h,{children:"'I may not meet all criteria, but I'm still ready to improve and grow!'"}),e.jsx(i,{children:");"})]}),e.jsx("div",{children:e.jsx(i,{children:"❵ "})})]})})]}),y=n.a`
  cursor: pointer;
  width: 100%;
  height: 100%;
`,_=n(y)``,M=n.div.withConfig({shouldForwardProp:r=>r!=="togglePosition"})`
  transform: ${({togglePosition:r})=>r?"translateX(-35px)":"translateX(35px)"};
  transition: transform 0.3s ease;
  background-color: ${({theme:r})=>r.colors.orange[9]};
  background-image: linear-gradient(#0000, #0009);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100px;
  height: 41px;
  padding: 6px;
  position: relative;
  cursor: pointer;
`,U=n.div`
  display: flex;
  background-color: ${({theme:r})=>r.colors.orange[0]};
  border: 1px solid ${({theme:r})=>r.colors.orange[6]};
  border-radius: 60px;
  justify-content: center;
  align-items: flex-start;
  width: 120px;
  height: 41px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 0 3px 0 1px;
  box-shadow: inset 2px 10px 10px -5px #7c421278;
`,k=n.span`
  color: ${({theme:r})=>r.colors.orange[0]};
  text-transform: uppercase;
  padding: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
`,X=n.div`
  background-color: ${({theme:r})=>r.colors.orange[7]};
  outline-offset: 0px;
  text-align: center;
  border: 1px solid #7c4212;
  border-radius: 50px;
  outline: 5px solid #7c421212;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  line-height: 1.3;
  display: flex;
`,q=n.div`
  color: ${({theme:r})=>r.colors.white[0]};
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 200px;
  padding: 5px;
  display: flex;
  inset: 0% 8% 0% auto;
  margin: 5px auto 10px;
`,K=({togglePosition:r,setTogglePosition:t,handleDownload:d,onToggle:o,cvHref:a,coverLetterHref:b})=>e.jsx(q,{children:e.jsxs(X,{children:[e.jsx(k,{children:"CV"}),e.jsxs(U,{children:[e.jsx(y,{href:a,download:l.cvName,onClick:()=>{t(!0),o&&o()}}),e.jsx(M,{onClick:()=>{o&&o(),d&&d()},togglePosition:r,children:e.jsx(u,{name:"icon-download",width:"24px",height:"24px",fill:j.colors.orange[1]})}),e.jsx(_,{href:b,download:l.coverLetterName,onClick:()=>{t(!1),o&&o()}})]}),e.jsx(k,{children:"Cover Letter"})]})}),Q=()=>{const[r,t]=m.useState(!0),d=()=>{const o=document.createElement("a");o.href=r?l.cv:l.coverLetter,o.download=r?l.cvName:l.coverLetterName,document.body.appendChild(o),o.click(),document.body.removeChild(o)};return e.jsxs(L,{children:[e.jsx(F,{alt:"Hero",loading:"lazy",width:"1572",height:"620",decoding:"async",src:N}),e.jsxs(C,{gridTemplateColumns:["1fr","1fr","1fr","1fr 1fr"],gap:"16px",width:"100%",children:[e.jsxs(f,{flexDirection:"column",justifyContent:"center",width:"100%",maxWidth:["100%","100%","100%","600px","700px"],order:[2,2,2,1,1],margin:[0,0,0,"auto"],padding:[0,0,"0 0 16px 0",0],children:[e.jsxs(T,{children:["Hello, this is ",e.jsx("br",{}),e.jsx(z,{name:l.name})," ",e.jsx("br",{}),"I'm a ",e.jsx(H,{children:l.designation})]}),e.jsxs(f,{justifyContent:"center",gap:"20px",margin:"18px 0",children:[e.jsx(w,{target:"_blank",href:l.github,children:e.jsx(u,{name:"icon-github",width:"30px",height:"30px",fill:j.colors.browns[9],className:"social-icon"})}),e.jsx(w,{target:"_blank",href:l.linkedIn,children:e.jsx(u,{name:"icon-linkedin-circle",width:"30px",height:"30px",fill:j.colors.browns[9],className:"social-icon"})}),e.jsx(w,{target:"_blank",href:l.telegram,children:e.jsx(u,{name:"icon-telegram",width:"30px",height:"30px",fill:j.colors.browns[9],className:"social-icon"})})]}),e.jsx(K,{togglePosition:r,setTogglePosition:t,handleDownload:d,cvHref:l.cv,coverLetterHref:l.coverLetter}),e.jsx(B,{to:I,children:"About me ➾"})]}),e.jsx(O,{})]})]})};export{Q as default};
