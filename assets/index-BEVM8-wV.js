import{d as o,F as a,j as t,I as r,t as c,f as w,a as j,S as y,i as $}from"./index-BpXZVs8y.js";import{b as S}from"./background-DhGLTqEF.js";import{T as v}from"./styled-DW0xvvNM.js";const p="/portfolio/assets/goosetrack-CwFzlNQ_.jpg",C="/portfolio/assets/goosetrack-2x-Dcsn5Ofl.jpg",d="/portfolio/assets/truscape-C9MAyZVk.jpg",T="/portfolio/assets/truscape-2x-BZ6sGPNv.jpg",l="/portfolio/assets/awesome-CgenBW8q.jpg",R="/portfolio/assets/awesome-2x-Ail_Vr7d.jpg",h="/portfolio/assets/phonebook-CR6avLU4.jpg",z="/portfolio/assets/phonebook-2x-BMnPLRRW.jpg",g="/portfolio/assets/monzamotorsports-BjIXUGx8.jpg",H="/portfolio/assets/monzamotorsports-2x-C1R9mues.jpg",m="/portfolio/assets/cinemania-BHdYy9r1.jpg",G="/portfolio/assets/cinemania-2x-BfrCqbwh.jpg",x="/portfolio/assets/mimiho-5iBPHxFr.jpg",I="/portfolio/assets/mimiho-2x-CiRcTdP1.jpg",b="/portfolio/assets/webstudio-CWkadBW9.jpg",N="/portfolio/assets/webstudio-2x-BsWk6rOh.jpg",u="/portfolio/assets/banderogus-BgeO_c4Q.jpg",B="/portfolio/assets/banderogus-2x-hwR_xhsG.jpg",M=[{projectName:"TaskFusion",projectImage:{src:p,srcset:`
        ${p} 1x,
        ${C} 2x
      `},description:"This website enables individuals to gain a comprehensive understanding of their schedules by displaying all their tasks, events, and appointments in an easy-to-navigate layout.",skills:"HTML | CSS | styled-components | React.js | Redux.js | Node.js | Parcel | Formik | Notiflix | date-fns | Axios | REST API | Trello | Git/GitHub | VSCode",github:"https://github.com/Tarasdeveloper/TaskFusion-frontend",website:"https://tarasdeveloper.github.io/TaskFusion-frontend/"},{projectName:"TruScape",projectImage:{src:d,srcset:`
        ${d} 1x,
        ${T} 2x
      `},description:"A CRM-like web application aimed at optimizing the management of supplier information.",skills:"HTML | CSS | Tailwind CSS | Next.js | React.js | TypeScript | clsx | Formik | Git/GitHub | VSCode",github:"https://github.com/Roksolyanka/nextjs-crm",website:"https://nextjs-crm-sigma.vercel.app/dashboard"},{projectName:"Awesome project",projectImage:{src:l,srcset:`
        ${l} 1x,
        ${R} 2x
      `},description:"This is a social network that allows users to take photos and share them through their profile.",skills:"HTML | CSS | styled-components | React.js | React Native | Redux.js | Firebase | Expo | Android Studio | Firestore | react-navigation | react-native-maps | Git/GitHub | VSCode",github:"https://github.com/Roksolyanka/AwesomeProject",website:""},{projectName:"Phonebook",projectImage:{src:h,srcset:`
        ${h} 1x,
        ${z} 2x
      `},description:"User-friendly digital platform for managing contacts.",skills:"HTML | CSS | styled-components | React.js | Redux.js | Parcel | Axios | REST API | Git/GitHub | VSCode",github:"https://github.com/Roksolyanka/phonebook",website:"https://roksolyanka.github.io/phonebook/"},{projectName:"Monza Motorsports",projectImage:{src:g,srcset:`
        ${g} 1x,
        ${H} 2x
      `},description:"The website is a boutique-style dealership specializing in premium imports, offering an advanced online vehicle purchasing experience with integrated financing and contactless home delivery.",skills:"HTML | CSS | JavaScript | Parcel | Bootstrap | Git/GitHub | VSCode",github:"https://github.com/Roksolyanka/monzamotorsports",website:"https://roksolyanka.github.io/monzamotorsports/"},{projectName:"Cinemania",projectImage:{src:m,srcset:`
        ${m} 1x,
        ${G} 2x
      `},description:"This is a movie search website.",skills:"HTML | CSS | JavaScript | Parcel | Ajax | Axios | REST API | Trello | Git/GitHub | VSCode",github:"https://github.com/Tarasdeveloper/cinemania",website:"https://tarasdeveloper.github.io/cinemania/"},{projectName:"MIMIHO",projectImage:{src:x,srcset:`
        ${x} 1x,
        ${I} 2x
      `},description:"This is a website designed for the presentation and promotion of the hotel and restaurant business.",skills:"HTML | CSS | JavaScript | Trello | Git/GitHub | VSCode | Scrum | Agile",github:"https://github.com/Brod9ga/gp-team-project",website:"https://brod9ga.github.io/gp-team-project/"},{projectName:"WebStudio",projectImage:{src:b,srcset:`
        ${b} 1x,
        ${N} 2x
      `},description:"This site is designed to help you increase the flow of customers  and sales for your business with digital marketing and growth solutions.",skills:"HTML | CSS | Git/GitHub | VSCode",github:"https://github.com/Roksolyanka/goit-markup-hw-07",website:"https://roksolyanka.github.io/goit-markup-hw-07/"},{projectName:"BanderoGus",projectImage:{src:u,srcset:`
        ${u} 1x,
        ${B} 2x
      `},description:"This is a humorous website created to entertain users with humorous content.",skills:"Figma | HTML | CSS | VSCode",github:"https://github.com/Roksolyanka/banderogus",website:"https://roksolyanka.github.io/banderogus/"}],i=o.input`
  display: none;
`,k=o(a)`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 0.034138655462184864) 70%
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`,n=o.label`
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

  ${i}:checked + & {
    height: 350px;
    background-image: ${({$background:e})=>`url(${e})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    ${k} {
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

    ${i}:checked + & {
      width: 70%;
      max-width: 740px;
      height: 100%;
    }
  }
`,P=o(a)`
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.6s ease;

  ${i}:checked + ${n} & {
    opacity: 1;
    pointer-events: auto;
  }
`,f=o.a`
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
`,A=o(a)`
  opacity: 0;
  transform: translateY(40px);
  transition: 0.6s;
`,F=o.h3`
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
`,L=o.p`
  color: ${({theme:e})=>e.colors.green[0]};
  font-size: 12px;
  font-family: 'EB Garamond', serif;
  font-weight: 700;

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    font-size: 14px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    font-size: 16px;
  }
`,E=o.p`
  color: ${({theme:e})=>e.colors.orange[5]};
  font-size: 10px;
  font-family: 'EB Garamond', serif;
  font-weight: 700;
  text-align: end;

  @media (min-width: ${({theme:e})=>e.breakpoints[1]}) {
    font-size: 12px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[2]}) {
    font-size: 14px;
  }
`,V=o.div`
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

  ${i}:checked + ${n} & {
    display: none;
    opacity: 0;
    transition: display 0.6s ease;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    margin: 265px 15px 15px;
  }
`,D=({project:e,index:s})=>t.jsxs(t.Fragment,{children:[t.jsx(i,{type:"radio",name:"slide",id:`c-${s}`,defaultChecked:s===0}),t.jsx(n,{htmlFor:`c-${s}`,$background:e.projectImage.src,children:t.jsxs(k,{flexDirection:"column",justifyContent:"space-between",width:"100%",height:"100%",children:[(e.website||e.github)&&t.jsxs(P,{justifyContent:"space-between",width:"100%",padding:"16px",children:[e.github&&t.jsx(f,{href:e.github,target:"_blank",rel:"noopener noreferrer",children:t.jsx(r,{name:"icon-github",width:"24px",height:"24px",fill:c.colors.green[10]})}),e.website&&t.jsx(f,{href:e.website,target:"_blank",rel:"noopener noreferrer",children:t.jsx(r,{name:"icon-share",width:"24px",height:"24px",fill:c.colors.green[10]})})]}),t.jsx(V,{children:s+1}),t.jsxs(A,{flexDirection:"column",justifyContent:"flex-end",width:"100%",padding:"16px",gap:"10px",children:[t.jsx(F,{children:e.projectName}),t.jsx(L,{children:e.description}),t.jsx(E,{children:e.skills})]})]})})]}),_=o.section`
  display: flex;
  gap: 10px;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    padding: 0 25px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints[4]}) {
    padding: 0 100px;
  }
`,W=o.div`
  width: 100%;
  display: flex;
  -webkit-overflow-scrolling: touch;
  padding: 0px;
  flex-direction: column;
  animation: ${w} 1s ease-out forwards;

  @media (min-width: ${({theme:e})=>e.breakpoints[3]}) {
    height: 400px;
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

  @media (min-width: ${({theme:e})=>e.breakpoints[4]}) {
    height: 500px;
  }
`,J=()=>t.jsxs(_,{"aria-label":"about section",children:[t.jsx(j,{alt:"Hero",loading:"lazy",width:"1572",height:"620",decoding:"async",src:S}),t.jsx(v,{children:"Here's a glimpse into some of the projects I've had the pleasure of working on:"}),t.jsx(W,{children:M.map((e,s)=>t.jsx(D,{project:e,index:s},s))}),t.jsx(y,{to:$,children:"My achievements ➾"})]});export{J as default};
