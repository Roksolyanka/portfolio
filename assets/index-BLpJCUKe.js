import{d as o,F as p,A as v,c as w,j as t,I as d,t as i,f as S,r as T,S as $,a as C,T as P,b as R,i as z}from"./index-B17MNmM0.js";import{b as I}from"./background-DhGLTqEF.js";const l="/portfolio/assets/goosetrack-CwFzlNQ_.jpg",H="/portfolio/assets/goosetrack-2x-Dcsn5Ofl.jpg",h="/portfolio/assets/truscape-C9MAyZVk.jpg",G="/portfolio/assets/truscape-2x-BZ6sGPNv.jpg",g="/portfolio/assets/awesome-CgenBW8q.jpg",B="/portfolio/assets/awesome-2x-Ail_Vr7d.jpg",m="/portfolio/assets/phonebook-CR6avLU4.jpg",N="/portfolio/assets/phonebook-2x-BMnPLRRW.jpg",x="/portfolio/assets/monzamotorsports-BjIXUGx8.jpg",A="/portfolio/assets/monzamotorsports-2x-C1R9mues.jpg",u="/portfolio/assets/cinemania-BHdYy9r1.jpg",M="/portfolio/assets/cinemania-2x-BfrCqbwh.jpg",b="/portfolio/assets/mimiho-5iBPHxFr.jpg",F="/portfolio/assets/mimiho-2x-CiRcTdP1.jpg",f="/portfolio/assets/webstudio-CWkadBW9.jpg",L="/portfolio/assets/webstudio-2x-BsWk6rOh.jpg",k="/portfolio/assets/banderogus-BgeO_c4Q.jpg",E="/portfolio/assets/banderogus-2x-hwR_xhsG.jpg",V=[{projectName:"TaskFusion",projectImage:{src:l,srcset:`
        ${l} 1x,
        ${H} 2x
      `},isTeamProject:!0,description:"This website enables individuals to gain a comprehensive understanding of their schedules by displaying all their tasks, events, and appointments in an easy-to-navigate layout.",skills:"HTML | CSS | styled-components | React.js | Redux.js | Node.js | Parcel | Formik | Notiflix | date-fns | Axios | REST API | Trello | Git/GitHub | VSCode",github:"https://github.com/Tarasdeveloper/TaskFusion-frontend",website:"https://tarasdeveloper.github.io/TaskFusion-frontend/"},{projectName:"TruScape",projectImage:{src:h,srcset:`
        ${h} 1x,
        ${G} 2x
      `},isTeamProject:!1,description:"A CRM-like web application aimed at optimizing the management of supplier information.",skills:"HTML | CSS | Tailwind CSS | Next.js | React.js | TypeScript | clsx | Formik | Git/GitHub | VSCode",github:"https://github.com/Roksolyanka/nextjs-crm",website:"https://nextjs-crm-sigma.vercel.app/dashboard"},{projectName:"Awesome project",projectImage:{src:g,srcset:`
        ${g} 1x,
        ${B} 2x
      `},isTeamProject:!1,description:"This is a social network that allows users to take photos and share them through their profile.",skills:"HTML | CSS | styled-components | React.js | React Native | Redux.js | Firebase | Expo | Android Studio | Firestore | react-navigation | react-native-maps | Git/GitHub | VSCode",github:"https://github.com/Roksolyanka/AwesomeProject",website:""},{projectName:"Phonebook",projectImage:{src:m,srcset:`
        ${m} 1x,
        ${N} 2x
      `},isTeamProject:!1,description:"User-friendly digital platform for managing contacts.",skills:"HTML | CSS | styled-components | React.js | Redux.js | Parcel | Axios | REST API | Git/GitHub | VSCode",github:"https://github.com/Roksolyanka/phonebook",website:"https://roksolyanka.github.io/phonebook/"},{projectName:"Monza Motorsports",projectImage:{src:x,srcset:`
        ${x} 1x,
        ${A} 2x
      `},isTeamProject:!1,description:"The website is a boutique-style dealership specializing in premium imports, offering an advanced online vehicle purchasing experience with integrated financing and contactless home delivery.",skills:"HTML | CSS | JavaScript | Parcel | Bootstrap | Git/GitHub | VSCode",github:"https://github.com/Roksolyanka/monzamotorsports",website:"https://roksolyanka.github.io/monzamotorsports/"},{projectName:"Cinemania",projectImage:{src:u,srcset:`
        ${u} 1x,
        ${M} 2x
      `},isTeamProject:!0,description:"This is a movie search website.",skills:"HTML | CSS | JavaScript | Parcel | Ajax | Axios | REST API | Trello | Git/GitHub | VSCode",github:"https://github.com/Tarasdeveloper/cinemania",website:"https://tarasdeveloper.github.io/cinemania/"},{projectName:"MIMIHO",projectImage:{src:b,srcset:`
        ${b} 1x,
        ${F} 2x
      `},isTeamProject:!0,description:"This is a website designed for the presentation and promotion of the hotel and restaurant business.",skills:"HTML | CSS | JavaScript | Trello | Git/GitHub | VSCode | Scrum | Agile",github:"https://github.com/Brod9ga/gp-team-project",website:"https://brod9ga.github.io/gp-team-project/"},{projectName:"WebStudio",projectImage:{src:f,srcset:`
        ${f} 1x,
        ${L} 2x
      `},isTeamProject:!1,description:"This site is designed to help you increase the flow of customers  and sales for your business with digital marketing and growth solutions.",skills:"HTML | CSS | Git/GitHub | VSCode",github:"https://github.com/Roksolyanka/goit-markup-hw-07",website:"https://roksolyanka.github.io/goit-markup-hw-07/"},{projectName:"BanderoGus",projectImage:{src:k,srcset:`
        ${k} 1x,
        ${E} 2x
      `},isTeamProject:!1,description:"This is a humorous website created to entertain users with humorous content.",skills:"Figma | HTML | CSS | VSCode",github:"https://github.com/Roksolyanka/banderogus",website:"https://roksolyanka.github.io/banderogus/"}],y=o(p)`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 0.034138655462184864) 70%
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`,a=o.article`
  position: relative;
  height: 80px;
  width: 90%;
  margin: 5px auto;
  cursor: pointer;
  overflow: hidden;
  border-radius: 40px;
  transition: all 0.6s ease;
  background-image: ${({$background:e})=>`url(${e})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: ${({theme:e})=>e.boxShadowNav};
  scroll-snap-align: start;

  &[data-active='true'] {
    height: 350px;
    background-image: ${({$background:e})=>`url(${e})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: auto;

    ${y} {
      div {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    flex-shrink: 0;
    height: 100%;
    width: 10%;
    max-width: 80px;
    margin: 0 10px;

    &[data-active='true'] {
      width: 70%;
      max-width: 740px;
      height: 100%;
    }
  }
`,W=o(p)`
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.6s ease;
  z-index: 1;

  ${a}[data-active='true'] & {
    opacity: 1;
    pointer-events: auto;
  }
`,j=o.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({theme:e})=>e.colors.green[4]};
  border-radius: 50%;
  transition: background 0.6s;

  &:hover svg {
    transform: scale(1.7);
    transition: transform 0.8s ease;
  }

  &:not(:hover) svg {
    transform: scale(1);
    transition: transform 0.8s ease;
  }
`,D=o(v)`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  white-space: nowrap;
  text-transform: uppercase;
  border: 2px solid ${({theme:e})=>e.colors.green[10]};
  opacity: 0;
  transition: opacity 0.6s ease;

  ${a}[data-active='true'] & {
    opacity: 1;
  }
`,_=o(p)`
  opacity: 0;
  transform: translateY(40px);
  transition: 0.6s;
`,O=o.h3`
  color: ${({theme:e})=>e.colors.green[5]};
  font-size: 24px;
  font-family: 'EB Garamond', serif;

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 30px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    font-size: 36px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    font-size: 44px;
  }
`,J=o(w)`
  color: ${({theme:e})=>e.colors.green[0]};
  font-size: 12px;
  text-align: start;

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    font-size: 14px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    font-size: 16px;
  }
`,U=o(w)`
  color: ${({theme:e})=>e.colors.orange[5]};
  font-size: 10px;
  text-align: end;

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 12px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    font-size: 14px;
  }
`,q=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 14px;
  font-size: 24px;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  background: ${({theme:e})=>e.colors.green[4]};
  color: ${({theme:e})=>e.colors.green[10]};
  border-radius: 50%;
  margin: -65px 15px 15px;
  opacity: 1;
  transition: opacity 0.8 ease;

  ${a}[data-active='true'] & {
    display: none;
    opacity: 0;
    transition: display 0.6s ease;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    margin: 265px 15px 15px;
  }
`,Y=({project:e,index:r,isActive:n,onClick:c})=>t.jsx(t.Fragment,{children:t.jsx(a,{$background:e.projectImage.src,"data-active":n,onClick:c,children:t.jsxs(y,{flexDirection:"column",justifyContent:"space-between",width:"100%",height:"100%",children:[(e.website||e.github)&&t.jsxs(W,{justifyContent:"space-between",width:"100%",padding:"16px",children:[e.github&&t.jsx(j,{href:e.github,target:"_blank",rel:"noopener noreferrer",children:t.jsx(d,{name:"icon-github",width:"24px",height:"24px",fill:i.colors.green[10]})}),e.website&&t.jsx(j,{href:e.website,target:"_blank",rel:"noopener noreferrer",children:t.jsx(d,{name:"icon-share",width:"24px",height:"24px",fill:i.colors.green[10]})})]}),e.isTeamProject&&t.jsx(D,{fontSize:"16px",fontWeight:"600",fontFamily:"EB Garamond, serif",right:"0",top:"30%",background:i.colors.orange[5],color:i.colors.green[10],padding:"8px",borderRadius:"5px",children:"Team Project"}),t.jsx(q,{children:r+1}),t.jsxs(_,{flexDirection:"column",justifyContent:"flex-end",width:"100%",padding:"16px",gap:"10px",children:[t.jsx(O,{children:e.projectName}),t.jsx(J,{children:e.description}),t.jsx(U,{children:e.skills})]})]})})}),Q=o.div`
  width: 100%;
  display: flex;
  -webkit-overflow-scrolling: touch;
  padding: 0px;
  flex-direction: column;
  animation: ${S} 1s ease-out forwards;

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    height: 500px;
    flex-direction: row;
    overflow-x: auto;
    padding: 40px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 5px;
      height: 7px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #337912;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      box-shadow: inset 0 0 5px #337912;
    }
  }
`,Z=({projects:e})=>{const[r,n]=T.useState(0);return t.jsx(Q,{children:e.map((c,s)=>t.jsx(Y,{project:c,index:s,isActive:s===r,onClick:()=>n(s)},s))})},ee=()=>t.jsxs($,{"aria-label":"projects section",gap:"10px",padding:["0","0","0 25px","0 100px"],flexWrap:"wrap",alignItems:"baseline",justifyContent:"center",children:[t.jsx(C,{alt:"Hero",fetchpriority:"high",width:1572,height:620,decoding:"async",src:I}),t.jsx(P,{children:"Here's a glimpse into some of the projects I've had the pleasure of working on:"}),t.jsx(Z,{projects:V}),t.jsx(R,{to:z,children:"My Journey of Success 📜 ➾"})]});export{ee as default};
