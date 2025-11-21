import { LocaleStrings } from '.';

export type SkillEntry = {
  name: string,
  level: number,
};

export type SkillSection = {
  subtitle: LocaleStrings,
  entries: SkillEntry[],
};

export type SkillDocument = {
  id: string,
  title: LocaleStrings,
  sections: SkillSection[],
};
