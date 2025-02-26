import{d as e,j as r,p as o,I as f,t as u}from"./index-YRH5_mbv.js";const c=e.a`
  cursor: pointer;
  width: 100%;
  height: 100%;
`,w=e(c)``,m=e.div.withConfig({shouldForwardProp:t=>t!=="togglePosition"})`
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
`,j=e.div`
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
`,b=e.div`
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
`,g=e.div`
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
`,S=({togglePosition:t,setTogglePosition:n,handleDownload:s,onToggle:i,cvHref:d,coverLetterHref:x,labelFirst:p,labelSecond:l,iconName:h})=>r.jsx(g,{children:r.jsxs(b,{children:[r.jsx(a,{children:p}),r.jsxs(j,{children:[r.jsx(c,{href:d,download:o.cvName,onClick:()=>{n(!0),i==null||i()}}),r.jsx(m,{onClick:()=>{i==null||i(),s&&s()},togglePosition:t,children:r.jsx(f,{name:h,width:"24px",height:"24px",fill:u.colors.orange[1]})}),r.jsx(w,{href:x,download:o.coverLetterName,onClick:()=>{n(!1),i==null||i()}})]}),r.jsx(a,{children:l})]})});export{S as T};
