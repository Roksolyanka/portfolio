import cv from '../assets/files/cv.pdf';
import coverLetter from '../assets/files/cover_letter.pdf';
import profile from '../assets/images/avatar.jpg';
import profile2x from '../assets/images/avatar-2x.jpg';

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
  github: 'https://github.com/Roksolyanka',
  linkedIn: 'https://www.linkedin.com/in/roksolanakushnir/',
  telegram: 'https://t.me/Roksolanakushnir',
  cv: cv,
  cvName: 'Roksolana_Kushnir_CV.pdf',
  coverLetter: coverLetter,
  coverLetterName: 'Roksolana_Kushnir_Cover_Letter.pdf',
};

export default personalData;
