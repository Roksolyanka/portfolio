import{d as e,j as i,p as s,I as f,t as g}from"./index-CWNn5md1.js";const c=e.a`
  cursor: pointer;
  width: 100%;
  height: 100%;
`,u=e(c)``,w=e.div.withConfig({shouldForwardProp:t=>t!=="togglePosition"})`
  transform: ${({togglePosition:t})=>t?"translateX(-35px)":"translateX(35px)"};
  transition: transform 0.3s ease;
  background-color: ${({theme:t})=>t.colors.orange[9]};
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
`,m=e.div`
  display: flex;
  background-color: ${({theme:t})=>t.colors.orange[0]};
  border: 1px solid ${({theme:t})=>t.colors.orange[6]};
  border-radius: 60px;
  justify-content: center;
  align-items: flex-start;
  width: 120px;
  height: 41px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 0 3px 0 1px;
  box-shadow: inset 2px 10px 10px -5px #7c421278;
`,a=e.span`
  color: ${({theme:t})=>t.colors.orange[0]};
  padding: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
`,j=e.div`
  background-color: ${({theme:t})=>t.colors.orange[7]};
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
`,b=e.div`
  color: ${({theme:t})=>t.colors.white[0]};
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
`,S=({togglePosition:t,setTogglePosition:o,handleDownload:n,onToggle:r,cvHref:d,coverLetterHref:l,labelFirst:x,labelSecond:p,iconName:h})=>i.jsx(b,{children:i.jsxs(j,{children:[i.jsx(a,{children:x}),i.jsxs(m,{children:[i.jsx(c,{href:d,download:s.cvName,onClick:()=>{o(!0),r&&r()}}),i.jsx(w,{onClick:()=>{r&&r(),n&&n()},togglePosition:t,children:i.jsx(f,{name:h,width:"24px",height:"24px",fill:g.colors.orange[1]})}),i.jsx(u,{href:l,download:s.coverLetterName,onClick:()=>{o(!1),r&&r()}})]}),i.jsx(a,{children:p})]})});export{S as T};
