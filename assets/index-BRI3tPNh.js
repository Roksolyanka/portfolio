import{d as l,B as m,F as g,A as N,c as S,j as o,I as D,t as x,m as b,S as w,r as d,G as C,g as B,u as $,a as T,T as F,b as A,h as M}from"./index-B17MNmM0.js";import{T as R}from"./index-BBpAFf5M.js";import{b as I}from"./background-DhGLTqEF.js";const u=[{iconName:"icon-html",displayName:"HTML",title:"Frontend Development",category:"frontend"},{iconName:"icon-javascript",displayName:"JavaScript",title:"Frontend Development",category:"frontend"},{iconName:"icon-react",displayName:"React",title:"Frontend Development",category:"frontend"},{iconName:"icon-redux",displayName:"Redux",title:"Frontend Development",category:"frontend"},{iconName:"icon-typescript",displayName:"TypeScript",title:"Frontend Development",category:"frontend"},{iconName:"icon-ajax",displayName:"Ajax",title:"Frontend Development",category:"frontend"},{iconName:"icon-formik",displayName:"Formik",title:"Frontend Development",category:"frontend"},{iconName:"icon-node-js",displayName:"Node.js",title:"Backend Development",category:"backend"},{iconName:"icon-next-js",displayName:"Next.js",title:"Backend Development",category:"backend"},{iconName:"icon-mongodb",displayName:"MongoDB",title:"Backend Development",category:"backend"},{iconName:"icon-mongoose",displayName:"Mongoose",title:"Backend Development",category:"backend"},{iconName:"icon-firebase",displayName:"Firebase",title:"Backend Development",category:"backend"},{iconName:"icon-firestore",displayName:"Firestore",title:"Backend Development",category:"backend"},{iconName:"icon-axios",displayName:"Axios",title:"Backend Development",category:"backend"},{iconName:"icon-rest-api",displayName:"Rest API",title:"Backend Development",category:"backend"},{iconName:"icon-vscode",displayName:"VSCode",title:"Development Tools",category:"tools"},{iconName:"icon-git",displayName:"Git",title:"Development Tools",category:"tools"},{iconName:"icon-github",displayName:"Github",title:"Development Tools",category:"tools"},{iconName:"icon-postman",displayName:"Postman",title:"Development Tools",category:"tools"},{iconName:"icon-npm",displayName:"NPM",title:"Development Tools",category:"tools"},{iconName:"icon-yarn",displayName:"YARN",title:"Development Tools",category:"tools"},{iconName:"icon-webpack",displayName:"Webpack",title:"Development Tools",category:"tools"},{iconName:"icon-vite",displayName:"Vite",title:"Development Tools",category:"tools"},{iconName:"icon-parcel",displayName:"Parcel",title:"Development Tools",category:"tools"},{iconName:"icon-figma",displayName:"Figma",title:"Development Tools",category:"tools"},{iconName:"icon-ui-ux",displayName:"UI/UX",title:"Development Tools",category:"tools"},{iconName:"icon-trello",displayName:"Trello",title:"Development Tools",category:"tools"},{iconName:"icon-css",displayName:"CSS",title:"Styling & Design",category:"style"},{iconName:"icon-styled-components",displayName:"Styled-components",title:"Styling & Design",category:"style"},{iconName:"icon-bootstrap",displayName:"Bootstrap",title:"Styling & Design",category:"style"},{iconName:"icon-react-native",displayName:"React Native",title:"Mobile Development",category:"mobile"},{iconName:"icon-expo",displayName:"Expo",title:"Mobile Development",category:"mobile"},{iconName:"icon-android-studio",displayName:"Android Studio",title:"Mobile Development",category:"mobile"},{iconName:"icon-agile",displayName:"Agile",title:"Agile Methodologies",category:"agile"},{iconName:"icon-scrum",displayName:"Scrum",title:"Agile Methodologies",category:"agile"},{iconName:"icon-kanban",displayName:"Kanban",title:"Agile Methodologies",category:"agile"}],z=l(m)`
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
`,P=l(g)`
  pointer-events: none;

  &:hover {
    opacity: 0.6;
  }
`,E=l(N)`
  width: 100px;
  height: 80%;
  top: 100%;
  left: calc(20% - 50px);
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  background: ${({theme:e})=>e.colors.green[4]};
  filter: blur(40px);
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 1;
  }
`,H=l(N)`
  height: 100%;
  border-radius: 50%;
  z-index: -1;
  visibility: hidden;
`,K=l(S)`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.green[10]};

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 14px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    font-size: 16px;
  }
`,h=({skills:e,isHidden:n=!1})=>{const{white:a}=x.colors,{boxShadow:t}=x,s=i=>{const r=i.currentTarget,c=r.querySelector("[data-blob]"),y=r.querySelector("[data-fakeblob]");if(c&&y){const p=y.getBoundingClientRect(),k=i.clientX-p.left-p.width/2,j=i.clientY-p.top-p.height/2;c.style.transform=`translate(${k}px, ${j}px)`}};return e.map(({id:i,iconName:r,displayName:c})=>o.jsxs(z,{onMouseMove:s,className:"WrapperIcon",position:"relative",minWidth:"120px",borderRadius:"8px",padding:"3px",overflow:"hidden",background:a[0],boxShadow:t[2],children:[o.jsxs(P,{justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100%",padding:["10px 0","10px 0","20px 0","30px 0"],gap:"5px",borderRadius:"8px",zIndex:"1",children:[o.jsx(D,{name:r,width:"50px",height:"50px",fill:"currentColor"}),o.jsx(K,{children:c})]}),o.jsx(E,{"data-blob":!0}),o.jsx(H,{"data-fakeblob":!0})]},`${i}-${n?"hidden":"visible"}`))},v=b`
  100% {
    opacity: 1;
    transform: scale(1);
  }
`,G=l(w).withConfig({shouldForwardProp:e=>e!=="isAccordeon"})`
  flex-direction: ${({isAccordeon:e})=>e?"column":"row"};
  align-content: ${({isAccordeon:e})=>e?"center":"normal"};
`,W=b`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`,O=l(g)`
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  transform: scale(0.95);
  opacity: 0;
  animation: ${v} 0.5s ease-in-out forwards;

  > * {
    flex: 0 0 100%;
  }

  &:hover > div {
    animation-play-state: paused;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`,f=l(g)`
  will-change: transform;
  animation: ${W} 40s linear infinite;
`,X=({data:e})=>{const n=d.useMemo(()=>e.map((t,s)=>({id:`${t.category}-${s+1}`,iconName:t.iconName,displayName:t.displayName,title:t.title,category:t.category})),[e]),a={gap:"15px",margin:"0",padding:"0 15px 0 0"};return o.jsxs(O,{margin:"0 auto",padding:"20px 0",overflowX:"auto",children:[o.jsx(f,{...a,children:o.jsx(h,{skills:n})}),o.jsx(f,{"aria-hidden":!0,...a,children:o.jsx(h,{skills:n,isHidden:!0})})]})},J=l(C)`
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
  background: ${({theme:e})=>e.backdropColor[3]};
  color: ${({theme:e})=>e.textColor};

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 16px;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 10px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    font-size: 18px;
  }
`,U=({isActive:e,skills:n})=>{const a=d.useRef(null);return d.useEffect(()=>{a.current&&(a.current.style.maxHeight=e?`${a.current.scrollHeight}px`:"0")},[e]),o.jsx(J,{ref:a,"aria-hidden":!e,children:n.map(({displayName:t})=>o.jsx(m,{padding:"5px",children:t},t))})},q=l(m)`
  transform: scale(0.95);
  animation: ${v} 0.5s ease-in-out forwards;
`,L=l(B)`
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
`;function V(e){const[n,a]=d.useState(null);return[n,s=>{a(i=>i===s?null:s)}]}const Y=({data:e})=>{const[n,a]=V(),t=$();return o.jsx(q,{width:"100%",maxWidth:"800px",margin:"0 auto",opacity:"0",children:e.map(([s,{title:i,skills:r}])=>{const c=n===s;return o.jsxs(m,{borderBottom:c?void 0:`1px solid ${t.accentColor}`,children:[o.jsxs(L,{onClick:()=>a(s),className:c?"active":"",fontSize:["20px","20px","22px"],width:"100%",justifyContent:"space-between",alignItems:"center",padding:"15px 20px",border:"none",fontWeight:"700",color:t.textColor,background:t.backdropColor[3],children:[o.jsx("span",{children:i}),o.jsx("span",{children:"▾"})]}),o.jsx(U,{isActive:c,skills:r})]},s)})})},ee=()=>{const[e,n]=d.useState(null);d.useEffect(()=>{const t=localStorage.getItem("isCarousel");n(t!==null?JSON.parse(t):!0)},[]),d.useEffect(()=>{e!==null&&localStorage.setItem("isCarousel",JSON.stringify(e))},[e]);const a=t=>{const s=t.reduce((i,r)=>(i[r.category]||(i[r.category]={title:r.title,skills:[]}),i[r.category].skills.push(r),i),{});return Object.entries(s)};return o.jsxs(G,{"aria-label":"skills section",isAccordeon:!e,gap:"20px",padding:"0 15px",flexWrap:"wrap",alignItems:"baseline",children:[o.jsx(T,{alt:"Hero",fetchpriority:"high",width:1572,height:620,decoding:"async",src:I}),o.jsx(m,{padding:[0,0,"24px 0"],width:"100%",children:o.jsxs(F,{children:["I turn these skills into beautiful web projects",o.jsx(R,{togglePosition:e??!1,setTogglePosition:n,labelFirst:"Show scroll animation",labelSecond:"Show categories",iconName:"icon-embed"})]})}),e?o.jsx(X,{data:u}):o.jsx(Y,{data:a(u)}),o.jsx(A,{to:M,children:"Code in Motion 🎬 ➾"})]})};export{ee as default};
