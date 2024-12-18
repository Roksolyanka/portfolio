import{d as s,B as p,F as m,A as f,j as o,I as w,m as N,r as l,g as y,c as j,G as D,t as $,e as S}from"./index-CWNn5md1.js";import{T as C}from"./index-CD6iPL5X.js";import{B,b as T,c as F}from"./styled-Cn9wTXb8.js";const x=[{iconName:"icon-html",displayName:"HTML",title:"Frontend Development",category:"frontend"},{iconName:"icon-javascript",displayName:"JavaScript",title:"Frontend Development",category:"frontend"},{iconName:"icon-react",displayName:"React",title:"Frontend Development",category:"frontend"},{iconName:"icon-redux",displayName:"Redux",title:"Frontend Development",category:"frontend"},{iconName:"icon-typescript",displayName:"TypeScript",title:"Frontend Development",category:"frontend"},{iconName:"icon-ajax",displayName:"Ajax",title:"Frontend Development",category:"frontend"},{iconName:"icon-formik",displayName:"Formik",title:"Frontend Development",category:"frontend"},{iconName:"icon-node-js",displayName:"Node.js",title:"Backend Development",category:"backend"},{iconName:"icon-next-js",displayName:"Next.js",title:"Backend Development",category:"backend"},{iconName:"icon-mongodb",displayName:"MongoDB",title:"Backend Development",category:"backend"},{iconName:"icon-mongoose",displayName:"Mongoose",title:"Backend Development",category:"backend"},{iconName:"icon-firebase",displayName:"Firebase",title:"Backend Development",category:"backend"},{iconName:"icon-firestore",displayName:"Firestore",title:"Backend Development",category:"backend"},{iconName:"icon-axios",displayName:"Axios",title:"Backend Development",category:"backend"},{iconName:"icon-rest-api",displayName:"Rest API",title:"Backend Development",category:"backend"},{iconName:"icon-vscode",displayName:"VSCode",title:"Development Tools",category:"tools"},{iconName:"icon-git",displayName:"Git",title:"Development Tools",category:"tools"},{iconName:"icon-github",displayName:"Github",title:"Development Tools",category:"tools"},{iconName:"icon-postman",displayName:"Postman",title:"Development Tools",category:"tools"},{iconName:"icon-npm",displayName:"NPM",title:"Development Tools",category:"tools"},{iconName:"icon-yarn",displayName:"YARN",title:"Development Tools",category:"tools"},{iconName:"icon-webpack",displayName:"Webpack",title:"Development Tools",category:"tools"},{iconName:"icon-vite",displayName:"Vite",title:"Development Tools",category:"tools"},{iconName:"icon-parcel",displayName:"Parcel",title:"Development Tools",category:"tools"},{iconName:"icon-figma",displayName:"Figma",title:"Development Tools",category:"tools"},{iconName:"icon-ui-ux",displayName:"UI/UX",title:"Development Tools",category:"tools"},{iconName:"icon-trello",displayName:"Trello",title:"Development Tools",category:"tools"},{iconName:"icon-css",displayName:"CSS",title:"Styling & Design",category:"style"},{iconName:"icon-styled-components",displayName:"Styled-components",title:"Styling & Design",category:"style"},{iconName:"icon-bootstrap",displayName:"Bootstrap",title:"Styling & Design",category:"style"},{iconName:"icon-react-native",displayName:"React Native",title:"Mobile Development",category:"mobile"},{iconName:"icon-expo",displayName:"Expo",title:"Mobile Development",category:"mobile"},{iconName:"icon-android-studio",displayName:"Android Studio",title:"Mobile Development",category:"mobile"},{iconName:"icon-agile",displayName:"Agile",title:"Agile Methodologies",category:"agile"},{iconName:"icon-scrum",displayName:"Scrum",title:"Agile Methodologies",category:"agile"},{iconName:"icon-kanban",displayName:"Kanban",title:"Agile Methodologies",category:"agile"}],A=s(p)`
  position: relative;
  min-width: 120px;
  border-radius: 8px;
  padding: 3px;
  overflow: hidden;
  z-index: 0;
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
`,z=s(m)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  height: 100%;
  border-radius: 8px;
  z-index: 1;
  pointer-events: none;

  &:hover {
    opacity: 0.6;
  }
`,E=s(f)`
  width: 100px;
  height: 80%;
  top: 100%;
  border-radius: 50%;
  opacity: 0;
  z-index: -1;
  left: calc(20% - 50px);
  background: ${({theme:e})=>e.colors.green[4]};
  filter: blur(40px);
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 1;
  }
`,M=s(f)`
  height: 100%;
  border-radius: 50%;
  z-index: -1;
  visibility: hidden;
`,I=s.p`
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
`,h=({skills:e,isHidden:i=!1})=>o.jsx(o.Fragment,{children:e.map(t=>o.jsxs(A,{className:"WrapperIcon",children:[o.jsxs(z,{padding:["10px 0","10px 0","20px 0","30px 0"],children:[o.jsx(w,{name:t.iconName,width:"50px",height:"50px",fill:"currentColor"}),o.jsx(I,{children:t.displayName})]}),o.jsx(E,{"data-blob":!0}),o.jsx(M,{"data-fakeblob":!0})]},`${t.id}-${i?"hidden":"visible"}`))}),b=N`
  100% {
    opacity: 1;
    transform: scale(1);
  }
`,R=s("section").withConfig({shouldForwardProp:e=>e!=="isAccordeon"})`
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
  flex-direction: ${({isAccordeon:e})=>e?"column":"row"};
  align-content: ${({isAccordeon:e})=>e?"center":"normal"};

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    gap: 30px;
  }
`,P=s.h2`
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
`,G=N`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`,H=s(m)`
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
`,u=s(m)`
  will-change: transform;
  animation: ${G} 40s linear infinite;
`,O=({data:e})=>{const i=l.useMemo(()=>e.map((t,a)=>({id:`${t.category}-${a+1}`,iconName:t.iconName,displayName:t.displayName})),[e]);return l.useEffect(()=>{const t=document.querySelectorAll(".WrapperIcon"),a=c=>{t.forEach(r=>{const n=y(r,"[data-blob]"),g=y(r,"[data-fakeblob]");if(n&&g){const d=g.getBoundingClientRect(),v=c.clientX-d.left-d.width/2,k=c.clientY-d.top-d.height/2;n.style.transform=`translate(${v}px, ${k}px)`}})};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[]),o.jsxs(H,{margin:"0 auto",padding:"20px 0",overflowX:"auto",children:[o.jsx(u,{gap:"15px",margin:"0",padding:"0 15px 0 0",children:o.jsx(h,{skills:i})}),o.jsx(u,{"aria-hidden":!0,gap:"15px",margin:"0",padding:"0 15px 0 0",children:o.jsx(h,{skills:i,isHidden:!0})})]})},W=s(p)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: scale(0.95);
  animation: ${b} 0.5s ease-in-out forwards;
`,X=s(j)`
  font-family: 'EB Garamond', serif;
  font-weight: 700;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  transition: all 0.8s ease;
  color: ${({theme:e})=>e.textColor};
  background: ${({theme:e})=>e.colors.backdropColor[3]};

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
`,J=s(D)`
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
`,L=({isActive:e,skills:i})=>{const t=l.useRef(null);return l.useEffect(()=>{t.current&&(t.current.style.maxHeight=e?`${t.current.scrollHeight}px`:"0")},[e]),o.jsx(J,{ref:t,"aria-hidden":!e,children:i.map(a=>o.jsx("div",{children:a.displayName},a.displayName))})},U=({data:e})=>{const[i,t]=l.useState(null);return o.jsx(W,{children:e.map(([a,{title:c,skills:r}],n)=>o.jsxs(p,{border:i===n?"none":`0 0 1px 0 solid ${$.accentColor}`,children:[o.jsxs(X,{onClick:()=>t(i===n?null:n),className:i===n?"active":"",fontSize:["20px","20px","22px"],children:[o.jsx("span",{children:c}),o.jsx("span",{children:"▾"})]}),o.jsx(L,{isActive:i===n,skills:r})]},a))})},K=()=>{const[e,i]=l.useState(()=>{const a=localStorage.getItem("isCarousel");return a?JSON.parse(a):!0});l.useEffect(()=>{localStorage.setItem("isCarousel",JSON.stringify(e))},[e]);const t=a=>{const c=a.reduce((r,n)=>(r[n.category]||(r[n.category]={title:n.title,skills:[]}),r[n.category].skills.push(n),r),{});return Object.entries(c)};return o.jsxs(R,{"aria-label":"skills section",isAccordeon:!e,children:[o.jsx(B,{alt:"Hero",loading:"lazy",width:"1572",height:"620",decoding:"async",src:T}),o.jsx(p,{padding:[0,0,"24px 0"],width:"100%",children:o.jsxs(P,{children:["I turn these skills into beautiful web projects",o.jsx(C,{togglePosition:e,setTogglePosition:i,labelFirst:"Show scroll animation",labelSecond:"Show categories",iconName:"icon-embed"})]})}),e?o.jsx(O,{data:x}):o.jsx(U,{data:t(x)}),o.jsx(F,{to:S,children:"My projects ➾"})]})};export{K as default};
