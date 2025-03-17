import{d as i,j as t,p as c,I as N,t as g}from"./index-Nu4oZnZW.js";const s=i.a`
  cursor: pointer;
  width: 100%;
  height: 100%;
`,x=i(s)``,h=i.div.withConfig({shouldForwardProp:e=>e!=="togglePosition"})`
  transform: ${({togglePosition:e})=>e?"translateX(-35px)":"translateX(35px)"};
  transition: transform 0.3s ease;
  background-color: ${({theme:e})=>e.colors.orange[9]};
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
`,v=i.div`
  display: flex;
  background-color: ${({theme:e})=>e.colors.orange[0]};
  border: 1px solid ${({theme:e})=>e.colors.orange[6]};
  border-radius: 60px;
  justify-content: center;
  align-items: flex-start;
  width: 120px;
  height: 41px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 0 3px 0 1px;
  box-shadow: inset 2px 10px 10px -5px #7c421278;
`,l=i.span`
  color: ${({theme:e})=>e.colors.orange[0]};
  padding: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
`,f=i.div`
  background-color: ${({theme:e})=>e.colors.orange[7]};
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
`,b=i.div`
  color: ${({theme:e})=>e.colors.white[0]};
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
`,D=({togglePosition:e,setTogglePosition:a,handleDownload:n,onToggle:o,cvHref:r,coverLetterHref:d,labelFirst:m,labelSecond:p,iconName:y})=>t.jsx(b,{children:t.jsxs(f,{children:[t.jsx(l,{children:m}),t.jsxs(v,{children:[t.jsx(s,{href:r,download:c.cvName,onClick:()=>{a(!0),o==null||o()}}),t.jsx(h,{onClick:()=>{o==null||o(),n&&n()},togglePosition:e,children:t.jsx(N,{name:y,width:"24px",height:"24px",fill:g.colors.orange[1]})}),t.jsx(x,{href:d,download:c.coverLetterName,onClick:()=>{a(!1),o==null||o()}})]}),t.jsx(l,{children:p})]})}),k=[{iconName:"icon-html",displayName:"HTML",title:"Frontend Development",category:"frontend"},{iconName:"icon-javascript",displayName:"JavaScript",title:"Frontend Development",category:"frontend"},{iconName:"icon-react",displayName:"React",title:"Frontend Development",category:"frontend"},{iconName:"icon-redux",displayName:"Redux",title:"Frontend Development",category:"frontend"},{iconName:"icon-typescript",displayName:"TypeScript",title:"Frontend Development",category:"frontend"},{iconName:"icon-ajax",displayName:"Ajax",title:"Frontend Development",category:"frontend"},{iconName:"icon-formik",displayName:"Formik",title:"Frontend Development",category:"frontend"},{iconName:"icon-node-js",displayName:"Node.js",title:"Backend Development",category:"backend"},{iconName:"icon-next-js",displayName:"Next.js",title:"Backend Development",category:"backend"},{iconName:"icon-mongodb",displayName:"MongoDB",title:"Backend Development",category:"backend"},{iconName:"icon-mongoose",displayName:"Mongoose",title:"Backend Development",category:"backend"},{iconName:"icon-firebase",displayName:"Firebase",title:"Backend Development",category:"backend"},{iconName:"icon-firestore",displayName:"Firestore",title:"Backend Development",category:"backend"},{iconName:"icon-axios",displayName:"Axios",title:"Backend Development",category:"backend"},{iconName:"icon-rest-api",displayName:"Rest API",title:"Backend Development",category:"backend"},{iconName:"icon-vscode",displayName:"VSCode",title:"Development Tools",category:"tools"},{iconName:"icon-git",displayName:"Git",title:"Development Tools",category:"tools"},{iconName:"icon-github",displayName:"Github",title:"Development Tools",category:"tools"},{iconName:"icon-postman",displayName:"Postman",title:"Development Tools",category:"tools"},{iconName:"icon-npm",displayName:"NPM",title:"Development Tools",category:"tools"},{iconName:"icon-yarn",displayName:"YARN",title:"Development Tools",category:"tools"},{iconName:"icon-webpack",displayName:"Webpack",title:"Development Tools",category:"tools"},{iconName:"icon-vite",displayName:"Vite",title:"Development Tools",category:"tools"},{iconName:"icon-parcel",displayName:"Parcel",title:"Development Tools",category:"tools"},{iconName:"icon-figma",displayName:"Figma",title:"Development Tools",category:"tools"},{iconName:"icon-ui-ux",displayName:"UI/UX",title:"Development Tools",category:"tools"},{iconName:"icon-trello",displayName:"Trello",title:"Development Tools",category:"tools"},{iconName:"icon-css",displayName:"CSS",title:"Styling & Design",category:"style"},{iconName:"icon-styled-components",displayName:"Styled-components",title:"Styling & Design",category:"style"},{iconName:"icon-bootstrap",displayName:"Bootstrap",title:"Styling & Design",category:"style"},{iconName:"icon-react-native",displayName:"React Native",title:"Mobile Development",category:"mobile"},{iconName:"icon-expo",displayName:"Expo",title:"Mobile Development",category:"mobile"},{iconName:"icon-android-studio",displayName:"Android Studio",title:"Mobile Development",category:"mobile"},{iconName:"icon-agile",displayName:"Agile",title:"Agile Methodologies",category:"agile"},{iconName:"icon-scrum",displayName:"Scrum",title:"Agile Methodologies",category:"agile"},{iconName:"icon-kanban",displayName:"Kanban",title:"Agile Methodologies",category:"agile"}];export{D as T,k as s};
