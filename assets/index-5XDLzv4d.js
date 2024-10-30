import{r as m,d as n,j as e,F as f,B as s,t as h,I as p,L as S,G as R,R as _}from"./index-CzMRpaH3.js";const L=r=>{const[c,d]=m.useState(-1),[o,a]=m.useState(!1);return m.useEffect(()=>{const u=setInterval(()=>{c<r.length-1?d(y=>y+1):a(!0)},300);return()=>clearInterval(u)},[c,r.length]),{activeIndex:c,animationComplete:o}},I=n.span`
  color: ${({theme:r})=>r.accentColor};
  font-size: 30px;

  @media (min-width: ${({theme:r})=>r.breakpoints[1]}) {
    font-size: 50px;
  }
`,z=n("span").withConfig({shouldForwardProp:r=>r!=="isCustom"})`
  font-family: ${({isCustom:r})=>r?"Splash":"Dancing Script"};
`,B=({name:r})=>{const{activeIndex:c,animationComplete:d}=L(r);return e.jsx(I,{children:r.split("").map((o,a)=>e.jsx(z,{isCustom:o==="R"||o==="K",className:`nameLetter ${!d&&(c===a?"active":"")} ${!d&&(c===a-1||c===a+1?"neighbor":"")}`,children:o},a))})},F=n.div`
  order: 1;
  border-color: ${({theme:r})=>r.colors.green[6]};
  border-width: 3px;
  border-radius: 8px;
  position: relative;
  background-image: ${({theme:r})=>r.colors.gradient[4]};

  @media (min-width: ${({theme:r})=>r.breakpoints[2]}) {
    order: 2;
  }
`,T=n.div`
  width: 100%;
  height: 1px;
  background-image: ${({theme:r})=>r.colors.gradient[0]};
`,E=n.div`
  width: 100%;
  height: 1px;
  background-image: ${({theme:r})=>r.colors.gradient[1]};
`,H=n.div`
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
`,t=n.span`
  color: ${({theme:r})=>r.colors.white[0]};
`,i=n.span`
  color: ${({theme:r})=>r.colors.gray[0]};
`,j=n.span`
  color: ${({theme:r})=>r.colors.orange[4]};
`,l=n.span`
  color: ${({theme:r})=>r.colors.yellow[0]};
`,w=n.span`
  color: ${({theme:r})=>r.colors.blue[11]};
`,g=n.span`
  color: ${({theme:r})=>r.colors.green[5]};
`,A=()=>e.jsxs(F,{children:[e.jsxs(f,{flexDirection:"row",children:[e.jsx(T,{}),e.jsx(E,{})]}),e.jsx(s,{padding:"16px",children:e.jsxs(f,{flexDirection:"row",children:[e.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:h.colors.red[0]}),e.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:h.colors.orange[4],margin:"0 8px"}),e.jsx(s,{width:"12px",height:"12px",borderRadius:"50px",background:h.colors.green[2]})]})}),e.jsx(H,{children:e.jsxs("code",{children:[e.jsxs("div",{children:[e.jsx(x,{children:"const"}),e.jsx(t,{children:" coder"}),e.jsx(x,{children:" = "}),e.jsx(i,{children:"❴"})]}),e.jsxs(s,{margin:"0 0 0 16px",children:[e.jsx(t,{children:"name:"}),e.jsx(i,{children:" '"}),e.jsx(l,{children:"Roksolana Kushnir"}),e.jsx(i,{children:"',"})]}),e.jsxs(s,{margin:"0 0 0 16px",children:[e.jsx(t,{children:"skills: "}),e.jsx(i,{children:"['"}),e.jsx(l,{children:"HTML"}),e.jsx(i,{children:"', '"}),e.jsx(l,{children:"CSS"}),e.jsx(i,{children:"', '"}),e.jsx(l,{children:"Js"}),e.jsx(i,{children:"', '"}),e.jsx(l,{children:"React"}),e.jsx(i,{children:"', '"}),e.jsx(l,{children:"Redux"}),e.jsx(i,{children:"', '"}),e.jsx(l,{children:"React Native"}),e.jsx(i,{children:"', '"}),e.jsx(l,{children:"TypeScript"}),e.jsx(i,{children:"'],"})]}),e.jsxs(s,{margin:"0 0 0 16px",children:[e.jsx(t,{children:"hardWorker:"}),e.jsx(j,{children:" true"}),e.jsx(i,{children:","})]}),e.jsxs(s,{margin:"0 0 0 16px",children:[e.jsx(t,{children:"quickLearner:"}),e.jsx(j,{children:" true"}),e.jsx(i,{children:","})]}),e.jsxs(s,{margin:"0 0 0 16px",children:[e.jsx(t,{children:"problemSolver:"}),e.jsx(j,{children:" true"}),e.jsx(i,{children:","})]}),e.jsxs(s,{margin:"0 0 0 16px",children:[e.jsx(g,{children:"hireable"}),e.jsx(i,{children:"() ❴"})]}),e.jsxs(s,{margin:"0 0 0 32px",children:[e.jsx(x,{children:"const"}),e.jsx(i,{children:" ❴ "}),e.jsx(t,{children:"hardWorker"}),e.jsx(i,{children:", "}),e.jsx(t,{children:"problemSolver"}),e.jsx(i,{children:", "}),e.jsx(t,{children:"skills"}),e.jsx(i,{children:" ❵ "}),e.jsx(x,{children:"= "}),e.jsx(x,{children:"this"}),e.jsx(i,{children:";"})]}),e.jsxs(s,{margin:"0 0 0 32px",children:[e.jsx(x,{children:"return "}),e.jsx(t,{children:"hardWorker"}),e.jsx(l,{children:" && "}),e.jsx(t,{children:"problemSolver"}),e.jsx(l,{children:" && "}),e.jsx(t,{children:"skills.length"}),e.jsx(l,{children:" ❯= "}),e.jsx(j,{children:"7"}),e.jsx(i,{children:";"})]}),e.jsx(s,{margin:"0 0 0 16px",children:e.jsx(i,{children:"❵,"})}),e.jsxs(s,{margin:"0 0 0 16px",children:[e.jsx(g,{children:"funFact"}),e.jsx(i,{children:"() ❴"})]}),e.jsxs(s,{margin:"0 0 0 32px",children:[e.jsx(w,{children:"console."}),e.jsx(t,{children:"log"}),e.jsx(i,{children:"("}),e.jsx(l,{children:`"I once solved a bug at 3 AM without coffee. Let's just say, I'm as reliable as your unit tests."`}),e.jsx(i,{children:");"})]}),e.jsx(s,{margin:"0 0 0 16px",children:e.jsx(i,{children:"❵,"})}),e.jsx("div",{children:e.jsx(i,{children:"❵;"})}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx(x,{children:"if"}),e.jsx(i,{children:" ("}),e.jsx(t,{children:"coder."}),e.jsx(g,{children:"hireable"}),e.jsx(i,{children:"()"}),e.jsx(i,{children:") ❴"})]}),e.jsxs(s,{margin:"0 0 0 8px",children:[e.jsx(t,{children:"coder."}),e.jsx(g,{children:"funFact"}),e.jsx(i,{children:"();"})]}),e.jsxs(s,{margin:"0 0 0 8px",children:[e.jsx(w,{children:"console."}),e.jsx(t,{children:"log"}),e.jsx(i,{children:"("}),e.jsx(l,{children:"'Hiring me means getting a hard-working problem-solver with a love for learning.'"}),e.jsx(i,{children:");"})]}),e.jsxs("div",{children:[e.jsx(i,{children:"❵ "}),e.jsx(x,{children:"else"}),e.jsx(i,{children:" ❴"})]}),e.jsxs(s,{margin:"0 0 0 8px",children:[e.jsx(w,{children:"console."}),e.jsx(t,{children:"log"}),e.jsx(i,{children:"("}),e.jsx(l,{children:"'I may not meet all criteria, but I'm still ready to improve and grow!'"}),e.jsx(i,{children:");"})]}),e.jsx("div",{children:e.jsx(i,{children:"❵ "})})]})})]}),C=n.a`
  cursor: pointer;
  width: 100%;
  height: 100%;
`,G=n(C)``,N=n.div.withConfig({shouldForwardProp:r=>r!=="togglePosition"})`
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
`,K=n.div`
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
`,W=n.div`
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
`,D=n.div`
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
`,P=({togglePosition:r,setTogglePosition:c,handleDownload:d,onToggle:o,cvHref:a,coverLetterHref:u})=>e.jsx(D,{children:e.jsxs(W,{children:[e.jsx(k,{children:"CV"}),e.jsxs(K,{children:[e.jsx(C,{href:a,download:"Roksolana_Kushnir_CV.pdf",onClick:()=>{c(!0),o&&o()}}),e.jsx(N,{onClick:()=>{o&&o(),d&&d()},togglePosition:r,children:e.jsx(p,{name:"icon-download",width:"24px",height:"24px",fill:h.colors.orange[1]})}),e.jsx(G,{href:u,download:"Roksolana_Kushnir_Cover_Letter.pdf",onClick:()=>{c(!1),o&&o()}})]}),e.jsx(k,{children:"Cover Letter"})]})}),v="/portfolio/assets/cv-B_EzXUIE.pdf",$="/portfolio/assets/cover_letter-CQXUQJGN.pdf",X="/portfolio/assets/background-DxiBAvkg.svg",O=n.section`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`,U=n.img`
  position: absolute;
  top: -100px;
  z-index: -10;
  color: transparent;
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  height: 100%;

  @media (min-width: ${({theme:r})=>r.breakpoints[2]}) {
    width: 100%;
  }

  @media (min-width: ${({theme:r})=>r.breakpoints[3]}) {
    width: 1440px;
  }
`,M=n.h1`
  text-align: center;
  font-family: 'EB Garamond', serif;
  font-weight: 700;
  font-size: 20px;
  color: ${({theme:r})=>r.textColor};

  @media (min-width: ${({theme:r})=>r.breakpoints[1]}) {
    font-weight: 800;
  }

  @media (min-width: ${({theme:r})=>r.breakpoints[2]}) {
    font-size: 30px;
  }
`,V=n.span`
  color: ${({theme:r})=>r.colors.orange[5]};
`,b=n.a`
  .social-icon {
    fill: ${({theme:r})=>r.textColor};
  }

  &:hover .social-icon {
    transform: scale(2);
    transition: transform 0.8s ease, fill 0.8s ease;
    fill: ${({theme:r})=>r.colors.green[4]};
  }

  &:not(:hover) .social-icon {
    transform: scale(1);
    transition: transform 0.8s ease;
  }
`;n.span`
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  font-size: 20px;
  color: ${({theme:r})=>r.textColor};

  @media (min-width: ${({theme:r})=>r.breakpoints[1]}) {
    font-weight: 800;
  }

  @media (min-width: ${({theme:r})=>r.breakpoints[2]}) {
    font-size: 24px;
  }
`;n(p)`
  fill: ${({theme:r})=>r.textColor};
`;const J=n(S)`
  font-family: 'EB Garamond', serif;
  font-size: 20px;
  font-weight: bold;
  color: ${({theme:r})=>r.accentColor};
  text-decoration: none;
  margin: 0 auto;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: ${({theme:r})=>r.hoverColor};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: ${({theme:r})=>r.hoverColor};
    transition: color 0.3s ease, transform 0.3s ease;
    transform: translateX(10px);
  }

  @media (min-width: ${({theme:r})=>r.breakpoints[1]}) {
  }

  @media (min-width: ${({theme:r})=>r.breakpoints[2]}) {
  }
`,q=()=>{const[r,c]=m.useState(!0),d=()=>{const o=document.createElement("a");o.href=r?v:$,o.download=r?"Roksolana_Kushnir_CV.pdf":"Roksolana_Kushnir_Cover_Letter.pdf",document.body.appendChild(o),o.click(),document.body.removeChild(o)};return e.jsxs(O,{children:[e.jsx(U,{alt:"Hero",loading:"lazy",width:"1572",height:"620",decoding:"async",src:X}),e.jsxs(R,{gridTemplateColumns:["1fr","1fr","1fr","1fr 1fr"],gap:"16px",width:"100%",children:[e.jsxs(f,{flexDirection:"column",justifyContent:"center",width:"100%",maxWidth:["100%","100%","100%","600px","700px"],order:[2,2,2,1,1],margin:[0,0,0,"auto"],padding:[0,0,"0 0 16px 0",0],children:[e.jsxs(M,{children:["Hello, this is ",e.jsx("br",{}),e.jsx(B,{name:"Roksolana Kushnir"})," ",e.jsx("br",{}),"I'm a ",e.jsx(V,{children:"Frontend Developer"})]}),e.jsxs(f,{justifyContent:"center",gap:"20px",margin:"18px 0",children:[e.jsx(b,{target:"_blank",href:"https://github.com/Roksolyanka",children:e.jsx(p,{name:"icon-github",width:"30px",height:"30px",fill:h.colors.browns[9],className:"social-icon"})}),e.jsx(b,{target:"_blank",href:"https://www.linkedin.com/in/roksolanakushnir/",children:e.jsx(p,{name:"icon-linkedin-circle",width:"30px",height:"30px",fill:h.colors.browns[9],className:"social-icon"})}),e.jsx(b,{target:"_blank",href:"https://t.me/Roksolanakushnir",children:e.jsx(p,{name:"icon-telegram",width:"30px",height:"30px",fill:h.colors.browns[9],className:"social-icon"})})]}),e.jsx(P,{togglePosition:r,setTogglePosition:c,handleDownload:d,cvHref:v,coverLetterHref:$}),e.jsx(J,{to:_,children:"About me ➾"})]}),e.jsx(A,{})]})]})};export{q as default};
