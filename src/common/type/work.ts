import { LocaleStrings } from '.';

export type WorkEntry = {
  id: string,
  name: LocaleStrings,
  image: string,
  description_short: LocaleStrings,
  description_long: LocaleStrings,
  skills: string[],
  links?: {
    name: string,
    link: string,
    color_code: string,
  }[],
};

export type WorkDocument = {
  id: string,
  title: LocaleStrings,
  subtitle: {
    description: LocaleStrings,
    skill: LocaleStrings,
    link: LocaleStrings,
  },
  entries: WorkEntry[];
};
