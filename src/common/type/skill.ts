import { LocaleStrings } from '.';

export type SkillEntry = {
  name: string,
  exp: Number,
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
