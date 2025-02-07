import { ProjectsType } from '../types';

import goosetrack from '../assets/images/goosetrack.jpg';
import goosetrack2x from '../assets/images/goosetrack-2x.jpg';
import truscape from '../assets/images/truscape.jpg';
import truscape2x from '../assets/images/truscape-2x.jpg';
import awesome from '../assets/images/awesome.jpg';
import awesome2x from '../assets/images/awesome-2x.jpg';
import phonebook from '../assets/images/phonebook.jpg';
import phonebook2x from '../assets/images/phonebook-2x.jpg';
import monzamotorsports from '../assets/images/monzamotorsports.jpg';
import monzamotorsports2x from '../assets/images/monzamotorsports-2x.jpg';
import cinemania from '../assets/images/cinemania.jpg';
import cinemania2x from '../assets/images/cinemania-2x.jpg';
import mimiho from '../assets/images/mimiho.jpg';
import mimiho2x from '../assets/images/mimiho-2x.jpg';
import webstudio from '../assets/images/webstudio.jpg';
import webstudio2x from '../assets/images/webstudio-2x.jpg';
import banderogus from '../assets/images/banderogus.jpg';
import banderogus2x from '../assets/images/banderogus-2x.jpg';

const projectsData: ProjectsType = [
  {
    projectName: 'TaskFusion',
    projectImage: {
      src: goosetrack,
      srcset: `
        ${goosetrack} 1x,
        ${goosetrack2x} 2x
      `,
    },
    isTeamProject: true,
    description:
      'This website enables individuals to gain a comprehensive understanding of their schedules by displaying all their tasks, events, and appointments in an easy-to-navigate layout.',
    skills:
      'HTML | CSS | styled-components | React.js | Redux.js | Node.js | Parcel | Formik | Notiflix | date-fns | Axios | REST API | Trello | Git/GitHub | VSCode',
    github: 'https://github.com/Tarasdeveloper/TaskFusion-frontend',
    website: 'https://tarasdeveloper.github.io/TaskFusion-frontend/',
  },
  {
    projectName: 'TruScape',
    projectImage: {
      src: truscape,
      srcset: `
        ${truscape} 1x,
        ${truscape2x} 2x
      `,
    },
    isTeamProject: false,
    description:
      'A CRM-like web application aimed at optimizing the management of supplier information.',
    skills:
      'HTML | CSS | Tailwind CSS | Next.js | React.js | TypeScript | clsx | Formik | Git/GitHub | VSCode',
    github: 'https://github.com/Roksolyanka/nextjs-crm',
    website: 'https://nextjs-crm-sigma.vercel.app/dashboard',
  },
  {
    projectName: 'Awesome project',
    projectImage: {
      src: awesome,
      srcset: `
        ${awesome} 1x,
        ${awesome2x} 2x
      `,
    },
    isTeamProject: false,
    description:
      'This is a social network that allows users to take photos and share them through their profile.',
    skills:
      'HTML | CSS | styled-components | React.js | React Native | Redux.js | Firebase | Expo | Android Studio | Firestore | react-navigation | react-native-maps | Git/GitHub | VSCode',
    github: 'https://github.com/Roksolyanka/AwesomeProject',
    website: '',
  },
  {
    projectName: 'Phonebook',
    projectImage: {
      src: phonebook,
      srcset: `
        ${phonebook} 1x,
        ${phonebook2x} 2x
      `,
    },
    isTeamProject: false,
    description: 'User-friendly digital platform for managing contacts.',
    skills:
      'HTML | CSS | styled-components | React.js | Redux.js | Parcel | Axios | REST API | Git/GitHub | VSCode',
    github: 'https://github.com/Roksolyanka/phonebook',
    website: 'https://roksolyanka.github.io/phonebook/',
  },
  {
    projectName: 'Monza Motorsports',
    projectImage: {
      src: monzamotorsports,
      srcset: `
        ${monzamotorsports} 1x,
        ${monzamotorsports2x} 2x
      `,
    },
    isTeamProject: false,
    description:
      'The website is a boutique-style dealership specializing in premium imports, offering an advanced online vehicle purchasing experience with integrated financing and contactless home delivery.',
    skills:
      'HTML | CSS | JavaScript | Parcel | Bootstrap | Git/GitHub | VSCode',
    github: 'https://github.com/Roksolyanka/monzamotorsports',
    website: 'https://roksolyanka.github.io/monzamotorsports/',
  },
  {
    projectName: 'Cinemania',
    projectImage: {
      src: cinemania,
      srcset: `
        ${cinemania} 1x,
        ${cinemania2x} 2x
      `,
    },
    isTeamProject: true,
    description: 'This is a movie search website.',
    skills:
      'HTML | CSS | JavaScript | Parcel | Ajax | Axios | REST API | Trello | Git/GitHub | VSCode',
    github: 'https://github.com/Tarasdeveloper/cinemania',
    website: 'https://tarasdeveloper.github.io/cinemania/',
  },
  {
    projectName: 'MIMIHO',
    projectImage: {
      src: mimiho,
      srcset: `
        ${mimiho} 1x,
        ${mimiho2x} 2x
      `,
    },
    isTeamProject: true,
    description:
      'This is a website designed for the presentation and promotion of the hotel and restaurant business.',
    skills:
      'HTML | CSS | JavaScript | Trello | Git/GitHub | VSCode | Scrum | Agile',
    github: 'https://github.com/Brod9ga/gp-team-project',
    website: 'https://brod9ga.github.io/gp-team-project/',
  },
  {
    projectName: 'WebStudio',
    projectImage: {
      src: webstudio,
      srcset: `
        ${webstudio} 1x,
        ${webstudio2x} 2x
      `,
    },
    isTeamProject: false,
    description:
      'This site is designed to help you increase the flow of customers  and sales for your business with digital marketing and growth solutions.',
    skills: 'HTML | CSS | Git/GitHub | VSCode',
    github: 'https://github.com/Roksolyanka/goit-markup-hw-07',
    website: 'https://roksolyanka.github.io/goit-markup-hw-07/',
  },
  {
    projectName: 'BanderoGus',
    projectImage: {
      src: banderogus,
      srcset: `
        ${banderogus} 1x,
        ${banderogus2x} 2x
      `,
    },
    isTeamProject: false,
    description:
      'This is a humorous website created to entertain users with humorous content.',
    skills: 'Figma | HTML | CSS | VSCode',
    github: 'https://github.com/Roksolyanka/banderogus',
    website: 'https://roksolyanka.github.io/banderogus/',
  },
];

export default projectsData;
