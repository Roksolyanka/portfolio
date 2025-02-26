import cv from '../assets/files/cv.pdf';
import coverLetter from '../assets/files/cover_letter.pdf';
import profile from '../assets/images/avatar.jpg';
import profile2x from '../assets/images/avatar-2x.jpg';
import certEnglish from '../assets/images/certenglish.jpg';
import certEnglish2x from '../assets/images/certenglish-2x.jpg';
import certFullstack from '../assets/images/certfullstack.jpg';
import certFullstack2x from '../assets/images/certfullstack-2x.jpg';
import certScrum from '../assets/images/certscrum.jpg';
import certScrum2x from '../assets/images/certscrum-2x.jpg';

const personalData = {
  name: 'Roksolana Kushnir',
  photo: {
    src: profile,
    srcset: `
        ${profile} 1x,
        ${profile2x} 2x
      `,
  },
  designation: 'Frontend Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'React Native',
    'TypeScript',
  ],
  email: 'roksolyanakushnir@gmail.com',
  phone: '+380730801311',
  address: 'Ukraine, Lviv',
  addressLink: 'https://www.google.com/maps?q=Lviv,+Ukraine',
  github: 'https://github.com/Roksolyanka',
  linkedIn: 'https://www.linkedin.com/in/roksolanakushnir/',
  telegram: 'https://t.me/Roksolanakushnir',
  cv: cv,
  cvName: 'Roksolana_Kushnir_CV.pdf',
  coverLetter: coverLetter,
  coverLetterName: 'Roksolana_Kushnir_Cover_Letter.pdf',
  achievements: [
    {
      src: certFullstack,
      srcset: `
        ${certFullstack} 1x,
        ${certFullstack2x} 2x
      `,
    },
    {
      src: certScrum,
      srcset: `
        ${certScrum} 1x,
        ${certScrum2x} 2x
      `,
    },
    {
      src: certEnglish,
      srcset: `
        ${certEnglish} 1x,
        ${certEnglish2x} 2x
      `,
    },
  ],
};

export default personalData;
