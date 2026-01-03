import { LocaleStrings } from '.';

export type BiographyEntry = {
  id: string,
  period: LocaleStrings,
  name: LocaleStrings,
  detail: LocaleStrings,
  skills?: string[],
  link?: {
    name: string,
    link: string,
  },
};

export type BiographySection = {
  subtitle: LocaleStrings,
  entries: BiographyEntry[],
};

export type BiographyDocument = {
  id: string,
  title: LocaleStrings,
  subtitle: {
    period: LocaleStrings,
    detail: LocaleStrings,
    skill: LocaleStrings,
    link: LocaleStrings,
  },
  sections: BiographySection[],
};
