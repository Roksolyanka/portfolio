export interface SkillItem {
  iconName: string;
  displayName: string;
  title: string;
  category: string;
}

export interface ProjectsItem {
  projectName: string;
  projectImage: { src: string; srcset: string };
  description: string;
  skills: string;
  github: string;
  website: string;
}

export interface ProjectCardProps {
  project: ProjectsItem;
  index: number;
}
