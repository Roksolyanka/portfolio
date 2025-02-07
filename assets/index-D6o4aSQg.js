import{d as s,B as p,F as y,A as N,j as o,t as g,I as v,m as k,r as m,G as j,e as D,n as S,a as w,S as C,g as B}from"./index-B4WdNwWO.js";import{T}from"./index-DHXQfFTT.js";import{a as b,S as $,T as F}from"./styled-B8FEJG0o.js";import{b as I}from"./background-DhGLTqEF.js";const x=[{iconName:"icon-html",displayName:"HTML",title:"Frontend Development",category:"frontend"},{iconName:"icon-javascript",displayName:"JavaScript",title:"Frontend Development",category:"frontend"},{iconName:"icon-react",displayName:"React",title:"Frontend Development",category:"frontend"},{iconName:"icon-redux",displayName:"Redux",title:"Frontend Development",category:"frontend"},{iconName:"icon-typescript",displayName:"TypeScript",title:"Frontend Development",category:"frontend"},{iconName:"icon-ajax",displayName:"Ajax",title:"Frontend Development",category:"frontend"},{iconName:"icon-formik",displayName:"Formik",title:"Frontend Development",category:"frontend"},{iconName:"icon-node-js",displayName:"Node.js",title:"Backend Development",category:"backend"},{iconName:"icon-next-js",displayName:"Next.js",title:"Backend Development",category:"backend"},{iconName:"icon-mongodb",displayName:"MongoDB",title:"Backend Development",category:"backend"},{iconName:"icon-mongoose",displayName:"Mongoose",title:"Backend Development",category:"backend"},{iconName:"icon-firebase",displayName:"Firebase",title:"Backend Development",category:"backend"},{iconName:"icon-firestore",displayName:"Firestore",title:"Backend Development",category:"backend"},{iconName:"icon-axios",displayName:"Axios",title:"Backend Development",category:"backend"},{iconName:"icon-rest-api",displayName:"Rest API",title:"Backend Development",category:"backend"},{iconName:"icon-vscode",displayName:"VSCode",title:"Development Tools",category:"tools"},{iconName:"icon-git",displayName:"Git",title:"Development Tools",category:"tools"},{iconName:"icon-github",displayName:"Github",title:"Development Tools",category:"tools"},{iconName:"icon-postman",displayName:"Postman",title:"Development Tools",category:"tools"},{iconName:"icon-npm",displayName:"NPM",title:"Development Tools",category:"tools"},{iconName:"icon-yarn",displayName:"YARN",title:"Development Tools",category:"tools"},{iconName:"icon-webpack",displayName:"Webpack",title:"Development Tools",category:"tools"},{iconName:"icon-vite",displayName:"Vite",title:"Development Tools",category:"tools"},{iconName:"icon-parcel",displayName:"Parcel",title:"Development Tools",category:"tools"},{iconName:"icon-figma",displayName:"Figma",title:"Development Tools",category:"tools"},{iconName:"icon-ui-ux",displayName:"UI/UX",title:"Development Tools",category:"tools"},{iconName:"icon-trello",displayName:"Trello",title:"Development Tools",category:"tools"},{iconName:"icon-css",displayName:"CSS",title:"Styling & Design",category:"style"},{iconName:"icon-styled-components",displayName:"Styled-components",title:"Styling & Design",category:"style"},{iconName:"icon-bootstrap",displayName:"Bootstrap",title:"Styling & Design",category:"style"},{iconName:"icon-react-native",displayName:"React Native",title:"Mobile Development",category:"mobile"},{iconName:"icon-expo",displayName:"Expo",title:"Mobile Development",category:"mobile"},{iconName:"icon-android-studio",displayName:"Android Studio",title:"Mobile Development",category:"mobile"},{iconName:"icon-agile",displayName:"Agile",title:"Agile Methodologies",category:"agile"},{iconName:"icon-scrum",displayName:"Scrum",title:"Agile Methodologies",category:"agile"},{iconName:"icon-kanban",displayName:"Kanban",title:"Agile Methodologies",category:"agile"}],R=s(p)`
  z-index: 0;
  scroll-snap-align: center;
  transition: transform 0.8s ease, box-shadow 0.8s ease;

  &:hover {
    transform: scale(1.2);
    z-index: 1;
  }

  &:not(:hover) {
    transform: scale(1);
    transition: transform 0.8s ease;
  }
`,A=s(y)`
  pointer-events: none;

  &:hover {
    opacity: 0.6;
  }
`,M=s(N)`
  filter: blur(40px);
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 1;
  }
`,z=s(N)`
  visibility: hidden;
`,E=s.p`
  font-family: 'EB Garamond', serif;
  font-weight: 500;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.green[10]};

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 14px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    font-size: 16px;
  }
`,u=({skills:e,isHidden:n=!1})=>{const a=t=>{const l=t.currentTarget,r=l.querySelector("[data-blob]"),i=l.querySelector("[data-fakeblob]");if(r&&i){const c=i.getBoundingClientRect(),d=t.clientX-c.left-c.width/2,f=t.clientY-c.top-c.height/2;r.style.transform=`translate(${d}px, ${f}px)`}};return o.jsx(o.Fragment,{children:e.map(t=>o.jsxs(R,{onMouseMove:a,className:"WrapperIcon",position:"relative",minWidth:"120px",borderRadius:"8px",padding:"3px",overflow:"hidden",background:g.colors.white[0],boxShadow:g.colors.boxShadow[2],children:[o.jsxs(A,{justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100%",padding:["10px 0","10px 0","20px 0","30px 0"],gap:"5px",borderRadius:"8px",zIndex:"1",children:[o.jsx(v,{name:t.iconName,width:"50px",height:"50px",fill:"currentColor"}),o.jsx(E,{children:t.displayName})]}),o.jsx(M,{"data-blob":!0,width:"100px",height:"80%",top:"100%",left:"calc(20% - 50px)",borderRadius:"50%",zIndex:"-1",opacity:"0",background:g.colors.green[4]}),o.jsx(z,{"data-fakeblob":!0,height:"100%",borderRadius:"50%",zIndex:"-1"})]},`${t.id}-${n?"hidden":"visible"}`))})},P=k`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`,H=s(y)`
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  transform: scale(0.95);
  opacity: 0;
  animation: ${b} 0.5s ease-in-out forwards;

  > * {
    flex: 0 0 100%;
  }

  &:hover > div {
    animation-play-state: paused;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`,h=s(y)`
  will-change: transform;
  animation: ${P} 40s linear infinite;
`,G=({data:e})=>{const n=m.useMemo(()=>e.map((t,l)=>({id:`${t.category}-${l+1}`,iconName:t.iconName,displayName:t.displayName,title:t.title,category:t.category})),[e]),a={gap:"15px",margin:"0",padding:"0 15px 0 0"};return o.jsxs(H,{margin:"0 auto",padding:"20px 0",overflowX:"auto",children:[o.jsx(h,{...a,children:o.jsx(u,{skills:n})}),o.jsx(h,{"aria-hidden":!0,...a,children:o.jsx(u,{skills:n,isHidden:!0})})]})},O=s(j)`
  font-size: 14px;
  font-weight: 600;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 30px;
  justify-items: center;
  transition: max-height 0.4s ease;
  max-height: 0;
  overflow: hidden;
  padding: 0;
  backdrop-filter: blur(20px) saturate(100%);
  border: 1px solid ${({theme:e})=>e.accentColor};
  background: ${({theme:e})=>e.colors.backdropColor[3]};
  color: ${({theme:e})=>e.textColor};

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 16px;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 10px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    font-size: 18px;
  }
`,W=({isActive:e,skills:n})=>{const a=m.useRef(null);return m.useEffect(()=>{a.current&&(a.current.style.maxHeight=e?`${a.current.scrollHeight}px`:"0")},[e]),o.jsx(O,{ref:a,"aria-hidden":!e,children:n.map(({displayName:t})=>o.jsx("div",{children:t},t))})},X=s(p)`
  transform: scale(0.95);
  animation: ${b} 0.5s ease-in-out forwards;
`,J=s(D)`
  font-family: 'EB Garamond', serif;
  cursor: pointer;
  transition: all 0.8s ease;

  &:hover {
    background: ${({theme:e})=>e.accentColor};
    color: ${({theme:e})=>e.hoverColorReverse};
    transition: background 0.8s ease, color 0.8s ease;
  }

  &:not(:hover) {
    transition: background 0.8s ease, color 0.8s ease;
  }

  &.active {
    background: ${({theme:e})=>e.accentColor};
    color: ${({theme:e})=>e.hoverColorReverse};
  }

  & span:last-child {
    display: inline-block;
    transition: transform 0.4s;
  }

  &.active span:last-child {
    transform: rotate(180deg);
  }
`,U=({data:e})=>{const[n,a]=m.useState(null),t=S();return o.jsx(X,{width:"100%",maxWidth:"800px",margin:"0 auto",opacity:"0",children:e.map(([l,{title:r,skills:i}],c)=>{const d=n===c;return o.jsxs(p,{border:d?"none":`0 0 1px 0 solid ${t.accentColor}`,children:[o.jsxs(J,{onClick:()=>a(d?null:c),className:d?"active":"",fontSize:["20px","20px","22px"],width:"100%",justifyContent:"space-between",alignItems:"center",padding:"15px 20px",border:"none",fontWeight:"700",color:t.textColor,background:t.colors.backdropColor[3],children:[o.jsx("span",{children:r}),o.jsx("span",{children:"▾"})]}),o.jsx(W,{isActive:d,skills:i})]},l)})})},K=()=>{const[e,n]=m.useState(()=>{const t=localStorage.getItem("isCarousel");return t?JSON.parse(t):!0});m.useEffect(()=>{localStorage.setItem("isCarousel",JSON.stringify(e))},[e]);const a=t=>{const l=t.reduce((r,i)=>(r[i.category]||(r[i.category]={title:i.title,skills:[]}),r[i.category].skills.push(i),r),{});return Object.entries(l)};return o.jsxs($,{"aria-label":"skills section",isAccordeon:!e,children:[o.jsx(w,{alt:"Hero",loading:"lazy",width:"1572",height:"620",decoding:"async",src:I}),o.jsx(p,{padding:[0,0,"24px 0"],width:"100%",children:o.jsxs(F,{children:["I turn these skills into beautiful web projects",o.jsx(T,{togglePosition:e,setTogglePosition:n,labelFirst:"Show scroll animation",labelSecond:"Show categories",iconName:"icon-embed"})]})}),e?o.jsx(G,{data:x}):o.jsx(U,{data:a(x)}),o.jsx(C,{to:B,children:"My projects ➾"})]})};export{K as default};
