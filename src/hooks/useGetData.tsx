import personalData from '../data/personal';
import projectsData from '../data/projects';
import skillsData from '../data/skills';

const allData = {
  personal: personalData,
  skills: skillsData,
  projects: projectsData,
};

const useGetData = <T extends keyof typeof allData>(dataType: T) => {
  return { data: allData[dataType] };
};

export default useGetData;
