import { LanguageStrings } from '.';

export type SkillEntry = {
  name: string,
  exp: Number,
};

export type SkillSection = {
  subtitle: LanguageStrings,
  entries: SkillEntry[],
};

export type SkillDocument = {
  id: string,
  title: LanguageStrings,
  sections: SkillSection[],
};
