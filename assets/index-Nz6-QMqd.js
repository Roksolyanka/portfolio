import{d as n,B as g,F as m,A as u,j as a,I as N,m as j,r as d,L as w,c as k,e as v}from"./index-CmBrs-mE.js";import{T as S}from"./index-DW2KbwQK.js";import{B as $,b as B,c as I}from"./styled-dxmrrPrF.js";const l={frontend:[{name:"icon-html",displayName:"HTML"},{name:"icon-javascript",displayName:"JavaScript"},{name:"icon-react",displayName:"React"},{name:"icon-redux",displayName:"Redux"},{name:"icon-typescript",displayName:"TypeScript"},{name:"icon-ajax",displayName:"Ajax"},{name:"icon-formik",displayName:"Formik"}],backend:[{name:"icon-node-js",displayName:"Node.js"},{name:"icon-next-js",displayName:"Next.js"},{name:"icon-mongodb",displayName:"MongoDB"},{name:"icon-mongoose",displayName:"Mongoose"},{name:"icon-firebase",displayName:"Firebase"},{name:"icon-firestore",displayName:"Firestore"},{name:"icon-axios",displayName:"Axios"},{name:"icon-rest-api",displayName:"Rest API"}],tools:[{name:"icon-vscode",displayName:"VSCode"},{name:"icon-git",displayName:"Git"},{name:"icon-github",displayName:"Github"},{name:"icon-postman",displayName:"Postman"},{name:"icon-npm",displayName:"NPM"},{name:"icon-yarn",displayName:"YARN"},{name:"icon-webpack",displayName:"Webpack"},{name:"icon-vite",displayName:"Vite"},{name:"icon-parcel",displayName:"Parcel"},{name:"icon-figma",displayName:"Figma"},{name:"icon-ui-ux",displayName:"UI/UX"},{name:"icon-trello",displayName:"Trello"}],style:[{name:"icon-css",displayName:"CSS"},{name:"icon-styled-components",displayName:"Styled-components"},{name:"icon-bootstrap",displayName:"Bootstrap"}],mobile:[{name:"icon-react-native",displayName:"React Native"},{name:"icon-expo",displayName:"Expo"},{name:"icon-android-studio",displayName:"Android Studio"}],agile:[{name:"icon-agile",displayName:"Agile"},{name:"icon-scrum",displayName:"Scrum"},{name:"icon-kanban",displayName:"Kanban"}]},R=n(g)`
  background: ${({theme:e})=>e.colors.white[0]};
  scroll-snap-align: center;
  box-shadow: 0 3px 6px rgba(51, 121, 18, 0.05),
    0 8px 15px rgba(51, 121, 18, 0.1), 0 0 0 1px hsla(0, 0%, 100%, 0.1);
  transition: transform 0.8s ease, box-shadow 0.8s ease;

  &:hover {
    transform: scale(1.2);
    z-index: 1;
  }

  &:not(:hover) {
    transform: scale(1);
    transition: transform 0.8s ease;
  }
`,C=n(m)`
  pointer-events: none;

  &:hover {
    opacity: 0.6;
  }
`,z=n(u)`
  left: calc(20% - 50px);
  background: ${({theme:e})=>e.colors.green[4]};
  filter: blur(40px);
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 1;
  }
`,E=n(u)`
  visibility: hidden;
`,F=n.p`
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
`,y=({skills:e,isHidden:s=!1})=>a.jsx(a.Fragment,{children:e.map(i=>a.jsxs(R,{className:"WrapperIcon",position:"relative",borderRadius:"8px",padding:"3px",minWidth:"120px",overflow:"hidden",zIndex:"0",children:[a.jsxs(C,{justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"5px",height:"100%",padding:["10px 0","10px 0","20px 0","30px 0"],borderRadius:"8px",zIndex:"1",children:[a.jsx(N,{name:i.name,width:"50px",height:"50px",fill:"currentColor"}),a.jsx(F,{children:i.displayName})]}),a.jsx(z,{"data-blob":!0,zIndex:"-1",height:"80%",width:"100px",top:"100%",borderRadius:"50%",opacity:"0"}),a.jsx(E,{"data-fakeblob":!0,zIndex:"-1",height:"100%",borderRadius:"50%"})]},`${i.id}-${s?"hidden":"visible"}`))}),A=j`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`,M=n(m)`
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

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
`,h=n(m)`
  will-change: transform;
  animation: ${A} 40s linear infinite;
`,T=({data:e})=>{const s=d.useMemo(()=>Object.keys(e).flatMap(i=>e[i].map((o,t)=>({id:`${i}-${t+1}`,name:o.name,displayName:o.displayName}))),[e]);return d.useEffect(()=>{const i=document.querySelectorAll(".WrapperIcon"),o=t=>{i.forEach(c=>{const p=c.querySelector("[data-blob]"),x=c.querySelector("[data-fakeblob]");if(p&&x){const r=x.getBoundingClientRect(),b=t.clientX-r.left-r.width/2,f=t.clientY-r.top-r.height/2;p.style.transform=`translate(${b}px, ${f}px)`}})};return window.addEventListener("mousemove",o),()=>{window.removeEventListener("mousemove",o)}},[]),a.jsxs(M,{margin:"0 auto",padding:"20px 0",overflowX:"auto",children:[a.jsx(h,{gap:"15px",margin:"0",padding:"0 15px 0 0",children:a.jsx(y,{skills:s})}),a.jsx(h,{"aria-hidden":!0,gap:"15px",margin:"0",padding:"0 15px 0 0",children:a.jsx(y,{skills:s,isHidden:!0})})]})},P=n.section`
  display: flex;
  gap: 20px;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    gap: 30px;
  }
`,L=n.h2`
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
`,H=()=>{const[e,s]=d.useState(!0);return a.jsxs(P,{"aria-label":"skills section",children:[a.jsx($,{alt:"Hero",loading:"lazy",width:"1572",height:"620",decoding:"async",src:B}),a.jsx(g,{padding:[0,0,"24px 0"],children:a.jsxs(L,{children:["I turn these skills into beautiful web projects",a.jsx(S,{togglePosition:e,setTogglePosition:s,labelFirst:"Show scroll animation",labelSecond:"Show categories",iconName:"icon-embed"})]})}),e?a.jsx(T,{data:l}):a.jsx(w,{children:Object.keys(l).map(i=>a.jsx("div",{children:l[i].map(o=>a.jsx(k,{children:o.displayName},o.id))},i))}),a.jsx(I,{to:v,children:"My projects ➾"})]})};export{H as default};
