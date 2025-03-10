import personalData from '../data/personal';
import projectsData from '../data/projects';
import skillsData from '../data/skills';

const allData = {
  personal: personalData,
  skills: skillsData,
  projects: projectsData,
};

type AllDataType = {
  personal: typeof personalData;
  skills: typeof skillsData;
  projects: typeof projectsData;
};

const useGetData = <T extends keyof AllDataType>(dataType: T) => {
  return { data: allData[dataType] };
};

export default useGetData;
