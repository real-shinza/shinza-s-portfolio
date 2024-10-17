import { LanguageStrings } from '.';

export type WorkEntry = {
  id: string,
  name: LanguageStrings,
  image: string,
  description_short: LanguageStrings,
  description_long: LanguageStrings,
  skills: string[],
  links?: {
    name: string,
    link: string,
    color_code: string,
  }[],
};

export type WorkDocument = {
  id: string,
  title: LanguageStrings,
  subtitle: {
    description: LanguageStrings,
    skill: LanguageStrings,
    link: LanguageStrings,
  },
  entries: WorkEntry[];
};
