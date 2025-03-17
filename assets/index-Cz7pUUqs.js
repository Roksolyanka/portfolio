import{d as i,B as x,F as h,A as y,c as v,j as o,I as S,t as g,m as j,S as $,r as p,G as B,g as I,u as z,a as R,T as N,b as T,h as A}from"./index-Nu4oZnZW.js";import{T as E,s as m}from"./skills-tFru2L-y.js";import{b as F}from"./background-DhGLTqEF.js";const H=i(x)`
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
`,P=i(h)`
  pointer-events: none;

  &:hover {
    opacity: 0.6;
  }
`,M=i(y)`
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
`,O=i(y)`
  height: 100%;
  border-radius: 50%;
  z-index: -1;
  visibility: hidden;
`,W=i(v)`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.green[10]};

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 14px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    font-size: 16px;
  }
`,f=({skills:e,isHidden:r=!1})=>{const{white:n}=g.colors,{boxShadow:t}=g,l=s=>{const a=s.currentTarget,c=a.querySelector("[data-blob]"),d=a.querySelector("[data-fakeblob]");if(c&&d){const u=d.getBoundingClientRect(),C=s.clientX-u.left-u.width/2,k=s.clientY-u.top-u.height/2;c.style.transform=`translate(${C}px, ${k}px)`}};return e.map(({id:s,iconName:a,displayName:c})=>o.jsxs(H,{onMouseMove:l,className:"WrapperIcon",position:"relative",minWidth:"120px",borderRadius:"8px",padding:"3px",overflow:"hidden",background:n[0],boxShadow:t[2],children:[o.jsxs(P,{justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100%",padding:["10px 0","10px 0","20px 0","30px 0"],gap:"5px",borderRadius:"8px",zIndex:"1",children:[o.jsx(S,{name:a,width:"50px",height:"50px",fill:"currentColor"}),o.jsx(W,{children:c})]}),o.jsx(M,{"data-blob":!0}),o.jsx(O,{"data-fakeblob":!0})]},`${s}-${r?"hidden":"visible"}`))},w=j`
  100% {
    opacity: 1;
    transform: scale(1);
  }
`,G=i($).withConfig({shouldForwardProp:e=>e!=="isAccordeon"})`
  flex-direction: ${({isAccordeon:e})=>e?"column":"row"};
  align-content: ${({isAccordeon:e})=>e?"center":"normal"};
`,X=j`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`,J=i(h)`
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  transform: scale(0.95);
  opacity: 0;
  animation: ${w} 0.5s ease-in-out forwards;

  > * {
    flex: 0 0 100%;
  }

  &:hover > div {
    animation-play-state: paused;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`,b=i(h)`
  will-change: transform;
  animation: ${X} 40s linear infinite;
`,q=({data:e})=>{const r=p.useMemo(()=>e.map((t,l)=>({id:`${t.category}-${l+1}`,iconName:t.iconName,displayName:t.displayName,title:t.title,category:t.category})),[e]),n={gap:"15px",margin:"0",padding:"0 15px 0 0"};return o.jsxs(J,{margin:"0 auto",padding:"20px 0",overflowX:"auto",children:[o.jsx(b,{...n,children:o.jsx(f,{skills:r})}),o.jsx(b,{"aria-hidden":!0,...n,children:o.jsx(f,{skills:r,isHidden:!0})})]})},D=i(B)`
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
`,L=({isActive:e,skills:r})=>{const n=p.useRef(null);return p.useEffect(()=>{n.current&&(n.current.style.maxHeight=e?`${n.current.scrollHeight}px`:"0")},[e]),o.jsx(D,{ref:n,"aria-hidden":!e,children:r.map(({displayName:t})=>o.jsx(x,{padding:"5px",children:t},t))})},U=i(x)`
  transform: scale(0.95);
  animation: ${w} 0.5s ease-in-out forwards;
`,Y=i(I)`
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
`,_=({data:e})=>{const[r,n]=p.useState(null),t=z();return o.jsx(U,{width:"100%",maxWidth:"800px",margin:"0 auto",opacity:"0",children:e.map(([l,{title:s,skills:a}],c)=>{const d=r===c;return o.jsxs(x,{border:d?"none":`0 0 1px 0 solid ${t.accentColor}`,children:[o.jsxs(Y,{onClick:()=>n(d?null:c),className:d?"active":"",fontSize:["20px","20px","22px"],width:"100%",justifyContent:"space-between",alignItems:"center",padding:"15px 20px",border:"none",fontWeight:"700",color:t.textColor,background:t.backdropColor[3],children:[o.jsx("span",{children:s}),o.jsx("span",{children:"▾"})]}),o.jsx(L,{isActive:d,skills:a})]},l)})})},Z=()=>{const[e,r]=p.useState(null);p.useEffect(()=>{const t=localStorage.getItem("isCarousel");r(t!==null?JSON.parse(t):!0)},[]),p.useEffect(()=>{e!==null&&localStorage.setItem("isCarousel",JSON.stringify(e))},[e]);const n=t=>{const l=t.reduce((s,a)=>(s[a.category]||(s[a.category]={title:a.title,skills:[]}),s[a.category].skills.push(a),s),{});return Object.entries(l)};return o.jsxs(G,{"aria-label":"skills section",isAccordeon:!e,gap:"20px",padding:"0 15px",flexWrap:"wrap",alignItems:"baseline",children:[o.jsx(R,{alt:"Hero",loading:"lazy",width:1572,height:620,decoding:"async",src:F}),o.jsx(x,{padding:[0,0,"24px 0"],width:"100%",children:o.jsxs(N,{children:["I turn these skills into beautiful web projects",o.jsx(E,{togglePosition:e??!1,setTogglePosition:r,labelFirst:"Show scroll animation",labelSecond:"Show categories",iconName:"icon-embed"})]})}),e?o.jsx(q,{data:m}):o.jsx(_,{data:n(m)}),o.jsx(T,{to:A,children:"Code in Motion 🎬 ➾"})]})};export{Z as default};
