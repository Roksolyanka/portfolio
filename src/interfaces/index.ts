import { keyframes } from 'styled-components';
import { ProjectsType, SkillsType } from '../types';

export interface LayoutProps {
  children: React.ReactNode;
}

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

export interface NavLink {
  path: string;
  icon: string;
  label: string;
}

export interface ThemeContextProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export interface NameLettersProps {
  name: string;
}

export interface IconProps {
  name: string;
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
}

export interface AnimatedIconProps extends IconProps {
  animName: ReturnType<typeof keyframes>;
  duration: string;
  timingFunction: string;
  fillMode?: string;
}

export interface TogglerProps {
  togglePosition: boolean;
  setTogglePosition: (position: boolean) => void;
  handleDownload?: () => void;
  onToggle?: () => void;
  cvHref?: string;
  coverLetterHref?: string;
  labelFirst?: string;
  labelSecond?: string;
  iconName: string;
}

export interface SkillItem {
  id?: string;
  iconName: string;
  displayName: string;
  title: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillsType;
}

export interface SkillCardsProps {
  skills: SkillsType;
  isHidden?: boolean;
}

export interface CarouselProps {
  data: SkillsType;
}

export interface AccordionProps {
  data: [string, SkillCategory][];
}

export interface AccordionContentProps {
  isActive: boolean;
  skills: SkillsType;
}

export interface ProjectsItem {
  projectName: string;
  projectImage: { src: string; srcset: string };
  isTeamProject: boolean;
  description: string;
  skills: string;
  github: string;
  website: string;
}

export interface ProjectsProps {
  projects: ProjectsType;
}

export interface ProjectCardProps {
  project: ProjectsItem;
  index: number;
}
