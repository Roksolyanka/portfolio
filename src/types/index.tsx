import { SkillItem } from '../interfaces';

export type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

export type SkillsType = {
  frontend: SkillCategory;
  backend: SkillCategory;
  tools: SkillCategory;
  style: SkillCategory;
  mobile: SkillCategory;
  agile: SkillCategory;
};
